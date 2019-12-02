console.log("Up and running!");

var cards = [
    {
        rank: "queen",
        suit:"hearts",
        cardImage:"images/queen-of-hearts.png"
    },
    {
        rank:"queen",
        suit:"diamonds",
        cardImage:"images/queen-of-diamonds.png"
    },
    {
        rank:"king",
        suit:"hearts",
        cardImage:"images/king-of-hearts.png"
    },
    {
        rank:"king",
        suit:"diamonds",
        cardImage:"images/king-of-diamonds.png"
    }
];

var cardsInPlay=[];
var score=0;



function flipCard(){
    let card = this.getAttribute('data-id');
    cardsInPlay.push(cards[card]);
    this.setAttribute('src',cards[card].cardImage);
    checkForMatch();
}

function createBoard(){
    for (var i = 0; i < cards.length;i++){
        var newCard= document.createElement('img');
        newCard.setAttribute('src','images/back.png');
        newCard.setAttribute('data-id',i);
        newCard.addEventListener('click',flipCard);
        document.getElementById('game-board').appendChild(newCard);
    }
}
function checkForMatch(){
    if (cardsInPlay.length ===2){
        if(cardsInPlay[0].rank === cardsInPlay[1].rank){
            alert("You've found a match");
            score++;
            document.getElementById('score').textContent=score;
            cardsInPlay=[];
        }
        else{
            alert("Sorry try again!");
            cardsInPlay=[];
        }
    }  

}

function reset(){
    console.log("Resetting");
    cardsInPlay=[];
    var board = document.getElementById('game-board');
    var card = board.firstChild;
    while (card){
        board.removeChild(card);
        card=board.firstChild;
    }
    createBoard();
}
createBoard();
