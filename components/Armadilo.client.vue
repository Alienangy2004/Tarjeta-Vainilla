<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const contenedor3D = ref(null)
let escena, camara, renderizador, controles, animacionId

onMounted(() => {
  // 1. ESCENA
  escena = new THREE.Scene()
  escena.background = new THREE.Color(0xfce4ec) // Tu fondo rosa característico

  // 2. CÁMARA
  camara = new THREE.PerspectiveCamera(
    50, 
    contenedor3D.value.clientWidth / contenedor3D.value.clientHeight, 
    0.1, 
    5000
  )
  camara.position.set(300, 200, 300) 

  // 3. RENDERIZADOR
  renderizador = new THREE.WebGLRenderer({ antialias: true })
  renderizador.setSize(contenedor3D.value.clientWidth, contenedor3D.value.clientHeight)
  contenedor3D.value.appendChild(renderizador.domElement)

  // 4. LUCES (Ajustadas para que nada se vea negro)
  const luzAmbiental = new THREE.AmbientLight(0xffffff, 1.5)
  escena.add(luzAmbiental)
  
  const luzHemisferica = new THREE.HemisphereLight(0xffffff, 0x444444, 1)
  escena.add(luzHemisferica)

  const luzFrontal = new THREE.DirectionalLight(0xffffff, 2)
  luzFrontal.position.set(1, 1, 1)
  escena.add(luzFrontal)

  // 5. CARGAR EL MODELO ARMADILLO APC
  const cargador = new STLLoader()
  
  // RUTA CORREGIDA: Sin el "/" al principio para que use el baseURL relativo
  cargador.load('Armadilo_APC.stl', (geometria) => {
    geometria.center() 
    
    const material = new THREE.MeshStandardMaterial({ 
      color: 0x546e7a, // Gris azulado militar
      metalness: 0.6, 
      roughness: 0.3 
    })

    const modelo = new THREE.Mesh(geometria, material)
    modelo.rotation.x = -Math.PI / 2
    escena.add(modelo)

    // --- LÓGICA DE AUTO-ENFOQUE ---
    // Esto calcula el tamaño del Armadillo y ajusta la cámara automáticamente
    const caja = new THREE.Box3().setFromObject(modelo)
    const centro = caja.getCenter(new THREE.Vector3())
    const tamaño = caja.getSize(new THREE.Vector3()).length()

    // Reubicar cámara para que el modelo llene la pantalla
    camara.position.copy(centro)
    camara.position.x += tamaño / 1.2
    camara.position.y += tamaño / 1.5
    camara.position.z += tamaño / 1.2
    camara.lookAt(centro)
    
    if(controles) {
      controles.target.copy(centro)
      controles.update()
    }
    
    console.log('¡Armadillo cargado y enfocado!');
  }, 
  (xhr) => {
    console.log((xhr.loaded / xhr.total * 100) + '% cargado');
  },
  (error) => {
    console.error('Error al cargar el archivo STL:', error);
  })

  // 6. CONTROLES
  controles = new OrbitControls(camara, renderizador.domElement)
  controles.enableDamping = true 

  // 7. ANIMACIÓN
  const animar = () => {
    animacionId = requestAnimationFrame(animar)
    if (controles) controles.update()
    renderizador.render(escena, camara)
  }
  animar()

  window.addEventListener('resize', alRedimensionar)
})

const alRedimensionar = () => {
  if (!contenedor3D.value) return
  camara.aspect = contenedor3D.value.clientWidth / contenedor3D.value.clientHeight
  camara.updateProjectionMatrix()
  renderizador.setSize(contenedor3D.value.clientWidth, contenedor3D.value.clientHeight)
}

onBeforeUnmount(() => {
  window.removeEventListener('resize', alRedimensionar)
  cancelAnimationFrame(animacionId)
  if (renderizador) renderizador.dispose()
})
</script>

<template>
  <div class="contenedor-visor">
    <div ref="contenedor3D" class="canvas-3d"></div>
  </div>
</template>

<style scoped>
.contenedor-visor {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
}
.canvas-3d {
  width: 100%;
  max-width: 850px;
  height: 450px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0,0,0,0.2);
  background-color: #fce4ec;
}
</style>