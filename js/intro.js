//새로고침해도 인트로 안나옴
/* if(!sessionStorage.getItem("first_load")){
  $("#intro_wrap").css("display","block");
  setTimeout(()=>{
      sessionStorage.setItem("first_load","first_load")
      $("#intro_wrap").fadeOut();
      $("#wrap").css("display","block");
  },3500);
}

window.onload = () => {
  if(sessionStorage.getItem("first_load")){
      $("#intro_wrap").css("display","none");
      $("#wrap").css("display","block");
  }
} */

    //새로고침하면 인트로 다시 나옴
if (!sessionStorage.getItem("first_load")) {
    $("#intro_wrap").css("display", "block");
    setTimeout(() => {
        sessionStorage.setItem("first_load", "first_load");
        $("#intro_wrap").fadeOut();
        $("#wrap").css("display", "block");
    }, 3500);
}

window.onload = () => {
    if (sessionStorage.getItem("first_load")) {
        $("#intro_wrap").css("display", "none");
        $("#wrap").css("display", "block");
    }
}
window.addEventListener('beforeunload', () => {
    sessionStorage.removeItem("first_load");
});


$(document).ready(function() {
  
  var counter = 0;
  var c = 0;
  var i = setInterval(function(){
      $("#intro_wrap .load-counter h1").html(c + "%");
      $("#intro_wrap .load-counter hr").css("width", c + "%");
      // $("#intro_wrap .load-counter").css("background", "linear-gradient(to right, #f60d54 "+ c + "%,#0d0d0d "+ c + "%)");
    counter++;
    c++;
      
    if(counter == 101) {
        clearInterval(i);
    }
  }, 30);
});