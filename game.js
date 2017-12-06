var player;
var enemy1;
var enemy2;
var enemy3;
var isGameOver;
var time;

function setup() {
	createCanvas(250, 250);
	player = createSprite(width/2, height-25, 50,50);
	enemy1 = createSprite(random(5, width-5), 0, 10, 30);
	enemy2 = createSprite(random(5, width-5), 0, 10, 30);
	enemy3 = createSprite(random(5, width-5), 0, 10, 30);
	isGameOver = false;
	time = 0;
}

function draw() {
	if (isGameOver){
		gameOver();
	} else {
		if (enemy1.overlap(player) || enemy2.overlap(player) || enemy3.overlap(player)) {
			isGameOver = true;
		}

	background(0,0,100);
	if (keyDown(RIGHT_ARROW) && player.position.x < (width-25)) {
		player.position.x = player.position.x +3;
	}
	if (keyDown(LEFT_ARROW) && player.position.x > 25) {
		player.position.x = player.position.x -3;
	}
	if (time < 750) {
	enemy1.position.y = enemy1.position.y + 4;
	} else {
		enemy1.position.y = enemy1.position.y + 6;
	}
	if (enemy1.position.y > height) {
		enemy1.position.y = 0;
		enemy1.position.x = random(5, width-5);
	}
	
	if (time > 150){
		if (time < 1000) {
		enemy2.position.y = enemy2.position.y + 4;
		} else {
			enemy2.position.y = enemy2.position.y + 6;
		}
	}
		if (enemy2.position.y > height) {
			enemy2.position.y = 0;
			enemy2.position.x = random(5, width-5);
		}
	if (time > 300){
		if (time < 1250) {
		enemy3.position.y = enemy3.position.y + 4;
		} else {
			enemy3.position.y = enemy3.position.y + 6;
		}
	}
		if (enemy3.position.y > height) {
			enemy3.position.y = 0;
			enemy3.position.x = random(5, width-5);
		}	
	drawSprites();
	time = time +1;
	}
}

function gameOver() {
	background(0);
	textAlign(CENTER);
	fill("white");
	text("Game Over!", width/2, height/2);
	text("Click anywhere to try again.", width/2, 3*height/4);
	text("Your score was " +time+".", width/2, 2*height/3);
}

function mouseClicked() {
	if (isGameOver){
	isGameOver = false;
	time = 0;
	player.position.x = width/2;
	player.position.y = height-25;
	enemy1.position.x = random(5, width-5);
	enemy1.position.y = 0;
	enemy2.position.x = random(5, width-5);
	enemy2.position.y = 0;
	enemy3.position.x = random(5, width-5);
	enemy3.position.y = 0;
}
}