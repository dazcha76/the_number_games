let the_number = null;
let lives = 5;
let tributes = [
    {
        'background': 'url("images/cato.png")',
        'width': '215px',
        'height': '273px',
        'bottom': '124px'
    },
    {
        'background': 'url("images/clove.png")',
        'width': '215px',
        'height': '273px',
        'bottom': '124px'
    },
    {
        'background': 'url("images/glimmer.png")',
        'width': '215px',
        'height': '273px',
        'bottom': '124px'
    },
    {
        'background': 'url("images/marvel.png")',
        'width': '215px',
        'height': '273px',
        'bottom': '124px'
    },
    {
        'background': 'url("images/foxface.png")',
        'width': '215px',
        'height': '273px',
        'bottom': '124px'
    }
];

let small_tributes = [
    {
        'background': 'url("images/cato_small.png")',
        'width': '108px',
        'height': '137px',
        'bottom': '124px'
    },
    {
        'background': 'url("images/clove_small.png")',
        'width': '108px',
        'height': '137px',
        'bottom': '124px'
    },
    {
        'background': 'url("images/glimmer_small.png")',
        'width': '108px',
        'height': '137px',
        'bottom': '124px'
    },
    {
        'background': 'url("images/marvel_small.png")',
        'width': '108px',
        'height': '137px',
        'bottom': '124px'
    },
    {
        'background': 'url("images/foxface_small.png")',
        'width': '108px',
        'height': '137px',
        'bottom': '124px'
    }
];

