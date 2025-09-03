<template>
    <div class="home">
      <img src="@/assets/PenguinCT.png" alt="Penguin Radiologist with CT Machine" class="homepage-image" />
      <h1>Velkommen til Røntgen i Nord</h1>
      <h2>Tromsø 23.-24. oktober 2025</h2>
      <p>Et møte for å styrke fag og samarbeid mellom røntgenavdelingene i Nord Norge</p>
    </div>
  </template>
  
  <style>
  .home {
    text-align: center;
    margin: 20px;
    color: #333;
    margin-top: 5%;
  }
  .homepage-image {
  max-width: 50%;
  max-height: 50%;
  height: auto;
  margin-bottom: 20px;
  margin-top: 1%;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}


@media (max-width: 900px) {
  .homepage-image {
    max-width: 100%; /* Allows the image to fill its container */
  }
}
  </style>