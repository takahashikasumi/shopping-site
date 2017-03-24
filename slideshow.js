$(window).load(function(){
  $("#slideshow_list img").click(function(){
    var img_src = $(this).attr("src");
    $("#slideshow_display img").attr("src", img_src);
  });
});