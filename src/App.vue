<template>
  <div id="app">
    <nav class="navbar">
      <div class="menu-toggle" @click="toggleMenu">
        ☰
      </div>
      <ul :class="{ 'menu-active': isMenuOpen }">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/presentations">Presentations</router-link></li>
        <li><router-link to="/maps">Maps</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style>
/* General Styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #F1F8E8;
  color: #333;
}

/* Navbar Styles */
.navbar {
  background-color: #55AD9B;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: none;
  flex-direction: column;
  background-color: #95D2B3;
}

.navbar ul.menu-active {
  display: flex;
}

.navbar li {
  padding: 10px;
  text-align: center;
}

.navbar li a {
  color: #fff;
  text-decoration: none;
}

.menu-toggle {
  font-size: 1.5em;
  cursor: pointer;
}
</style>