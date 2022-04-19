const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="css/styles.css">
    <div class="container">
        <div class="become-a-shoveler">
            <div class="become-a-shoveler__container">
                <h2 class="become-a-shoveler__title">Become a Shoveler</h2>
                <p class="become-a-shoveler__description">
                    GoSnow is a snow removal service that is designed to help you get rid of snow in your area.
                    We are a snow removal company that specializes in snow removal in the greater Seattle area.
                    We are here to help you get rid of snow in your area.
                </p>
                <a href="#" class="become-a-shoveler__button transition">Become a Shoveler</a>
            </div>
        </div>
    </div>
`

class BecomeShoveler extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('become-shoveler', BecomeShoveler);