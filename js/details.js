import { BASE_URL, CDN_URL } from "./main.js";

let shoveler = {};
let currentImageIndex = 0;
async function getShovelerById(){
    const url = new URL(window.location.href).searchParams;
    const id = url.get('id');
    try {
        let response = await axios({
            method: 'get',
            url: BASE_URL + `shovler?id=${id}&order=id`,
        })
        shoveler = response.data.rows[0];
        setValue();
    } catch (error) {
        console.log(error);
    }
}

function setValue() {
    let value = shoveler;
    document.getElementById('detailsTitle').innerText = value.title;
    document.getElementById('detailsAuthor').innerText = "by " + value.user.name;
    document.getElementById('detailsDesc').innerText = value.description;
    document.getElementById('detailsImages').src = CDN_URL + value.shovler_images[0].image;
    
    let prev_btn = document.querySelector('.prev-img');
    let next_btn = document.querySelector('.next-img');

    if(shoveler.shovler_images.length <= 1){
        prev_btn.style.display = 'none';
        next_btn.style.display = 'none';
    }

    let book_now_btn = document.querySelector('#detailsBookNowBtn');
    let message_btn = document.querySelector('#detailsMessageBtn');

    prev_btn.addEventListener('click', function(){
        document.getElementById('detailsImages').src = ""
        currentImageIndex == 0 ? currentImageIndex = shoveler.shovler_images.length - 1 : currentImageIndex--;
        document.getElementById('detailsImages').src = CDN_URL + shoveler.shovler_images[currentImageIndex].image;
    });

    next_btn.addEventListener('click', function(){
        document.getElementById('detailsImages').src = ""
        currentImageIndex == shoveler.shovler_images.length - 1 ? currentImageIndex = 0 : currentImageIndex++;
        document.getElementById('detailsImages').src = CDN_URL + shoveler.shovler_images[currentImageIndex].image;
    });

    book_now_btn.addEventListener('click', function(){
        window.location.href = `/book-now.html?id=${shoveler.id}`;
    })

    message_btn.addEventListener('click', function(){
        const user = firebase.auth().currentUser;
        if(user) window.location.href = `/message.html?room=${user.uid}${shoveler.id}`;
    })
}

getShovelerById();