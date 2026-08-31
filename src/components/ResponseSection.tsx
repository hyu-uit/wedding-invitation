function ResponseSection() {
  return (
    <section className="response-section" aria-labelledby="response-title">
      <div className="petals response-petals" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <header className="response-heading">
        <p>R.S.V.P.</p>
        <h2 id="response-title">Xác nhận tham dự</h2>
        <p className="response-description">
          Vui lòng xác nhận tham dự để chúng mình chuẩn bị lễ cưới được thuận lợi
          và trọn vẹn nhất.
        </p>
        <button
          className="response-button"
          type="button"
          disabled
          aria-label="Gửi xác nhận, tính năng chưa mở"
        >
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path d="M10.5 13.5h11l-1.2 10h-8.6l-1.2-10Z" />
            <path d="m13 13.5 1.2-7h6.2l1.1 7M12.2 23.5 9 29M19.8 23.5l3.2 5.5" />
          </svg>
          <span>Gửi xác nhận</span>
        </button>
      </header>

      <div className="wish-invitation">
        <svg className="wish-illustration" viewBox="0 0 240 210" aria-hidden="true">
          <path className="wish-envelope-back" d="M69 92 173 77l15 101-103 16L69 92Z" />
          <path className="wish-letter" d="m92 43 77 8-11 101-78-9L92 43Z" />
          <path className="wish-letter-line" d="m105 81 38 4M103 96l30 3" />
          <path className="wish-envelope-front" d="m70 94 58 45 46-60 14 99-103 16-15-100Z" />
          <path className="wish-envelope-fold" d="m85 193 43-54 60 39" />
          <path className="wish-flower-stem" d="M81 152c-15 12-25 25-31 43" />
          <path className="wish-leaf" d="M58 171c-22-8-35 3-37 17 17 7 31 1 37-17ZM64 165c3-22 18-29 32-24 1 18-11 29-32 24Z" />
          <path className="wish-flower" d="M48 147c-15-8-28-1-28 12-12-3-20 7-15 18 7 15 29 13 43-5 14 18 36 20 43 5 5-11-3-21-15-18 0-13-13-20-28-12Z" />
          <path className="wish-flower-center" d="M41 158h14M48 151v14" />
          <path className="wish-heart" d="M184 50c-13-14-32 4-12 22l12 11 12-11c20-18 1-36-12-22Z" />
          <path className="wish-heart wish-heart-small" d="M205 24c-8-8-19 2-8 13l8 7 8-7c11-11 0-21-8-13Z" />
        </svg>
        <p>
          Gửi lời chúc tới
          <span>cô dâu chú rể</span>
        </p>
      </div>
    </section>
  )
}

export default ResponseSection
