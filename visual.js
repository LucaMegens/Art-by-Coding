// THIS SCRIPT SETS THE TEXT THAT WILL BE DISPLAYED ON THE CANVAS, IT ALSO ANIMATES/CALCULATES THE PARTICLES RETURN ANIMATION

import { Text } from "./text.js";
import { Particle } from "./particle.js";

// THIS PART CREATES THE TEXTURE OF THE PARTICLES AND CREATES THE MOUSE RADIUS
export class Visual {
  constructor() {
    this.text = new Text();

    this.texture = PIXI.Texture.from("particle.png");

    this.particles = [];

    this.mouse = {
      radius: 50,
    };

    document.addEventListener("pointermove", this.onMove.bind(this), false);
    document.addEventListener("touchend", this.onTouchEnd.bind(this), false);
  }

// HERE YOU CAN SET THE TEXT MESSAGE AND THE DENSITY OF THE PARTICLES
  show(stageWidth, stageHeight, stage) {
    if (this.container) {
      stage.removeChild(this.container);
    }

    this.pos = this.text.setText("Life is only a dream", 5, stageWidth, stageHeight);

    this.container = new PIXI.ParticleContainer(this.pos.length, {
      vertices: false,
      position: true,
      rotation: false,
      scale: false,
      uvs: false,
      tint: true,
    });

    stage.addChild(this.container);

    this.particles = [];
    for (let i = 0; i < this.pos.length; i++) {
      const item = new Particle(this.pos[i], this.texture);
      this.container.addChild(item.sprite);
      this.particles.push(item);
    }
  }

// THIS IS THE MATHEMATICS ON THE RETURN AND COLLIDE ANIMATION OF THE PARTICLES
  animate() {
    for (let i = 0; i < this.particles.length; i++) {
      const item = this.particles[i];
      const dx = this.mouse.x - item.x;
      const dy = this.mouse.y - item.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const minDist = item.radius + this.mouse.radius;

      if (dist < minDist) {
        const angle = Math.atan2(dy, dx);
        const tx = item.x + Math.cos(angle) * minDist;
        const ty = item.y + Math.sin(angle) * minDist;
        const ax = tx - this.mouse.x;
        const ay = ty - this.mouse.y;
        item.vx -= ax;
        item.vy -= ay;
        item.collide();
      }

      item.draw();
    }
  }

  onMove(e) {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }

  onTouchEnd() {
    this.mouse.x = 0;
    this.mouse.y = 0;
  }
}
