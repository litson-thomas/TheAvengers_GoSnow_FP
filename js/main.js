// var toggle = document.getElementById("mode-toggle");

// var storedTheme = localStorage.getItem('gosnow-them-mode') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
// if (storedTheme) document.documentElement.setAttribute('data-theme', storedTheme)

// toggle.onclick = function() {
//     var currentTheme = document.documentElement.getAttribute("data-theme");
//     var targetTheme = "light";

//     if (currentTheme === "light") {
//         targetTheme = "dark";
//     }

//     document.documentElement.setAttribute('data-theme', targetTheme)
//     localStorage.setItem('gosnow-them-mode', targetTheme);
// };

export const BASE_URL = 'https://snowapp.lcmaze.com/api/';
export const CDN_URL = 'https://lcmaze.s3.ap-south-1.amazonaws.com/snowapp/assets/listing-images/';
 // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyABvpmSs0QyyKG7jffZnRiLgu7CmwSOxyY",
    authDomain: "loginauth-346a1.firebaseapp.com",
    projectId: "loginauth-346a1",
    storageBucket: "loginauth-346a1.appspot.com",
    messagingSenderId: "872118251681",
    appId: "1:872118251681:web:e00893a6a83f5bee0840e0",
    measurementId: "G-QB6DJ80K00"
  };


  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// check if user is logged in or not
// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//         if(window.location.pathname != '/index.html'){
//             window.location = 'index.html';
//         }
//     } else {
//         if(window.location.pathname === '/index.html'){
//             window.location = 'login.html';
//         }
//     }
// });

  var register_form = document.querySelector("#registerForm");
  var login_form = document.querySelector("#loginForm");
  var reset_form = document.querySelector("#resetForm");
  var message = document.querySelector("#messageDiv");
  var message_value = document.querySelector(".message");
  

 // user register
  if(register_form){
  register_form.addEventListener("submit",function(e){
      e.preventDefault();
      let name = register_form.name.value;
      let email = register_form.email.value;
      let password = register_form.password.value;
      let phone = register_form.phone.value;

      console.log(email,password)
      
      firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    window.location= 'index.html';
   
    console.log("USER CREATED")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    
    message.style.display = 'block';
    message_value.innerText = error.message;
    console.log("Error occured",errorMessage)
  });
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
            window.location = 'index.html';
        })
        .catch((error) => {
            message.style.display = 'block';
            message_value.innerText = error.message;
            setTimeout(function(){
                message.style.display = 'none';
            }, 3000);
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
            message.style.display = 'block';
            message_value.innerText = 'Email has been send!';
            window.location = 'login.html';
        })
        .catch((error) => {
            message.style.display = 'block';
            message_value.innerText = error.message;
            setTimeout(function(){
                message.style.display = 'none';
            }, 3000);
        });
    })
}
