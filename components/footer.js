const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="css/styles.css">
    <div class="container footer">
        <p>&copy; 2022 All Rights Reserved</p>
        <p>with <span style="color: red;">&#10084;</span> by <i><strong>The Avengers</strong></i></p>
    </div>
`

class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('gosnow-footer', Footer);