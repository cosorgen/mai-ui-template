import {
  textRampPageHeaderFontSize,
  textRampPageHeaderLineHeight,
  textStyleDefaultHeaderWeight,
} from '@mai-ui/design-tokens/tokens.js';
import { customElement, html, css, FASTElement } from '@microsoft/fast-element';

const styles = css`
  h1 {
    margin: 0;
    font-size: ${textRampPageHeaderFontSize};
    font-weight: ${textStyleDefaultHeaderWeight};
    line-height: ${textRampPageHeaderLineHeight};
  }
`;

const template = html`
  <header>
    <h1><slot></slot></h1>
  </header>
`;

@customElement({
  name: 'app-header',
  template,
  styles,
})
export class AppHeader extends FASTElement {}
