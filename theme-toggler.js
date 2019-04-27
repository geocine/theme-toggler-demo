import { LitElement, html, css } from 'lit-element';

class ThemeToggler extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      checked: { type: Boolean },
      index: { type: String }
    };
  }

  constructor() {
    super();
    this.checked = false;
  }

  handleClick() {
    this.checked = !this.checked;
    console.log(`Dark Mode ${this.index||''}: ${this.checked ? 'Enabled' : 'Disabled'}`);
    if (this.checked) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  render() {
    return html`
      <div @click="${this.handleClick}">
        Dark Mode ${this.index||''}
      </div>
    `;
  }
}

customElements.define('theme-toggler', ThemeToggler);
