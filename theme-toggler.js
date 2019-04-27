import { LitElement, html, css } from 'lit-element';

class ThemeToggler extends LitElement {
  static get styles() {
    return css``;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div></div>
    `;
  }
}

customElements.define('theme-toggler', ThemeToggler);
