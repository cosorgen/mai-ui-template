import { customElement, html, css, FASTElement } from '@microsoft/fast-element';
import {
  backgroundWebPagePrimary,
  foregroundContentNeutralPrimary,
  gapBetweenContentLarge,
  paddingContentXLarge,
  textRampReadingBodyFontSize,
  textRampReadingBodyLineHeight,
  textStyleDefaultRegularFontFamily,
} from '@mai-ui/design-tokens/tokens.js';
import lightThemeVars from '@mai-ui/design-tokens/themes/default.light/default.light.json' with { type: 'json' };
import darkThemeVars from '@mai-ui/design-tokens/themes/default.dark/default.dark.json' with { type: 'json' };
import './components/app-header.js';
import './components/app-main.js';

const styles = css`
  :host {
    display: flex;
    flex-direction: column;
    gap: ${gapBetweenContentLarge};
    font-family: ${textStyleDefaultRegularFontFamily};
    font-size: ${textRampReadingBodyFontSize};
    line-height: ${textRampReadingBodyLineHeight};
    color: ${foregroundContentNeutralPrimary};
    width: 100%;
    min-height: 100vh;
    background-color: ${backgroundWebPagePrimary};
    padding: ${paddingContentXLarge};
  }
`;

const template = html` <app-header>Welcome to Mai App</app-header>
  <app-main></app-main>`;

@customElement({
  name: 'mai-app',
  template,
  styles,
})
export class MaiApp extends FASTElement {
  connectedCallback(): void {
    super.connectedCallback();

    // Select the desired theme based on browser or user preference
    const prefersDarkScheme = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    this.setTheme('default', prefersDarkScheme ? 'dark' : 'light');

    // Listen for changes in the user's color scheme preference
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        this.setTheme('default', e.matches ? 'dark' : 'light');
      });
  }

  setTheme(themeName: 'default', mode: 'light' | 'dark'): void {
    const themes = {
      default: {
        light: lightThemeVars,
        dark: darkThemeVars,
      },
    };

    const selectedTheme = themes[themeName][mode];

    // Set the selected theme CSS variables on the document body
    for (const [key, value] of Object.entries(selectedTheme)) {
      document.body.style.setProperty(`--${key}`, String(value));
    }
  }
}
