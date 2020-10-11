// AOS
  AOS.init();

const mobileNav = document.getElementById("mobile-nav");
const blur = document.getElementById("blur");

document.addEventListener("scroll" ,function(){
  const scrollpos = window.pageYOffset;
  const nav = document.querySelector("nav");
  
  if(scrollpos > 150){
    nav.classList.add("navShow");
    mobileNav.classList.add("followNav");
    blur.classList.add("followNav");
  } else{
    nav.classList.remove("navShow");
    mobileNav.classList.remove("followNav");
    blur.classList.remove("followNav");
  }
});

const scrollIndicator = document.querySelector(".scroll-indicator");
scrollIndicator.addEventListener("click", function(){
  location.href = "#hp1"
});



// Mobile nav logic
const menuToggle = document.querySelector(".toggle");

menuToggle.addEventListener("click", function(){
  navState();
  mobileNav.classList.toggle("show");
  blur.classList.toggle("show");
  document.body.classList.toggle("freeze");
});

const mobileLink = document.querySelectorAll("#mobile-nav a");
mobileLink.forEach(function(link){
  link.addEventListener("click", function(){
    navState();
    mobileNav.classList.toggle("show");
    blur.classList.toggle("show");
    document.body.classList.toggle("freeze");
  });
});



// state for icon nav
const navState = () => {
  if(mobileNav.classList.contains("show")){
    menuToggle.setAttribute("src", "/src/assets/hamburger-menu.svg")
  }else{
    menuToggle.setAttribute("src", "/src/assets/close-menu.svg")
  }
}