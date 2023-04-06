"user strict";

let scorePlayer1 = document.querySelector('#score1');
let scorePlayer2 = document.querySelector('#score2');

class Game{
    constructor(nbParty, player1Wins, player2Wins){
        this.nbParty = nbParty;
        this.gameOver = false;
        this.player1Wins = player1Wins;
        this.player2Wins = player2Wins;
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
                        this.player2Wins++;
                    } else if (gameTurn.value > 7 && game.gameOver == false){
                        containerAffichage.style.display = 'flex';
                        affichage.innerText = `PERDU vous pouvez recommencer !`;
                    };
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
                        this.player1Wins++;
                    } else if (gameTurn.value > 7 && game.gameOver == false){
                        containerAffichage.style.display = 'flex';
                        affichage.innerText = `PERDU vous pouvez recommencer !`;
                    };
                }
                gameTurn.value++;
            });
        return table;
    }
    restart(){
        grid.innerHTML = '';
        containerAffichage.style.display = 'none';
        game.nbParty++;
        gameTurn.value = 0;
        game.gameOver = false;
        localStorage.setItem('game', JSON.stringify(game));
        let saveDatas = JSON.parse(localStorage.getItem('game'));
        game = new Game(saveDatas.nbParty, saveDatas.player1Wins, saveDatas.player2Wins);
        gameGrid = game.createGrid(3, 3);
        gameResult = gameGrid.map( el => el);
        table = game.showGrid(gameGrid);
        grid.appendChild(table);
        scorePlayer1.innerText = saveDatas.player1Wins;
        scorePlayer2.innerText = saveDatas.player2Wins;
        bienvenue.textContent = `PARTIE ${saveDatas.nbParty}`;
    }
}
