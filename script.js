//NAVIGACIA

const navE1 = document.querySelector(".navbar");
const navE2 = document.querySelector(".navbar");
const navText = document.querySelector(".nav-text");
const navText2 = document.querySelector(".nav-text2");
const navText3 = document.querySelector(".nav-text3");
const navText4 = document.querySelector(".nav-text4");

const mobile = document.querySelector(".navbar-mobile");
const comp = document.querySelector(".navbar-comp");

if (window.innerWidth >= 990) {
    comp.classList.add("visible");
    mobile.classList.add("invisible");
    comp.classList.remove("invisible");
    mobile.classList.remove("visible");

    window.addEventListener("scroll", () => {

        if (window.scrollY >= 2) {
            navE1.classList.add("navbar-scrolled");
            navText.classList.add("my-1");
            navText.classList.remove("my-3");
            navText2.classList.add("my-1");
            navText2.classList.remove("my-3");
            navText3.classList.add("my-1");
            navText3.classList.remove("my-3");
            navText4.classList.add("my-1");
            navText4.classList.remove("my-3");
            document.getElementById('logo').style.width = "2.5vh";
        } else if (window.scrollY < 2) {
            navE1.classList.remove("navbar-scrolled");
            navText.classList.add("my-3");
            navText.classList.remove("my-1");
            navText2.classList.add("my-3");
            navText2.classList.remove("my-1");
            navText3.classList.add("my-3");
            navText3.classList.remove("my-1");
            navText4.classList.add("my-3");
            navText4.classList.remove("my-1");
            document.getElementById('logo').style.width = "7vh";
        }
    })
}else{
    comp.classList.add("invisible");
    mobile.classList.add("visible");
    comp.classList.remove("visible");
    mobile.classList.remove("invisible");

    window.addEventListener("scroll", () => {

        if (window.scrollY >= 2) {
            document.getElementById("navbar_mobile").style.backgroundColor = "rgb(18, 18, 18)";
        } else if (window.scrollY < 2) {
            document.getElementById("navbar_mobile").style.backgroundColor = "transparent";
        }
            
    })
};


//RELOAD PAGE WIDTH
const targetWidth = 990;
let isBelowThreshold = window.innerWidth < targetWidth;
let isAboveThreshold = window.innerWidth >= targetWidth;

function reloadNavbarContent() {
    console.log('');
  }

function checkWindowWidth() {
  const currentWidth = window.innerWidth;

  if (currentWidth <= targetWidth && !isBelowThreshold) {
    location.reload();
    isBelowThreshold = true;
  } else if (currentWidth > targetWidth) {
    isBelowThreshold = false;
  }

  if (currentWidth >= targetWidth && !isAboveThreshold) {
    location.reload();
    isAboveThreshold = true;
  } else if (currentWidth < targetWidth) {
    isAboveThreshold = false;
  }
}

window.addEventListener('resize', checkWindowWidth);



//GALERY
function openModal(imagePath) {
    var modalImage = document.getElementById('modalImage');
    modalImage.src = imagePath;
  }


//TO TOP
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener("scroll", () => {

  if (window.scrollY >= 2) {
    mybutton.style.opacity = "100";

  } else if (window.scrollY < 2) {
    mybutton.style.opacity = "0";
    
      
  }
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}