import React, { useState, useMemo } from "react";

const DUMMY_IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&q=80",
    srcWebp: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&q=80&fm=webp",
    title: "Herbst am See",
    year: 2023,
    category: "Landschaft",
    tags: ["See", "Herbst", "Langzeitbelichtung"],
    camera: "Sony A7 III",
    description: "Stimmungsvolles Licht am Morgen.",
    favorite: false,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&q=80",
    srcWebp: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&q=80&fm=webp",
    title: "Porträt im Studio",
    year: 2024,
    category: "Porträt",
    tags: ["Schwarzweiß", "Studio"],
    camera: "Canon R6",
    description: "Charakterstarkes Porträt mit weichem Licht.",
    favorite: false,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
    srcWebp: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80&fm=webp",
    title: "Architektur Minimal",
    year: 2022,
    category: "Architektur",
    tags: ["Minimal", "Strukturen"],
    camera: "Nikon Z6",
    description: "Geometrische Formen im Gegenlicht.",
    favorite: false,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&q=80",
    srcWebp: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&q=80&fm=webp",
    title: "Waldweg im Nebel",
    year: 2023,
    category: "Landschaft",
    tags: ["Nebel", "Wald"],
    camera: "Sony A7 III",
    description: "Mystische Stimmung im Herbstwald.",
    favorite: false,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
    srcWebp: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80&fm=webp",
    title: "Businessporträt Outdoor",
    year: 2024,
    category: "Porträt",
    tags: ["Outdoor", "Business"],
    camera: "Canon R6",
    description: "Natürliches Licht für authentische Wirkung.",
    favorite: false,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1465101053361-763ab02bced9?w=600&q=80",
    srcWebp: "https://images.unsplash.com/photo-1465101053361-763ab02bced9?w=600&q=80&fm=webp",
    title: "Bergsee Morgenlicht",
    year: 2022,
    category: "Landschaft",
    tags: ["See", "Berge"],
    camera: "Sony A7 III",
    description: "Klares Wasser und Spiegelung im Sonnenaufgang.",
    favorite: false,
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=601&q=80",
    srcWebp: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=601&q=80&fm=webp",
    title: "Herbstlaub am Fluss",
    year: 2023,
    category: "Landschaft",
    tags: ["Herbst", "Fluss"],
    camera: "Sony A7 III",
    description: "Goldene Farben und sanftes Wasser.",
    favorite: false,
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=601&q=80",
    srcWebp: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=601&q=80&fm=webp",
    title: "Porträt mit Hut",
    year: 2024,
    category: "Porträt",
    tags: ["Studio", "Hut"],
    camera: "Canon R6",
    description: "Kreatives Lichtspiel im Studio.",
    favorite: false,
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=601&q=80",
    srcWebp: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=601&q=80&fm=webp",
    title: "Architektur bei Nacht",
    year: 2022,
    category: "Architektur",
    tags: ["Nacht", "Licht"],
    camera: "Nikon Z6",
    description: "Beleuchtete Fassade im urbanen Raum.",
    favorite: false,
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=601&q=80",
    srcWebp: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=601&q=80&fm=webp",
    title: "Waldlichtung",
    year: 2023,
    category: "Landschaft",
    tags: ["Wald", "Licht"],
    camera: "Sony A7 III",
    description: "Sonnenstrahlen durchbrechen das Blätterdach.",
    favorite: false,
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=601&q=80",
    srcWebp: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=601&q=80&fm=webp",
    title: "Businessporträt Lächeln",
    year: 2024,
    category: "Porträt",
    tags: ["Business", "Outdoor"],
    camera: "Canon R6",
    description: "Sympathisches Lächeln im Gegenlicht.",
    favorite: false,
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1465101053361-763ab02bced9?w=601&q=80",
    srcWebp: "https://images.unsplash.com/photo-1465101053361-763ab02bced9?w=601&q=80&fm=webp",
    title: "Bergpanorama",
    year: 2022,
    category: "Landschaft",
    tags: ["Berge", "Panorama"],
    camera: "Sony A7 III",
    description: "Weite Sicht über die Alpen.",
    favorite: false,
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=602&q=80",
    srcWebp: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=602&q=80&fm=webp",
    title: "See im Morgennebel",
    year: 2023,
    category: "Landschaft",
    tags: ["See", "Nebel"],
    camera: "Sony A7 III",
    description: "Mystische Stimmung am Wasser.",
    favorite: false,
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=602&q=80",
    srcWebp: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=602&q=80&fm=webp",
    title: "Porträt mit Brille",
    year: 2024,
    category: "Porträt",
    tags: ["Studio", "Brille"],
    camera: "Canon R6",
    description: "Charakterkopf mit markanter Brille.",
    favorite: false,
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=602&q=80",
    srcWebp: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=602&q=80&fm=webp",
    title: "Architektur Detail",
    year: 2022,
    category: "Architektur",
    tags: ["Detail", "Strukturen"],
    camera: "Nikon Z6",
    description: "Fassadendetail im Gegenlicht.",
    favorite: false,
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=602&q=80",
    srcWebp: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=602&q=80&fm=webp",
    title: "Waldweg im Frühling",
    year: 2023,
    category: "Landschaft",
    tags: ["Wald", "Frühling"],
    camera: "Sony A7 III",
    description: "Frisches Grün und zartes Licht.",
    favorite: false,
  },
  {
    id: 17,
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=602&q=80",
    srcWebp: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=602&q=80&fm=webp",
    title: "Businessporträt Urban",
    year: 2024,
    category: "Porträt",
    tags: ["Business", "Urban"],
    camera: "Canon R6",
    description: "Porträt vor moderner Architektur.",
    favorite: false,
  },
  {
    id: 18,
    src: "https://images.unsplash.com/photo-1465101053361-763ab02bced9?w=602&q=80",
    srcWebp: "https://images.unsplash.com/photo-1465101053361-763ab02bced9?w=602&q=80&fm=webp",
    title: "Bergsee Panorama",
    year: 2022,
    category: "Landschaft",
    tags: ["See", "Panorama"],
    camera: "Sony A7 III",
    description: "Weite und Ruhe am Wasser.",
    favorite: false,
  },
  {
    id: 19,
    src: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=603&q=80",
    srcWebp: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=603&q=80&fm=webp",
    title: "Herbstwald",
    year: 2023,
    category: "Landschaft",
    tags: ["Herbst", "Wald"],
    camera: "Sony A7 III",
    description: "Bunte Blätter und Nebel.",
    favorite: false,
  },
  {
    id: 20,
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=603&q=80",
    srcWebp: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=603&q=80&fm=webp",
    title: "Porträt mit Sonnenbrille",
    year: 2024,
    category: "Porträt",
    tags: ["Outdoor", "Sonnenbrille"],
    camera: "Canon R6",
    description: "Cooles Porträt im Gegenlicht.",
    favorite: false,
  },
  {
    id: 21,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=603&q=80",
    srcWebp: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=603&q=80&fm=webp",
    title: "Architektur Spiegelung",
    year: 2022,
    category: "Architektur",
    tags: ["Spiegelung", "Strukturen"],
    camera: "Nikon Z6",
    description: "Fassade spiegelt den Himmel.",
    favorite: false,
  },
  {
    id: 22,
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=603&q=80",
    srcWebp: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=603&q=80&fm=webp",
    title: "Waldlicht im Sommer",
    year: 2023,
    category: "Landschaft",
    tags: ["Wald", "Sommer"],
    camera: "Sony A7 III",
    description: "Sattes Grün und Sonnenstrahlen.",
    favorite: false,
  },
  {
    id: 23,
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=603&q=80",
    srcWebp: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=603&q=80&fm=webp",
    title: "Businessporträt Classic",
    year: 2024,
    category: "Porträt",
    tags: ["Business", "Classic"],
    camera: "Canon R6",
    description: "Zeitloses Businessporträt.",
    favorite: false,
  },
  {
    id: 24,
    src: "https://images.unsplash.com/photo-1465101053361-763ab02bced9?w=603&q=80",
    srcWebp: "https://images.unsplash.com/photo-1465101053361-763ab02bced9?w=603&q=80&fm=webp",
    title: "Bergsee Abendstimmung",
    year: 2022,
    category: "Landschaft",
    tags: ["See", "Abend"],
    camera: "Sony A7 III",
    description: "Goldene Stunde am Wasser.",
    favorite: false,
  },
  {
    id: 25,
    src: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=604&q=80",
    srcWebp: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=604&q=80&fm=webp",
    title: "See im Winter",
    year: 2023,
    category: "Landschaft",
    tags: ["See", "Winter"],
    camera: "Sony A7 III",
    description: "Eis und Schnee am Ufer.",
    favorite: false,
  },
];

