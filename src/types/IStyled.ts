import { HTMLTag } from './HTMLTag';
import { InferProps } from './InferProps';
import { IStylableComponentProps } from './IStylableComponentProps';
import { StylableComponent } from './StylableComponent';
import { IStyledTemplate } from './IStyledTemplate';
import { Id } from './Utilities';

export interface IStyled {
  <TTag extends HTMLTag | string>(tag: TTag, displayName?: string): IStyledTemplate<InferProps<TTag>>;
  <TProps extends IStylableComponentProps, _ extends 'IKnowWhatIAmDoing'>(
    component: StylableComponent<TProps>,
    displayName?: string,
  ): IStyledTemplate<Id<TProps>>;
  /**
   * @deprecated A component must accept a `className` string prop
   * to support styling.
   */
  (component: ((...args: any) => any) | (new (...args: any) => any), displayName?: any): unknown;
  /**
   * @deprecated Explicitly assigning type parameters is strongly
   * discouraged, because it can lead to passing props of the wrong
   * type to the wrapped component.
   */
  <_TProps>(component: ((...args: any) => any) | (new (...args: any) => any), displayName?: any): unknown;
}
