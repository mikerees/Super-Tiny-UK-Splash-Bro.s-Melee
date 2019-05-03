var ukParts = new Array();
var ukPartsSprites = new Array();
var player1, player2;
var player1Image, player2Image;
var winner = null;
var player1dead = player2dead = false;
var p1x = 0, p1y = 0, p2x = 0, p2y = 0;

function preload() {
   ukParts[1] = loadImage("assets/ukparts/ukpart01.png");
   ukPartsSprites[1] = createSprite(307, 278);
   ukPartsSprites[1].addImage("land", ukParts[1]);
   ukParts[2] = loadImage("assets/ukparts/ukpart02.png");
   ukPartsSprites[2] = createSprite(476, 520);
   ukPartsSprites[2].addImage("land", ukParts[2]);
   ukParts[3] = loadImage("assets/ukparts/ukpart03.png");
   ukPartsSprites[3] = createSprite(451, 763);
   ukPartsSprites[3].addImage("land", ukParts[3]);
   ukParts[4] = loadImage("assets/ukparts/ukpart04.png");
   ukPartsSprites[4] = createSprite(469, 920);
   ukPartsSprites[4].addImage("land", ukParts[4]);
   ukParts[5] = loadImage("assets/ukparts/ukpart05.png");
   ukPartsSprites[5] = createSprite(571, 1070);
   ukPartsSprites[5].addImage("land", ukParts[5]);
   ukParts[6] = loadImage("assets/ukparts/ukpart06.png");
   ukPartsSprites[6] = createSprite(535, 1189);
   ukPartsSprites[6].addImage("land", ukParts[6]);
   // guess who messed up naming all the spliced files from mspaint
   ukParts[8] = loadImage("assets/ukparts/ukpart08.png");
   ukPartsSprites[8] = createSprite(568, 1375);
   ukPartsSprites[8].addImage("land", ukParts[8]);
   ukParts[9] = loadImage("assets/ukparts/ukpart09.png");
   ukPartsSprites[9] = createSprite(226, 1486);
   ukPartsSprites[9].addImage("land", ukParts[9]);
   ukParts[10] = loadImage("assets/ukparts/ukpart10.png");
   ukPartsSprites[10] = createSprite(270, 1444);
   ukPartsSprites[10].addImage("land", ukParts[10]);
   ukParts[11] = loadImage("assets/ukparts/ukpart11.png");
   ukPartsSprites[11] = createSprite(197, 1633);
   ukPartsSprites[11].addImage("land", ukParts[11]);
   ukParts[12] = loadImage("assets/ukparts/ukpart12.png");
   ukPartsSprites[12] = createSprite(331, 1591);
   ukPartsSprites[12].addImage("land", ukParts[12]);
   ukParts[13] = loadImage("assets/ukparts/ukpart13.png");
   ukPartsSprites[13] = createSprite(560, 1694);
   ukPartsSprites[13].addImage("land", ukParts[13]);
   ukParts[14] = loadImage("assets/ukparts/ukpart14.png");
   ukPartsSprites[14] = createSprite(772, 1611);
   ukPartsSprites[14].addImage("land", ukParts[14]);
   ukParts[15] = loadImage("assets/ukparts/ukpart15.png");
   ukPartsSprites[15] = createSprite(734, 1860);
   ukPartsSprites[15].addImage("land", ukParts[15]);
   ukParts[16] = loadImage("assets/ukparts/ukpart16.png");
   ukPartsSprites[16] = createSprite(350, 1861);
   ukPartsSprites[16].addImage("land", ukParts[16]);
   ukParts[17] = loadImage("assets/ukparts/ukpart17.png");
   ukPartsSprites[17] = createSprite(252, 1892);
   ukPartsSprites[17].addImage("land", ukParts[17]);
   ukParts[18] = loadImage("assets/ukparts/ukpart18.png");
   ukPartsSprites[18] = createSprite(174, 1937);
   ukPartsSprites[18].addImage("land", ukParts[18]);

   player1Image = loadImage("assets/player1.png");
   player2Image = loadImage("assets/player2.png");

   player1 = createSprite(250, 220);
   player2 = createSprite(700, 1860);

   player1.addImage("body", player1Image);
   player2.addImage("body", player2Image);
   player1.setCollider('circle', 20, 20);
   player2.setCollider('circle', 20, 20);
}


