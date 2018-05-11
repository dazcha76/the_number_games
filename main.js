let the_number = null;
let lives = 5;
let tributes = [
    {
        'background': 'url("images/cato.png")',
        'width': '180px',
        'height': '250px',
        'bottom': '124px'
    },
    {
        'background': 'url("images/clove.png")',
        'width': '169px',
        'height': '210px',
        'bottom': '126px'
    },
    {
        'background': 'url("images/glimmer.png")',
        'width': '145px',
        'height': '210px',
        'bottom': '126px'
    },
    {
        'background': 'url("images/marvel.png")',
        'width': '195px',
        'height': '225px',
        'bottom': '125px'
    }
];

$(document).ready(function(){

    $(".start").click(function welcome(){
        document.getElementById("welcome").pause();
        document.getElementById("good_luck").play();
        setTimeout(remove_intro, 4300);
        setTimeout(running_sound, 4500);
        setTimeout(show_input, 7000);
        setTimeout(tribute_arrives, 4500);
    });

    $(".play").click(function play_again(){
        lives = 5;
        pick_number();
        display_hearts();
        hide_input();
        document.getElementById("lose").pause();
        $("#you_lose").css({"visibility": "hidden"});
        $("#game").css({"visibility": "visible"});
    });

    $(".quit").click(function quit_game(){
        $("#quit").css({"visibility": "visible"});
    });

    $(".shoot").click(function make_guess(){
        lives--;
        var the_guess = parseInt(document.getElementById("guess_input").value);
        document.getElementById("swoosh").play();
    
        if(the_guess === the_number){
            arrow_hit();
            $("#response_div1").text("");
            $("#response_div2").text("");
            setTimeout(you_win, 4000);
        } else if(lives === 0){
            setTimeout(you_lose, 2000);
        } else {
            if(the_guess > 23 || the_guess < 1 || isNaN(the_guess)){
                $("#response_div1").text("That is not a valid number!");
                $("#response_div2").text("Try again.");        
            } else if(the_guess > the_number){
                arrow_up();
                $("#response_div1").text("You missed!");
                $("#response_div2").text("Try shooting lower.");
            } else if(the_guess < the_number){
                arrow_down();
                $("#response_div1").text("You missed!");
                $("#response_div2").text("Try shooting higher.");
            }
            setTimeout(hide_input, 2000);
        }
        remove_hearts();
        display_hearts();
    });
});

function pick_number(){
    the_number = Math.ceil(Math.random()*23);
    console.log(the_number);
    return the_number;
}

function running_sound(){
    document.getElementById("running").play();
}

function remove_intro(){
    $("#game").css({"visibility": "visible"});
    display_hearts();
}

function display_hearts(){
    for(var i = 0; i < lives; i++){
        $(".hearts").append("<i>favorite</i>");
        $("i").addClass("material-icons");
    }
}

function remove_hearts(){
    $("i").remove();
}

function you_win(){
    $("#you_win").css({"visibility": "visible"});
}

function you_lose(){
    $("#you_lose").css({"visibility": "visible"});
    document.getElementById("lose").play();
}

function tribute_arrives(){
    var elem = document.getElementById("tribute");
    $("#tribute").css(tributes[Math.floor(Math.random()*4)]);
    var pos = -1800;
    var timer = setInterval(frame, -100);
    function frame() {
        if (pos == -1150) {
            clearInterval(timer);
        } else {
            pos++;
            // elem.style.bottom = '100px';
            elem.style.left = -pos + 'px';
        }
    }
}

function show_input(){
    $("#guess_div").css({
        opacity: 1,
        visibility: "visible"});
    $("#katniss").css("animation", "walk-east 0.6s steps(6) 0");
    $("#grass").css("animation", "move-left 0.8s steps(6) 0");
    document.getElementById("running").pause();
    the_guess = document.getElementById("guess_input").value = null;
    the_guess = document.getElementById("guess_input").focus();
}

function hide_input(){
    // tribute_leaves();

    $("#guess_div").css({
        opacity: 0,
        visibility: "hidden"});
    $("#response_div1").text("");
    $("#response_div2").text("");
    $("#katniss").css("animation", "walk-east 0.8s steps(6) infinite");
    $("#grass").css("animation", "move-left 0.8s steps(6) infinite");
    setTimeout(show_input, 2900);
    tribute_arrives();
    document.getElementById("running").play();
}

// have to fix flickering glitch

function tribute_leaves(){
    var elem = document.getElementById("tribute");
    var pos = -1000;
    var timer = setInterval(frame, -100);
    function frame() {
        if (pos == 500) {
            clearInterval(timer);
        } else {
            pos++;
            elem.style.bottom = '100px';
            elem.style.left = -pos + 'px';
        }
    }
}

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
    document.getElementById("swoosh").play();
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
    document.getElementById("swoosh").play();
}

// arrow goes straight

function arrow_hit(){
    document.getElementById("swoosh").play();
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

      