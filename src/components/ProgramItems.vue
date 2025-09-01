<template>
  <section class="program">
    <div class="container">
      <header class="program-hero" aria-labelledby="program-title">
        <div class="eyebrow">RTG i NORD</div>
        <h1 id="program-title">Program</h1>
        <p class="meta">
          Tromsø — 23.–24. okt 2025&nbsp; •&nbsp; Forskningsparken Linken – UNN Tromsø
        </p>
      </header>

      <nav class="day-switch" aria-label="Dager">
        <button
          v-for="(d, i) in days"
          :key="d.id"
          :class="['pill', { active: i === activeIdx }]"
          @click="activeIdx = i"
          :aria-pressed="(i === activeIdx).toString()"
        >
          {{ d.label }}
        </button>
      </nav>

      <div class="schedule" :aria-labelledby="days[activeIdx].id">
        <h2 class="sr-only" :id="days[activeIdx].id">{{ days[activeIdx].label }}</h2>

        <ol class="items">
          <li v-for="(it, j) in days[activeIdx].items" :key="j" class="item" :data-type="it.type || 'talk'">
            <div class="time">
              <span v-if="it.end">{{ it.start }}–{{ it.end }}</span>
              <span v-else>{{ it.start }}</span>
            </div>

            <article class="card">
              <header class="card-head">
                <h3 class="title">{{ it.title }}</h3>
                <span v-if="it.badge" class="badge">{{ it.badge }}</span>
              </header>

              <p v-if="it.speakers?.length" class="speakers">
                <span v-for="(sp, k) in it.speakers" :key="k">
                  <strong>{{ sp.name }}</strong><span v-if="sp.aff">, {{ sp.aff }}</span><span v-if="k < it.speakers.length - 1"> · </span>
                </span>
              </p>

              <p v-if="it.note" class="note">{{ it.note }}</p>
            </article>
          </li>
        </ol>
      </div>

      
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

/**
 * Source: "Program RTG i Nord Tromsø 2025.docx"
 * Times normalized to HH:MM, en dash used for ranges.
 */
const days = [
  {
    id: 'dag-1',
    label: 'Dag 1 – Torsdag 23.10.25',
    items: [
      { start: '11:00', end: '12:00', title: 'Oppmøte og lunsj', note: 'Linken møtesenter (Sykehusvegen 23)', type: 'meal' },
      { start: '12:00', end: '12:05', title: 'Velkommen', speakers: [{ name: 'Signe Forsdahl', aff: 'Radiolog, leder av RTG i Nord, UNN' }] },
      { start: '12:05', end: '13:00', title: 'Presentasjon av Rtg-avdelingene i Nord-Norge', speakers: [{ name: 'Radiologer fra de ulike sykehusene' }] },
      { start: '13:00', end: '13:45', title: 'Bildediagnostikk ved mistanke om påført hodeskade: Hva? Hvor? Når? Hvem?', speakers: [{ name: 'Stein-Magnus Aukland', aff: 'Barneradiolog, Haukeland sykehus' }] },
      { start: '13:45', end: '14:30', title: 'Sirkulasjonsstans angiografi, utredning', speakers: [{ name: 'Karoline Skogen', aff: 'Nevroradiolog, OUS' }] },
      { start: '14:30', end: '14:45', title: 'Kaffe & frukt', type: 'break', badge: 'Pause' },
      { start: '14:45', end: '15:25', title: 'Røntgenkontrast og nyreinsuffisiens', speakers: [{ name: 'Ludvig Balteskar Rinde', aff: 'Nyremedisin, UNN' }] },
      { start: '15:25', end: '15:45', title: 'MS-utredning – nye diagnostiske kriterier', speakers: [{ name: 'Hanne Thoresen', aff: 'Radiolog, Nordlandssykehuset Bodø' }] },
      { start: '15:50', end: '16:00', title: 'Oppsummering og avslutning', type: 'wrap' },
      { start: '18:00', end: '20:30', title: 'Middag', note: 'Maskinverkstedet, Vervet', type: 'social', badge: 'Sosialt' },
    ],
  },
  {
    id: 'dag-2',
    label: 'Dag 2 – Fredag 24.10.25',
    items: [
      { start: '08:15', end: '08:20', title: 'Velkommen til dag 2' },
      { start: '08:20', end: '08:30', title: 'Presentasjon av Helse Nord Rtg-ressurser', speakers: [{ name: 'Veronica Klingan', aff: 'Seniorrådgiver/Koordinator Radiologi, Helse Nord' }] },
      { start: '08:30', end: '09:00', title: 'MRI Safety', speakers: [{ name: 'Marthe Bergland', aff: 'MR-radiograf, UNN' }] },
      { start: '09:00', end: '09:15', title: 'Akutt abdomen – bildediagnostikk', speakers: [{ name: 'Gunnar Oltmanns', aff: 'Abdomenradiolog, UNN' }] },
      { start: '09:15', end: '09:30', title: 'Leverfunn etter ablasjon', speakers: [{ name: 'Gunnar Oltmanns', aff: 'Abdomenradiolog, UNN' }] },
      { start: '09:35', end: '10:00', title: 'Barneradiologi', speakers: [{ name: 'Karen Rosendahl', aff: 'Barneradiolog, UNN' }] },
      { start: '10:00', end: '10:15', title: 'Kaffe & frukt', type: 'break', badge: 'Pause' },
      { start: '10:15', end: '10:45', title: 'Retningslinjer for trombolyse og trombektomi', speakers: [{ name: 'Jon Andre Totland', aff: 'Nevro- og intervensjonsradiolog, UNN' }] },
      {
        start: '10:45', end: '11:10',
        title: 'Dual Energy CT – lungeemboli og benmarg',
        speakers: [
          { name: 'Tom Vegard Markussen', aff: 'Thoraxradiolog, UNN' },
          { name: 'Gunnar Oltmanns', aff: 'Abdomenradiolog, UNN' },
        ],
      },
      { start: '11:10', end: '11:35', title: 'Lungenoduli – oppfølging', speakers: [{ name: 'Tom Vegard Markussen', aff: 'Thoraxradiolog, UNN' }] },
      { start: '11:35', end: '11:55', title: 'Presentasjon av «Forskning i Nord» – ulike prosjekter', note: 'TBA', badge: 'TBA' },
      { start: '11:55', end: '12:00', title: 'Oppsummering og avslutning', type: 'wrap' },
      { start: '12:00', title: 'Lunsj', type: 'meal' },
      { start: '—', title: 'Vel hjem!', type: 'wrap' },
    ],
  },
];

