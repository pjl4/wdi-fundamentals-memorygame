console.log("Up and running!");

var cards = ["queen","queen","king","king"];

var cardsInPlay=[];



function flipCard(cardID){
    console.log("User flipped "+cards[cardID]);
    cardsInPlay.push(cards[cardID]);
    checkForMatch();
}

flipCard(0);
flipCard(2);

function checkForMatch(){
    if (cardsInPlay.length ===2){
        if(cardsInPlay[0] === cardsInPlay[1]){
            alert("You've found a match");
        }
        else{
            alert("Sorry try again!");
        }
    }
}