import addressCouple from '../assets/photos/address-couple.jpg'

const countdownItems = [
  { value: '15', label: 'ngày' },
  { value: '21', label: 'giờ' },
  { value: '46', label: 'phút' },
  { value: '30', label: 'giây' },
]

function AddressSection() {
  return (
    <section className="address-section" aria-labelledby="address-title">
      <div className="petals address-petals" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="address-layout">
        <figure className="address-portrait">
          <img
            src={addressCouple}
            alt="Cô dâu nắm tay chú rể trong trang phục cưới"
            loading="lazy"
          />
        </figure>

        <div className="address-content">
          <h2 id="address-title">ADDRESS</h2>
          <h3>TƯ GIA NHÀ TRAI</h3>
          <p>Ấp Hồng Hạnh - Giồng Riềng</p>

          <div className="map-placeholder" aria-label="Bản đồ địa điểm">
            <svg viewBox="0 0 48 60" aria-hidden="true">
              <path d="M24 57S8 40.8 8 24.3C8 14.9 15.2 7 24 7s16 7.9 16 17.3C40 40.8 24 57 24 57Z" />
              <circle cx="24" cy="24" r="5.5" />
            </svg>
            <span>Bản đồ địa điểm</span>
            <small>Liên kết bản đồ sẽ được cập nhật</small>
          </div>
        </div>

        <div
          className="address-countdown"
          aria-label="Đếm ngược đến ngày cưới"
        >
          {countdownItems.map(({ value, label }) => (
            <div className="countdown-item" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AddressSection
