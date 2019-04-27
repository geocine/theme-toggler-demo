import { LitElement, html, css } from 'lit-element';

class ThemeToggler extends LitElement {
  static get styles() {
    return css``;
  }

  constructor() {
    super();
  }
  handleClick() {
    console.log('Dark Mode Enabled');
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