$(document).ready(function(){

    // ROTATE SCREEN

    // if(window.orientation === 90){
    //     $("#katniss").css({
    //         "background": "url(images/katniss_small.png)",
    //         "height": "132px",
    //         "width": "132px",
    //         "bottom": "61px",
    //         "animation": "small_walk-east 0.6s steps(6) infinite"
    //     });
    //     $("#grass").css({
    //         "background": "url(images/grass_small.jpg)",
    //         "height": "103px",
    //     });
    // } else if(window.orientation === 0){
    //     $('.portrait').css("display", "block");
    //     $('#intro').css("display", "none");
    // }

    $(".start").click(welcome);

    $(".shoot").click(function make_guess(){
        lives--;
        var the_guess = parseInt(document.getElementById("guess_input").value);
        document.getElementById("swoosh").play();
    
        if(the_guess === the_number){
            arrow_hit();
            $("#response_div1").text("");
            $("#response_div2").text("");
            // setTimeout(blood, 4000)
            setTimeout(you_win, 5000);
            lives = 0;
        } else {
            if(the_guess > 23 || the_guess < 1 || isNaN(the_guess)){
                $("#response_div1").text("That is not a valid number!");
                $("#response_div2").text("Try again.");        
            } else if(the_guess > the_number){
                arrow_up();
                if(lives === 0){
                    setTimeout(you_lose, 2000);
                } else {
                    $("#response_div1").text("You missed!");
                    $("#response_div2").text("Guess lower.");
                }
            } else if(the_guess < the_number){
                arrow_down();
                if(lives === 0){
                    setTimeout(you_lose, 2000);
                } else {
                    $("#response_div1").text("You missed!");
                    $("#response_div2").text("Guess higher.");
                }
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

function welcome(){
    $('.start').off("click");
    document.getElementById("welcome").pause();
    document.getElementById("good_luck").play();
    setTimeout(remove_intro, 4300);
    setTimeout(running_sound, 4500);
    setTimeout(show_input, 7000);
    setTimeout(tribute_arrives, 4500);
    $('#katniss').removeAttr("style")
}

function remove_intro(){
    $("#game").css({"visibility": "visible"});
    $('#katniss').css({"visibility": "visible"});
    display_hearts();
}

function running_sound(){
    document.getElementById("running").play();
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

function tribute_arrives(){
    var elem = document.getElementById("tribute");
    var randomizer = Math.floor(Math.random()*tributes.length);

    if(window.orientation === 90){
        $("#tribute").css(small_tributes[randomizer]);
        $("#tribute").css({"bottom": "62px"})
    } else {
        $("#tribute").css(tributes[randomizer]);
    }

    tributes.splice(randomizer, 1);
    // var pos = -1800;
    // var timer = setInterval(frame, -100);
    if(window.orientation === 90){
        var timer = setInterval(frame, 10);
        var pos = -800;
        function frame() {
            if (pos == -530) {
                clearInterval(timer);
            } else {
                pos++;
                // elem.style.bottom = '100px';
                elem.style.left = -pos + 'px';
            }
        }
    } else {
        var timer = setInterval(frame, 0);
        var pos = -1800;
        function frame() {
            if (pos == -1100) {
                clearInterval(timer);
            } else {
                pos++;
                // elem.style.bottom = '100px';
                elem.style.left = -pos + 'px';
            }
        }
    }

    // var elem = document.getElementById("tribute");
    // var randomizer = Math.floor(Math.random()*tributes.length);
    // $("#tribute").css(tributes[randomizer]);
    
    // tributes.splice(randomizer, 1);
    
    
    // var pos = -1800;
    // var timer = setInterval(frame, -100);
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

// function tribute_leaves(){
//     var elem = document.getElementById("tribute");
//     var pos = -1000;
//     var timer = setInterval(frame, -100);
//     function frame() {
//         if (pos == 500) {
//             clearInterval(timer);
//         } else {
//             pos++;
//             elem.style.bottom = '100px';
//             elem.style.left = -pos + 'px';
//         }
//     }
// }

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
    document.getElementById("swoosh").play();
    $("#arrow").css({
        "opacity": "1",
        "visibility": "visible"
    });
    var elem = document.getElementById("arrow");
    var pos = 140;
    var timer = setInterval(frame, -100);
    function frame() {
        if (pos == 1160) {
            clearInterval(timer);
        } else {
            pos++;
            elem.style.top = '90px';
            elem.style.left = pos + 'px';
        }
    }

}

function blood(){
    $("#blood").css({
        "animation": "playX 1s steps(3) 10, playY 3s steps(3) 10",
        "visibility": "visible"
    });
}

function you_win(){
    remove_hearts();
    $('#katniss').css({"visibility": "hidden"});
    $("#you_win").css({"visibility": "visible"});
    $(".play").click(try_again);
    $(".quit").click(quit_game);
    document.getElementById("win").play();
    setInterval(winner, 1500);
}

function you_lose(){
    remove_hearts();
    $('#katniss').css({"visibility": "hidden"});
    $("#you_lose").css({"visibility": "visible"});
    $(".play").click(try_again);
    $(".quit").click(quit_game);
    document.getElementById("lose").play();
    setInterval(loser, 1500);
}

function loser(){
    $(".fallen").css({"opacity": "1", "visibility": "visible"});
    $(".lose_image").css({"opacity": "1", "visibility": "visible"})
}

function winner(){
    $(".winner").css({"opacity": "1", "visibility": "visible"});
    $(".win_image").css({"opacity": "1", "visibility": "visible"})
}

function try_again(){
    lives = 5;
    tributes = [
        {'background': 'url("images/cato.png")'},
        {'background': 'url("images/clove.png")'},
        {'background': 'url("images/glimmer.png")'},
        {'background': 'url("images/marvel.png")'},
        {'background': 'url("images/foxface.png")'}
    ];
    pick_number();
    display_hearts();
    $('#katniss').css({"visibility": "visible"});
    hide_input();
    document.getElementById("lose").pause();
    $("#arrow").css({"visibility": "hidden"});
    $("#blood").css({"visibility": "hidden"});
    $("#you_win").css({"visibility": "hidden"});
    $("#you_win").empty();
    $("#you_lose").css({"visibility": "hidden"});
    $("#you_lose").empty();
    $("#game").css({"visibility": "visible"});
}

function quit_game(){
    $("#quit").css({"visibility": "visible"});
    $(".home").click(home);
    $("#you_win").css({"visibility": "hidden"});
    $("#you_win").empty();
    $("#you_lose").css({"visibility": "hidden"});
    $("#you_lose").empty();
    document.getElementById("win").pause();
    document.getElementById("lose").pause();
}

function home(){
    location.reload(true);
}