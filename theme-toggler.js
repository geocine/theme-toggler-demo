import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

class ThemeToggler extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        height: 24px;
      }

      .theme-toggler {
        touch-action: pan-x;

        display: inline-block;
        position: relative;
        cursor: pointer;
        background-color: transparent;
        border: 0;
        padding: 0;

        -webkit-touch-callout: none;
        user-select: none;

        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
      }

      .theme-toggler-screenreader-only {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      .theme-toggler-track {
        width: 50px;
        height: 24px;
        padding: 0;
        border-radius: 30px;
        background-color: hsl(222, 14%, 7%);
        transition: all 0.2s ease;
      }

      .theme-toggler-track-check {
        position: absolute;
        width: 17px;
        height: 17px;
        left: 5px;
        top: 0px;
        bottom: 0px;
        margin: 3px 0;
        line-height: 0;
        opacity: 0;
        transition: opacity 0.25s ease;
      }

      .theme-toggler.theme-toggler--checked .theme-toggler-track-check {
        opacity: 1;
        transition: opacity 0.25s ease;
      }

      .theme-toggler-track-x {
        position: absolute;
        width: 17px;
        height: 17px;
        right: 5px;
        top: 0px;
        bottom: 0px;
        margin: 3px 0;
        line-height: 0;
        opacity: 1;
        transition: opacity 0.25s ease;
      }

      .theme-toggler.theme-toggler--checked .theme-toggler-track-x {
        opacity: 0;
      }

      .theme-toggler-thumb {
        position: absolute;
        top: 1px;
        left: 1px;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: #fafafa;
        box-sizing: border-box;
        transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
        transform: translateX(0);
      }

      .theme-toggler.theme-toggler--checked .theme-toggler-thumb {
        transform: translateX(26px);
        border-color: #19ab27;
      }

      .theme-toggler.theme-toggler:active .theme-toggler-thumb {
        box-shadow: 0px 0px 5px 5px #9c9c9c;
      }
    `;
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
    console.log(
      `Dark Mode: ${this.checked ? 'Enabled' : 'Disabled'}`
    );
    if (this.checked) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  render() {
    return html`
      <div
        class="theme-toggler ${classMap({
          'theme-toggler--checked': this.checked
        })}"
        @click="${this.handleClick}"
      >
        <div class="theme-toggler-track">
          <div class="theme-toggler-track-check">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 380.446 380.446"
            >
              <path
                d="M254.946 0c21.254 0 41.693 3.488 60.778 9.919-75.252 25.357-129.446 96.501-129.446 180.304 0 83.804 54.193 154.947 129.446 180.304-19.085 6.431-39.524 9.919-60.778 9.919-105.058 0-190.224-85.166-190.224-190.224S149.889 0 254.946 0z"
                fill="#f7cf52"
              />
              <path
                d="M254.953.003c5.8 0 11.54.26 17.2.77-96.95 8.74-172.93 90.22-172.93 189.45 0 99.25 76.01 180.74 172.99 189.45-5.68.51-11.44.77-17.26.77-105.06 0-190.23-85.16-190.23-190.22S149.893.003 254.953.003z"
                fill="#e2bc50"
              />
            </svg>
          </div>
          <div class="theme-toggler-track-x">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 420">
              <path
                fill="#f5c525"
                d="M420 210l-44.226 37.857 23.464 53.288-56.312 14.841-1.981 58.198-57.181-10.973-27.04 51.568L210 380l-46.724 34.779-27.04-51.568-57.181 10.973-1.982-58.198-56.311-14.842 23.464-53.286L0 210l44.226-37.857-23.464-53.288 56.312-14.841 1.981-58.198 57.181 10.973 27.04-51.568L210 40l46.723-34.779 27.041 51.568 57.181-10.973 1.982 58.198 56.311 14.842-23.464 53.286z"
              />
              <circle cx="210" cy="210" r="140" fill="#f8a805" />
            </svg>
          </div>
        </div>
        <div class="theme-toggler-thumb" />
        <input
          class="theme-toggler-screenreader-only"
          type="checkbox"
          aria-label="Switch between Dark and Light mode"
          ?checked="${this.checked}"
        />
      </div>
    `;
  }
}

customElements.define('theme-toggler', ThemeToggler);
