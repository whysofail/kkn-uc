const logoUrl =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Firefly_RemoveBackground-pQC0SBjZWXvvEx1Q5I7X8rHwQl1zW5.png";

export default function Page() {
  return (
    <main className="construction-page">
      <div
        className="construction-orbit construction-orbit-one"
        aria-hidden="true"
      />
      <div
        className="construction-orbit construction-orbit-two"
        aria-hidden="true"
      />

      <section className="construction-card" aria-labelledby="page-title">
        <div className="brand-mark">
          <img src={logoUrl} alt="PT. Kamardikan Niaga Nusantara 2025 logo" />
        </div>
        <div className="status-pill">
          <span className="status-dot" aria-hidden="true" />
          Site in progress
        </div>
        <h1 id="page-title">Under Construction</h1>
        <p className="construction-copy">
          We are preparing something new for you. Please check back soon.
        </p>
        <div className="progress-line" aria-hidden="true">
          <span />
        </div>
        <p className="footer-note">PT. Kamardikan Niaga Nusantara</p>
      </section>
    </main>
  );
}
