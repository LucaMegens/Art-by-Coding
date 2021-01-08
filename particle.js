// THIS SCRIPT WILL SET THE COLOUR, SETS THE SIZE OF THE PARTICLES AND SETS THE COLLISION SCALE

// YOU CAN CHANGE THE VALUE OF THESE THREE CONSTANTS TO CHANGE THE EFFECT WHEN THE MOUSE COLLIDES WITH THE PARTICLES
const FRICTION = 0.96;
const COLOR_SPEED = 0.5;
const MOVE_SPEED = 0.9;

// HERE YOU CAN SET THE SIZE OF THE PARTICLES AS WELL AS THE COLLISION SCALE WITH THE CURSOR
export class Particle {
  constructor(pos, texture) {
    this.sprite = new PIXI.Sprite(texture);
    this.sprite.scale.set(0.04);

    this.savedX = pos.x;
    this.savedY = pos.y;
    this.x = pos.x;
    this.y = pos.y;
    this.sprite.x = this.x;
    this.sprite.y = this.y;
    this.vx = 0;
    this.vy = 0;
    this.radius = 50;

    // HERE YOU CAN CHANGE THE COLOUR OF THE PARTICLES 
    this.savedRgb = 0xffffff;
    this.rgb = 0x451560;
  }

  collide() {
    this.rgb = 0x41960;
  }
// THIS CALCULATES HOW BIG THE COLLISION IS AND HOW THE PARTICLES HAVE TO REACT TO THE COLLISION
  draw() {
    this.rgb += (this.savedRgb - this.rgb) * COLOR_SPEED;

    this.x += (this.savedX - this.x) * MOVE_SPEED;
    this.y += (this.savedY - this.y) * MOVE_SPEED;

    this.vx *= FRICTION;
    this.vy *= FRICTION;

    this.x += this.vx;
    this.y += this.vy;

    this.sprite.x = this.x;
    this.sprite.y = this.y;
    this.sprite.tint = this.rgb;
  }
}
