<template>
  <div class="maps-page">
    <!-- Kort for bussruter -->
    <div class="info-card">
      <h2>Relevante bussruter</h2>
      <p class="bus-caption">Fra UNN er det ca. 5 minutter gange til Linken møtesenter.</p>
      
      <div class="bus-routes-container">
        <!-- Bussrute 1 -->
        <div class="bus-route-card">
          <p class="bus-caption">Bussrute eksempel fra Tromsø Lufthavn til UNN.</p>
        
          <img src="@/assets/buss_flyplass_til_unn.png" alt="Bussrute fra flyplass til UNN" class="bus-image" />
        </div>
        <!-- Bussrute 2 -->
        <div class="bus-route-card">
          <p class="bus-caption">Bussrute eksempel fra Tromsø Sentrum til UNN.</p>
          <img src="@/assets/buss_sentrum_til_unn.png" alt="Bussrute fra sentrum til UNN" class="bus-image" />
        </div>
      </div>
    </div>

    <!-- Kort for Svipper-appen -->
    <div class="info-card app-promo">
      <img src="@/assets/Svipper.png" alt="Svipper App Logo" class="app-logo" />
      <div class="app-text">
        <h2>Planlegg reisen lokalt</h2>
        <p>
          For å enkelt finne frem og planlegge reiser med buss i Tromsø, anbefaler vi å laste ned den lokale reise-appen "Svipper".
          Den gir deg sanntidsinformasjon og de beste ruteforslagene for å komme deg dit du skal.
        </p>
      </div>
    </div>

  </div>
</template>

<style>
/* Generell side-styling */
.maps-page {
  color: var(--ink);
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.maps-page h1 {
  text-align: center;
  color: var(--navy);
  margin-bottom: 0;
}

/* Felles stil for informasjonskort, bruker variabler fra app.vue */
.info-card {
  background-color: var(--card); /* Hvit bakgrunn fra tema */
  border-radius: var(--radius); /* Avrundede kanter fra tema */
  box-shadow: var(--shadow); /* Skygge fra tema */
  border: 1px solid var(--border); /* Ramme fra tema */
  padding: 25px 30px;
  text-align: center;
}

.info-card h2 {
  color: var(--teal); /* Teal-farge fra tema */
  margin-top: 0;
  margin-bottom: 25px;
}

/* Bussrute-seksjon */
.bus-routes-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.bus-route-card {
  flex: 1;
  min-width: 300px;
  /* Liten ekstra pynt for å skille kortene */
  padding: 10px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--bg); /* Lys bakgrunnsfarge fra tema */
}

.bus-caption {
  font-size: 1rem;
  font-weight: 500;
  color: var(--navy); /* Marineblå tekstfarge fra tema */
  margin-bottom: 10px;
}

.bus-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Beholder denne for dybde */
}

/* App promo-seksjon */
.app-promo {
  display: flex;
  align-items: center;
  text-align: left;
  gap: 25px;
  margin-top: 10px; /* Redusert fra 40px for bedre flyt */
}

.app-logo {
  max-width: 100px;
  height: auto;
  border-radius: 20px;
  box-shadow: var(--shadow); /* Bruker skygge fra tema */
}

.app-text h2 {
  margin: 0 0 8px 0;
  color: var(--navy); /* Marineblå tittel */
}

.app-text p {
  margin: 0;
  line-height: 1.6;
  opacity: 0.9; /* Gjør teksten litt mykere for øyet */
}

/* --- Media Query for mobil (uendret funksjonalitet) --- */
@media (max-width: 800px) {
  .bus-routes-container {
    flex-direction: column;
    align-items: center;
  }
  .app-promo {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
}
</style>