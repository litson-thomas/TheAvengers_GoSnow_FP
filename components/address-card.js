const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="css/styles.css">
    <div class="address-card transition">
        <a class="delete-icon">&#10084;</a>
        <div class="address-card-info">
            <div class="details">
                <h4>36 Forest Manor</h4>
            </div>
        </div>
        <div class="footer-details">
            <p class="address">123 Main St</p>
        </div>
    </div>
`

class AddressCard extends HTMLElement {
    constructor() {
        super();
        
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('.address-card-info .details h4').textContent = this.getAttribute('title');
        this.shadowRoot.querySelector('.footer-details  p.address').textContent = this.getAttribute('sub-title');

        this.checkIfSaved();
        const deleteButton = this.shadowRoot.querySelector('.address-card .delete-icon');
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation();
            debugger;
            alert("Address deleted");
            let savedListing = localStorage.getItem('savedAddressListing');
            let id = Number(this.getAttribute('id'));

            if(savedListing) savedListing = JSON.parse(savedListing);
            else savedListing = [];
            
            if(savedListing.indexOf(id) != -1) savedListing.splice(savedListing.indexOf(id), 1);
            else savedListing.push(id);

            localStorage.setItem('savedAddressListing', JSON.stringify(savedListing));
            deleteButton.classList.toggle('active');
        });
        const card = this.shadowRoot.querySelector('.address-card');
        card.addEventListener('click', () => {
            window.location.href = `/update-address.html?id=${this.getAttribute('id')}`;
            
        })
    }

    checkIfSaved() {
        let savedListing = localStorage.getItem('savedAddressListing');
        let id = Number(this.getAttribute('id'));

        if(savedListing) savedListing = JSON.parse(savedListing);
        else savedListing = [];

        if(savedListing.indexOf(id) != -1) this.shadowRoot.querySelector('.address-card .delete-icon').classList.add('active');
    }
}

customElements.define('address-card', AddressCard);