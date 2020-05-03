var config = {
    width: 800,
    height : 600,
    backgroundColor: 0,
    scene: [loadScene,menuScene,gameScene],
	    physics: {
        default: 'matter',
        matter: {
			debug:true
        }
    },
}


var game = new Phaser.Game(config);