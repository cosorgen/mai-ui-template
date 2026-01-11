import {
  customElement,
  html,
  css,
  FASTElement,
  observable,
} from '@microsoft/fast-element';
import '@mai-ui/button/define.js';
import {
  gapBetweenContentMedium,
  gapBetweenContentSmall,
} from '@mai-ui/design-tokens/tokens.js';
import { inject } from '@microsoft/fast-element/di.js';
import { CounterService } from '../services/counter-service.ts';
import './counter-display.js';
import './stateful-counter-display.js';

const styles = css`
  main {
    display: flex;
    flex-direction: column;
    gap: ${gapBetweenContentMedium};

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: ${gapBetweenContentSmall};
    }
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
    <div>
      <!-- Using stateful-counter-display which uses the CounterService to get the count -->
      <stateful-counter-display></stateful-counter-display>
      <mai-button @click="${(x) => x.cs.count++}">Increment</mai-button>
    </div>
    <div>
      <!-- Using counter-display which uses slots and local state only -->
      <counter-display>${(x) => x.localCount}</counter-display>
      <mai-button appearance="primary" @click="${(x) => x.localCount++}">
        Increment local only
      </mai-button>
    </div>
  </main>
`;

@customElement({
  name: 'app-main',
  template,
  styles,
})
export class AppMain extends FASTElement {
  @inject(CounterService) cs!: CounterService;
  @observable localCount: number = 0;
}
