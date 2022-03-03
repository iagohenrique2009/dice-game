var randomnumber1 =  Math.floor(7*Math.random());
var randomnumber2 =  Math.floor(7*Math.random());
//dice1
if (randomnumber1 ===1   ){
    document.querySelector("img.img1").setAttribute("src", "images/dice1.png")
}
else if (randomnumber1 ===2){
    document.querySelector("img.img1").setAttribute("src", "images/dice2.png")
}
else if  (randomnumber1 ===3){
    document.querySelector("img.img1").setAttribute("src", "images/dice3.png")
}
else if  (randomnumber1 ===4){
    document.querySelector("img.img1").setAttribute("src", "images/dice4.png")
}
else if  (randomnumber1 ===5){
    document.querySelector("img.img1").setAttribute("src", "images/dice5.png")
}
else if  (randomnumber1 ===6){
    document.querySelector("img.img1").setAttribute("src", "images/dice6.png")
}
//dice2
if (randomnumber2 ===1   ){
    document.querySelector("img.img2").setAttribute("src", "images/dice1.png")
}
else if (randomnumber2 ===2){
    document.querySelector("img.img2").setAttribute("src", "images/dice2.png")
}
else if  (randomnumber2 ===3){
    document.querySelector("img.img2").setAttribute("src", "images/dice3.png")
}
else if  (randomnumber2 ===4){
    document.querySelector("img.img2").setAttribute("src", "images/dice4.png")
}
else if  (randomnumber2 ===5){
    document.querySelector("img.img2").setAttribute("src", "images/dice5.png")
}
else if  (randomnumber2 ===6){
    document.querySelector("img.img2").setAttribute("src", "images/dice6.png")
}
//winner 1 !
if (randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML ="Player 1 Wins! 🏆"
}
//Winner 2 !
if (randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML ="Player 2 Wins! 🏆"
}
