import bridePortrait from '../assets/photos/bride.jpg'
import groomPortrait from '../assets/photos/groom.jpg'
import BowMark from './BowMark'

function InvitationSection() {
  return (
    <section className="details-section" aria-labelledby="invitation-title">
      <div className="petals" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <header className="invitation-heading">
        <h2 id="invitation-title">Thư mời tiệc cưới</h2>
        <div className="heading-rule" aria-hidden="true" />
        <p>Thứ Tư · 09:00</p>
        <time dateTime="2026-09-16T09:00:00+07:00">16.09.2026</time>
      </header>

      <div className="families">
        <article className="family">
          <div className="family-copy">
            <h3>Nhà gái</h3>
            <p>Ông Dương Văn Mẫn</p>
            <p>Bà Lê Thị Huệ</p>
            <address>
              Ấp Hồng Hạnh, Xã Giồng Riềng
              <br />
              Tỉnh An Giang
            </address>
          </div>
          <img
            src={bridePortrait}
            alt="Chân dung cô dâu Huyền Trân"
            loading="lazy"
          />
          <div className="person-title">
            <p>Bride</p>
            <h3>Huyền Trân</h3>
          </div>
        </article>

        <article className="family">
          <div className="family-copy">
            <h3>Nhà trai</h3>
            <p>Bà Dương Thị Yến Xuân</p>
            <address>
              Ấp Dương Gỗ Vàm, Xã Long Thạnh
              <br />
              Tỉnh An Giang
            </address>
          </div>
          <img
            src={groomPortrait}
            alt="Chân dung chú rể Nhựt Hòa"
            loading="lazy"
          />
          <div className="person-title">
            <p>Groom</p>
            <h3>Nhựt Hòa</h3>
          </div>
        </article>

        <BowMark className="families-bow" />
      </div>
    </section>
  )
}

export default InvitationSection
