console.log("Hi it's all working")

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update})
var score = 0;
var life = 0;

function preload(){
  game.load.image('sky', 'assets/sky.png');
  game.load.image('ground', 'assets/platform.png');
  game.load.image('star', 'assets/star.png');
  game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
  game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);
}

function create(){
  game.physics.startSystem(Phaser.Physics.ARCADE);
  // Add the sky
  game.add.sprite(0, 0, 'sky');
  // Create a physics group to hold platforms
  platforms = game.add.physicsGroup();
  platforms.enableBody = true;
  // Add the ground
  var ground = platforms.create(0, game.world.height - 50, 'ground');
  ground.scale.setTo(2, 2);
  ground.body.immovable = true;
  // Add the platforms
  var ledge = platforms.create(400, 400, 'ground');
  ledge.body.immovable = true;
  ledge = platforms.create(-150, 250, 'ground');
  ledge.body.immovable = true;

  // Adding the player
  player = game.add.sprite(32, game.world.height - 220, 'dude')
  // Adding player animations
  player.animations.add('left', [0, 1, 2, 3], 10, true);
  player.animations.add('right', [5, 6, 7, 8], 10, true);
  // Run some physics on the sprite
  game.physics.arcade.enable(player);
  player.body.bounce.y = 0.2;
  player.body.gravity.y = 300;
  player.body.collideWorldBounds = true;

  // Create keyboard events
  cursors = game.input.keyboard.createCursorKeys();

  // Create stars
  stars = game.add.physicsGroup();
  stars.enableBody = true;
  // Let's make 12 stars, evenly spread
  for (var i = 0; i < 12; i++){
    var star = stars.create(i * 70, 0, 'star');
    star.body.gravity.y = 200;
    star.body.bounce.y = 0.7 + Math.random() * 0.2;
  }
}

function update(){
  // Player collides with the platforms
  game.physics.arcade.collide(player, platforms);
  // Reset the player's movement if there are no events
  player.body.velocity.x = 0;

  // Left / right key pressed
  if (cursors.left.isDown){
    player.body.velocity.x = -150; //moving sprite left
    player.animations.play('left');
  } else if (cursors.right.isDown){
    player.body.velocity.x = 150; //moving sprite right
    player.animations.play('right');
  } else {
    player.animations.stop();
    player.frame = 4;
  }
  // Player can jump if touching ground
  if (cursors.up.isDown && player.body.touching.down){
    player.body.velocity.y = -300;
  }

  // Collision between stars and platforms
  game.physics.arcade.collide(stars, platforms);
}








//
