<template>
  <div class="page-wrapper">
    <!-- Componente de cambio de tema -->
    <div class="theme-toggle-container">
      <ColorModeButton />
    </div>

    <div class="card">
      <!-- Componente de Encabezado -->
      <ProfileHeader />

      <div class="container">
        <h3>Información Personal</h3>
        <p><strong>Nivel de Inglés:</strong> Intermedio</p>
        
        <!-- Componente de Habilidades (puedes crear uno más si gustas) -->
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

<style>
/* Importamos el CSS global */
@import url('~/assets/css/main.css');

.page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.theme-toggle-container {
  margin-bottom: 20px;
}

.container {
  padding: 20px;
  color: var(--text-main);
}

.skills span {
  background: #e9ecef;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  margin: 4px;
  display: inline-block;
}

[data-theme="dark"] .skills span {
  background: #3a3b3c;
  color: #e4e6eb;
}
</style>