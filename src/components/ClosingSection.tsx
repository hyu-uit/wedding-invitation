import closingCouple from "../assets/photos/closing-couple.jpg";

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
        <blockquote className="closing-quote">
          <p>
            “Hạnh phúc là khi có những người thân yêu cùng sẻ chia. Sự hiện diện
            của bạn sẽ làm ngày đặc biệt này thêm trọn vẹn”{" "}
            <span className="closing-heart" role="img" aria-label="yêu thương">
              ❤️
            </span>
          </p>
        </blockquote>
        <p className="closing-invitation" id="closing-title">
          Trân trọng kính mời!
        </p>
      </footer>
    </section>
  );
}

export default ClosingSection;