function setup() {
  createCanvas(1024, 2100);
  background(0, 162, 232);
}

function draw() {

  for (i = 1; i < 19; i++) {
    if (i != 7) {
      drawSprite(ukPartsSprites[i]);
    }
  }

  player1.bounce(player2);
  player2.bounce(player1);

  if (keyWentDown('w')) {
    p1y -= 1;
    if (p1y < -5) {
      p1y = -5;
    }
  }
  if (keyWentDown('a')) {
    p1x -= 1;
    if (p1x < -5) {
      p1x = -5;
    }
  }
  if (keyWentDown('s')) {
    p1y += 1;
    if (p1y > 5) {
      p1y = 5;
    }
  }
  if (keyWentDown('d')) {
    p1x += 1;
    if (p1x > 5) {
      p1x = 5;
    }
  }

  if (keyWentDown(UP_ARROW)) {
    p2y -= 1;
    if (p2y < -5) {
      p2y = -5;
    }
  }
  if (keyWentDown(LEFT_ARROW)) {
    p2x -= 1;
    if (p2x < -5) {
      p2x = -5;
    }
  }
  if (keyWentDown(DOWN_ARROW)) {
    p2y += 1;
    if (p2y > 5) {
      p2y = 5;
    }
  }
  if (keyWentDown(RIGHT_ARROW)) {
    p2x += 1;
    if (p2x > 5) {
      p2x = 5;
    }
  }

  if (
      !player1.overlap(ukPartsSprites[1]) &&
      !player1.overlap(ukPartsSprites[2]) &&
      !player1.overlap(ukPartsSprites[3]) &&
      !player1.overlap(ukPartsSprites[4]) &&
      !player1.overlap(ukPartsSprites[5]) &&
      !player1.overlap(ukPartsSprites[6]) &&
      !player1.overlap(ukPartsSprites[8]) &&
      !player1.overlap(ukPartsSprites[9]) &&
      !player1.overlap(ukPartsSprites[10]) &&
      !player1.overlap(ukPartsSprites[11]) &&
      !player1.overlap(ukPartsSprites[12]) &&
      !player1.overlap(ukPartsSprites[13]) &&
      !player1.overlap(ukPartsSprites[14]) &&
      !player1.overlap(ukPartsSprites[15]) &&
      !player1.overlap(ukPartsSprites[16]) &&
      !player1.overlap(ukPartsSprites[17]) &&
      !player1.overlap(ukPartsSprites[18])
    ) {
      winner = "PURPLE";
    }

    if (
        !player2.overlap(ukPartsSprites[1]) &&
        !player2.overlap(ukPartsSprites[2]) &&
        !player2.overlap(ukPartsSprites[3]) &&
        !player2.overlap(ukPartsSprites[4]) &&
        !player2.overlap(ukPartsSprites[5]) &&
        !player2.overlap(ukPartsSprites[6]) &&
        !player2.overlap(ukPartsSprites[8]) &&
        !player2.overlap(ukPartsSprites[9]) &&
        !player2.overlap(ukPartsSprites[10]) &&
        !player2.overlap(ukPartsSprites[11]) &&
        !player2.overlap(ukPartsSprites[12]) &&
        !player2.overlap(ukPartsSprites[13]) &&
        !player2.overlap(ukPartsSprites[14]) &&
        !player2.overlap(ukPartsSprites[15]) &&
        !player2.overlap(ukPartsSprites[16]) &&
        !player2.overlap(ukPartsSprites[17]) &&
        !player2.overlap(ukPartsSprites[18])
      ) {
        winner = "RED";
      }

  if (winner !== null) {
    p1x = 0;
    p1y = 0;
    p2x = 0;
    p2y = 0;
    if (winner == "RED") {
      background(255, 0, 0);
    }
    if (winner == "PURPLE") {
      background(163, 73, 164);
    }
  }

  player1.velocity.x = p1x;
  player1.velocity.y = p1y;
  player2.velocity.x = p2x;
  player2.velocity.y = p2y;

  drawSprite(player1);
  drawSprite(player2);

}
