/* Nav */
document.addEventListener('DOMContentLoaded', function() {
  // header 확장
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

  // header menu gsap
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

  menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle("active");
  })

  // menu list span으로 쪼개기
  document.querySelectorAll(".menu-title").forEach(text => {
    let theText = text.innerText;
    let newText = "";
    for(let i=0; i<text.innerText.length; i++){
      newText += "<span aria-hidden='true'>";
      if(text.innerText[i] == " "){
        newText += "&nbsp";
      }else{
        newText += text.innerText[i];
      }
      newText += "</span>";
    }
    text.innerHTML = newText;
    text.setAttribute("aria-label", theText);
  });

  // 위에서 분리한 span에 z-index 조절
  const menuTitle = document.querySelectorAll('.nav-open-wrap .menu-list>a .menu-title');
  menuTitle.forEach(title => {
    title.addEventListener('mouseover', ()=>{
      let spans = title.querySelectorAll('.menu-title span');
      spans.forEach((span, index) => {
        if(index % 2 === 1){
          span.style.zIndex = '-10';
          span.style.position = 'relative';
        }
      });
    });
  });
});

$(document).ready(function () {

  $(".pc-nav .menu-list-addsub").hover(function(){
    $(this).find(".sub-menu").stop().slideDown();
  },function(){
    $(this).find(".sub-menu").stop().slideUp();
  });

});