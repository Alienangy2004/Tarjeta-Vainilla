//components/SkillsContainer.vue

<template>
  <div class="skills-section">
    <h3>Mis Habilidades</h3>
    <div class="skills-list">
      <span class="skill-badge">Python</span>
      <span class="skill-badge">Flutter</span>
      <span class="skill-badge">Node.js</span>
      <span class="skill-badge">MySQL</span>
    </div>
    
    <!-- Botón de contacto con estilo neón -->
    <a href="mailto:tuemail@ejemplo.com" class="btn-neon">
      <span></span><span></span><span></span><span></span>
      Contactar
    </a>
  </div>
</template>

<style scoped>
.skills-section {
  padding: 20px;
  color: var(--text-main);
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
}

.skill-badge {
  background: #e9ecef;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  transition: all 0.3s ease;
}

/* Adaptación al modo oscuro para las etiquetas */
[data-theme="dark"] .skill-badge {
  background: #3a3b3c;
  color: #e4e6eb;
}

.btn-neon {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: var(--accent-neon);
  text-decoration: none;
  overflow: hidden;
  transition: .5s;
  letter-spacing: 2px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.btn-neon:hover {
  background: var(--accent-neon);
  color: #fff;
  box-shadow: 0 0 25px var(--accent-neon);
}

/* Animaciones de las líneas neón */
.btn-neon span { position: absolute; display: block; }
.btn-neon span:nth-child(1) { top: 0; left: -100%; width: 100%; height: 2px; background: linear-gradient(90deg, transparent, var(--accent-neon)); animation: btn-anim1 1s linear infinite; }
@keyframes btn-anim1 { 0% { left: -100%; } 50%, 100% { left: 100%; } }
.btn-neon span:nth-child(2) { top: -100%; right: 0; width: 2px; height: 100%; background: linear-gradient(180deg, transparent, var(--accent-neon)); animation: btn-anim2 1s linear infinite; animation-delay: .25s; }
@keyframes btn-anim2 { 0% { top: -100%; } 50%, 100% { top: 100%; } }
.btn-neon span:nth-child(3) { bottom: 0; right: -100%; width: 100%; height: 2px; background: linear-gradient(270deg, transparent, var(--accent-neon)); animation: btn-anim3 1s linear infinite; animation-delay: .5s; }
@keyframes btn-anim3 { 0% { right: -100%; } 50%, 100% { right: 100%; } }
.btn-neon span:nth-child(4) { bottom: -100%; left: 0; width: 2px; height: 100%; background: linear-gradient(360deg, transparent, var(--accent-neon)); animation: btn-anim4 1s linear infinite; animation-delay: .75s; }
@keyframes btn-anim4 { 0% { bottom: -100%; } 50%, 100% { bottom: 100%; } }
</style>