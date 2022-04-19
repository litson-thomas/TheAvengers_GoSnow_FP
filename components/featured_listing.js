import './listing-card.js';
import { BASE_URL, CDN_URL } from "../js/main.js";

let shovelers = [];
let list = ``;
const template = document.createElement('template');

class FeaturedListing extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
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
        if(this.getAttribute('title')){
            this.shadowRoot.querySelector('h3').textContent = this.getAttribute('title');
        }
    }

    setListing() {
        shovelers.rows.forEach(item => {
            list += `
                <listing-card 
                id="${item.id}"
                image="${CDN_URL}${item.shovler_images[0].image}" 
                title="${item.title}" 
                price="${item.one_four_price}"
                ></listing-card>
            `
        });
        //set the ui
        this.setUiData();
    }

    getShovelers(data){
        try {
            shovelers = data;
            //set the listing 
            this.setListing();
        } catch (error) {
            console.log(error);
        }
    }

}

customElements.define('featured-listing', FeaturedListing);