<script setup>
import { ref } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
}
</script>

<template>
  <div class="page-wrapper">
    <div class="theme-toggle">
      <button @click="toggleTheme" class="btn-neon">
        <span></span><span></span><span></span><span></span>
        {{ isDark ? '☀️ Modo Claro' : '🌙 Modo Noche' }}
      </button>
    </div>

    <div class="card">
      <header>
        <div class="profile-img"></div>
        <h1>Martinez Sanchez Angel Armando</h1>
        <p class="subtitle">Ingeniero de Software</p>
      </header>

      <div class="container">
        <h3>Mis Habilidades</h3>
        <div class="skills">
          <span>Python</span>
          <span>Flutter</span>
          <span>Node.js</span>
          <span>MySQL</span>
        </div>
        
        <a href="mailto:tuemail@ejemplo.com" class="btn-neon">
          <span></span><span></span><span></span><span></span>
          Contactar
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.theme-toggle {
  position: absolute;
  top: 20px;
  right: 20px;
}

/* Forzar que la tarjeta no use flex interno para el layout de los hijos */
.card {
  display: block;
}
</style>