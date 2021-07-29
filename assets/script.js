$( document ).ready(function() {

    if (window.matchMedia('(max-width: 992px)').matches) {

        var margin = $(".header").height();
        console.log(margin);
        $(".info-icon").css({"margin-top":margin+20});
    }
    else{

        var gif = $("#gif");
        gif.css({position: "absolute"});
          
        var mouseX = 0, mouseY = 0;
        var xp = 0, yp = 0;

        $(document).mousemove(function(e){
            mouseX = e.pageX;
            mouseY = e.pageY;
        });

        // Find Selector
        
        var loop = setInterval(function(){
            xp += (mouseX - xp) / 10;
            yp += (mouseY - yp) / 10;
            gif.css({left:xp, top:yp});
        }, 15);
    }
});
