class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2024
        De Jesús Aguilar José Antonio.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
