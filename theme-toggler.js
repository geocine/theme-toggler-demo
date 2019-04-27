import { LitElement, html, css } from 'lit-element';

class ThemeToggler extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      checked: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.checked = false;
  }

  handleClick() {
    this.checked = !this.checked;
    console.log(`Dark Mode ${this.checked ? 'Enabled' : 'Disabled'}`);
  }

  render() {
    return html`
      <div @click="${this.handleClick}">
        Dark Mode
      </div>
    `;
  }
}

customElements.define('theme-toggler', ThemeToggler);
