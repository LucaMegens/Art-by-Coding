PIXI.utils.sayHello();

var renderer = PIXI.autoDetectRenderer(512, 512, {
    transparent: true,
    resolution: 1,
});
document.getElementById('display').appendChild(renderer.view);

var stage = new PIXI.Container();

PIXI.loader
 .add("images/Emote.png")
 .load(setup);

var emote;

function setup() {
    emote = new PIXI.Sprite(
    PIXI.loader.resources["images/Emote.png"].texture
    );

    stage.addChild(emote);
    renderer.render(stage);
    }

