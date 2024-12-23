<template>
  <div id="app">
    <nav>
      <div class="navbar">
        <div class="container nav-container">
          <input class="checkbox" type="checkbox" id="nav-toggle" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <div class="logo">
            <h1>RTG i Nord</h1>
          </div>
          <div class="menu-items">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/presentations">Presentations</router-link></li>
            <li><router-link to="/maps">Maps</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </div>
        </div>
      </div>
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
/* Colors */
:root {
  --light-green: #d8efd3;
  --medium-green: #95d2b3;
  --dark-green: #55ad9b;
  --background: #f1f8e8;
}

/* Reset and General Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  background-color: var(--background);
}

/* Navbar */
.navbar {
  width: 100%;
  background-color: var(--dark-green);
  color: white;
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  max-width: 1300px;
  min-height: 50px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Logo */
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-align: center;
  margin: 0 auto;
  left: 60%;
  
  
}

/* Hamburger Menu */
.nav-container .checkbox {
  position: absolute;
  height: 32px;
  width: 32px;
  top: 15px;
  left: 10px;
  opacity: 0;
  z-index: 2;
  cursor: pointer;
}

.nav-container .hamburger-lines {
  position: absolute;
  top: 15px;
  left: 10px;
  width: 30px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
}

.nav-container .hamburger-lines .line {
  width: 100%;
  height: 4px;
  background-color: white;
  border-radius: 10px;
}

.nav-container .hamburger-lines .line1 {
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
}

.nav-container .hamburger-lines .line2 {
  transition: transform 0.2s ease-in-out;
}

.nav-container .hamburger-lines .line3 {
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
}

/* Menu Items */
.navbar .menu-items {
  position: fixed;
  top: 0;
  left: 0;
  width: 25%; /* One-third of the screen */
  height: 100%;
  background-color: var(--medium-green);
  transform: translateX(-100%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 60px 20px;
  transition: transform 0.5s ease-in-out;
}

.navbar .menu-items li {
  list-style: none;
  margin: 20px 0;
}

.navbar .menu-items a {
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  color: white;
}

.navbar .menu-items a:hover {
  text-decoration: underline;
}

/* Checkbox Toggle */
.nav-container input[type="checkbox"]:checked ~ .menu-items {
  transform: translateX(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
  transform: rotate(45deg);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
  transform: scaleY(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
  transform: rotate(-45deg);
}
</style>