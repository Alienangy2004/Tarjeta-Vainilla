<template>
  <main class="main-container">
    <div class="perfil-tarjeta">
      <div class="top-actions">
        <ColorModeButton />
      </div>

      <ProfileHeader />

      <div class="card-content">
        <SkillsContainer />

        <div class="divider"></div>

        <ClientOnly>
          <Armadilo />
        </ClientOnly>

        <div class="divider"></div>

        <SocialLinks />
        <ContactForm />
      </div>
    </div>
  </main>
</template>

<style>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px 20px;
}

.perfil-tarjeta {
  width: 100%;
  max-width: 550px;
  animation: fadeIn 0.6s ease-out;
}

.top-actions {
  display: flex;
  justify-content: flex-end;
  padding: 15px 20px 0;
}

.card-content {
  padding: 20px 35px 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.divider {
  height: 1px;
  background: rgba(0, 0, 0, 0.05);
  margin: 10px 0;
}

[data-theme="dark"] .divider {
  background: rgba(255, 255, 255, 0.1);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>