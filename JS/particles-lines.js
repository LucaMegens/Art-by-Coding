/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area":500
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 2,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 8
      },
      "image": {
        "width": 1920,
        "height": 1080
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 2,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 80,
        "size_min": 0.5,
        "sync": true
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 80,
      "color": "#ffffff",
      "opacity": 1,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 100
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 100,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 100,
        "size": 100,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
