const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="css/styles.css">
    <div class="header-wrapper">
        <div class="container header">
            <div class="header-details">
                <h1 class="logo">Hey, <br> Welcome user!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. <br> Sit venenatis non urna, suspendisse.</p>
            </div>
            <nav>
                <div class="links d-sm-none">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        
                        <li class="dropdown"><a href="#">My Account</a>
                        <ul class="account-sublinks">
                            <li><a href="profile.html">My Profile</a></li>
                            <li><a href="address.html">My Address</a></li>
                        </ul>
                        </li>
                        <li><a href="saved.html">Saved</a></li>
                        <li><a href="contact-us.html">Contact</a></li>
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
        this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('gosnow-header', Header);