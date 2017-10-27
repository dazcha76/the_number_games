var the_number = null;

function pick_number(){
    the_number = Math.ceil(Math.random()*23);
    return the_number;
}

$(document).ready(function(){

    $(".start").click(function fade_intro(){
        $("#game").css({"opacity": "1", "visibility": "visible"});
    });

    $(".shoot").click(function make_guess(){
        var the_guess = document.getElementById("guess_input").value;
        if(the_guess == the_number){
            $("#response_div").text("You guessed it!");
        } else if (the_guess > the_number){
            $("#response_div").text("Too High!");
        } else if(the_guess < the_number) {
            $("#response_div").text("Too Low!");
        }
        the_guess = document.getElementById("guess_input").value = null;
        the_guess = document.getElementById("guess_input").focus();
    });

});