const activeIdx = ref(0);
</script>

<style scoped>
.program { padding: 28px 0 56px; }
.program-hero { margin-bottom: 14px; }
.program-hero .eyebrow{
  display:inline-block; padding:6px 10px; border-radius:999px;
  background: color-mix(in srgb, var(--green) 18%, white);
  color: var(--teal); font-weight: 600; letter-spacing:.2px;
}
.program-hero h1{ margin:8px 0 4px; font-size:2rem; color:var(--navy); }
.program-hero .meta{ margin:0; color: color-mix(in srgb, var(--navy) 68%, white); }

.day-switch{ display:flex; gap:10px; margin:18px 0 16px; flex-wrap:wrap; }
.pill{
  border:1px solid var(--border); background:var(--card); padding:8px 12px;
  border-radius: 999px; cursor:pointer; box-shadow: var(--shadow); color: var(--navy);
}
.pill:hover{ background: var(--mint); }
.pill.active{ background: rgba(103,192,144,.12); color: var(--teal); border-color: transparent; }

.schedule{}
.items{ list-style:none; padding:0; margin:0; display:grid; gap:12px; }
.item{
  display:grid;
  /* Mobile: let time column grow to fit, so it never tucks under the card */
  grid-template-columns: minmax(10ch, max-content) 1fr;
  gap:14px;
  align-items:start;          /* mobile: top-align to avoid overlap */
  isolation:isolate;          /* keep time above card shadow if close */
}
@media (min-width: 720px){
  .item{
    grid-template-columns: 12ch 1fr;
    align-items:center;       /* center both cells vertically */
  }
  .time{
    align-items:center;       /* center the timestamp text */
    align-self:center;        /* center within its grid area */
  }
}
.time{
  display:flex;
  align-items:flex-start;     /* mobile: align to top edge of card */
  justify-content:flex-start;
  white-space:nowrap;
  word-break:keep-all;
  font-variant-numeric:tabular-nums;
  z-index:1;
}
.card{
  position: relative;               /* for accent-stripen */
  background: var(--card);
  border:1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 12px 14px 12px 16px;
  overflow: hidden;
}
/* Felles accent-stripe for spesielle typer */
.item[data-type] .card::before{
  content:"";
  position:absolute;
  left:0; top:0; bottom:0;
  width:6px;
  border-radius: var(--radius) 0 0 var(--radius);
}

/* Pause: Kaffe & frukt */
.item[data-type="break"] .card{
  background: color-mix(in srgb, var(--mint) 70%, white);
  border-color: color-mix(in srgb, var(--green) 45%, var(--border));
}
.item[data-type="break"] .card::before{
  background: color-mix(in srgb, var(--green) 60%, white);
}

/* Måltid: Oppmøte og lunsj / Lunsj */
.item[data-type="meal"] .card{
  background: color-mix(in srgb, var(--green) 28%, white);
  border-color: color-mix(in srgb, var(--green) 55%, var(--border));
}
.item[data-type="meal"] .card::before{
  background: color-mix(in srgb, var(--green) 70%, white);
}

/* Sosialt: Middag */
/* Sosialt: Middag – litt mer blå */
.item[data-type="social"] .card {
  background: color-mix(in srgb, var(--teal) 55%, white);
  border-color: color-mix(in srgb, var(--teal) 85%, var(--border));
}

.item[data-type="social"] .card::before {
  background: color-mix(in srgb, var(--teal) 90%, white);
}

/* Avslutning mv. kan fortsatt være subtilt */
.item[data-type="wrap"] .card{
  background: color-mix(in srgb, var(--navy) 8%, white);
}
.card-head{ display:flex; align-items:baseline; gap:8px; flex-wrap:wrap; }
.title{ margin:0; font-size:1.05rem; color: var(--ink); }
.badge{
  padding:2px 8px; border-radius:999px; font-size:.75rem; font-weight:600;
  background: color-mix(in srgb, var(--teal) 12%, white);
  color: var(--teal);
}
.speakers{ margin:.35rem 0 0; color: color-mix(in srgb, var(--navy) 72%, white); }
.note{ margin:.25rem 0 0; color: color-mix(in srgb, var(--navy) 72%, white); }

/* Context styles */
.item[data-type="break"] .card{ background: color-mix(in srgb, var(--mint) 45%, white); }
.item[data-type="meal"] .card{ background: color-mix(in srgb, var(--green) 12%, white); }
.item[data-type="social"] .card{ background: color-mix(in srgb, var(--teal) 10%, white); }
.item[data-type="wrap"] .card{ background: color-mix(in srgb, var(--navy) 6%, white); }

/* A11y */
.sr-only {
  position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden;
  clip:rect(0,0,0,0); white-space:nowrap; border:0;
}
.program-foot{ margin-top: 18px; color: color-mix(in srgb, var(--navy) 68%, white); }
</style>