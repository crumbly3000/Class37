/*
Overview: 4 player

Below steps is common for all 4 players

1. Form:Enter name in the  input box.
2. Click the play button

gameState = 0//when less than 4 players entered
0 TO 1 ON COUNTING THE NO OF PLAYERS
gameState = 1//When all the 4 players entered
gameSTate = 2// When all the 4 player finished

Folder: js
FORM, PLAYER,GAME

C37:
Goal: Display all the players with their distance scores

make a class for the players
Properties and Functions
    Properties: Name, Distance covered, index
    Functions: 
    make new player

example for static function:
class student{
    //properties

    student details(){

    }

     static schoolDetail(){
        Address:
        Phone#:
    }
} 1000
var Elijah = new student();
student schoolDetail();
*/

var database;
var backgroundImage;

var gameState = 0;
var playerCount;

var form,player,game;

var allPlayers;

function setup(){
createCanvas(400,400);
database = firebase.database();

game = new Game();
game.getState();
game.start();

}

function draw(){

}