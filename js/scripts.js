function d(a){
            var del= document.getElementById("disp");
            if(a==1){
            del.innerHTML="<br>AI, Blockchains, Cryptography and Full-Stack Development.<br>I do have some idea on AI, cryptography... Trying my hands on Dev these days...<br> Although I have tried some small projects in these fields.<br> I am looking forwards to doing some real projects soon...";
            }
            if(a==2){
            del.innerHTML="<br><b>CP</b>: Natural extention to my love for Discrete Maths.<br><b>Robotics</b>: liked making bots since childhood :)<br><b>Chess</b>: a really bad chess player but still its fun :)<br><b>Cycling</b>Nothing better than this on a rainy day :D" ;
            }
            
            
            if(a== 3){
            del.innerHTML="<br>Ummmm.... Fluent in C++ and Python; PyTorch user;<br> Regualar Participant in various Hackathons; <br>Have made quite some bots using Arduino; Inmo Merit Awardee (AIR 31); <br>Jee Mains Regional Topper (AIR 58) ;)";
            }
            }



(function ($) {
    
    $("body").scrollspy({
    target: "#mainNav",
    offset: 100,
});


var op = function () {
    if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
    } else {
        $("#mainNav").removeClass("navbar-shrink");
    }
};
op();
$(window).scroll(op);
})(jQuery); 