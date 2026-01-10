import {
  customElement,
  html,
  css,
  FASTElement,
  observable,
} from '@microsoft/fast-element';
import '@mai-ui/button/define.js';
import { gapBetweenContentSmall } from '@mai-ui/design-tokens/tokens.js';

const styles = css`
  main {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: ${gapBetweenContentSmall};
  }

  p {
    margin: 0;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
  }
`;

const template = html`
  <main>
    <p>Counter: <span>${(x) => x.counter}</span></p>
    <mai-button @click="${(x) => x.counter++}">Increment</mai-button>
  </main>
`;

@customElement({
  name: 'app-main',
  template,
  styles,
})
export class AppMain extends FASTElement {
  @observable counter: number = 0;
}
