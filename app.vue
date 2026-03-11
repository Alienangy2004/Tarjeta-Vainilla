<script setup>
// No necesitamos importar los componentes manualmente, 
// Nuxt los detecta automáticamente en la carpeta /components
</script>

<template>
  <div class="page-wrapper">
    <div class="theme-toggle-wrapper">
      <ColorModeButton />
    </div>

    <main class="card">
      <ProfileHeader />

      <SkillsContainer />
    </main>
  </div>
</template>

<style>
/* Importación del CSS global con las variables de color y animaciones */
@import url('~/assets/css/main.css');

.page-wrapper {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
}

.theme-toggle-wrapper {
  margin-bottom: 30px;
}

/* Estilos base de la tarjeta que no dependen de componentes pequeños */
.card {
  width: 100%;
  max-width: 380px;
  border-radius: 15px;
  box-shadow: 0 10px 30px var(--shadow);
  overflow: hidden;
  text-align: center;
  background-color: var(--bg-card-bottom);
  transition: transform 0.3s ease, background-color 0.5s ease;
}

.card:hover {
  transform: translateY(-5px);
}

/* Transición suave para el cambio de colores en toda la página */
* {
  transition: background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease;
}
</style>