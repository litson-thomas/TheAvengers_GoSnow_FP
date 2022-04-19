function init() {
    let save_address_btn = document.querySelector('#saveAddress');

    save_address_btn.addEventListener('click', function(e){
        e.preventDefault();
        window.location.href = `/index.html`;
    })
}
init();
