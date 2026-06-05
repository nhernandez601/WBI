// ============================================================
// WBI — Waifu Bureau of Investigation · public site
// Lofi Set (Sat 06/06/26) for sale on Whatnot · Cyberpunk = next-show preview
// Single Babel module (one fetch) for reliable mount.
// ============================================================

const LUCIDE = {
  search: ['circle:11,11,8', 'path:m21 21-4.3-4.3'],
  x: ['path:M18 6 6 18', 'path:m6 6 12 12'],
  plus: ['path:M5 12h14', 'path:M12 5v14'],
  minus: ['path:M5 12h14'],
  zap: ['path:M4 14a1 1 0 0 1-.8-1.6l9-11a.5.5 0 0 1 .9.4L11.5 9H20a1 1 0 0 1 .8 1.6l-9 11a.5.5 0 0 1-.9-.4L12.5 14H4Z'],
  chevron: ['path:m9 18 6-6-6-6'],
  truck: ['path:M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2', 'path:M15 18H9', 'path:M19 18h2a1 1 0 0 0 1-1v-3.6a1 1 0 0 0-.3-.7l-2.8-2.8a1 1 0 0 0-.7-.3H14', 'circle:7,18,2', 'circle:17,18,2'],
  check: ['path:M20 6 9 17l-5-5'],
  lock: ['path:M5 11h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z', 'path:M7 11V7a5 5 0 0 1 10 0v4'],
  upload: ['path:M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'path:M17 8l-5-5-5 5', 'path:M12 3v12'],
  mail: ['path:M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z', 'path:m3 7 9 6 9-6'],
  printer: ['path:M6 9V3h12v6', 'path:M6 18H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2', 'path:M6 14h12v8H6Z'],
  ruler: ['path:M21.3 8.7 8.7 21.3a1 1 0 0 1-1.4 0l-4.6-4.6a1 1 0 0 1 0-1.4L15.3 2.7a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4Z', 'path:M7 11l1.5 1.5', 'path:M11 7l1.5 1.5', 'path:M15 9l1.5 1.5'],
  bag: ['path:M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z', 'path:M3 6h18', 'path:M16 10a4 4 0 0 1-8 0'],
  eye: ['path:M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z', 'circle:12,12,3'],
  sparkle: ['path:M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z'],
};
function Icon({ name, size = 20, strokeWidth = 2, style }) {
  const parts = LUCIDE[name] || [];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style} aria-hidden="true">
      {parts.map((p, i) => {
        if (p.startsWith('circle:')) { const [cx, cy, r] = p.slice(7).split(','); return <circle key={i} cx={cx} cy={cy} r={r} />; }
        return <path key={i} d={p.slice(5)} />;
      })}
    </svg>
  );
}
const scrollTo = (id) => { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' }); };

// ---------- Age Gate ----------
function AgeGate({ onEnter }) {
  return (
    <div className="gate">
      <div className="gate-card">
        <div className="gm">WBI</div>
        <div className="gsub">Waifu Bureau of Investigation</div>
        <h2>Classified — 18+ Only</h2>
        <p>This archive contains mature (18+) anime artwork. Confirm you are of legal age to access the case files.</p>
        <div className="gate-actions">
          <button className="btn btn-primary" onClick={onEnter}>I'm 18 or older — Enter</button>
          <button className="gate-exit" onClick={() => { window.location.href = 'https://www.google.com'; }}>Exit — I'm under 18</button>
        </div>
      </div>
    </div>
  );
}

// ---------- TCard ----------
function TCard({ card, onClick, showPrice = true, reveal = false, preview = false }) {
  const [shown, setShown] = React.useState(false);
  const blurred = card.explicit && !reveal && !shown;
  const handle = () => { if (blurred) { setShown(true); } else if (onClick) { onClick(card); } };
  return (
    <div className={'tcard' + (blurred ? ' blurred' : '') + (preview ? ' preview' : '')} onClick={handle}>
      <div className={'frame ' + card.frame}>
        <div className="inner">
          <img className="art" src={card.img} alt={card.name} style={{ objectPosition: card.pos }} />
          {preview && <span className="preview-ribbon">Preview · Next Show</span>}
          {card.explicit && (
            <div className="reveal-veil">
              <span className="lock"><Icon name="eye" size={20} /></span>
              <span className="rl">18+ · Tap to reveal</span>
            </div>
          )}
          {!preview && <span className="badge">{card.code}</span>}
          <span className="sigil">S</span>
          <div className="plate">
            <div className="sub">Case {card.code} · {card.series}</div>
            <h4>{card.name}</h4>
            {showPrice && (
              <div className="price">
                <b>{preview ? 'Soon' : '$' + card.price}</b>
                <span className="disp">{preview ? 'Next show' : 'Display sample'}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Nav ----------
function WBINav() {
  const links = [['Lofi Set', 'lofi'], ['Preview', 'preview'], ['Custom', 'custom'], ['FAQ', 'faq']];
  return (
    <header className="nav">
      <div className="maxw nav-in">
        <a className="nav-logo" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>WBI</a>
        <nav className="nav-links">
          {links.map(([l, id]) => (
            <a key={l} className="nav-link" href="#" onClick={(e) => { e.preventDefault(); scrollTo(id); }}>{l}</a>
          ))}
        </nav>
        <div className="nav-spacer"></div>
        <a className="wn-btn" href={window.WHATNOT_URL} target="_blank" rel="noopener noreferrer"><span className="dot"></span>Shop on Whatnot</a>
      </div>
    </header>
  );
}

// ---------- Hero (advertises the Lofi drop) ----------
function WBIHero({ featured, onSelect }) {
  const target = new Date('2026-06-06T11:00:00').getTime();
  const calc = () => { const d = Math.max(0, target - Date.now()); return { d: Math.floor(d / 864e5), h: Math.floor(d / 36e5) % 24, m: Math.floor(d / 6e4) % 60, s: Math.floor(d / 1e3) % 60, live: d === 0 }; };
  const [t, setT] = React.useState(calc());
  React.useEffect(() => { const id = setInterval(() => setT(calc()), 1000); return () => clearInterval(id); }, []);
  const pad = (n) => String(n).padStart(2, '0');
  return (
    <section className="hero">
      <div className="maxw hero-in">
        <div>
          <span className="lofi-badge"><Icon name="sparkle" size={14} />New Drop · The Lofi Set</span>
          <h1 style={{ marginTop: 16 }}>Claim Your<br /><span className="grad">Waifu.</span></h1>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14, letterSpacing: '.16em', textTransform: 'uppercase', color: '#fff', marginTop: 14, WebkitTextStroke: '.4px var(--wbi-cyan)' }}>
            Waifu Bureau of Investigation
          </div>
          <p>The <b style={{ color: 'var(--wbi-cyan-bright)' }}>Lofi Set</b> drops <b style={{ color: '#fff' }}>Saturday 06/06/26 at 11:00 AM</b>, live on Whatnot. Undiscovered, classified waifu cards — declassified for collectors.</p>
          <div className="timer" style={{ marginTop: 22 }}>
            {t.live
              ? <div className="u" style={{ minWidth: 160 }}><b>LIVE NOW</b><span>On Whatnot</span></div>
              : [['Days', t.d], ['Hrs', t.h], ['Min', t.m], ['Sec', t.s]].map(([lbl, v]) => (
                <div className="u" key={lbl}><b>{pad(v)}</b><span>{lbl}</span></div>
              ))}
          </div>
          <div className="hero-cta" style={{ marginTop: 24 }}>
            <button className="btn btn-primary" onClick={() => scrollTo('lofi')}>See the Lofi Set</button>
            <a className="btn btn-ghost" href={window.WHATNOT_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              Shop on Whatnot <Icon name="chevron" size={15} style={{ verticalAlign: '-2px', marginLeft: 4 }} />
            </a>
          </div>
        </div>
        <div className="hero-card">
          <TCard card={featured} onClick={() => onSelect(featured)} />
        </div>
      </div>
    </section>
  );
}

// ---------- Lofi Set grid ----------
function LofiShop({ cards, onSelect }) {
  return (
    <section className="section maxw" id="lofi" style={{ scrollMarginTop: 80 }}>
      <div className="sec-head">
        <div>
          <span className="eyebrow">For Sale Saturday · 06 / 06 / 26 · 11 AM</span>
          <h2>The Lofi Set</h2>
        </div>
        <a className="wn-btn" href={window.WHATNOT_URL} target="_blank" rel="noopener noreferrer"><span className="dot"></span>Buy on Whatnot</a>
      </div>
      <div className="card-grid">
        {cards.map((c) => <TCard key={c.id} card={c} onClick={() => onSelect(c)} />)}
      </div>
      <div className="note-strip" style={{ marginTop: 26 }}>
        <Icon name="lock" size={16} style={{ color: 'var(--wbi-cyan)', flex: 'none' }} />
        <span>Cards shown are <b>display samples</b> ($5 each). All sales happen live on <a className="wbi-link" href={window.WHATNOT_URL} target="_blank" rel="noopener noreferrer">Whatnot →</a></span>
      </div>
    </section>
  );
}

// ---------- Cyberpunk Preview (next show) ----------
function CyberPreview({ cards }) {
  return (
    <section className="section section-preview" id="preview" style={{ scrollMarginTop: 80 }}>
      <div className="maxw">
        <div className="sec-head">
          <div>
            <span className="preview-tag"><Icon name="zap" size={14} />Preview · Coming Next Show</span>
            <h2 style={{ marginTop: 12 }}>The Cyberpunk Line</h2>
            <p style={{ maxWidth: '52ch', marginTop: 8 }}>A sneak peek at the next case file. These neon-rain cards aren't for sale yet — they drop at a <b style={{ color: '#fff' }}>future show, release date TBD</b>. Follow on Whatnot so you don't miss the declassification.</p>
          </div>
        </div>
        <div className="card-grid" style={{ maxWidth: 720 }}>
          {cards.map((c) => <TCard key={c.id} card={c} preview={true} />)}
        </div>
      </div>
    </section>
  );
}

// ---------- Detail modal ----------
function WBIDetail({ card, onClose }) {
  if (!card) return null;
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" style={{ position: 'relative' }} onClick={(e) => e.stopPropagation()}>
        <button className="m-close" onClick={onClose} aria-label="Close"><Icon name="x" size={18} /></button>
        <div className="m-art"><TCard card={card} showPrice={false} reveal={true} /></div>
        <div className="m-body">
          <span className="eyebrow">Case {card.code} · {card.series}</span>
          <h3>{card.name}</h3>
          <p style={{ margin: '4px 0 0', color: 'var(--wbi-fg2)' }}>{card.blurb}</p>
          <div className="m-meta">
            <span className="kv">Standard TCG size</span>
            <span className="kv"><Icon name="printer" size={13} style={{ verticalAlign: '-2px', marginRight: 5 }} />8-color dye ink</span>
            <span className="kv"><Icon name="truck" size={13} style={{ verticalAlign: '-2px', marginRight: 5 }} />Ships 48h</span>
          </div>
          <div className="m-price">${card.price} <span style={{ fontFamily: 'var(--font-heading)', fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--wbi-fg3)' }}>· display sample</span></div>
          <a className="btn btn-primary btn-block" href={window.WHATNOT_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', textAlign: 'center' }}>
            <Icon name="bag" size={15} style={{ verticalAlign: '-2px', marginRight: 7 }} />Buy live on Whatnot
          </a>
          <p style={{ fontSize: 12, color: 'var(--wbi-fg3)', margin: '10px 0 0' }}>This piece is a display sample. Real cards sell during the live Whatnot drop on Saturday.</p>
        </div>
      </div>
    </div>
  );
}

// ---------- Segmented control ----------
function Seg({ value, options, onChange }) {
  return (
    <div className="seg">
      {options.map((o) => (
        <button type="button" key={o} className={value === o ? 'on' : ''} onClick={() => onChange(o)}>{o}</button>
      ))}
    </div>
  );
}

// ---------- Custom Order ----------
function WBICustom() {
  const [f, setF] = React.useState({ character: '', pose: '', qty: 1, material: 'Glossy paper', stock: 'With card stock', lam: 'With lamination', corners: 'Rounded corners' });
  const [files, setFiles] = React.useState([]);
  const [done, setDone] = React.useState(false);
  const set = (k, v) => setF((p) => ({ ...p, [k]: v }));
  const onFiles = (e) => setFiles(Array.from(e.target.files || []).map((x) => x.name));
  const submit = (e) => {
    e.preventDefault();
    const body =
`WBI Custom Print Request
————————————————
Character: ${f.character || '(unspecified)'}
Pose / description: ${f.pose || '(unspecified)'}
Quantity: ${f.qty}
Material: ${f.material}
Card stock: ${f.stock}
Lamination: ${f.lam}
Corners: ${f.corners}
Files: ${files.length ? files.join(', ') : '(attach in this email)'}

Please attach your artwork files (.pdf .png .jpeg .jpg .tiff) to this email before sending.`;
    const url = `mailto:n.hernandez601@gmail.com?subject=${encodeURIComponent('WBI Custom Order — ' + (f.character || 'New request'))}&body=${encodeURIComponent(body)}`;
    try { window.location.href = url; } catch (err) { window.open(url, '_blank'); }
    setDone(true);
  };
  return (
    <section className="section maxw" id="custom" style={{ scrollMarginTop: 80 }}>
      <div className="sec-head" style={{ marginBottom: 26 }}>
        <div><span className="eyebrow">Open Case · Bring Your Own Art</span><h2>Custom Orders</h2></div>
      </div>
      <div className="custom-wrap">
        <div className="custom-intro">
          <p style={{ fontSize: 17 }}><b style={{ color: '#fff' }}>The public is more than welcome to submit their own art for printing.</b> Send us your waifu and we'll turn it into a Bureau-grade card or print.</p>
          <ul className="spec-list">
            <li><span className="si"><Icon name="upload" size={15} /></span><span>Attach one or more files — <b style={{ color: 'var(--wbi-fg1)' }}>.pdf, .png, .jpeg, .jpg, .tiff</b>.</span></li>
            <li><span className="si"><Icon name="ruler" size={15} /></span><span>Choose your materials: glossy and/or holographic paper, card stock, lamination, and corner style.</span></li>
            <li><span className="si"><Icon name="mail" size={15} /></span><span>Your request is emailed to the seller for review.</span></li>
            <li><span className="si"><Icon name="check" size={15} /></span><span>The seller responds once your order is reviewed. <b style={{ color: 'var(--wbi-fg1)' }}>No cards are printed until confirmed by the seller.</b></span></li>
          </ul>
          <div className="printer-note">
            <Icon name="printer" size={15} style={{ verticalAlign: '-2px', marginRight: 7, color: 'var(--wbi-violet-bright)' }} />
            Every printout is produced on a <b>professional-grade graphic printer with an 8-color dye-based ink system</b> for true, gallery-quality color.
          </div>
        </div>
        <div className="form">
          {done ? (
            <div className="form-success">
              <div className="sc"><Icon name="mail" size={24} /></div>
              <h3>Request ready to send</h3>
              <p style={{ color: 'var(--wbi-fg2)', fontSize: 14 }}>Your email draft to <b style={{ color: 'var(--wbi-cyan-bright)' }}>n.hernandez601@gmail.com</b> is open — attach your files and hit send. The seller will respond once your order is reviewed. <b style={{ color: '#fff' }}>Nothing is printed until you confirm.</b></p>
              <button className="btn btn-ghost" style={{ marginTop: 18 }} onClick={() => setDone(false)}>Edit request</button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="form-row two">
                <div><label>Character name</label><input type="text" value={f.character} onChange={(e) => set('character', e.target.value)} placeholder="e.g. Frieren" /></div>
                <div><label>Quantity of prints</label><input type="number" min="1" value={f.qty} onChange={(e) => set('qty', e.target.value)} /></div>
              </div>
              <div className="form-row"><label>Pose / description</label><textarea value={f.pose} onChange={(e) => set('pose', e.target.value)} placeholder="Describe the pose, outfit, mood, background…"></textarea></div>
              <div className="form-row"><label>Material</label><Seg value={f.material} onChange={(v) => set('material', v)} options={['Glossy paper', 'Holographic paper', 'Both glossy & holo']} /></div>
              <div className="form-row two">
                <div><label>Card stock</label><Seg value={f.stock} onChange={(v) => set('stock', v)} options={['With card stock', 'Without']} /></div>
                <div><label>Lamination</label><Seg value={f.lam} onChange={(v) => set('lam', v)} options={['With lamination', 'Without']} /></div>
              </div>
              <div className="form-row"><label>Corners</label><Seg value={f.corners} onChange={(v) => set('corners', v)} options={['Rounded corners', 'Square corners']} /></div>
              <div className="form-row">
                <label>Artwork files</label>
                <label className="drop-file">
                  <Icon name="upload" size={20} style={{ display: 'block', margin: '0 auto 6px' }} />
                  Drag &amp; drop or click to add files · .pdf .png .jpeg .jpg .tiff
                  <input type="file" multiple accept=".pdf,.png,.jpeg,.jpg,.tiff" onChange={onFiles} />
                </label>
                {files.length > 0 && <div className="file-chips">{files.map((n, i) => <span className="file-chip" key={i}>{n}</span>)}</div>}
              </div>
              <button className="btn btn-primary btn-block" type="submit"><Icon name="mail" size={15} style={{ verticalAlign: '-2px', marginRight: 7 }} />Submit request to the Bureau</button>
              <p className="form-foot-note">Submitting opens an email to <b>n.hernandez601@gmail.com</b> with your details — attach your files there. The seller responds once reviewed; <b>no cards are printed until confirmed</b>.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ---------- FAQ ----------
function WBIFaq() {
  const items = [
    ['What size are the cards?', <span>Every card is a <b>standard trading-card size</b> — the same dimensions as the TCGs you already collect.</span>],
    ['How thick is each card?', <span>Thickness <b>depends on the materials you choose</b> — paper type, with or without card stock, and lamination all change the final feel and weight.</span>],
    ['What is the latest drop?', <span>The <b>Lofi Set</b> launches <b>Saturday, 06/06/26 at 11:00 AM</b>, live on Whatnot. The <b>Cyberpunk Line</b> previews now and drops at the next show.</span>],
    ['How are the cards printed?', <span>On a <b>professional-grade graphic printer with an 8-color dye-based ink system</b>, for rich, accurate, gallery-quality color.</span>],
    ['Where do I actually buy cards?', <span>All real cards are sold during <b><a className="wbi-link" href={window.WHATNOT_URL} target="_blank" rel="noopener noreferrer">live Whatnot drops</a></b>. The cards on this site are display samples. Want something specific? Use Custom Orders above.</span>],
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section maxw" id="faq" style={{ scrollMarginTop: 80 }}>
      <div className="sec-head" style={{ marginBottom: 26 }}><div><span className="eyebrow">Case Notes</span><h2>FAQ</h2></div></div>
      <div className="faq-list">
        {items.map(([q, a], i) => (
          <div className={'faq-item' + (open === i ? ' open' : '')} key={i}>
            <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>{q}<span className="ic"><Icon name="chevron" size={18} /></span></button>
            {open === i && <div className="faq-a">{a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- Footer ----------
function WBIFooter() {
  const cols = [
    ['Explore', [['Lofi Set', 'lofi'], ['Cyberpunk Preview', 'preview'], ['Custom Orders', 'custom'], ['FAQ', 'faq']]],
    ['The Bureau', [['Shop on Whatnot', null], ['Custom Prints', 'custom'], ['8-Color Printing', 'faq'], ['Card Sizes', 'faq']]],
  ];
  return (
    <footer className="footer">
      <div className="maxw">
        <div className="foot-grid" style={{ gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr' }}>
          <div>
            <div className="nav-logo" style={{ fontSize: 32 }}>WBI</div>
            <p style={{ maxWidth: '32ch', marginTop: 10 }}>The Waifu Bureau of Investigation — declassifying undiscovered waifu cards, printed to grail-tier holographic quality. ✨</p>
          </div>
          {cols.map(([h, links]) => (
            <div key={h}>
              <h5>{h}</h5>
              {links.map(([l, id]) => (
                <a key={l} href={id ? '#' : window.WHATNOT_URL} target={id ? undefined : '_blank'} rel="noopener noreferrer"
                  onClick={id ? (e) => { e.preventDefault(); scrollTo(id); } : undefined}>{l}</a>
              ))}
            </div>
          ))}
          <div>
            <h5>Next Drop</h5>
            <p style={{ color: 'var(--wbi-fg3)', fontSize: 14, margin: '0 0 12px' }}>The Lofi Set · Sat 06/06/26 · 11 AM.</p>
            <a className="wn-btn" href={window.WHATNOT_URL} target="_blank" rel="noopener noreferrer"><span className="dot"></span>Whatnot</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Waifu Bureau of Investigation. All cards classified. Display samples only.</span>
          <span style={{ fontFamily: 'var(--font-jp)', color: 'var(--wbi-pink-pale)' }}>推しは推せるときに推せ ♡</span>
        </div>
      </div>
    </footer>
  );
}

// ---------- App ----------
function App() {
  const lofi = window.WBI_LOFI, cyber = window.WBI_CYBER;
  const [ageOk, setAgeOk] = React.useState(() => { try { return localStorage.getItem('wbi_age_ok') === '1'; } catch (e) { return false; } });
  const [selected, setSelected] = React.useState(null);
  const enter = () => { try { localStorage.setItem('wbi_age_ok', '1'); } catch (e) {} setAgeOk(true); };
  if (!ageOk) return <AgeGate onEnter={enter} />;
  return (
    <React.Fragment>
      <WBINav />
      <WBIHero featured={lofi[0]} onSelect={setSelected} />
      <LofiShop cards={lofi} onSelect={setSelected} />
      <CyberPreview cards={cyber} />
      <WBICustom />
      <WBIFaq />
      <WBIFooter />
      {selected && <WBIDetail card={selected} onClose={() => setSelected(null)} />}
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
