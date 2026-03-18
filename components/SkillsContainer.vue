//components/SkillsContainer.vue

<script setup>
import { ref } from 'vue'
const mostrarContacto = ref(false)
</script>

<template>
  <div class="container">
    <h3>Información Personal</h3>
    <p><strong>Nivel de Inglés:</strong> Intermedio</p>
    <p><strong>Ubicación:</strong> Estado de México</p>
    
    <div class="skills">
      <span>Python</span> <span>Flutter</span> <span>Node.js</span> <span>MySQL</span>
    </div>

    <button @click="mostrarContacto = !mostrarContacto" class="btn-neon">
      <span></span><span></span><span></span><span></span>
      {{ mostrarContacto ? 'Cerrar' : 'Contactar' }}
    </button>

    <div v-if="mostrarContacto" class="fade-in">
      <ContactForm />
      <SocialLinks />
    </div>
  </div>
</template>

<style scoped>
.container { padding: 20px; color: var(--text-main); }
.skills span { background: #e9ecef; padding: 6px 12px; border-radius: 20px; font-size: 0.8rem; margin: 4px; display: inline-block; }
[data-theme="dark"] .skills span { background: #3a3b3c; color: #e4e6eb; }

/* ESTILO NEÓN RESTAURADO */
.btn-neon {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: var(--accent-neon);
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    margin-top: 15px;
    background: transparent;
    border: none;
    cursor: pointer;
    letter-spacing: 2px;
}
.btn-neon:hover { background: var(--accent-neon); color: #fff; box-shadow: 0 0 25px var(--accent-neon); }
.btn-neon span { position: absolute; display: block; }
.btn-neon span:nth-child(1) { top: 0; left: -100%; width: 100%; height: 2px; background: linear-gradient(90deg, transparent, var(--accent-neon)); animation: btn-anim1 1s linear infinite; }
@keyframes btn-anim1 { 0% { left: -100%; } 50%, 100% { left: 100%; } }
.btn-neon span:nth-child(2) { top: -100%; right: 0; width: 2px; height: 100%; background: linear-gradient(180deg, transparent, var(--accent-neon)); animation: btn-anim2 1s linear infinite; animation-delay: .25s; }
@keyframes btn-anim2 { 0% { top: -100%; } 50%, 100% { top: 100%; } }
.btn-neon span:nth-child(3) { bottom: 0; right: -100%; width: 100%; height: 2px; background: linear-gradient(270deg, transparent, var(--accent-neon)); animation: btn-anim3 1s linear infinite; animation-delay: .5s; }
@keyframes btn-anim3 { 0% { right: -100%; } 50%, 100% { right: 100%; } }
.btn-neon span:nth-child(4) { bottom: -100%; left: 0; width: 2px; height: 100%; background: linear-gradient(360deg, transparent, var(--accent-neon)); animation: btn-anim4 1s linear infinite; animation-delay: .75s; }
@keyframes btn-anim4 { 0% { bottom: -100%; } 50%, 100% { bottom: 100%; } }

.fade-in { animation: fadeIn 0.5s ease; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
</style>