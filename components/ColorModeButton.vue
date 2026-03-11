<script setup>
const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  // Aplicamos el atributo al elemento raíz para que el CSS reaccione
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
}
</script>

<template>
  <button @click="toggleTheme" class="btn-neon">
    <span></span><span></span><span></span><span></span>
    {{ isDark ? '☀️ Modo Claro' : '🌙 Modo Noche' }}
  </button>
</template>