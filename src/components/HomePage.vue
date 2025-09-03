<template>
    <div class="home">
      <img src="@/assets/PenguinCT.png" alt="Penguin Radiologist with CT Machine" class="homepage-image" />
      
      <div class="home-content">
        <h1>
          <span class="line-one">Velkommen til </span>
          <span class="line-two">Røntgen i Nord</span>
        </h1>
        
        <div class="event-details">
          <!-- Dato - fremdeles en viktig overskrift -->
          <h2>Tromsø 23.-24. oktober 2025</h2>
          
          <!-- Lokasjon og beskrivelse, nå som paragrafer for bedre struktur -->
          <p class="location-info">
            Vi møtes på Linken møtesenter (Sykehusvegen 23), Auditorium: "Jiehkkevárri"
          </p>
          <p class="description">
            Et møte for å styrke fag og samarbeid mellom røntgenavdelingene i Nord Norge
          </p>
        </div>
      </div>
    </div>
</template>
  
<style>
  /* Generell stil for hjem-siden */
  .home {
    text-align: center;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  .homepage-image {
    max-width: 50%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }
  
  /* Container for tekst for å kontrollere bredde */
  .home-content {
    max-width: 750px; /* Litt bredere for å passe den lange setningen */
    width: 100%;
  }
  
  /* Hovedtittel */
  .home-content h1 {
    font-size: 2.5rem;
    color: var(--navy, #124170);
    line-height: 1.2;
    margin-bottom: 10px;
  }
  
  /* Gruppe for alle detaljer under hovedtittelen */
  .event-details {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 2px solid var(--border, rgba(18,65,112,0.12));
  }
  
  /* Dato */
  .event-details h2 {
    font-size: 1.5rem;
    color: var(--teal, #26667F);
    font-weight: 600;
    margin: 0;
  }
  
  /* Lokasjons-info (NY) */
  .event-details .location-info {
    font-size: 1.1rem;
    color: var(--navy, #124170);
    font-weight: 500; /* Halvfet for å gjøre den viktig */
    line-height: 1.5;
    margin: 12px 0; /* Gir luft over og under */
  }

  /* Beskrivelse */
  .event-details .description {
    font-size: 1.1rem;
    color: var(--ink, #0f1b2a);
    opacity: 0.9;
    line-height: 1.6;
    margin: 0;
  }
  
  /* --- RESPONSIVITET --- */
  @media (max-width: 900px) {
    .homepage-image {
      max-width: 90%;
    }
    .home-content h1 {
      font-size: 2rem;
    }
    .event-details h2 {
      font-size: 1.3rem;
    }
    .event-details .location-info,
    .event-details .description {
      font-size: 1rem;
    }
  }
  
  /* Regel for tekstbrekk på de minste skjermene */
  @media (max-width: 480px) {
    .home-content h1 .line-two {
      display: block;
    }
  }
</style>