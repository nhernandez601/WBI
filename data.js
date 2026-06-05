// ============================================================
// WBI catalog — display-only. Real cards sell on Whatnot.
// ------------------------------------------------------------
// "lofi"  = THE SATURDAY SET (for sale 06/06/26 11am) — 11 case files
// "cyber" = NEXT SHOW preview (TBD release date — advertise only)
// explicit:true => blurred "classified" until tapped to declassify
// (all Lofi art is 18+ — blur stays on behind the age gate)
// ============================================================
window.WHATNOT_URL = 'https://www.whatnot.com/s/MtKFSahE';
window.WBI_EMAIL = 'wbixcards@gmail.com';
window.FORMSPREE_URL = 'https://formspree.io/f/mjgdkjwv';

// ---- LOFI SET · launching Sat 06/06/26 11:00 AM ----
// Codename = the Bureau "case" label · character = subject.
window.WBI_LOFI = [
  { id:'lofi-lillie',   name:'Lillie',   code:'Alabaster', series:'Pokémon',        frame:'holo',   price:5, img:'assets/lofi-lillie.jpg',   pos:'50% 14%', explicit:true,
    blurb:'Case ALABASTER — rose-lit suite, city glow at the window. A standout from the Lofi Set.' },
  { id:'lofi-serena',   name:'Serena',   code:'Amber',     series:'Pokémon',        frame:'violet', price:5, img:'assets/lofi-serena.jpg',   pos:'50% 12%', explicit:true,
    blurb:'Case AMBER — sunset skyline, soft pinks. Filed for the Lofi Set drop.' },
  { id:'lofi-asuka',    name:'Asuka',    code:'Apex',      series:'Evangelion',     frame:'cyber',  price:5, img:'assets/lofi-asuka.jpg',    pos:'50% 10%', explicit:true,
    blurb:'Case APEX — twilight high-rise, rose petals. A fan-favorite case file.' },
  { id:'lofi-roxy',     name:'Roxy',     code:'Arcane',    series:'Mushoku Tensei', frame:'violet', price:5, img:'assets/lofi-roxy.jpg',     pos:'50% 8%',  explicit:true,
    blurb:'Case ARCANE — fairy-lit cabin, lavender braids. Lofi Set evidence.' },
  { id:'lofi-dawn',     name:'Dawn',     code:'Aurora',    series:'Pokémon',        frame:'holo',   price:5, img:'assets/lofi-dawn.jpg',     pos:'50% 6%',  explicit:true,
    blurb:'Case AURORA — bokeh dusk, starlit window. Bright Lofi Set pull.' },
  { id:'lofi-rem',      name:'Rem',      code:'Azure',     series:'Re:Zero',        frame:'cyber',  price:5, img:'assets/lofi-rem.jpg',      pos:'50% 6%',  explicit:true,
    blurb:'Case AZURE — warm cabin light, city stars beyond. Lofi Set classified.' },
  { id:'lofi-robin',    name:'Nico Robin', code:'Codex',   series:'One Piece',      frame:'violet', price:5, img:'assets/lofi-robin.jpg',    pos:'50% 8%',  explicit:true,
    blurb:'Case CODEX — sunset cityscape, deep rose suite. A premium Lofi case file.' },
  { id:'lofi-lucy',     name:'Lucy',     code:'Edge',      series:'Cyberpunk: Edgerunners', frame:'cyber', price:5, img:'assets/lofi-lucy.jpg', pos:'50% 8%', explicit:true,
    blurb:'Case EDGE — neon window, rose petals. Lofi Set, Edgerunners line.' },
  { id:'lofi-yoruichi', name:'Yoruichi', code:'Flash',     series:'Bleach',         frame:'violet', price:5, img:'assets/lofi-yoruichi.jpg', pos:'50% 12%', explicit:true,
    blurb:'Case FLASH — starlit night suite, amber lamp. A sleek Lofi Set case.' },
  { id:'lofi-2b-nova',  name:'2B',       code:'Nova',      series:'NieR: Automata', frame:'holo',   price:5, img:'assets/lofi-2b-nova.jpg',  pos:'50% 8%',  explicit:true,
    blurb:'Case NOVA — soft pink suite, rose petals. The Lofi Set 2B (distinct from the Cyberpunk line).' },
  { id:'lofi-toga',     name:'Toga',     code:'Phantom',   series:'My Hero Academia', frame:'cyber', price:5, img:'assets/lofi-toga.jpg',   pos:'50% 12%', explicit:true,
    blurb:'Case PHANTOM — pink dusk skyline, playful grin. Lofi Set evidence.' },

  { id:'lofi-zerotwo',  name:'Zero Two', code:'Blaze',     series:'Darling in the Franxx', frame:'holo', price:5, img:'assets/lofi-zerotwo.jpg', pos:'50% 8%', explicit:true,
    blurb:'Case BLAZE — neon dusk, rose petals. A standout Lofi Set case file.' },
  { id:'lofi-sakura',   name:'Sakura',   code:'Bloom',     series:'Naruto',         frame:'violet', price:5, img:'assets/lofi-sakura.jpg',   pos:'50% 10%', explicit:true,
    blurb:'Case BLOOM — city-lit suite, rose petals. Filed for the Lofi Set.' },
  { id:'lofi-mirajane', name:'Mirajane', code:'Celestia',  series:'Fairy Tail',     frame:'holo',   price:5, img:'assets/lofi-mirajane.jpg', pos:'50% 8%', explicit:true,
    blurb:'Case CELESTIA — twilight pinks, starlit window. A premium Lofi case.' },
  { id:'lofi-noelle',   name:'Noelle',   code:'Clover',    series:'Black Clover',   frame:'violet', price:5, img:'assets/lofi-noelle.jpg',   pos:'50% 6%', explicit:true,
    blurb:'Case CLOVER — warm lamp glow, rose suite. Lofi Set classified.' },
  { id:'lofi-mtlady',   name:'Mt. Lady', code:'Colossus',  series:'My Hero Academia', frame:'cyber', price:5, img:'assets/lofi-mtlady.jpg', pos:'50% 6%', explicit:true,
    blurb:'Case COLOSSUS — night-city window, rose petals. Lofi Set evidence.' },
  { id:'lofi-ram',      name:'Ram',      code:'Coral',     series:'Re:Zero',        frame:'holo',   price:5, img:'assets/lofi-ram.jpg',      pos:'50% 6%', explicit:true,
    blurb:'Case CORAL — neon dusk, rose petals. Pairs with AZURE (Rem) in the set.' },
  { id:'lofi-ganyu',    name:'Ganyu',    code:'Crescent',  series:'Genshin Impact', frame:'violet', price:5, img:'assets/lofi-ganyu.jpg',    pos:'50% 8%', explicit:true,
    blurb:'Case CRESCENT — warm lamp light, soft pinks. A fan-favorite Lofi case.' },
  { id:'lofi-power',    name:'Power',    code:'Crimson',   series:'Chainsaw Man',   frame:'cyber',  price:5, img:'assets/lofi-power.jpg',    pos:'50% 10%', explicit:true,
    blurb:'Case CRIMSON — night skyline, rose petals. A bold Lofi Set pull.' },
  { id:'lofi-albedo',   name:'Albedo',   code:'Eclipse',   series:'Overlord',       frame:'holo',   price:5, img:'assets/lofi-albedo.jpg',   pos:'50% 6%', explicit:true,
    blurb:'Case ECLIPSE — starlit high-rise, black wings. A premium Lofi case file.' },
  { id:'lofi-hancock',  name:'Boa Hancock', code:'Empress', series:'One Piece',     frame:'violet', price:5, img:'assets/lofi-hancock.jpg',  pos:'50% 8%', explicit:true,
    blurb:'Case EMPRESS — amber suite, deep rose silk. A flagship Lofi Set case.' },
  { id:'lofi-sailormoon', name:'Sailor Moon', code:'Lunara', series:'Sailor Moon',  frame:'holo',   price:5, img:'assets/lofi-sailormoon.jpg', pos:'50% 6%', explicit:true,
    blurb:'Case LUNARA — rose-lit suite, starlit window. A classic Lofi Set case.' },

  { id:'lofi-megumin',  name:'Megumin',  code:'Hex',       series:'KonoSuba',       frame:'cyber',  price:5, img:'assets/lofi-megumin.jpg',  pos:'50% 10%', explicit:true,
    blurb:'Case HEX — city-lit suite, rose petals. An explosive Lofi Set case file.' },
  { id:'lofi-mirelia',  name:'Mirelia',  code:'Regalia',   series:'Rising of the Shield Hero', frame:'violet', price:5, img:'assets/lofi-mirelia.jpg', pos:'50% 8%', explicit:true,
    blurb:'Case REGALIA — royal night suite, soft pinks. A premium Lofi case.' },
  { id:'lofi-nino',     name:'Nino',     code:'Serenade',  series:'Quintessential Quintuplets', frame:'holo', price:5, img:'assets/lofi-nino.jpg', pos:'50% 8%', explicit:true,
    blurb:'Case SERENADE — warm lamp glow, rose petals. A fan-favorite Lofi case.' },
  { id:'lofi-ubel',     name:'Übel',     code:'Sever',     series:'Frieren',        frame:'cyber',  price:5, img:'assets/lofi-ubel.jpg',     pos:'50% 8%', explicit:true,
    blurb:'Case SEVER — neon dusk, rose petals. A sharp Lofi Set case file.' },
  { id:'lofi-yor',      name:'Yor',      code:'Specter',   series:'Spy × Family',   frame:'violet', price:5, img:'assets/lofi-yor.jpg',      pos:'50% 8%', explicit:true,
    blurb:'Case SPECTER — twilight skyline, deep rose silk. A flagship Lofi case.' },
  { id:'lofi-lucyh',    name:'Lucy Heartfilia', code:'Starlight', series:'Fairy Tail', frame:'holo', price:5, img:'assets/lofi-lucyh.jpg', pos:'50% 8%', explicit:true,
    blurb:'Case STARLIGHT — sparkle-lit suite, rose petals. A bright Lofi Set pull.' },
  { id:'lofi-nami',     name:'Nami',     code:'Surge',     series:'One Piece',      frame:'cyber',  price:5, img:'assets/lofi-nami.jpg',     pos:'50% 8%', explicit:true,
    blurb:'Case SURGE — night-city window, rose petals. A bold Lofi Set case.' },
  { id:'lofi-sylphiette', name:'Sylphiette', code:'Sylph', series:'Mushoku Tensei', frame:'violet', price:5, img:'assets/lofi-sylphiette.jpg', pos:'50% 8%', explicit:true,
    blurb:'Case SYLPH — golden window light, rose petals. A delicate Lofi case file.' },
  { id:'lofi-erza',     name:'Erza',     code:'Valiant',   series:'Fairy Tail',     frame:'holo',   price:5, img:'assets/lofi-erza.jpg',     pos:'50% 10%', explicit:true,
    blurb:'Case VALIANT — city-lit suite, striped accents. A premium Lofi case.' },
  { id:'lofi-hinata',   name:'Hinata',   code:'Veil',      series:'Naruto',         frame:'cyber',  price:5, img:'assets/lofi-hinata.jpg',   pos:'50% 8%', explicit:true,
    blurb:'Case VEIL — starlit window, soft blues. A fan-favorite Lofi case file.' },
  { id:'lofi-swordmaiden', name:'Sword Maiden', code:'Vestal', series:'Goblin Slayer', frame:'violet', price:5, img:'assets/lofi-swordmaiden.jpg', pos:'50% 8%', explicit:true,
    blurb:'Case VESTAL — night skyline, gilded accents. A regal Lofi Set case.' },
  { id:'lofi-frieren-whisper', name:'Frieren', code:'Whisper', series:'Frieren',     frame:'holo',   price:5, img:'assets/lofi-frieren-whisper.jpg', pos:'50% 8%', explicit:true,
    blurb:'Case WHISPER — golden-lit suite, rose petals. Pairs with SEVER (Übel).' },
  { id:'lofi-emilia-winter', name:'Emilia', code:'Winter', series:'Re:Zero',         frame:'violet', price:5, img:'assets/lofi-emilia-winter.jpg', pos:'50% 6%', explicit:true,
    blurb:'Case WINTER — cozy lavender knit, city stars beyond. A premium Lofi case.' },
];

// ---- CYBERPUNK · PREVIEW (next show — release date TBD) ----
window.WBI_CYBER = [
  { id:'cyber-2b-1', name:'2B', code:'Override', series:'NieR · Cyberpunk', frame:'cyber',
    price:5, img:'assets/card-2b-cyberpunk.jpg', pos:'50% 12%', explicit:false,
    blurb:'Glowing jacket sigil, wet-pavement reflections. Coming a future show — date TBD.' },
  { id:'cyber-2b-2', name:'2B', code:'Blackout', series:'NieR · Cyberpunk', frame:'cyber',
    price:5, img:'assets/card-2b-cyberpunk-2.jpg', pos:'50% 10%', explicit:false,
    blurb:'Palm silhouettes, neon grid floor. Coming a future show — date TBD.' },
];
