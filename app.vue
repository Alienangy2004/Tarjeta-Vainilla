<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

// Función para cambiar entre modo claro y oscuro
const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
}
</script>

<template>
  <div>
    <button @click="toggleTheme" class="theme-btn">
      {{ isDark ? '☀️ Modo Claro' : '🌙 Modo Noche' }}
    </button>

    <div class="card">
      <header>
        <div class="profile-img"></div>
        <h1>Martinez Sanchez Angel Armando</h1>
        <p>Ingeniero de Software</p>
      </header>

      <div class="container">
        <h3>Mis Habilidades</h3>
        <div class="skills">
          <span>Python</span>
          <span>Flutter</span>
          <span>Node.js</span>
          <span>MySQL</span>
        </div>
        
        <a href="#" class="btn">Contactar</a>
      </div>
    </div>
  </div>
</template>