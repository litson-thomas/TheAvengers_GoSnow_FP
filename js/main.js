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