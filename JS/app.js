'use strict';

class Game{
    constructor(nbPlayers, player1, player2){
        this.nbPlayers = nbPlayers;
        this.gameOver = false;
        this.player1 = player1;
        this.player2 = player2;
    }
    createGrid(vertical, horizontal){
        let gridText = [];
        for (let i = 0; i < vertical; i++){
            let row = [];
            for(let j = 0; j < horizontal; j++){
                row.push(`[${i}][${j}]`);
            }  
            gridText.push(row);
        }
        // console.log(gridText);
        return(gridText);
    }
    showGrid(tab){
        let table = document.createElement('table');
    
        tab.forEach(line =>{
            let tr = document.createElement('tr');
            line.forEach( el => {
                let td= document.createElement('td');
                td.setAttribute('data', el);
                let img = document.createElement('img');
                img.setAttribute('src', './images/question.png');
                td.appendChild(img);
                tr.appendChild(td);
            });
            table.appendChild(tr);
        });
        return table;
    }
}


let grid = document.querySelector('.grid');
let player1; 
let player2;
let btnValid = document.querySelector('#btn-valid');
let gameTurn = document.querySelector('#hidden');
gameTurn.value = 0;
console.log(gameTurn.value);


//GAME
const game = new Game(2, player1, player2);
const gameGrid = game.createGrid(3, 3);
const gameResult = gameGrid.map( el => el);
const table = game.showGrid(gameGrid);
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

btnValid.addEventListener('click', (e) => {
    e.preventDefault();
    player1 = document.querySelector('#player1').value;
    player2 = document.querySelector('#player2').value;
    console.log(player1);
    console.log(player2);
});


// while(!game.gameOver){
console.log(gameTurn.value);
table.addEventListener('click', (e)=>{
let X = e.target.parentNode.getAttribute('data').slice(1, 2);
let Y = e.target.parentNode.getAttribute('data').slice(4, 5);

    if(gameTurn.value % 2 != 0){
        e.target.setAttribute('src', './images/cross.png');
        e.target.parentNode.classList.add('cross');
        gameResult[X][Y] = 'cross';
        game.gameOver = verifResult();
        if(game.gameOver == true){
            console.log('BRAVO PLAYER CROIX');
        } else if (gameTurn.value == 9 && game.gameOver == false){
            console.log('égalité');
        };
    }
    if (gameTurn.value % 2 == 0){
        e.target.setAttribute('src', './images/circle.png');
        e.target.parentNode.classList.add('circle');
        gameResult[X][Y] = 'circle';
        game.gameOver = verifResult();
        if(game.gameOver == true){
            console.log('BRAVO PLAYER ROND');
            }
        } else if(gameTurn.value == 9 && game.gameOver == false){
            console.log('égalité');
        };
        gameTurn.value++;
        console.log(gameTurn.value);
        console.log(game.gameOver);
});




