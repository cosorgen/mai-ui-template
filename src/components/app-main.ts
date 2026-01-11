import { customElement, html, css, FASTElement } from '@microsoft/fast-element';
import '@mai-ui/button/define.js';
import { gapBetweenContentSmall } from '@mai-ui/design-tokens/tokens.js';
import { inject } from '@microsoft/fast-element/di.js';
import { CounterService } from '../services/counter-service.ts';
import './counter-display.js';

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
    <counter-display>${(x) => x.cs.count}</counter-display>
    <mai-button @click="${(x) => x.cs.count++}">Increment</mai-button>
  </main>
`;

@customElement({
  name: 'app-main',
  template,
  styles,
})
export class AppMain extends FASTElement {
  @inject(CounterService) cs!: CounterService;
}
