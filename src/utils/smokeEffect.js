import * as THREE from "three";
import smokeElementTexture from "assets/images/smoke-element.png";

const WINDOW_WIDTH_LIMIT = 1366;
const LIGHT_INTENSITY = window.innerWidth <= WINDOW_WIDTH_LIMIT ? 0.5 : 0.7;
const ROTATE_COF = window.innerWidth <= WINDOW_WIDTH_LIMIT ? 0.1 : 0.15;
const PARTICLES_COUNT = 120;

let camera, scene, renderer, clock, delta, canvas, smokeParticles;

const init = (holder) => {
  clock = new THREE.Clock();

  // Render
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Scene
  scene = new THREE.Scene();

  // Camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 1000;
  scene.add(camera);

  // Light
  const light = new THREE.DirectionalLight(0xffffff, LIGHT_INTENSITY);
  light.position.set(-1, 0, 1);
  scene.add(light);

  // Particles
  const smokeTexture = new THREE.TextureLoader().load(smokeElementTexture);
  const smokeMaterial = new THREE.MeshLambertMaterial({ color: 0x3f9a0a, map: smokeTexture, transparent: true });
  const smokeGeo = new THREE.PlaneGeometry(300, 300);
  smokeParticles = [];

  for (let p = 0; p < PARTICLES_COUNT; p++) {
    var particle = new THREE.Mesh(smokeGeo, smokeMaterial);
    particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
    particle.rotation.z = Math.random() * 360;
    scene.add(particle);
    smokeParticles.push(particle);
  }

  canvas = holder;
  canvas.appendChild(renderer.domElement);
};

const animate = () => {
  delta = clock.getDelta();
  requestAnimationFrame(animate);
  updateSmoke();
  render();
};

const updateSmoke = () => {
  var sp = smokeParticles.length;
  while (sp--) {
    smokeParticles[sp].rotation.z += delta * ROTATE_COF;
  }
};

const render = () => {
  renderer.render(scene, camera);
};

const SmokeEffect = {
  init,
  animate,
};

export default SmokeEffect;
