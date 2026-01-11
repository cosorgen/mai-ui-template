import { customElement, html, css, FASTElement } from '@microsoft/fast-element';
import '@mai-ui/button/define.js';

const styles = css`
  p {
    margin: 0;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
  }
`;

const template = html` <p>Counter: <slot></slot></p> `;

@customElement({
  name: 'counter-display',
  template,
  styles,
})
export class CounterDisplay extends FASTElement {}
