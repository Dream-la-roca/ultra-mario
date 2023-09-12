var noseX = 0
var noseY = 0
function preload() {
	world_start = loadSound("world_start.wav");
	mario_coin = loadSound("coin.wav");
	mario_jump = loadSound("jump.wav")
	mario_kick = loadSound("kick.wav")
	mario_die = loadSound("mariodie.wav")
	mario_gameover = loadSound("gameover.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("juego")
	instializeInSetup(mario);
	video = createCapture(VIDEO)
	video.parent("consola")
	video.size(600,250);
	poses = ml5.poseNet(video, listo)
	poses.on("pose", respuesta)
}

function draw() {
	game()
}

function listo(){
	console.log("poseNet esta listo");
}

function respuesta(resultados){
	if (resultados && resultados.length > 0) {
		noseX = resultados[0].pose.nose.x;
		noseY = resultados[0].pose.nose.y;
	}
}






