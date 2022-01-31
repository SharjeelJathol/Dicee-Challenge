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
}
var arr=document.querySelectorAll("img");
assignAttribute(arr[0]);
assignAttribute(arr[1]);

