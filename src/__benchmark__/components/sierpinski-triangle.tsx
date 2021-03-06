import { interpolateBuPu, interpolatePurples, interpolateRdPu } from 'd3-scale-chromatic';
import { type ElementType, type ReactElement } from 'react';

import { type DotProps } from '../types/dot-props';

const targetSize = 10;

type SierpinskiTriangleProps = {
  readonly Dot: ElementType<DotProps>;
  readonly depth?: number;
  readonly renderCount?: number;
  readonly s?: number;
  readonly x?: number;
  readonly y?: number;
};

const SierpinskiTriangle = ({
  Dot,
  depth = 0,
  renderCount = 0,
  s = 200,
  x = 0,
  y = 0,
}: SierpinskiTriangleProps): ReactElement => {
  if (s <= targetSize) {
    let fn;
    switch (depth) {
      case 1:
        fn = interpolatePurples;
        break;
      case 2:
        fn = interpolateBuPu;
        break;
      case 3:
      default:
        fn = interpolateRdPu;
    }

    // introduce randomness to ensure that repeated runs don't produce the same colors
    const color = fn((renderCount * Math.random()) / 20);
    return <Dot $color={color} $size={targetSize} $x={x - targetSize / 2} $y={y - targetSize / 2} />;
  }

  // eslint-disable-next-line no-param-reassign
  s /= 2;

  return (
    <>
      <SierpinskiTriangle Dot={Dot} depth={1} renderCount={renderCount} s={s} x={x} y={y - s / 2} />
      <SierpinskiTriangle Dot={Dot} depth={2} renderCount={renderCount} s={s} x={x - s} y={y + s / 2} />
      <SierpinskiTriangle Dot={Dot} depth={3} renderCount={renderCount} s={s} x={x + s} y={y + s / 2} />
    </>
  );
};

export { SierpinskiTriangle };
