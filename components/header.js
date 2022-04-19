const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/variables.css">
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
                    <label for="dark-mode" id="mode-toggle">
                        <span id="dayIcon" class="d-block-light dark-mode-switch d-none">🌤️</span>
                        <span id="nightIcon" class="d-block-dark dark-mode-switch d-none">🌙</span>
                    </label>
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
        // this.checkDarkMode();
        // this.shadowRoot.getElementById('mode-toggle').addEventListener('click', () => {
        //     let currentTheme = document.documentElement.getAttribute("data-theme");
        //     let targetTheme = "light";
        //     this.shadowRoot.getElementById('dayIcon').classList.toggle('d-none');
        //     this.shadowRoot.getElementById('nightIcon').classList.toggle('d-none');
        //     if (currentTheme === "light") {
        //         targetTheme = "dark";
        //         this.shadowRoot.getElementById('dayIcon').classList.toggle('d-none');
        //         this.shadowRoot.getElementById('nightIcon').classList.toggle('d-none');
        //     }

        //     document.documentElement.setAttribute('data-theme', targetTheme);
        //     localStorage.setItem('gosnow-them-mode', targetTheme);
        //     this.checkDarkMode();
        // })
    }

    checkDarkMode() {
        let currentTheme = document.documentElement.getAttribute("data-theme");
        let targetTheme = "light";
        this.shadowRoot.getElementById('dayIcon').classList.toggle('d-none');
        this.shadowRoot.getElementById('nightIcon').classList.toggle('d-none');

        if (currentTheme === "light") {
            targetTheme = "dark";
            this.shadowRoot.getElementById('dayIcon').classList.toggle('d-none');
            this.shadowRoot.getElementById('nightIcon').classList.toggle('d-none');
        }
    }
}

customElements.define('gosnow-header', Header);