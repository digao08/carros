class Player {
  constructor() {
    this.name=null;
    this.index=null;
    this.positionX=0;
    this.positionY=0
  }
  getCount(){
    var playerCountRef=database.ref("playerCount");
    playerCountRef.on("value",data=>{
      playerCount=data.val()
    })
  }
 uptadeCount(count){
  database.ref("/").uptade({playerCount:count})
 }
 addPlayer(){
  var playerIndex="players/player"+this.index;
  if(this.index===1){
    this.positionX=width/2-100
  }
  else{
    this.positionX=width/2+100
  }

  database.ref(playerindeix).set({
    name:this.name,
    positionX:this.positionX,
    positionY:this.positionY
  })
   }
}
