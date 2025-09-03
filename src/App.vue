<template>
  <div id="app" :class="{ 'menu-open': menuOpen }">
    <header class="site-header">
      <div class="container header-inner">
        <router-link to="/" class="brand" @click="closeMenu" aria-label="Go to home">
          <span class="brand-mark">RTG</span>
          <span class="brand-rest"> i Nord</span>
        </router-link>

        <nav class="primary-nav" aria-label="Primary">
          <ul class="nav-list">
            <li><router-link class="nav-link" to="/">Hjem</router-link></li>
            <li><router-link class="nav-link" to="/maps">Kart</router-link></li>
            <li><router-link class="nav-link" to="/program">Program</router-link></li>
          </ul>
        </nav>

        <!-- Mobile Toggle -->
        <button
          class="nav-toggle"
          :aria-expanded="menuOpen.toString()"
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          @click="toggleMenu"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </header>

    <transition name="fade">
      <div v-if="menuOpen" class="scrim" @click="closeMenu"></div>
    </transition>

    <transition name="slide">
      <aside id="mobile-menu" class="mobile-drawer" v-show="menuOpen" aria-label="Mobile menu">
        <div class="drawer-header">
          <span class="brand-inline">RTG i Nord</span>
          <button class="close" @click="closeMenu" aria-label="Close menu">×</button>
        </div>
        <ul class="drawer-links">
          <li><router-link class="drawer-link" to="/" @click="closeMenu">Hjem</router-link></li>
          <li><router-link class="drawer-link" to="/maps" @click="closeMenu">Kart</router-link></li>
          <li><router-link class="drawer-link" to="/program" @click="closeMenu">Program</router-link></li>
        </ul>
      </aside>
    </transition>

    <main class="page">
      <router-view />
    </main>


    <footer class="site-footer">
      <div class="container footer-inner">
        <p>© {{ year }} RTG i Nord</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const menuOpen = ref(false);
const toggleMenu = () => (menuOpen.value = !menuOpen.value);
const closeMenu = () => (menuOpen.value = false);
const year = new Date().getFullYear();

// Close on ESC
const onKey = (e) => {
  if (e.key === 'Escape') closeMenu();
};
onMounted(() => window.addEventListener('keydown', onKey));
onUnmounted(() => window.removeEventListener('keydown', onKey));
</script>

<style>
:root{
  --mint:#DDF4E7;
  --green:#67C090;
  --teal:#26667F;
  --navy:#124170;
  --ink:#0f1b2a;

  --bg:#f7fbf9;
  --card:#ffffff;
  --border: rgba(18,65,112,0.12);

  --radius:16px;
  --shadow:0 4px 24px rgba(18,65,112,.08);

  
  --header-h: 65px;
}


*{box-sizing:border-box}
html,body,#app{height:100%}
body{ margin:0; color:var(--navy);
  background:
    radial-gradient(1200px 800px at 80% -20%, var(--mint), transparent 70%),
    radial-gradient(1000px 600px at -10% 0%, rgba(103,192,144,.18), transparent 60%),
    var(--bg);
  font:16px/1.5 system-ui,-apple-system,Segoe UI,Roboto,Inter,"Helvetica Neue",Arial,"Noto Sans";
  -webkit-font-smoothing:antialiased; text-rendering:optimizeLegibility;
}


#app{
  min-height:100dvh;            /* full viewport height incl. mobile UI */
  display:flex;
  flex-direction:column;        /* footer can sit at the bottom */
}
.page{
  flex:1 0 auto;                /* take remaining height */
  display:flex;
  flex-direction:column;
  padding-top: var(--header-h);
  padding-bottom: 0;
}


.page > :first-child{
  margin-top: 8px !important;  
}
@media (min-width: 1024px){
  .page { padding-top: calc(var(--header-h) + 2px); }
  .page > :first-child { margin-top: 6px !important; }
}


.site-header{
  position:sticky; top:0; z-index:50;
  backdrop-filter:saturate(160%) blur(10px);
  background:rgba(255,255,255,.75);
  border-bottom:1px solid var(--border);
}
.header-inner{ height:var(--header-h); display:flex; align-items:center; gap:20px; }

