import dragonPhoenix from "../assets/dragon-phoenix.png";
import floralSprig from "../assets/floral-sprig.png";

function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="couple-names">
      <img
        className="hero-floral"
        src={floralSprig}
        alt=""
        aria-hidden="true"
      />

      <div className="hero-topline">
        <span>SAVE THE DATE</span>
        <time dateTime="2026-09-28">28.09.2026</time>
      </div>

      <div className="hero-names">
        <h1 id="couple-names">
          <span>Nhựt Hòa</span>
          <b>&amp;</b>
          <span>Huyền Trân</span>
        </h1>
      </div>

      <img
        className="hero-dragon"
        src={dragonPhoenix}
        alt=""
        aria-hidden="true"
      />

      <div className="hero-ribbon">
        <span className="hero-happiness" aria-hidden="true">囍</span>
        <strong className="hero-ceremony-label">Lễ tân hôn</strong>
      </div>

      <p className="hero-blessing">
        Hạnh phúc không nằm ở nơi ta đến, mà ở từng bước ta sánh vai bên nhau
        trên suốt chặng đường.
      </p>

    </section>
  );
}

export default HeroSection;
