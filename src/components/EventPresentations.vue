<template>
  <div class="presentations">
    <h1>Presenters</h1>
    <div class="presenters-container">
      <!-- Hardcoded Person 1 -->
      <div class="presenter-card">
        <img src="@/assets/SigneHForsdahl.png" alt="Signe Helene Forsdahl" class="presenter-image" />
        <p class="presenter-name">Signe Helene Forsdahl</p>
        <p class="presenter-name">Radiolog, UNN</p>

      </div>
      
      <!-- Placeholder Presenters -->
      <div class="presenter-card">
        <img src="" alt="Who" class="presenter-image" />
        <p class="presenter-name">Who</p>
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
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  margin-bottom: 10px;
}

.presenter-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #55ad9b;
}
</style>