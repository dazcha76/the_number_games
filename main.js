
var the_number = null;

function pick_number(){
    the_number = Math.ceil(Math.random()*23);
    return the_number;
}

$(document).ready(function(){

    $(".start").click(function fade_intro(){
        $("#game").css({
            "opacity": "1",
            "visibility": "visible"
        });
        setTimeout(show_input, 4000);

        cato_arrives();
    });

    // show input

    function show_input(){
        $("#guess_div").css({
            opacity: 1,
            visibility: "visible"});
        $("#katniss").css("animation", "walk-east 0.8s steps(6) 0");
        $("#grass").css("animation", "move-left 0.8s steps(6) 0");
        the_guess = document.getElementById("guess_input").value = null;
        the_guess = document.getElementById("guess_input").focus();
    }

    // hide input

    function hide_input(){
        // cato_leaves();

        $("#guess_div").css({
            opacity: 0,
            visibility: "hidden"});
        $("#response_div1").text("");
        $("#response_div2").text("");
        $("#katniss").css("animation", "walk-east 0.8s steps(6) infinite");
        $("#grass").css("animation", "move-left 0.8s steps(6) infinite");

        setTimeout(show_input, 4000);

        cato_arrives();
    }

    // cato arrives

    function cato_arrives(){
        var elem = document.getElementById("cato");
        var pos = -2050;
        var timer = setInterval(frame, -100);
        function frame() {
            if (pos == -1000) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.bottom = '100px';
                elem.style.left = -pos + 'px';
            }
        }
    }

    // cato leaves
    // have to fix flickering glitch

    function cato_leaves(){
        var elem = document.getElementById("cato");
        var pos = -1000;
        var timer = setInterval(frame, -100);
        function frame() {
            if (pos == 500) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.bottom = '100px';
                elem.style.left = -pos + 'px';
            }
        }
    }

    // shoot arrow

    $(".shoot").click(function make_guess(){
        var the_guess = document.getElementById("guess_input").value;
        if(the_guess == the_number){
            arrow_hit();
            $("#response_div1").text("You are the victor!");
            $("#response_div2").text("");
        } else if (the_guess > the_number){
            arrow_up();
            $("#response_div1").text("You missed!");
            $("#response_div2").text("Try shooting lower.");
            setTimeout(hide_input, 2000);
        } else if(the_guess < the_number) {
            arrow_down();
            $("#response_div1").text("You missed!");
            $("#response_div2").text("Try shooting higher.");
            setTimeout(hide_input, 2000);
        }
    });

    // arrow goes up

    function arrow_up(){
        $("#arrow_up").css({
            "opacity": "1",
            "visibility": "visible"
        });
        var elem = document.getElementById("arrow_up");
        var pos = 140;
        var timer = setInterval(frame, -100);
        function frame() {
            if (pos == 1500) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = -pos/2 + 'px';
                elem.style.left = pos + 'px';
            }
        }
    }

    // arrow goes down

    function arrow_down(){
        $("#arrow_down").css({
            "opacity": "1",
            "visibility": "visible"
        });
        var elem = document.getElementById("arrow_down");
        var pos = 140;
        var timer = setInterval(frame, -100);
        function frame() {
            if (pos == 1500) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos/2 + 'px';
                elem.style.left = pos + 'px';
            }
        }
    }

    // arrow goes straight

    function arrow_hit(){
        $("#arrow").css({
            "opacity": "1",
            "visibility": "visible"
        });
        var elem = document.getElementById("arrow");
        var pos = 140;
        var timer = setInterval(frame, -100);
        function frame() {
            if (pos == 1000) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = '0px';
                elem.style.left = pos + 'px';
            }
        }
    }

});




