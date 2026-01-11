import { customElement, html, css, FASTElement } from '@microsoft/fast-element';
import '@mai-ui/button/define.js';
import { inject } from '@microsoft/fast-element/di.js';
import { CounterService } from '../services/counter-service.ts';

const styles = css`
  p {
    margin: 0;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
  }
`;

const template = html`
  <p>
    button clicked: ${(x) => x.cs.count}
    time${(x) => (x.cs.count === 1 ? '' : 's')}
  </p>
`;

@customElement({
  name: 'stateful-counter-display',
  template,
  styles,
})
export class StatefulCounterDisplay extends FASTElement {
  @inject(CounterService) cs!: CounterService;
}
