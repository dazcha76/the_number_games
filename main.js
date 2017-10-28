var the_number = null;

function pick_number(){
    the_number = Math.ceil(Math.random()*23);
    return the_number;
}

$(document).ready(function(){

    $(".start").click(function fade_intro(){
        $("#game").css({"opacity": "1", "visibility": "visible"});
    });

    setTimeout(show_input, 4000);

    function show_input(){
        $("#guess_div").css({
            opacity: 1,
            visibility: "visible"});
        $("#katniss").css("animation", "walk-east 0.8s steps(6) 0");
        $("#grass").css("animation", "move-left 0.8s steps(6) 0");
        the_guess = document.getElementById("guess_input").value = null;
        the_guess = document.getElementById("guess_input").focus();
    }

    function hide_input(){
        $("#guess_div").css({
            opacity: 0,
            visibility: "hidden"});
        $("#response_div1").text("");
        $("#response_div2").text("");
        $("#katniss").css("animation", "walk-east 0.8s steps(6) infinite");
        $("#grass").css("animation", "move-left 0.8s steps(6) infinite");
        setTimeout(show_input, 4000);
    }

    $(".shoot").click(function make_guess(){
        var the_guess = document.getElementById("guess_input").value;
        if(the_guess == the_number){
            $("#response_div1").text("You are the victor!");
            $("#response_div2").text("");
        } else if (the_guess > the_number){
            $("#response_div1").text("You missed!");
            $("#response_div2").text("Try shooting lower.");
            setTimeout(hide_input, 2000);
        } else if(the_guess < the_number) {
            $("#response_div1").text("You missed!");
            $("#response_div2").text("Try shooting higher.");
            setTimeout(hide_input, 2000);
        }
    });




});