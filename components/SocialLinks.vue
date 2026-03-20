//SocialLinks.vue

<script setup>
/**
 * Lógica para la notificación de envío de mensaje.
 */
const enviarMensajeConConfirmacion = () => {
  alert('Prometo recibir su mensaje y contestarle.');
};
</script>

<template>
  <div class="social-links-container">
    
    <div class="social-icons">
      <a href="https://github.com/Alienangy2004" target="_blank" rel="noopener noreferrer" class="social-icon-link">
        <i class="fab fa-github"></i>
        <span>GitHub</span>
      </a>

      <a href="https://outlook.live.com/" target="_blank" rel="noopener noreferrer" class="social-icon-link">
        <i class="fas fa-envelope"></i>
        <span>Outlook</span>
      </a>

      <a href="https://www.facebook.com/share/1Xm4uDDAkf/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" class="social-icon-link">
        <i class="fab fa-facebook"></i>
        <span>Facebook</span>
      </a>

      <a href="https://www.instagram.com/alienangy2004?igsh=MWpzODA2YXV5d3FmZQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" class="social-icon-link">
        <i class="fab fa-instagram"></i>
        <span>Instagram</span>
      </a>
    </div>

    <div class="form-submit-section">
      <button @click="enviarMensajeConConfirmacion" class="btn-block-neon">
        ENVIAR MENSAJE
      </button>
    </div>

  </div>
</template>

<style scoped>
.social-links-container {
  text-align: center;
  margin-top: 25px;
  padding: 0 15px;
}

/* Contenedor de iconos */
.social-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.social-icon-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #289bb8;
  transition: transform 0.2s ease, color 0.2s ease;
  font-family: 'Segoe UI', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
}

.social-icon-link i {
  font-size: 2.2rem;
  margin-bottom: 8px;
}

.social-icon-link:hover {
  transform: translateY(-5px);
  color: #33a1fd;
}

/* BOTÓN BLOQUE NEÓN (El de la cuarta imagen) */
.btn-block-neon {
  width: 100%;
  max-width: 300px;
  padding: 15px;
  background-color: #289bb8; /* Color sólido de fondo */
  color: #ffffff;
  border: none;
  font-family: 'Segoe UI', sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(40, 155, 184, 0.5); /* Brillo neón */
  text-transform: uppercase;
}

.btn-block-neon:hover {
  background-color: #33a1fd;
  box-shadow: 0 0 25px rgba(51, 161, 253, 0.8);
  transform: scale(1.02);
}

.btn-block-neon:active {
  transform: scale(0.98);
}
</style>