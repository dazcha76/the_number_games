let the_number = null;

function pick_number(){
    document.getElementById("welcome").play();
    the_number = Math.ceil(Math.random()*23);
    console.log(the_number);
    return the_number;
}

let count = 0;
let lives = 5;
let tributes = [
                "images/cato.png",
                "images/clove.png",
                "images/glimmer.png",
                "images/marvel.png"
                ];

let tribute_randomnizer = Math.floor(Math.random()*4);

$(document).ready(function(){

    $(".start").click(function fade_intro(){
        document.getElementById("welcome").pause();
        document.getElementById("good_luck").play();
        $("#game").css({
            "opacity": "1",
            "visibility": "visible"
        });
        setTimeout(show_input, 4000);

        tribute_arrives();
    });

    // show guess input field, katniss stops

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
        // tribute_leaves();

        $("#guess_div").css({
            opacity: 0,
            visibility: "hidden"});
        $("#response_div1").text("");
        $("#response_div2").text("");
        $("#katniss").css("animation", "walk-east 0.8s steps(6) infinite");
        $("#grass").css("animation", "move-left 0.8s steps(6) infinite");

        setTimeout(show_input, 4000);

        tribute_arrives();
    }

    // tribute arrives

    function tribute_arrives(){
        var elem = document.getElementById("tribute");
        $("#tribute").css("background", `url(${tributes[tribute_randomnizer]})`);
        var pos = -1800;
        var timer = setInterval(frame, -100);
        function frame() {
            if (pos == -1280) {
                clearInterval(timer);
            } else {
                pos++;
                elem.style.bottom = '100px';
                elem.style.left = -pos + 'px';
            }
        }
    }

    // tribute leaves
    // have to fix flickering glitch

    function tribute_leaves(){
        var elem = document.getElementById("tribute");
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
        count++;
        if(the_guess > 23 || the_guess < 1 || isNaN(the_guess)) {
            if(count === 5){
                $("#response_div1").text("You lose!");
            } else {
                $("#response_div1").text("That is not a valid number!");
                $("#response_div2").text("Try again.");
                setTimeout(hide_input, 2000);
            }
        }
        else if(the_guess === the_number){
            arrow_hit();
            $("#response_div1").text("You are the victor!");
            $("#response_div2").text("");
        } else if (the_guess > the_number){

            if(count === 5){
                $("#response_div1").text("You lose!");
            } else {
                arrow_up();
                $("#response_div1").text("You missed!");
                $("#response_div2").text("Try shooting lower.");
                setTimeout(hide_input, 2000);
            }
        } else if(the_guess < the_number && the_guess > 0) {

            if(count === 5){
                $("#response_div1").text("You lose!");
            } else {
                arrow_down();
                $("#response_div1").text("You missed!");
                $("#response_div2").text("Try shooting higher.");
                setTimeout(hide_input, 2000);
            }
        }
        console.log(count);
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
                clearInterval(timer);
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
                clearInterval(timer);
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
                clearInterval(timer);
            } else {
                pos++;
                elem.style.top = '0px';
                elem.style.left = pos + 'px';
            }
        }
    }

});




