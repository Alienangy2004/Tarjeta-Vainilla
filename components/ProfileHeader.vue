//components/ProfileHeader.vue

<template>
  <header class="header-profile">
    <div class="profile-img"></div>
    <h1>Martinez Sanchez Angel Armando</h1>
    <p class="subtitle">Ingeniero de Software / Desarrollador</p>
  </header>
</template>

<style scoped>
.header-profile {
    background-color: var(--bg-card-top);
    color: white;
    padding: 30px 20px;
}
.profile-img {
    width: 90px;
    height: 90px;
    background-color: white;
    border-radius: 50%;
    margin: 0 auto 15px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    background-image: url('/tu_foto.jpeg');
    background-size: cover;
    background-position: center;
}
</style>