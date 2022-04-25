class Player {
  constructor() {
    this.index = null
    this.name = null
    this.positionX = 0
    this.positionY = 0
    this.rank= 0
    this.score= 180
    this.fuel= 180
    this.life= 180
  }

  getCount() {
    var playerCountRef = database.ref("playerCount")
    playerCountRef.on("value", (data) => {
      playerCount = data.val()
    })
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    })
  }

  addPlayer() {
    // this creates players hirechain database
    var playerIndex = "players/player" + this.index
    // to give xposition to both players one on left and right
    if (this.index === 1) {
      this.positionX = width / 2 - 100
    }
    else {
      this.positionX = width / 2 + 100
    }

    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
      rank:this.rank,
      score:Math.round(this.score),
      life: this.life
    })
  }


  getDistance() {
    var playerDistance = database.ref("players/player" + this.index)
    playerDistance.on("value", data => {
      var distance = data.val()
      this.positionX = distance.positionX
      this.positionY = distance.positionY
     
    })
  }

  update() {
    var playerindex = "players/player" + this.index
    database.ref(playerindex).update({
      positionX: this.positionX,
      positionY: this.positionY,
      rank:this.rank,
      score:Math.round(this.score),
      life: this.life
    })
  }

  //Bp
  static getPlayersInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", data => {
      allPlayers = data.val();
    });
  }

  getCarAtEnd(){
database.ref("carsAtEnd").on("value", (data)=>{
  this.rank=data.val()
})

 } 
 static updateCarsAtEnd(rank){
database.ref("/").update({
  carsAtEnd: rank
})
 }
}
