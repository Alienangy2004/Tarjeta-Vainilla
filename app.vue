<template>
  <div class="main-container">
    
    <div class="top-bar">
      <ColorModeButton />
    </div>

    <div class="card card-wrapper">
      <div class="card-content">
        <ProfileHeader />
        
        <SkillsContainer />
        
        <div class="section-3d-toggle">
          <button @click="mostrar3D = !mostrar3D" class="btn-toggle">
            {{ mostrar3D ? 'Cerrar Vista 3D' : 'Ver Armadillo APC en 3D' }}
          </button>

          <transition name="fade">
            <div v-if="mostrar3D" class="visor-container">
              <ClientOnly>
                <template #fallback>
                  <div class="loading">Iniciando motor 3D...</div>
                </template>
                <LazyArmadilo />
              </ClientOnly>
            </div>
          </transition>
        </div>

        <div class="social-section">
          <SocialLinks />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const mostrar3D = ref(false)
</script>

<style scoped>
/* Contenedor principal: Usamos la transición de fondo de tu body */
.main-container {
  min-height: 100vh;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.top-bar {
  width: 100%;
  max-width: 350px; /* Alineado al ancho de tu .card */
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

/* Extendemos tu clase .card para asegurar el centrado */
.card-wrapper {
  margin: 0 auto;
  transition: background-color 0.8s ease, box-shadow 0.8s ease;
}

/* Sección 3D: Usamos variables para que cambie el color de fondo */
.section-3d-toggle {
  padding: 20px;
  text-align: center;
  background-color: var(--shadow); /* Usamos el color de sombra suave como fondo secundario */
  border-top: 1px solid var(--shadow);
}

.btn-toggle {
  background-color: var(--bg-card-top); /* Usamos el azul de tu cabecera */
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-toggle:hover {
  filter: brightness(1.2);
  transform: translateY(-2px);
}

.visor-container {
  margin-top: 15px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--shadow);
  background-color: var(--bg-card-bottom);
}

.social-section {
  padding: 10px 0 20px 0;
  color: var(--text-main);
}

/* Transiciones */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.loading {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-main);
}
</style>