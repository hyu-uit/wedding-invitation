import coupleHero from '../assets/photos/couple-hero.jpg'
import BowMark from './BowMark'

function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="couple-names">
      <img
        className="hero-photo"
        src={coupleHero}
        alt="Huyền Trân và Nhựt Hòa nắm tay nhìn nhau trong trang phục cưới"
        fetchPriority="high"
      />
      <div className="hero-shade" aria-hidden="true" />

      <header className="save-date">
        <p>Save the date</p>
        <time dateTime="2026-09-16">16.09.2026</time>
      </header>

      <div className="hero-card">
        <BowMark className="hero-bow" />
        <p className="wedding-word">Wedding</p>
        <h1 id="couple-names">Huyền Trân &amp; Nhựt Hòa</h1>
      </div>
    </section>
  )
}

export default HeroSection
