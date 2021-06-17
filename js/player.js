/*
getCount() -- ref(), on(), val()
updateCount(count)-- update();
update(name)-- set


*/

class Player{
    constructor(){
        //properties
        this.name = null;
        this.distance = 0;
        this.index = null;

    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount  = data.val();
        })
    }

    updateCount(count){
        var playerCountRef = database.ref('/');
        playerCountRef.update({
            playerCount:count
        })
    }

    update(name){
        var playerIndex = "player" +playerCount;
        database.ref(playerIndex).set({
            name:name
        })
    }

    update(){
        var playerIndex = 'players/player' + this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        } )
    }
}