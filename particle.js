const FRICTION = 0.95;
const COLOR_SPEED = 0.5;
const MOVE_SPEED = 0.2;

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
    this.radius = 10;

    this.savedRgb = 0x999999;
    this.rgb = 0x451560;
  }

  collide() {
    this.rgb = 0x41960;
  }

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
