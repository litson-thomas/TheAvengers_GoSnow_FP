function init() {
    let update_address_btn = document.querySelector('#updateAddress');

    update_address_btn.addEventListener('click', function(e){
        e.preventDefault();
        window.location.href = `/index.html`;
    })
}
init();