const CATEGORIES = ["Alle", "Landschaft", "Porträt", "Architektur"];
const TAGS = ["Alle", "Schwarzweiß", "Langzeitbelichtung", "See", "Herbst", "Studio", "Minimal", "Strukturen", "Nebel", "Wald", "Outdoor", "Business"];
const SORTS = [
  { label: "Neueste zuerst", value: "desc" },
  { label: "Älteste zuerst", value: "asc" },
  { label: "Alphabetisch", value: "alpha" },
];

function filterImages(images, category, tag, search, sort) {
  let filtered = images;
  if (category && category !== "Alle") filtered = filtered.filter(img => img.category === category);
  if (tag && tag !== "Alle") filtered = filtered.filter(img => img.tags.includes(tag));
  if (search) filtered = filtered.filter(img => img.title.toLowerCase().includes(search.toLowerCase()));
  if (sort === "desc") filtered = filtered.sort((a, b) => b.year - a.year);
  if (sort === "asc") filtered = filtered.sort((a, b) => a.year - b.year);
  if (sort === "alpha") filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
  return filtered;
}

export default function Portfolio() {
  const [category, setCategory] = useState("Alle");
  const [tag, setTag] = useState("Alle");
  const [sort, setSort] = useState("desc");
  const [search, setSearch] = useState("");
  const [lightbox, setLightbox] = useState(null);
  const [page, setPage] = useState(1);
  const perPage = 10;

  const filtered = useMemo(() => filterImages(DUMMY_IMAGES, category, tag, search, sort), [category, tag, search, sort]);
  const paged = filtered.slice(0, page * perPage);

  return (
    <main style={{background: '#181818', borderRadius: '1rem', padding: '2rem 1rem'}}>
      <h1>Portfolio</h1>
      {/* Filterleiste */}
      <div style={{display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 24, alignItems: 'center'}}>
        <select value={category} onChange={e => setCategory(e.target.value)}>
          {CATEGORIES.map(c => <option key={c}>{c}</option>)}
        </select>
        <select value={tag} onChange={e => setTag(e.target.value)}>
          {TAGS.map(t => <option key={t}>{t}</option>)}
        </select>
        <select value={sort} onChange={e => setSort(e.target.value)}>
          {SORTS.map(s => <option value={s.value} key={s.value}>{s.label}</option>)}
        </select>
        <input type="search" placeholder="Suche..." value={search} onChange={e => setSearch(e.target.value)} style={{flex: 1, minWidth: 120, padding: 6, borderRadius: 8, border: '1px solid #ddd'}} />
      </div>
      {/* Grid-Layout */}
      <div className="gallery-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px 56px'}}>
        {paged.map(img => (
          <button
            key={img.id}
            className="gallery-item"
            style={{aspectRatio: '4/3', padding: 0, border: 'none', background: 'none', position: 'relative', outline: 'none'}}
            onClick={() => setLightbox(img)}
            tabIndex={0}
            aria-label={img.title}
          >
            <picture>
              <source srcSet={img.srcWebp} type="image/webp" />
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem', filter: 'brightness(0.97)', transition: 'transform 0.2s, filter 0.2s'}}
              />
            </picture>
            <div className="gallery-overlay" style={{position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.18)', color: '#fff', opacity: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', borderRadius: '1rem', padding: 12, fontSize: 16, fontWeight: 500, transition: 'opacity 0.2s'}}>
              <span>{img.title} <span style={{fontWeight: 400, fontSize: 14}}>({img.year})</span></span>
              <span style={{fontSize: 13}}>{img.category}</span>
            </div>
          </button>
        ))}
      </div>
      {/* Infinite Scroll / Mehr laden */}
      {paged.length < filtered.length && (
        <div style={{textAlign: 'center', margin: '2rem 0'}}>
          <button onClick={() => setPage(page + 1)} style={{padding: '0.8rem 2.5rem', borderRadius: 24, background: '#ffb400', color: '#181818', border: 'none', fontSize: 18, cursor: 'pointer'}}>Mehr laden</button>
        </div>
      )}
      {/* Lightbox-Modal */}
      {lightbox && (
        <div
          tabIndex={-1}
          style={{position: 'fixed', inset: 0, background: 'rgba(24,24,24,0.98)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center'}}
          onClick={() => setLightbox(null)}
          onKeyDown={e => { if (e.key === 'Escape') setLightbox(null); }}
        >
          <div style={{background: '#232323', borderRadius: 12, maxWidth: 900, width: '90vw', padding: 24, position: 'relative', color: '#eaeaea', boxShadow: '0 4px 32px rgba(0,0,0,0.45)', maxHeight: '75vh', overflowY: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center'}} onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} style={{width: '100%', borderRadius: 8, marginBottom: 16, background: '#181818', maxHeight: '60vh', objectFit: 'contain'}} />
            <div style={{marginBottom: 8, color: '#ffb400'}}><b>{lightbox.title}</b> <span style={{color: '#aaa'}}>({lightbox.year})</span></div>
            <div style={{fontSize: 15, marginBottom: 8}}>{lightbox.category} | {lightbox.camera}</div>
            <div style={{fontSize: 15, marginBottom: 16}}>{lightbox.description}</div>
            <button onClick={() => setLightbox(null)} style={{position: 'absolute', top: 12, right: 12, background: '#333', color: '#ffb400', border: 'none', borderRadius: 20, width: 36, height: 36, fontSize: 22, cursor: 'pointer'}}>×</button>
            <button style={{position: 'absolute', bottom: 12, right: 60, background: '#232323', color: '#ffb400', border: '1px solid #444', borderRadius: 20, width: 36, height: 36, fontSize: 18, cursor: 'pointer'}}>♡</button>
            <button style={{position: 'absolute', bottom: 12, right: 12, background: '#232323', color: '#ffb400', border: '1px solid #444', borderRadius: 20, width: 36, height: 36, fontSize: 18, cursor: 'pointer'}}>↗</button>
          </div>
        </div>
      )}
    </main>
  );
}
