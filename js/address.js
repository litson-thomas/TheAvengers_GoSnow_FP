function setValue() {
    let add_address_btn = document.querySelector('#addAddress');

    add_address_btn.addEventListener('click', function(){
        window.location.href = `/add-address.html`;
    })
}
setValue();
