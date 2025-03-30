var usernameOne = prompt('What is the name of player one?')
var usernameTwo = prompt('What is the name of player two?')

document.querySelectorAll('p')[0].innerHTML = usernameOne;
document.querySelectorAll('p')[1].innerHTML = usernameTwo;

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector('.img1').setAttribute("src", "./images/dice" + randomNumber1 + ".png")
document.querySelector('.img2').setAttribute("src", "./images/dice" + randomNumber2 + ".png")


if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerText = usernameOne + " Wins!"

}
else if(randomNumber1 < randomNumber2){
    document.querySelector('h1').innerText = usernameTwo + " Wins!"


} else {
    document.querySelector('h1').innerText = "Draw!"

}