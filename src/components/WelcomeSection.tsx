import floralSprig from '../assets/floral-sprig.png'
import bride from '../assets/photos/bride.jpg'
import groom from '../assets/photos/groom.jpg'

function WelcomeSection() {
  return (
    <section className="welcome-section" aria-labelledby="welcome-title">
      <h2 id="welcome-title" className="visually-hidden">
        Chân dung cô dâu và chú rể
      </h2>

      <img
        className="welcome-floral"
        src={floralSprig}
        alt=""
        aria-hidden="true"
      />

      <div className="welcome-pair">
        <figure className="welcome-portrait">
          <img
            src={groom}
            alt="Chú rể Huỳnh Nhựt Hòa trong trang phục cưới"
            loading="lazy"
          />
        </figure>

        <figure className="welcome-portrait">
          <img
            src={bride}
            alt="Cô dâu Dương Lê Huyền Trân trong váy cưới"
            loading="lazy"
          />
        </figure>
      </div>

      <p className="welcome-verse">
        Hữu duyên nên nghĩa vợ chồng, trăm năm giữ trọn tấm lòng cùng nhau.
      </p>
    </section>
  )
}

export default WelcomeSection
