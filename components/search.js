const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="css/styles.css">
    <div class="search-wrapper">
        <div class="container search">
            <div class="search-input">
                <form>
                    <input type="text" placeholder="Search here...">
                </form>
                <a href="#" class="filters-btn transition">Filters</a>
            </div>
        </div>
    </div>
`

class Search extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('gosnow-search', Search);