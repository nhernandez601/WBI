// ============================================================
// WBI catalog — display-only. Real cards sell on Whatnot.
// ------------------------------------------------------------
// "lofi"  = THE SATURDAY SET (for sale 06/06/26 11am) — 11 case files
// "cyber" = NEXT SHOW preview (TBD release date — advertise only)
// explicit:true => blurred "classified" until tapped to declassify
// (all Lofi art is 18+ — blur stays on behind the age gate)
// ============================================================
window.WHATNOT_URL = 'https://www.whatnot.com/s/MtKFSahE';

// ---- LOFI SET · launching Sat 06/06/26 11:00 AM ----
// Codename = the Bureau "case" label · character = subject.
window.WBI_LOFI = [
  { id:'lofi-lillie',   name:'Lillie',   code:'Alabaster', series:'Pokémon',        frame:'holo',   price:5, img:'assets/lofi-lillie.png',   pos:'50% 14%', explicit:true,
    blurb:'Case ALABASTER — rose-lit suite, city glow at the window. A standout from the Lofi Set.' },
  { id:'lofi-serena',   name:'Serena',   code:'Amber',     series:'Pokémon',        frame:'violet', price:5, img:'assets/lofi-serena.png',   pos:'50% 12%', explicit:true,
    blurb:'Case AMBER — sunset skyline, soft pinks. Filed for the Lofi Set drop.' },
  { id:'lofi-asuka',    name:'Asuka',    code:'Apex',      series:'Evangelion',     frame:'cyber',  price:5, img:'assets/lofi-asuka.png',    pos:'50% 10%', explicit:true,
    blurb:'Case APEX — twilight high-rise, rose petals. A fan-favorite case file.' },
  { id:'lofi-roxy',     name:'Roxy',     code:'Arcane',    series:'Mushoku Tensei', frame:'violet', price:5, img:'assets/lofi-roxy.png',     pos:'50% 8%',  explicit:true,
    blurb:'Case ARCANE — fairy-lit cabin, lavender braids. Lofi Set evidence.' },
  { id:'lofi-dawn',     name:'Dawn',     code:'Aurora',    series:'Pokémon',        frame:'holo',   price:5, img:'assets/lofi-dawn.png',     pos:'50% 6%',  explicit:true,
    blurb:'Case AURORA — bokeh dusk, starlit window. Bright Lofi Set pull.' },
  { id:'lofi-rem',      name:'Rem',      code:'Azure',     series:'Re:Zero',        frame:'cyber',  price:5, img:'assets/lofi-rem.png',      pos:'50% 6%',  explicit:true,
    blurb:'Case AZURE — warm cabin light, city stars beyond. Lofi Set classified.' },
  { id:'lofi-robin',    name:'Nico Robin', code:'Codex',   series:'One Piece',      frame:'violet', price:5, img:'assets/lofi-robin.png',    pos:'50% 8%',  explicit:true,
    blurb:'Case CODEX — sunset cityscape, deep rose suite. A premium Lofi case file.' },
  { id:'lofi-lucy',     name:'Lucy',     code:'Edge',      series:'Cyberpunk: Edgerunners', frame:'cyber', price:5, img:'assets/lofi-lucy.png', pos:'50% 8%', explicit:true,
    blurb:'Case EDGE — neon window, rose petals. Lofi Set, Edgerunners line.' },
  { id:'lofi-yoruichi', name:'Yoruichi', code:'Flash',     series:'Bleach',         frame:'violet', price:5, img:'assets/lofi-yoruichi.png', pos:'50% 12%', explicit:true,
    blurb:'Case FLASH — starlit night suite, amber lamp. A sleek Lofi Set case.' },
  { id:'lofi-2b-nova',  name:'2B',       code:'Nova',      series:'NieR: Automata', frame:'holo',   price:5, img:'assets/lofi-2b-nova.png',  pos:'50% 8%',  explicit:true,
    blurb:'Case NOVA — soft pink suite, rose petals. The Lofi Set 2B (distinct from the Cyberpunk line).' },
  { id:'lofi-toga',     name:'Toga',     code:'Phantom',   series:'My Hero Academia', frame:'cyber', price:5, img:'assets/lofi-toga.png',   pos:'50% 12%', explicit:true,
    blurb:'Case PHANTOM — pink dusk skyline, playful grin. Lofi Set evidence.' },
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
