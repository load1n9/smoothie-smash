class gameScene extends Phaser.Scene {
  constructor() {
    super("gameScene")
  }
  preload() {
    this.load.image("background", "sprites/DefineSprite_1681/1.png")
    this.load.image('apple', 'sprites/DefineSprite_703/1.png')
    this.load.image('strawberry', 'sprites/DefineSprite_709/1.png')
    this.load.image('orange', 'sprites/DefineSprite_712/1.png')
    this.load.image('banana', 'sprites/DefineSprite_715/1.png')
    this.load.image('grape', 'sprites/DefineSprite_718/1.png')
    this.load.image('blackberry', 'sprites/DefineSprite_730/1.png')
    this.load.image('peach', 'sprites/DefineSprite_726/1.png')
    this.load.image("table", "sprites/DefineSprite_1702/1.png")
    this.load.spritesheet('penguin', 'sprites/spritesheet.png', {
      frameWidth: 218,
      frameHeight: 321
    });
    this.load.audio("backgroundmusic", "sounds/1.mp3")

  }
  create() {

    this.fruitlist = ['apple', 'strawberry', 'orange', 'banana', 'grape', 'blackberry', 'peach']
    this.fruit = []
    this.bgmusicsettings = {
      mute: false,
      loop: true,
    }
    this.sound.play("backgroundmusic", this.bgmusicsettings)
    this.cursors = this.input.keyboard.createCursorKeys();
    this.matter.world.setBounds()
    this.add.image(0, 0, "background").setOrigin(0, 0)
    this.ground = this.add.image(-75, 350, 'table').setOrigin(0, 0);
    this.player = this.matter.add.sprite(100, 100, 'penguin', {
      inertia: Infinity
    }).setOrigin(0, 0);
    this.player.setBody({
      type: 'rectangle',
      width: 128,
      height: 128
    });
    this.player.setVelocity(0.01, 6);
    this.player.setAngularVelocity(0.04);
    this.player.setBounce(1.5);
    this.player.setFriction(0, 0, 0);
    this.player.setFrictionStatic(1);
    this.anims.create({
      key: 'player_animation1',
      frames: this.anims.generateFrameNumbers('penguin', {
        start: 0,
        end: 20
      }),
      frameRate: 5,
      repeat: -1
    });
    this.player.anims.play("player_animation1")
  }
  update() {
    if (this.player.y >= 460) {
      this.player.setVelocityY(-10);
    }
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-10);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(10);
    } else {
      this.player.setVelocityX(0);
    }


  }
}