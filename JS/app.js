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


class Game{
    constructor(nbPlayers, player1, player2){
        this.nbPlayers = nbPlayers;
        this.gameOver = false;
        this.player1 = player1;
        this.player2 = player2;
        this.nbParty = 1;
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
        table.addEventListener('click', (e) => {
            let X = e.target.parentNode.getAttribute('data').slice(1, 2);
            let Y = e.target.parentNode.getAttribute('data').slice(4, 5);

                if(gameTurn.value % 2 != 0){
                    e.target.setAttribute('src', './images/cross.png');
                    e.target.parentNode.classList.add('cross');
                    e.target.parentNode.style.pointerEvents = 'none';
                    gameResult[X][Y] = 'cross';
                    game.gameOver = verifResult();
                    if(game.gameOver == true){
                        containerAffichage.style.display = 'flex';
                        affichage.innerText = `Bravo ${player2}, vous avez GAGNE !`;
                        console.table(gameResult);
                    } else if (gameTurn.value > 7 && game.gameOver == false){
                        containerAffichage.style.display = 'flex';
                        affichage.innerText = `PERDU vous pouvez recommencer !`;
                    };
                    console.log(gameTurn.value);
                    console.log(game.gameOver);
                }
                if(gameTurn.value % 2 == 0){
                    e.target.setAttribute('src', './images/circle.png');
                    e.target.parentNode.classList.add('circle');
                    e.target.parentNode.style.pointerEvents = 'none';
                    gameResult[X][Y] = 'circle';
                    game.gameOver = verifResult();
                    if(game.gameOver == true){
                        containerAffichage.style.display = 'flex';
                        affichage.innerText = `Bravo ${player1}, vous avez GAGNE !`;
                        console.table(gameResult);
                    } else if (gameTurn.value > 7 && game.gameOver == false){
                        containerAffichage.style.display = 'flex';
                        affichage.innerText = `PERDU vous pouvez recommencer !`;
                    };
                    console.log(gameTurn.value);
                    console.log(game.gameOver);
                }
                gameTurn.value++;
            });
        return table;
    }
    restart(){
        grid.innerHTML = '';
        containerAffichage.style.display = 'none';
        
        game = new Game(2, player1, player2);
        gameGrid = game.createGrid(3, 3);
        gameResult = gameGrid.map( el => el);
        table = game.showGrid(gameGrid);
        grid.appendChild(table);
        game.nbParty++;
    }
}


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

// btnValid.addEventListener('click', (e) => {
//     e.preventDefault();
//     player1 = document.querySelector('#player1').value;
//     player2 = document.querySelector('#player2').value;
//     console.log(player1);
//     console.log(player2);
//     bienvenue.textContent = 'Vous pouvez commencer...';
// });

btnRestart.addEventListener('click', game.restart);


btnValid.addEventListener('click', (e) => {
    e.preventDefault();
    player1 = document.querySelector('#player1').value;
    player2 = document.querySelector('#player2').value;
    

    if (player1 === "") {
        bienvenue.textContent = 'Le joueur N°1 doit renseigner un nom valide !';
    } else if(player2 === "") {
        bienvenue.textContent = 'Le joueur N°2 doit renseigner un nom valide !';
    } else {
        bienvenue.textContent = 'Vous pouvez commencer...';
        grid.appendChild(table).style.display="block";
    }
});


