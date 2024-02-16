/* Nav */
const menuBtn = document.querySelector('.menu-btn-wrap');
const mainMenu = document.querySelector('.nav-open-wrap');

let menuOpen = gsap.timeline();
  menuOpen.to(mainMenu, {duration:.6, x:0, y:0, opacity:1, ease: "power4.inOut"})
  menuOpen.to(".menu-list-wrap .menu-list", {y:0, opacity:1, stagger:{
    amount: 1
  }}, "-=.4")
  menuOpen.reverse(-1)
  menuOpen.reversed(true);

menuBtn.addEventListener("click", function () {
  menuOpen.reversed(!menuOpen.reversed());
});

document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    console.log(scrollTop);
    
    let headerInner = document.querySelector(".header-inner");
    let fixedWrap = document.querySelector(".fixed-wrap-bg");
    
    if (scrollTop >= 500) {
      headerInner.classList.add("active");
      // fixedWrap.classList.add("active");
    } else {
      headerInner.classList.remove("active");
      // fixedWrap.classList.remove("active");
    }
  });
});