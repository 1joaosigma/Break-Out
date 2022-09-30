var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ff79bcb4-9f8b-4425-ac8e-6126f1a24eba","50ccee88-e23a-49e0-b131-f552b46d7828","0de9751c-81d0-40b8-ae71-8472797728b5","0602c95d-8d88-4815-92f9-7e59964249b3","f86a00ba-96b9-4b68-9bb6-3d428668712c"],"propsByKey":{"ff79bcb4-9f8b-4425-ac8e-6126f1a24eba":{"name":"bowlingball_1","sourceUrl":"assets/api/v1/animation-library/gamelab/dFAFQM_6uMulnjS4nj8mgwfHc0bQz2ii/category_sports/bowlingball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"dFAFQM_6uMulnjS4nj8mgwfHc0bQz2ii","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dFAFQM_6uMulnjS4nj8mgwfHc0bQz2ii/category_sports/bowlingball.png"},"50ccee88-e23a-49e0-b131-f552b46d7828":{"name":"cookie_1","sourceUrl":"assets/api/v1/animation-library/gamelab/nHOnCD0VsHiM24D48VsqPD1PdLBE.tPh/category_food/cookie.png","frameSize":{"x":377,"y":377},"frameCount":1,"looping":true,"frameDelay":2,"version":"nHOnCD0VsHiM24D48VsqPD1PdLBE.tPh","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":377,"y":377},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nHOnCD0VsHiM24D48VsqPD1PdLBE.tPh/category_food/cookie.png"},"0de9751c-81d0-40b8-ae71-8472797728b5":{"name":"face_cookie_1","sourceUrl":"assets/api/v1/animation-library/gamelab/X8a_kkO62e2EENe.APY_4qP.0uegbsXp/category_food/face_cookie.png","frameSize":{"x":372,"y":372},"frameCount":1,"looping":true,"frameDelay":2,"version":"X8a_kkO62e2EENe.APY_4qP.0uegbsXp","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":372,"y":372},"rootRelativePath":"assets/api/v1/animation-library/gamelab/X8a_kkO62e2EENe.APY_4qP.0uegbsXp/category_food/face_cookie.png"},"0602c95d-8d88-4815-92f9-7e59964249b3":{"name":"face_cookie2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/GbVLof9Ajvu4cgUBCblj0pbKup2mab4S/category_food/face_cookie2.png","frameSize":{"x":393,"y":393},"frameCount":1,"looping":true,"frameDelay":2,"version":"GbVLof9Ajvu4cgUBCblj0pbKup2mab4S","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":393},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GbVLof9Ajvu4cgUBCblj0pbKup2mab4S/category_food/face_cookie2.png"},"f86a00ba-96b9-4b68-9bb6-3d428668712c":{"name":"pieceYellow_border11_1","sourceUrl":"assets/api/v1/animation-library/gamelab/TD0Kous4g6nmOzkuSDnI4r7t9Yptan.i/category_board_games_and_cards/pieceYellow_border11.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":2,"version":"TD0Kous4g6nmOzkuSDnI4r7t9Yptan.i","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TD0Kous4g6nmOzkuSDnI4r7t9Yptan.i/category_board_games_and_cards/pieceYellow_border11.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var pontos = 0;
var tijolos = createGroup();
for (var i = 0; i < 5; i++) {
  var tijolo = createSprite(50+75*i, 70, 70, 50);
  tijolo.shapeColor = "purple";
  tijolo.setAnimation("face_cookie_1");
  tijolo.scale = 0.2;
  tijolos.add(tijolo);
}
for (var i = 0; i < 5; i++) {
  var tijolo = createSprite(50+75*i, 125, 70, 50);
  tijolo.shapeColor = "blue";
  tijolo.setAnimation("face_cookie2_1");
  tijolo.scale = 0.2;
  tijolos.add(tijolo);
}
var raquete = createSprite(200, 350, 100, 20);
raquete.shapeColor = "yellow";
var bola = createSprite(200, 200, 20, 20);
bola.setAnimation("bowlingball_1");
bola.shapeColor = "yellow";
bola.scale = 0.06;
createEdgeSprites();
var gameState = "inicio";
function quebrarTijolo(bola, tijolo) {
  tijolo.destroy();
  pontos = pontos + 1;
}
function draw() {
  background("black");
  textSize(15);
  fill("green");
  text("Pontuação:", 290, 20);
  text(pontos, 370, 20);
  if (gameState == "inicio") {
    fill("white");
    textSize(20);
    text("Aperte Enter para jogar", 110, 185);
    if (keyDown("enter")) {
      bola.velocityX = 7;
      bola.velocityY = 7;
      gameState = "jogar";
    }
  }
  if (gameState == "jogar") {
    raquete.x = World.mouseX;
    if (bola.isTouching(bottomEdge)) {
      bola.x = 200;
      bola.y = 200;
      bola.velocityX = 0;
      bola.velocityY = 0;
      gameState = "fim";
    }
  }
  if (gameState == "fim") {
    fill("red");
    textSize(20);
    text("Você perdeu!", 165, 227);
  }
  bola.bounceOff(tijolos,quebrarTijolo);
  bola.bounceOff(leftEdge);
  bola.bounceOff(rightEdge);
  bola.bounceOff(topEdge);
  bola.bounceOff(raquete);
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
