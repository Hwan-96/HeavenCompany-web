$(document).ready(function(){
  $(".tab-btn-left .tab-tit").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    let result3 = $(this).attr("data-alt");

    $(".tab-content .tab-left-inner").removeClass("active");
    $("#"+result3).addClass("active").hide().fadeIn();
  });

  $(".tab-btn-right .tab-tit").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    let result4 = $(this).attr("data-alt");

    $(".tab-content .tab-right-inner").removeClass("active");
    $("#"+result4).addClass("active").hide().fadeIn();
  });
})