.container{ width:100%; max-width:1100px; padding:0 20px; margin:0 auto; }

.brand{ display:inline-flex; align-items:center; gap:10px; text-decoration:none; color:var(--navy); font-weight:700; letter-spacing:.2px; }
.brand-mark{ display:inline-grid; place-items:center; width:36px;height:36px; border-radius:10px; background:linear-gradient(135deg,var(--green),var(--teal)); color:#fff; font-size:.95rem; box-shadow:var(--shadow); }
.brand-rest{ font-size:1.05rem; }

.primary-nav{ margin-left:auto; }
.nav-list{ list-style:none; display:flex; gap:18px; }
.nav-link{ position:relative; display:inline-block; padding:8px 12px; text-decoration:none; color:var(--navy); border-radius:10px; transition:background .2s,color .2s; }
.nav-link:hover{ background:var(--mint); }
.router-link-active.nav-link{ color:var(--teal); background:rgba(103,192,144,.12); }

.nav-toggle{ display:none; width:44px;height:44px; border:1px solid var(--border); border-radius:12px; background:var(--card); box-shadow:var(--shadow); margin-left:auto; }
.nav-toggle .bar{ display:block; width:22px;height:2px; margin:5px auto; background:var(--navy); transition:transform .25s,opacity .2s; }
.menu-open .nav-toggle .bar:nth-child(1){ transform:translateY(7px) rotate(45deg); }
.menu-open .nav-toggle .bar:nth-child(2){ opacity:0; }
.menu-open .nav-toggle .bar:nth-child(3){ transform:translateY(-7px) rotate(-45deg); }

.scrim{ position:fixed; inset:0; background:rgba(18,65,112,.35); backdrop-filter:blur(2px); z-index:40; }
.mobile-drawer{ position:fixed; inset:0 0 0 auto; width:84%; max-width:360px; height:100%; background:var(--card); border-left:1px solid var(--border); box-shadow:var(--shadow); display:flex; flex-direction:column; z-index:45; }
.drawer-header{ display:flex; align-items:center; justify-content:space-between; height:var(--header-h); padding:0 20px; border-bottom:1px solid var(--border); }
.brand-inline{ font-weight:700; color:var(--navy); }
.close{ background:transparent; border:1px solid var(--border); width:40px;height:40px; border-radius:12px; font-size:20px; line-height:1; color:var(--navy); }
.drawer-links{ list-style:none; padding:12px 10px; }
.drawer-link{ display:block; padding:14px 12px; margin:6px 0; border-radius:12px; text-decoration:none; color:var(--navy); }
.drawer-link:hover{ background:var(--mint); }
.router-link-active.drawer-link{ color:var(--teal); background:rgba(103,192,144,.12); }

@media (max-width:900px){
  .primary-nav{ display:none; }
  .nav-toggle{ display:inline-block; }
}


.site-footer{
  margin-top:auto;             
  border-top:none;
  background: linear-gradient(180deg, color-mix(in srgb, var(--navy) 90%, white), var(--navy));
  color:#fff;
}
.footer-inner{
  min-height:56px;
  padding: 12px 20px calc(12px + env(safe-area-inset-bottom));
  display:flex; align-items:center; justify-content:center;
  text-align:center;
}

/* ===== Animations ===== */
.fade-enter-active,.fade-leave-active{ transition:opacity .2s ease; }
.fade-enter-from,.fade-leave-to{ opacity:0; }
.slide-enter-active,.slide-leave-active{ transition:transform .25s ease; }
.slide-enter-from,.slide-leave-to{ transform:translateX(100%); }


:focus-visible{ outline:3px solid color-mix(in srgb, var(--teal) 70%, white); outline-offset:2px; border-radius:12px; }
::selection{ background: color-mix(in srgb, var(--green) 28%, white); }


@media (prefers-reduced-motion: reduce){ *{ transition:none !important; animation:none !important; } }
</style>