$(document).ready(function(){
    var box_menu = $(".box_menu");
    var span = $(".box_bars span");
    span.on("click", function() {
    box_menu.fadeToggle(900); 
    });
});