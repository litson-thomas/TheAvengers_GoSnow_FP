import './listing-card.js';

const array = [1,2, 3, 4, 5, 6, 7, 8];
let list = ``;
const template = document.createElement('template');

class FeaturedListing extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        //set the listing 
        this.setListing();
        //set the ui
        this.setUiData();
    }

    setUiData(){
        template.innerHTML = `
            <link rel="stylesheet" href="css/styles.css">
            <div class="container py-2">
                <div class="featured-listing">
                    <h3>Featured Listing</h3>
                    <div class="featured-list">
                        ${list}
                    </div>
                </div>
            </div>
        `
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    setListing() {
        array.forEach(item => {
            list += `
                <listing-card></listing-card>
            `
        });
    }
}

customElements.define('featured-listing', FeaturedListing);