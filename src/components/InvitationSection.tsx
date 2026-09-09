import dragon from "../assets/dragon-wall-decal.png";
import floralSprig from "../assets/floral-sprig.png";

function CelebrationMark() {
  return (
    <svg
      className="celebration-mark"
      viewBox="0 0 64 48"
      role="presentation"
      aria-hidden="true"
    >
      <path d="M13 5h16l-2 14c-.6 4-3.4 7-7 8.3V41m-7 0h14M35 5h16l-2 14c-.6 4-3.4 7-7 8.3V41m-7 0h14" />
      <path d="M14.5 16h13M36.5 16h13" />
      <path d="m20 8 2.2 3.4 3.8 1.1-2.5 3 0 4-3.5-1.5-3.5 1.5v-4l-2.5-3 3.8-1.1L20 8Zm22 0 2.2 3.4 3.8 1.1-2.5 3 0 4-3.5-1.5-3.5 1.5v-4l-2.5-3 3.8-1.1L42 8Z" />
    </svg>
  );
}

function InvitationSection() {
  return (
    <section className="details-section" aria-labelledby="invitation-title">
      <img className="details-dragon" src={dragon} alt="" aria-hidden="true" />
      <img
        className="details-floral details-floral-top"
        src={floralSprig}
        alt=""
        aria-hidden="true"
      />
      <img
        className="details-floral details-floral-bottom"
        src={floralSprig}
        alt=""
        aria-hidden="true"
      />

      <header className="invitation-heading">
        <h2 id="invitation-title">Thư mời tiệc cưới</h2>
        <p>Trân trọng kính mời</p>
        <strong>QUÝ GIA ĐÌNH</strong>
      </header>

      <h3 className="families-title">Thông tin lễ cưới</h3>

      <div className="families">
        <article className="family">
          <h4>Nhà Trai</h4>
          <div className="family-parents">
            <p>Bà Dương Thị Yến Xuân</p>
          </div>
          <address>
            Ấp Đường Gỗ Vàm
            <br />
            Xã Long Thạnh Tỉnh An Giang
          </address>
        </article>

        <span className="families-separator" aria-hidden="true">
          <CelebrationMark />
        </span>

        <article className="family">
          <h4>Nhà Gái</h4>
          <div className="family-parents">
            <p>Ông Dương Văn Mẫn</p>
            <p>Bà Lê Thị Huệ</p>
          </div>
          <address>
            Ấp Hồng Hạnh
            <br />
            Xã Giồng Riềng Tỉnh An Giang
          </address>
        </article>
      </div>

      <div className="couple-lockup" aria-label="Cô dâu và chú rể">
        <span>Huỳnh Nhựt Hòa</span>
        <b>&amp;</b>
        <span>Dương Lê Huyền Trân</span>
      </div>

      <div className="wedding-schedule">
        <h3>Lễ tân hôn</h3>
        <p>
          <span>Thứ Hai</span>
          <strong>Vào lúc 15:00</strong>
        </p>

        <div
          className="wedding-date"
          aria-label="Ngày cưới 28 tháng 09 năm 2026"
        >
          <span>Tháng 09</span>
          <time dateTime="2026-09-28">28</time>
          <span>Năm 2026</span>
        </div>

        <p className="wedding-lunar">(Nhằm Ngày 18 tháng 08 năm Bính Ngọ)</p>
      </div>

      <div className="wedding-timeline" aria-label="Lịch trình tiệc cưới">
        <ol>
          <li>
            <time dateTime="2026-09-28T16:00:00+07:00">16:00 - 18:00</time>
            <span>Check in photobook</span>
          </li>
          <li>
            <time dateTime="2026-09-28T19:00:00+07:00">19:00</time>
            <span>Pháo hoa</span>
          </li>
          <li>
            <time dateTime="2026-09-28T21:00:00+07:00">21:00 - 23:00</time>
            <span>DJ</span>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default InvitationSection;
