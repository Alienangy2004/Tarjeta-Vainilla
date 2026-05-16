<template>
  <div class="contenedor-principal">
    <button @click="alternarVisor" class="btn-toggle-visor">
      {{ mostrarVisor ? '✖ Cerrar Modelos 3D' : '📦 Ver Modelos STL' }}
    </button>

    <div v-if="mostrarVisor" class="visor-frame">
      <h3 class="cyber-title">Módulo de Visualización STL</h3>
      
      <div v-if="cargando" class="overlay-carga">
        <p>Sincronizando Partículas...</p>
      </div>

      <div ref="contenedor3D" class="canvas-3d"></div>
      
      <div class="ui-controls">
        <p class="model-name">{{ nombresModelos[indiceModelo] }}</p>
        <button @click="siguienteModelo" class="btn-next">Siguiente Modelo ❯</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import * as THREE from 'three'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler'
import { gsap } from 'gsap'

const mostrarVisor = ref(false)
const cargando = ref(true)
const indiceModelo = ref(0)
const nombresModelos = ['Armadillo APC', 'Lambent Human (Optimized)', 'Stand']
const contenedor3D = ref(null)

let escena, camara, renderizador, puntos, geometriaPuntos, animacionId
const totalParticulas = 15000 
let datosGeometrias = []
let posicionesActuales = new Float32Array(totalParticulas * 3)

const cargarModelos = async () => {
  const loader = new STLLoader()
  
  // SE INCLUYE EL NUEVO ARCHIVO CONVERTIDO Y OPTIMIZADO
  const urls = [
    'Armadilo_APC.stl', 
    'tripo_convert_9a7e12b1-f988-434b-8d7e-49c3be7b759f.stl', 
    'stand.stl'
  ]
  
  try {
    const promesas = urls.map(url => {
      return new Promise((resolve, reject) => {
        loader.load(url, (geo) => {
          geo.center()
          geo.rotateX(-Math.PI / 2)
          
          geo.computeBoundingSphere()
          const scale = 140 / geo.boundingSphere.radius
          geo.scale(scale, scale, scale)

          const meshTemp = new THREE.Mesh(geo)
          const sampler = new MeshSurfaceSampler(meshTemp).build()
          const sampled = new Float32Array(totalParticulas * 3)
          const tempVec = new THREE.Vector3()

          for (let i = 0; i < totalParticulas; i++) {
            sampler.sample(tempVec)
            tempVec.toArray(sampled, i * 3)
          }
          resolve(sampled)
        }, undefined, (err) => {
          console.error(`Error al cargar el archivo: ${url}`, err)
          reject(err)
        })
      })
    })

    datosGeometrias = await Promise.all(promesas)
    posicionesActuales.set(datosGeometrias[0])
    cargando.value = false
  } catch (error) {
    console.error("Fallo crítico en la carga de modelos STL", error)
  }
}

const iniciarEscena = () => {
  if (!contenedor3D.value) return

  escena = new THREE.Scene()
  camara = new THREE.PerspectiveCamera(50, contenedor3D.value.clientWidth / 400, 0.1, 2000)
  camara.position.set(0, 80, 450)

  renderizador = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderizador.setSize(contenedor3D.value.clientWidth, 400)
  contenedor3D.value.appendChild(renderizador.domElement)

  geometriaPuntos = new THREE.BufferGeometry()
  geometriaPuntos.setAttribute('position', new THREE.BufferAttribute(posicionesActuales, 3))
  
  puntos = new THREE.Points(geometriaPuntos, new THREE.PointsMaterial({
    color: 0x00f3ff,
    size: 1.8,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  }))
  escena.add(puntos)

  const animate = () => {
    animacionId = requestAnimationFrame(animate)
    if (puntos) puntos.rotation.y += 0.004
    renderizador.render(escena, camara)
  }
  animate()
}

const alternarVisor = () => { mostrarVisor.value = !mostrarVisor.value }

const siguienteModelo = () => {
  indiceModelo.value = (indiceModelo.value + 1) % datosGeometrias.length
  gsap.to(posicionesActuales, {
    endArray: datosGeometrias[indiceModelo.value],
    duration: 1.5,
    ease: "power2.inOut",
    onUpdate: () => { if (geometriaPuntos) geometriaPuntos.attributes.position.needsUpdate = true }
  })
}

watch(mostrarVisor, async (val) => {
  if (val) {
    await nextTick()
    iniciarEscena()
  } else {
    cancelAnimationFrame(animacionId)
    if (renderizador) renderizador.dispose()
  }
})

onMounted(() => { cargarModelos() })
onBeforeUnmount(() => { cancelAnimationFrame(animacionId) })
</script>

<style scoped>
.contenedor-principal { margin: 20px 0; text-align: center; }
.btn-toggle-visor {
  background: #3b82f6; color: white; border: none; padding: 12px 24px;
  border-radius: 50px; cursor: pointer; font-weight: bold; transition: 0.3s;
}
.btn-toggle-visor:hover { background: #2563eb; transform: scale(1.05); }
.visor-frame {
  margin-top: 20px; background: #000; border-radius: 15px;
  border: 1px solid #00f3ff; overflow: hidden; position: relative;
  box-shadow: 0 0 20px rgba(0, 243, 255, 0.2);
}
.canvas-3d { width: 100%; height: 400px; }
.cyber-title { color: #00f3ff; font-size: 0.9rem; padding: 15px; margin: 0; }
.overlay-carga {
  position: absolute; inset: 0; background: #000;
  display: flex; justify-content: center; align-items: center; color: #00f3ff; z-index: 10;
}
.ui-controls { position: absolute; bottom: 20px; width: 100%; z-index: 5; }
.model-name { color: white; margin-bottom: 10px; font-size: 0.8rem; opacity: 0.8; }
.btn-next { 
  background: #00f3ff; border: none; padding: 10px 20px; 
  border-radius: 8px; font-weight: bold; cursor: pointer; 
}
</style>