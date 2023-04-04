'use strict';

let grid = document.querySelector('.grid');
let player1; 
let player2;
let btnValid = document.querySelector('#btn-valid');
let gameTurn = document.querySelector('#hidden');
let containerAffichage = document.querySelector('.affichage');
let btnRestart = document.querySelector('.restart');
let affichage = document.querySelector('.affichage h2');
gameTurn.value = 0;
let bienvenue = document.querySelector('.bienvenue');
console.log(gameTurn.value);




//GAMEPLAY
let game = new Game(2, player1, player2);
let gameGrid = game.createGrid(3, 3);
let gameResult = gameGrid.map( el => el);
let table = game.showGrid(gameGrid);
grid.appendChild(table);

function verifResult(){
    if ((gameResult[0][0] == gameResult[0][1]  && gameResult[0][2] == gameResult[0][0]) ||
    (gameResult[1][0] == gameResult[1][1] && gameResult[1][0] == gameResult[1][2]) ||
    (gameResult[2][0] == gameResult[2][1] && gameResult[2][2] == gameResult[2][0]) ||
    (gameResult[0][0] == gameResult[1][0] && gameResult[2][0] == gameResult[0][0]) ||
    (gameResult[0][1] == gameResult[1][1] && gameResult[2][1] == gameResult[0][1]) ||
    (gameResult[0][2] == gameResult[1][2] && gameResult[2][2] == gameResult[0][2]) ||
    (gameResult[0][0] == gameResult[1][1] && gameResult[2][2] == gameResult[0][0]) ||
    (gameResult[0][2] == gameResult[1][1] && gameResult[2][0] == gameResult[0][2])){
        return true;
    } else return false;
}


// EVENT LISTENERS


btnRestart.addEventListener('click', game.restart);

grid.style.display="none";
btnValid.addEventListener('click', (e) => {
    e.preventDefault();
    player1 = document.querySelector('#player1').value;
    player2 = document.querySelector('#player2').value;
    

    try{
        if (player1 === "" && player2 === "") {
            throw new Error('Veuillez remplir les champs !');
        } else if(player1 === "") {
            throw new Error('Le joueur N°1 doit renseigner un nom valide !');
        } else if(player2 === "") {
            throw new Error('Le joueur N°2 doit renseigner un nom valide !');
        } else {
            bienvenue.textContent = 'Vous pouvez commencer: PARTIE 1';
            grid.style.display="grid";
        }
    }
    catch (e){
        bienvenue.textContent = e.message;
    }
});


