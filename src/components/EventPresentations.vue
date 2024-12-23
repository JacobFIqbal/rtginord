<template>
  <div class="presentations">
    <h1>Presenters</h1>
    <div class="presenters-container">
      <!-- Hardcoded Person 1 -->
      <div class="presenter-card">
        <img src="@/assets/SigneHForsdahl.png" alt="Signe Helene Forsdahl" class="presenter-image" />
        <p class="presenter-name">Signe Helene Forsdahl</p>
        <p class="presenter-name">Radiolog, UNN</p>
        <a href="https://www.researchgate.net/profile/Signe-Forsdahl" target="_blank" class="researchgate-link">
          ResearchGate Profile
        </a>

      </div>
      
      <!-- Placeholder Presenters -->
      <div class="presenter-card">
        <img src="@/assets/AmjidIqbal.jpg" alt="Amjid Iqbal" class="presenter-image" />
        <p class="presenter-name">Amjid Iqbal</p>
        <p class="presenter-name">Cardiologist, Rikshospitalet</p>
        <a href="https://www.researchgate.net/profile/Amjid-Iqbal" target="_blank" class="researchgate-link">
          ResearchGate Profile
        </a>
      </div>
      <div class="presenter-card">
        <img src="" alt="Who 2" class="presenter-image" />
        <p class="presenter-name">Who 2</p>
      </div>
      <div class="presenter-card">
        <img src="" alt="Who 3" class="presenter-image" />
        <p class="presenter-name">Who 3</p>
      </div>
    </div>
  </div>
</template>

<style>
.presentations {
  text-align: center;
  padding: 20px;
  color: #333;
}

.presenters-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}

.presenter-card {
  background-color: #f1f8e8;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  text-align: center;
}

.presenter-image {
  /*max-width: 90%;*/
  max-width: 200px;
  max-height: 200px;
  height: auto;
  border-radius: 50%;
  margin-bottom: 10px;
}

.presenter-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #55ad9b;
}
.researchgate-link {
  font-size: 0.9rem;
  color: #55ad9b;
  text-decoration: none;
  font-weight: bold;
  margin-top: 10px;
  display: inline-block;
}

.researchgate-link:hover {
  text-decoration: underline;
}
</style>