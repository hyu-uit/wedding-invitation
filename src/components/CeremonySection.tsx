import ceremonyCouple from '../assets/photos/ceremony-couple.jpg'

function CeremonySection() {
  return (
    <section className="ceremony-section" aria-labelledby="ceremony-title">
      <div className="petals ceremony-petals" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <p className="ceremony-love" aria-hidden="true">
        L . O . V . E
      </p>

      <figure className="ceremony-portrait">
        <img
          src={ceremonyCouple}
          alt="Cô dâu và chú rể nhìn nhau trong khuôn viên xanh"
          loading="lazy"
        />
      </figure>

      <p className="ceremony-script">We got married</p>
      <h2 id="ceremony-title">LỄ VU QUY</h2>

      <div className="ceremony-date" aria-label="Thời gian lễ vu quy">
        <div className="ceremony-date-side ceremony-date-month">
          <span className="ceremony-rule" aria-hidden="true" />
          <span>THÁNG 09</span>
          <span className="ceremony-rule" aria-hidden="true" />
        </div>

        <div className="ceremony-date-center">
          <span>THỨ TƯ</span>
          <time className="ceremony-day" dateTime="2026-09-16">
            16
          </time>
          <time className="ceremony-time" dateTime="2026-09-16T09:00:00+07:00">
            09:00
          </time>
        </div>

        <div className="ceremony-date-side ceremony-date-year">
          <span className="ceremony-rule" aria-hidden="true" />
          <span>NĂM 2026</span>
          <span className="ceremony-rule" aria-hidden="true" />
        </div>
      </div>

      <p className="ceremony-lunar">Nhằm ngày 06 tháng 08 năm Bính Ngọ</p>
    </section>
  )
}

export default CeremonySection
