const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="css/styles.css">
    <div class="header-wrapper">
        <div class="container header">
            <h1 class="logo">GoSnow</h1>
            <nav>
                <div class="links">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/messages.html">Messages</a></li>
                        <li><a href="/account.html">My Account</a></li>
                        <li><a href="/about.html">About</a></li>
                    </ul>
                </div>
                <div class="dark-mode">
                    <!-- <label for="dark-mode" id="mode-toggle">
                        <span class="d-block-light dark-mode-switch">🌤️</span>
                    </label> -->
                    <input type="checkbox" id="dark-mode" class="v-hidden">
                </div>
            </nav>
        </div>
    </div>
`

class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('gosnow-header', Header);