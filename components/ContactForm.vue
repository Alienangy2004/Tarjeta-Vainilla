//contactForm.vue

<template>
  <div class="form-container">
    <input type="email" placeholder="Tu correo electrónico" class="neon-input" required>
    <textarea placeholder="Tu mensaje..." class="neon-input" required></textarea>
    
    <button type="submit" class="btn-neon">
      <span></span><span></span><span></span><span></span>
      Enviar Mensaje
    </button>
  </div>
</template>

<style scoped>
.form-container { display: flex; flex-direction: column; gap: 15px; margin-top: 20px; padding: 10px; }
.neon-input {
    background: transparent;
    border: 1px solid var(--accent-neon);
    padding: 10px;
    border-radius: 5px;
    color: var(--text-main);
    outline: none;
    font-family: 'Poppins', sans-serif;
}
.neon-input:focus { box-shadow: 0 0 10px var(--accent-neon); }
textarea { height: 100px; resize: none; }

/* REPETICIÓN DEL ESTILO NEÓN PARA EL BOTÓN ENVIAR */
.btn-neon {
    position: relative;
    padding: 10px 20px;
    color: var(--accent-neon);
    overflow: hidden;
    transition: .5s;
    background: transparent;
    border: none;
    cursor: pointer;
    letter-spacing: 2px;
    text-transform: uppercase;
}
.btn-neon:hover { background: var(--accent-neon); color: #fff; box-shadow: 0 0 25px var(--accent-neon); }
.btn-neon span { position: absolute; display: block; }
.btn-neon span:nth-child(1) { top: 0; left: -100%; width: 100%; height: 2px; background: linear-gradient(90deg, transparent, var(--accent-neon)); animation: btn-anim1 1s linear infinite; }
@keyframes btn-anim1 { 0% { left: -100%; } 50%, 100% { left: 100%; } }
/* ... (Se deben incluir los mismos keyframes que en SkillsContainer) ... */
</style>>