import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";

import getStarfield from "./getStarfield.js";
import { getFresnelMat } from "./getFresnelMat.js";

const wrap = document.querySelector(".globe");

const w = wrap.offsetWidth;
const h = wrap.offsetWidth;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.5, 1000);
camera.position.z = 1.8;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);

renderer.setClearColor(0x000000, 0); // Set background color to white
wrap.appendChild(renderer.domElement);
// THREE.ColorManagement.enabled = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

const earthGroup = new THREE.Group();
earthGroup.rotation.z = (-23.4 * Math.PI) / 180;
scene.add(earthGroup);
let controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.enableRotate = true; // Disable mouse drag rotation
const detail = 12;
const loader = new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(1, detail);
const material = new THREE.MeshPhongMaterial({
  map: loader.load("./assets/textures/Earth.webp"),
  // map: loader.load("./assets/textures/Earth.jpg"),
  specularMap: loader.load("./assets/textures/02_earthspec1k.jpg"),
  bumpMap: loader.load("./assets/textures/01_earthbump2k.jpg"),
  bumpScale: 0.04,
});
// material.map.colorSpace = THREE.SRGBColorSpace;
const earthMesh = new THREE.Mesh(geometry, material);
earthGroup.add(earthMesh);

const lightsMat = new THREE.MeshBasicMaterial({
  map: loader.load("./assets/textures/2k_custom_earth_nightmap.webp"),
  blending: THREE.AdditiveBlending,
});
const lightsMesh = new THREE.Mesh(geometry, lightsMat);
earthGroup.add(lightsMesh);

const cloudsMat = new THREE.MeshStandardMaterial({
  map: loader.load("./assets/textures/04_earthcloudmap.jpg"),
  transparent: true,
  opacity: 0.8,
  blending: THREE.AdditiveBlending,
  alphaMap: loader.load("./assets/textures/05_earthcloudmaptrans.jpg"),
  // alphaTest: 0.3,
});
const cloudsMesh = new THREE.Mesh(geometry, cloudsMat);
cloudsMesh.scale.setScalar(1.003);
earthGroup.add(cloudsMesh);

const fresnelMat = getFresnelMat();
const glowMesh = new THREE.Mesh(geometry, fresnelMat);
glowMesh.scale.setScalar(1.005);
earthGroup.add(glowMesh);

const stars = getStarfield({ numStars: 2000 });
// scene.add(stars);

const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
sunLight.position.set(-2, 0.5, 1.5);
scene.add(sunLight);

// Function to handle rotation
function animate() {
  requestAnimationFrame(animate);
  // Regular rotation
  earthMesh.rotation.y += 0.0022;
  lightsMesh.rotation.y += 0.0022;
  cloudsMesh.rotation.y += 0.0028;
  glowMesh.rotation.y += 0.0022;
  stars.rotation.y -= 0.00022;

  renderer.render(scene, camera);
}

animate();

function handleWindowResize() {
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}
window.addEventListener("resize", handleWindowResize, false);

// Add this function to change the texture on button click
// function changeTexture(newTexturePath) {
//   const newTexture = loader.load(newTexturePath);
//   earthMesh.material.map = newTexture;
//   earthMesh.material.needsUpdate = true;
// }

// const button = document.querySelector(".feature-climate");
// button.addEventListener("click", () => {
//   changeTexture("./assets/textures/climate.png");
// });
