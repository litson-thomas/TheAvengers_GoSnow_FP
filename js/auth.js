export const firebaseConfig = {
    // apiKey: "AIzaSyABvpmSs0QyyKG7jffZnRiLgu7CmwSOxyY",
    // authDomain: "loginauth-346a1.firebaseapp.com",
    // projectId: "loginauth-346a1",
    // storageBucket: "loginauth-346a1.appspot.com",
    // messagingSenderId: "872118251681",
    // appId: "1:872118251681:web:e00893a6a83f5bee0840e0",
    // measurementId: "G-QB6DJ80K00"

    apiKey: "AIzaSyD88vSXCFDKjAM7dAZDr29slTZhhQ0fYL8",
    authDomain: "madt-snowapp.firebaseapp.com",
    projectId: "madt-snowapp",
    storageBucket: "madt-snowapp.appspot.com",
    messagingSenderId: "262325356438",
    appId: "1:262325356438:web:cc5b1a66613530049abfb7",
    measurementId: "G-6TRS55LFB4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function checkAuth(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            let url = window.location.pathname;
            if(url == '/login.html' || url == '/register.html' || url == '/reset.html'){
                window.location = 'index.html';
            }
        } else {
            let url = window.location.pathname;
            if(url != '/login.html' || url != '/register.html' || url != '/reset.html'){
                window.location = 'login.html';
            }
        }
    });
}

var register_form = document.querySelector("#registerForm");
var login_form = document.querySelector("#loginForm");
var reset_form = document.querySelector("#resetForm");
var message = document.querySelector("#messageDiv");
var message_value = document.querySelector(".message");
  

// user register
if(register_form){
  register_form.addEventListener("submit", async function(e){
    e.preventDefault();
    let obj = {};
    obj['name'] = register_form.name.value;
    obj['email'] = register_form.email.value;
    obj['password'] = register_form.password.value;
    obj['phone'] = register_form.phone.value;

    let response = await axios.post(BASE_URL + 'user', obj);

    if(response){
        displayMessage("User registered successfully");
    }
    
  })
}

//login a user
if(login_form){
    login_form.addEventListener('submit', function(e) {
        e.preventDefault();
        let email = login_form.email.value;
        let password = login_form.password.value;
    
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            displayMessage("User Logged In");
        })
        .catch((error) => {
            displayMessage(error.message);
        });
    })
}

//reset password
if(reset_form){
    reset_form.addEventListener('submit', function(e) {
        e.preventDefault();
        let email = reset_form.email.value;
    
        firebase.auth().sendPasswordResetEmail(email)
        .then((userCredential) => {
            displayMessage("Email has been send to your email");
        })
        .catch((error) => {
            displayMessage(error.message);
        });
    })
}

function displayMessage(value){
    message.style.display = 'block';
    message_value.innerText = value;
    setTimeout(function(){
        message.style.display = 'none';
    }, 5000);
}

checkAuth();