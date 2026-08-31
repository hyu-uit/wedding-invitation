import closingCouple from '../assets/photos/closing-couple.jpg'

function ClosingSection() {
  return (
    <section className="closing-section" aria-labelledby="closing-title">
      <figure className="closing-portrait">
        <img
          src={closingCouple}
          alt="Huyền Trân và Nhựt Hòa trong ảnh chân dung cưới"
          loading="lazy"
        />
      </figure>

      <footer className="closing-footer">
        <p id="closing-title">Trân trọng kính mời</p>
      </footer>
    </section>
  )
}

export default ClosingSection
