var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColours[nextSequence()]
var gamePattern = [randomChosenColour]

$('.'+randomChosenColour).fadeOut(100).fadeIn(100)


function nextSequence(){
    return Math.floor(Math.random() * 4)
}