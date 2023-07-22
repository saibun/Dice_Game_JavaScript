//Generating random number 1
let randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
//Generating random number 2
let randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;

//selecting img of player1
let image1 = document.querySelectorAll("img")[0];
//add random number with path to select particular dice
let randomImageSource="images/dice"+randomNumber1+".png";
//set the new path in attribute
image1.setAttribute("src", randomImageSource);


let image2 = document.querySelectorAll("img")[1];
let randomImageSource2="images/dice"+randomNumber2+".png";
image2.setAttribute("src", randomImageSource2);

//compare
if(randomNumber1>randomNumber2){
	document.querySelector(".player1").innerHTML="Player 1 wins! &#128681";
}else if(randomNumber1<randomNumber2){
	document.querySelector(".player2").innerHTML="Player 2 wins! &#128681";

}else{
	document.querySelector("h2").innerHTML="Draw!";
}

//add type js
var typed = new Typed('#element', {
      strings: ['Refresh again'],
      typeSpeed: 50,
    });