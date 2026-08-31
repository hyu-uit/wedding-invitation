import galleryBackdrop from '../assets/photos/welcome-couple.jpg'
import galleryBoardOne from '../assets/photos/gallery-board-one.jpg'
import galleryBoardTwo from '../assets/photos/gallery-board-two.jpg'

function GallerySection() {
  return (
    <section className="gallery-section" aria-labelledby="gallery-title">
      <img
        className="gallery-backdrop"
        src={galleryBackdrop}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
      <div className="gallery-wash" aria-hidden="true" />

      <div className="petals gallery-petals" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <h2 id="gallery-title" className="visually-hidden">
        Ảnh kỷ niệm của cô dâu và chú rể
      </h2>

      <div className="gallery-collage">
        <figure className="gallery-board gallery-board-primary">
          <img
            src={galleryBoardOne}
            alt="Cô dâu và chú rể tạo dáng vui vẻ trên bãi cỏ"
            loading="lazy"
          />
        </figure>
        <figure className="gallery-board gallery-board-secondary">
          <img
            src={galleryBoardTwo}
            alt="Bộ ảnh mùa cưới của cô dâu và chú rể"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  )
}

export default GallerySection
