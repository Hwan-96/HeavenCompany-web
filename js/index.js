$(document).ready(function(){
  $(".tabBtn3 .tab-tit").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    let result3 = $(this).attr("data-alt");

    $(".tabContents3 .Tabs-3rd").removeClass("active");
    $("#"+result3).addClass("active").hide().fadeIn();
  });

  $(".tabBtn4 .tab-tit").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    let result4 = $(this).attr("data-alt");

    $(".tabContents4 .newsTap").removeClass("active");
    $("#"+result4).addClass("active").hide().fadeIn();
  });
})
