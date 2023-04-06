# JS-TIC-TAC-TOE / MORPION
Jeu du morpion en Js

Participants :
  Nahima
  Seb
  Swan

# ORGANISATION DU JEU

  Le jeu se compose d'un formulaire de saisie des joueurs. Puis lorsque les joueurs saisis sont valides, alors la table du morpion s'affiche. pour jouer.
  Lorsque vous gagnez un popup apparait pour vous proposer de recommencer le jeu.

# Fichiers

On retrouve 2 fichiers principaux app.js et game.js.

## apps.js où l'on retrouve la création du jeu avec l'appel de la classe "Game"

- Dans ce fichier on retrouve la gestion de la condition de victoire qui compare les valeurs data[0][0] entre elles en fonctions des 8 conditions de victoires (toutes les lignes, colonnes et diagonales).

- Ecouteur sur le bouton "Restart" dans lequel on utilise un try / catch pour le premier formulaire de saisie des joueurs avec (throw / try / catch)


## game.js avec la classe Game qui est constituée de 3 méthodes : 

### createGrid
Elle va créer un tableau en fonction de 2 paramètres pour générer une grille 3 X 3 avec des infos à l'intérieur telles que [0][1] pour avoir des coordonnées de chaque case. 

### showGrid

Elle va transformer le tableau en affichage HTML d'une table avec une image dans chaque case.
On applique ensuite un écouteur d'événements sur la table.

Les clics pairs correspondent au joueur 1 avec les ronds.

Les clics impairs correspondent au joueur 2 avec les croix.

A chaque tour la variable gameTurn s'incrémente.

### restart

La fonction restart efface la table, génère un nouveau jeu, incrémente la variable nbParty, et affiche le nombre de victoires de chaque joueur.
On réinitialise les variables gameTurn et gameOver à 0 et false.

