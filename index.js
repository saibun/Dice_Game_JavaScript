let randomNumber1=Math.random()*6;
let randomNumber2=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
randomNumber2=Math.floor(randomNumber2)+1;
let image1 = document.querySelectorAll("img")[0];
let randomImageSource="images/dice"+randomNumber1+".png";
image1.setAttribute("src", randomImageSource);
let image2 = document.querySelectorAll("img")[1];
let randomImageSource2="images/dice"+randomNumber2+".png";
image2.setAttribute("src", randomImageSource2);

if(randomNumber1>randomNumber2){
	document.querySelector(".player1").innerHTML="Player 1 wins! &#128681";
}else if(randomNumber1<randomNumber2){
	document.querySelector(".player2").innerHTML="Player 2 wins! &#128681";

}else{
	document.querySelector("h2").innerHTML="Draw!";
}
var typed = new Typed('#element', {
      strings: ['Refresh again'],
      typeSpeed: 50,
    });