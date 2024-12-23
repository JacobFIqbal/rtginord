<template>
  <div class="maps">
    <h1>Helpfull maps</h1>
    <div class="maps-container">
      <!-- Map 1 -->
      <div class="map-card">
        <img src="@/assets/kart1.png" alt="Map from Airport to UNN" class="map-image" />
        <p class="map-caption">Route from Tromsø Airport to UNN (University Hospital of Northern Norway).</p>
      </div>

      <!-- Map 2 -->
      <div class="map-card">
        <img src="@/assets/kart2.png" alt="Map from Radisson Blu Hotel to UNN" class="map-image" />
        <p class="map-caption">Route from Radisson Blu Hotel in the city center to UNN <br>(University Hospital of Northern Norway).</p>
      </div>
    </div>

    <!-- Bus Schedule Information -->
    <div class="bus-info">
      <h2>Relevant Bus Schedules</h2>
      <p>(Coming soon)</p>
    </div>
  </div>
</template>

<style>
.maps {
  margin-top: 5%;
  text-align: center;
  padding: 20px;
  color: #333;
}

.maps-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.map-card {
  background-color: #f1f8e8;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
}

.map-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
}

.map-caption {
  font-size: 1rem;
  font-weight: 500;
  color: #55ad9b;
}

.bus-info {
  background-color: #d8efd3;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.bus-info h2 {
  color: #55ad9b;
  margin-bottom: 10px;
}

.bus-info p {
  font-size: 1rem;
  font-style: italic;
  color: #333;
}
</style>