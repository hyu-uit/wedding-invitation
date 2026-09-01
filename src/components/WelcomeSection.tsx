import welcomeCouple from '../assets/photos/welcome-couple.jpg'

const septemberDays = Array.from({ length: 30 }, (_, index) => index + 1)

function WelcomeSection() {
  return (
    <section className="welcome-section" aria-labelledby="welcome-title">
      <div className="petals welcome-petals" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="welcome-photo-wrap">
        <svg
          className="welcome-title-art"
          viewBox="0 0 620 390"
          aria-hidden="true"
        >
          <path id="welcome-curve" d="M 10 360 A 300 300 0 0 1 610 360" />
          <text>
            <textPath href="#welcome-curve" startOffset="50%">
              WELCOME TO OUR WEDDING
            </textPath>
          </text>
        </svg>
        <h2 id="welcome-title" className="visually-hidden">
          Welcome to our wedding
        </h2>

        <figure className="welcome-portrait">
          <img
            src={welcomeCouple}
            alt="Cô dâu và chú rể nắm tay nhau giữa khu vườn"
            loading="lazy"
          />

          <div
            className="welcome-calendar"
            role="img"
            aria-label="Lịch tháng 09 năm 2026, ngày cưới 16 được đánh dấu"
          >
            <div className="welcome-calendar-grid">
              <span aria-hidden="true" />
              {septemberDays.map((day) => (
                <span
                  className={day === 16 ? 'calendar-day calendar-day-marked' : 'calendar-day'}
                  key={day}
                >
                  {day === 16 && (
                    <svg viewBox="0 0 48 44" aria-hidden="true">
                      <path d="M24 40 5.8 22.4C-4.4 12.6 2.2 2 11.4 2 17 2 21.1 5.4 24 9.3 26.9 5.4 31 2 36.6 2 45.8 2 52.4 12.6 42.2 22.4L24 40Z" />
                    </svg>
                  )}
                  <span>{day}</span>
                </span>
              ))}
            </div>
          </div>
        </figure>
      </div>

      <p className="welcome-verse">
        <span>Hữu duyên nên nghĩa vợ chồng,</span>
        <span>Trăm năm giữ trọn tấm lòng cùng nhau</span>
      </p>
    </section>
  )
}

export default WelcomeSection
