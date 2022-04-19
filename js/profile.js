function init() {
    let update_profile_btn = document.querySelector('#updateProfile');

    update_profile_btn.addEventListener('click', function(e){
        e.preventDefault();
        window.location.href = `/index.html`;
    })
}
init();
