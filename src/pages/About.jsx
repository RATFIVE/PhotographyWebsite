// Über mich (About)
export default function About() {
  return (
    <main>
      <h1>Über mich</h1>
      <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&q=80" alt="Portraitfoto" className="portrait" style={{width: 180, borderRadius: '50%', margin: '2rem auto', display: 'block'}} />
      <section className="bio">
        <h2>Biografie</h2>
        <p>Ich bin Max Mustermann, leidenschaftlicher Fotograf aus Berlin. Mein Stil: Authentisch, emotional, modern. Auszeichnungen: "Best Newcomer 2023", "Fine Art Award 2024".</p>
      </section>
      <section className="equipment">
        <h2>Ausrüstung</h2>
        <ul>
          <li>Kamera: Sony A7 III</li>
          <li>Objektive: 24-70mm, 85mm, 35mm</li>
          <li>Drohne: DJI Mini 3</li>
        </ul>
      </section>
      <section className="social-proof">
        <h2>Bekannt aus</h2>
        <div className="press-logos">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Logo_der_Süddeutschen_Zeitung.svg" alt="SZ" style={{height: 32, marginRight: 16}} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Logo_DIE_ZEIT.svg" alt="Die Zeit" style={{height: 32}} />
        </div>
      </section>
    </main>
  );
}
