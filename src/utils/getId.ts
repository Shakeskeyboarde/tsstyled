import version from '../version.json';
import { getHash } from './getHash';
import { isTest } from '../constants';
import { getCssIdentifier } from './getCssIdentifier';

export const _idCounts: Record<string, number | undefined> = Object.create(null);

/**
 * Get a stable ID string which is safe to use as a CSS class name.
 *
 * _When `process.env.NODE_ENV` is "test" (eg. during Jest testing),
 * this function returns a stable value for the given display name.
 * This value is **NOT** unique per invocation like it would be at
 * runtime._
 */
export function getId(namespace: string): string {
  return `${getCssIdentifier(namespace)}-${getHash(
    ...(isTest ? [] : [version, (_idCounts[namespace] = (_idCounts[namespace] ?? 0) + 1)]),
    namespace,
  )}`;
}
