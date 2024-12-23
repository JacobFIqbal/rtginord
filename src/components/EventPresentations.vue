<template>
  <div class="presentations">
    <h1>Presenters</h1>
    <div class="presenters-container">
      <div class="presenter-card" v-for="person in presenters" :key="person.id">
        <img :src="person.image" :alt="person.name" class="presenter-image" />
        <p class="presenter-name">{{ person.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      presenters: [
        {
          id: 1,
          name: "Signe Helene Forsdahl",
          image: "@/assets/SigneHForsdahl.jpeg", // Add this image to the assets folder
        },
        {
          id: 2,
          name: "who",
          image: "@/assets/erik.png", // Add this image to the assets folder
        },
        {
          id: 3,
          name: "who 2",
          image: "@/assets/lena.png", // Add this image to the assets folder
        },
        {
          id: 4,
          name: "who 3",
          image: "@/assets/tom.png", // Add this image to the assets folder
        },
      ],
    };
  },
};
</script>

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