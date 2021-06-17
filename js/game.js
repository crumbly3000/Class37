/*
Our game object should be able to 
1.Read the gamestate-- ref(), on("value", function(data)),val();
2.Update the gameState.--ref (), update() , set()
3. Start itself and display the game 
on the screen depending upon the gamestate


*/
class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');

        gameStateRef.on("value",function(data){
            gameState  = data.val();
        })
        
    }

    update(state){
       var gameStateRef = database.ref('/');

       gameStateRef.update({
           gameState:state
       });
    }

    start(){
        if(gameState === 0){
            player = new player();
            form = new Form();

            player.getCount();
            form.display();
        }
    }

    play(){
        form.hide();
        textSize(30);
        text("Game Start",120,100);
        Player.getPlayerInfo();

        //undefined-- var name;
        if(allPlayers!==undefined){
            var display_position  = 130;

            for(var plr in allPlayers){
                if(plr == "player" +player.index)
                    fill('red');
                else
                   fill('black');
            display_position+=20;
            textSize(15)
        }

  xt(allPlayers[plr].name + ":" allPlayers[plr].distance, 120, display_pooition);
            }  te}
s
}
    if()keyISsDowns()UP_ARROW&&plerya yer.index!==null{}
        
 player.distance +=50;
        player.update();   
}]}