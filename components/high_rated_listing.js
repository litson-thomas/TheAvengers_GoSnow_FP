const array = [1,2, 3, 4, 5, 6, 7, 8];
let list = ``;
const template = document.createElement('template');

class HighRatedListing extends HTMLElement {
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
                    <h3>High Rated Listing</h3>
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
                <div class="listing-card transition">
                    <img src="https://lcmaze.s3.amazonaws.com/seraph-tuts-django-cdn/assets/uploads/content_thumb.webp">
                    <div class="listing-card-info">
                        <div class="details">
                            <h4>Snow Removal</h4>
                        </div>
                        <p class="rating">&#9733; 4.2</p>
                    </div>
                    <div class="footer-details">
                        <p class="address">123 Main St</p>
                        <p class="price">$44</p>
                    </div>
                </div>
            `
        });
    }
}

customElements.define('rated-listing', HighRatedListing);