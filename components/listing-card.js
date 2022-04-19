const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="css/styles.css">
    <div class="listing-card transition">
        <a class="save-icon">&#10084;</a>
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

class ListingCard extends HTMLElement {
    constructor() {
        super();
        
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('.listing-card-info .details h4').textContent = this.getAttribute('title');
        this.shadowRoot.querySelector('.listing-card img').src = this.getAttribute('image');
        this.shadowRoot.querySelector('.listing-card .footer-details .price').textContent = "$" + this.getAttribute('price');
        this.checkIfSaved();
        const saveButton = this.shadowRoot.querySelector('.listing-card .save-icon');
        saveButton.addEventListener('click', () => {
            let savedListing = localStorage.getItem('savedListing');
            let id = Number(this.getAttribute('id'));

            if(savedListing) savedListing = JSON.parse(savedListing);
            else savedListing = [];
            
            if(savedListing.indexOf(id) != -1) savedListing.splice(savedListing.indexOf(id), 1);
            else savedListing.push(id);

            localStorage.setItem('savedListing', JSON.stringify(savedListing));
            saveButton.classList.toggle('active');
        });
        const card = this.shadowRoot.querySelector('.listing-card-info');
        const image = this.shadowRoot.querySelector('.listing-card img');
        card.addEventListener('click', () => {
            window.location.href = `details.html?id=${this.getAttribute('id')}`;
        })
        image.addEventListener('click', () => {
            window.location.href = `details.html?id=${this.getAttribute('id')}`;
        })
    }

    checkIfSaved() {
        let savedListing = localStorage.getItem('savedListing');
        let id = Number(this.getAttribute('id'));

        if(savedListing) savedListing = JSON.parse(savedListing);
        else savedListing = [];

        if(savedListing.indexOf(id) != -1) this.shadowRoot.querySelector('.listing-card .save-icon').classList.add('active');
    }
}

customElements.define('listing-card', ListingCard);