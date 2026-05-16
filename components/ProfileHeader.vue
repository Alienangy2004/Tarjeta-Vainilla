<template>
  <header class="header-profile">
    <div class="profile-img"></div>
    <div class="text-info">
      <h1>Martinez Sanchez Angel Armando</h1>
      <p class="subtitle">Ingeniero de Software / Desarrollador</p>
    </div>
  </header>
</template>

<style scoped>
.header-profile {
  background: linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%);
  color: white;
  padding: 40px 20px;
  text-align: center;
}
.profile-img {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin: 0 auto 15px;
  border: 4px solid rgba(255, 255, 255, 0.4);
  background-image: url('/tu_foto.jpeg');
  background-size: cover;
  background-position: center;
}
h1 { font-size: 1.4rem; margin: 0; font-weight: 600; }
.subtitle { opacity: 0.9; font-size: 0.9rem; margin-top: 5px; }
</style>