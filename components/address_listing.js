import './address-card.js';
import { BASE_URL, CDN_URL } from "../js/main.js";

let addresses = [];
let list = ``;
const template = document.createElement('template');

class AddressListing extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const card = this.shadowRoot.querySelector('.address-card');
        card.addEventListener('click', () => {
            window.location.href = `/update-address.html?id=${this.getAttribute('id')}`;
        })
    }

    setUiData(){
        template.innerHTML = `
            <link rel="stylesheet" href="css/styles.css">
            <div class="container py-2">
                <div class="address-listing">
                    <div class="address-list">
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
        addresses.rows.forEach(item => {
            list += `
                <address-card 
                id="${item.id}"
                title="${item.address_one}" 
                sub-title="${item.address_two}" 
                ></address-card>
            `
        });
        //set the ui
        this.setUiData();
    }

    setAddresses(data){
        try {
            addresses = data;
            //set the listing 
            this.setListing();
        } catch (error) {
            console.log(error);
        }
    }

}

customElements.define('address-listing', AddressListing);