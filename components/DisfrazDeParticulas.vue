<!-- components/DisfrazDeParticulas.vue -->
<template>
  <div ref="container" class="particula-contenedor"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { gsap } from 'gsap';

const container = ref(null);
let scene, camera, renderer, points, originalGeometry, positions;
let animationProxy = { progress: 0 }; // Objeto proxy para GSAP

// Configuración de la animación
const totalParticulas = 15000; // Número de partículas (ajusta para rendimiento)
const dispersionFactor = 10;   // Qué tan lejos vuelan las partículas

onMounted(() => {
  initThree();
  loadSTL();
  window.addEventListener('resize', onWindowResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', onWindowResize);
  renderer.dispose();
  // Limpieza adicional de geometría y materiales si es necesario
});

function initThree() {
  // 1. Escena
  scene = new THREE.Scene();

  // 2. Cámara
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 15; // Ajusta según el tamaño de tu modelo

  // 3. Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.value.appendChild(renderer.domElement);

  // 4. Luces (opcional, ayuda a la previsualización del modelo sólido)
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1).normalize();
  scene.add(light);
}

function loadSTL() {
  const loader = new STLLoader();
  // Ruta relativa a tu archivo STL en /public
  loader.load('/Armadilo_APC.stl', (geometry) => {
    originalGeometry = geometry;
    setupParticles();
  });
}

function setupParticles() {
  // Crear puntos de muestreo en la geometría
  const material = new THREE.MeshBasicMaterial();
  const mesh = new THREE.Mesh(originalGeometry, material);
  
  // Usar MeshSurfaceSampler para distribuir puntos uniformemente
  const sampler = new THREE.MeshSurfaceSampler(mesh).build();
  
  positions = new Float32Array(totalParticulas * 3);
  const tempPosition = new THREE.Vector3();

  for (let i = 0; i < totalParticulas; i++) {
    sampler.sample(tempPosition);
    tempPosition.toArray(positions, i * 3);
  }

  // Crear la geometría de puntos
  const pointsGeometry = new THREE.BufferGeometry();
  pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  // Crear el material de partículas (puedes usar una textura de punto si quieres)
  const pointsMaterial = new THREE.PointsMaterial({
    color: 0x00aaff, // Color cian como en el botón original
    size: 0.05,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.8,
  });

  // Crear el sistema de puntos
  points = new THREE.Points(pointsGeometry, pointsMaterial);
  points.rotation.x = -Math.PI / 2; // Corrección de orientación común para STL
  scene.add(points);

  animate();
  startDisintegrationAnimation();
}

function startDisintegrationAnimation() {
  // Usamos GSAP para animar un objeto proxy "progress"
  // Y luego actualizamos las partículas en base a ese progreso.

  gsap.to(animationProxy, {
    progress: 1,
    duration: 3, // Duración de la desintegración
    ease: "power2.inOut",
    onUpdate: updateParticlePositions,
    repeat: -1, // Repetir infinitamente
    yoyo: true,   // Invertir la animación (formar -> desintegrar)
    repeatDelay: 1, // Espera antes de repetir
  });
}

function updateParticlePositions() {
  if (!points) return;

  const currentPositions = points.geometry.attributes.position.array;
  const progress = animationProxy.progress;

  for (let i = 0; i < totalParticulas; i++) {
    const i3 = i * 3;
    
    // Coordenadas originales del modelo
    const origX = positions[i3];
    const origY = positions[i3 + 1];
    const origZ = positions[i3 + 2];

    // Factor de dispersión único para cada partícula (aleatoriedad)
    const randomFactor = (Math.random() - 0.5) * 2;
    
    // Calcular la nueva posición "desintegrada"
    // Las partículas se mueven hacia afuera desde su posición original.
    const targetX = origX + (origX * dispersionFactor * progress * randomFactor);
    const targetY = origY + (origY * dispersionFactor * progress * randomFactor);
    const targetZ = origZ + (origZ * dispersionFactor * progress * (Math.random()));

    // Interpolar entre la posición original y la de destino según el progreso
    currentPositions[i3] = THREE.MathUtils.lerp(origX, targetX, progress);
    currentPositions[i3 + 1] = THREE.MathUtils.lerp(origY, targetY, progress);
    currentPositions[i3 + 2] = THREE.MathUtils.lerp(origZ, targetZ, progress);
  }

  // Indicar a Three.js que la geometría ha cambiado
  points.geometry.attributes.position.needsUpdate = true;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  // Rotación lenta opcional
  if (points) points.rotation.z += 0.002;
  renderer.render(scene, camera);
}
</script>

<style scoped>
.particula-contenedor {
  width: 100vw;
  height: 100vh;
  position: fixed; /* Ocupa toda la pantalla */
  top: 0;
  left: 0;
  z-index: -1; /* Se mantiene detrás del contenido HTML de tu tarjeta */
  overflow: hidden;
}
</style>