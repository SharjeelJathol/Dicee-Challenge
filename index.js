function assignAttribute(player)
{
    var dice=Math.floor(Math.random()*6);
    if(dice===0)
        player.setAttribute("src", "./images/dice1.png");
    else if(dice===1)
        player.setAttribute("src", "./images/dice2.png");
    else if(dice===2)
        player.setAttribute("src", "./images/dice3.png");
    else if(dice===3)
        player.setAttribute("src", "./images/dice4.png");
    else if(dice===4)
        player.setAttribute("src", "./images/dice5.png");
    else if(dice===5)
        player.setAttribute("src", "./images/dice6.png");
    return dice;
}
function decideWinner(player1, player2)
{
    if(player1>player2)
        document.querySelector("h1").textContent="Player 1 Wins!";
    else if(player1<player2)
        document.querySelector("h1").textContent="Player 2 Wins!";
    else
        document.querySelector("h1").textContent="Draw!";
}
var arr=document.querySelectorAll("img");
var player1=assignAttribute(arr[0]);
var player2=assignAttribute(arr[1]);
decideWinner(player1, player2);