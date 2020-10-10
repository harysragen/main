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


// Mobile nav logic
const menuToggle = document.querySelector(".toggle");

menuToggle.addEventListener("click", function(){
  if(mobileNav.classList.contains("show")){
    menuToggle.setAttribute("src", "/src/assets/hamburger-menu.svg")
    document.body.style.overflow = "auto";
  }else{
    menuToggle.setAttribute("src", "/src/assets/close-menu.svg")
    document.body.style.overflow = "hidden";
  }
  mobileNav.classList.toggle("show");
  blur.classList.toggle("show");
});