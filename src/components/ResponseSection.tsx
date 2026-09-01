import { useEffect, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";

type SubmitState = "idle" | "submitting" | "success" | "error";

const sheetEndpoint = import.meta.env.VITE_GOOGLE_SHEET_ENDPOINT as
  | string
  | undefined;

function ResponseSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstInputRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsModalOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const closeModal = () => {
    if (submitState !== "submitting") setIsModalOpen(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!sheetEndpoint) {
      setErrorMessage("Biểu mẫu chưa được kết nối. Vui lòng thử lại sau.");
      setSubmitState("error");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      wish: String(formData.get("wish") ?? "").trim(),
      attendance: String(formData.get("attendance") ?? "Tham dự được"),
      submittedAt: new Date().toISOString(),
    };

    if (!payload.name || !payload.wish) return;

    setSubmitState("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(sheetEndpoint, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      // Google Apps Script responds with an opaque response under no-cors.
      // A rejected fetch still indicates a network-level failure.
      void response;
      form.reset();
      setSubmitState("success");
    } catch {
      setErrorMessage("Có lỗi khi gửi lời chúc. Vui lòng thử lại nhé.");
      setSubmitState("error");
    }
  };

  return (
    <>
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
            Vui lòng xác nhận tham dự để chúng mình chuẩn bị lễ cưới được thuận
            lợi và trọn vẹn nhất.
          </p>
          <button
            className="response-button"
            type="button"
            onClick={() => {
              setSubmitState("idle");
              setErrorMessage("");
              setIsModalOpen(true);
            }}
            aria-haspopup="dialog"
          >
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <path d="M10.5 13.5h11l-1.2 10h-8.6l-1.2-10Z" />
              <path d="m13 13.5 1.2-7h6.2l1.1 7M12.2 23.5 9 29M19.8 23.5l3.2 5.5" />
            </svg>
            <span>Gửi xác nhận</span>
          </button>
        </header>

        <div className="wish-invitation">
          <svg
            className="wish-illustration"
            viewBox="0 0 240 210"
            aria-hidden="true"
          >
            <path
              className="wish-envelope-back"
              d="M69 92 173 77l15 101-103 16L69 92Z"
            />
            <path className="wish-letter" d="m92 43 77 8-11 101-78-9L92 43Z" />
            <path className="wish-letter-line" d="m105 81 38 4M103 96l30 3" />
            <path
              className="wish-envelope-front"
              d="m70 94 58 45 46-60 14 99-103 16-15-100Z"
            />
            <path className="wish-envelope-fold" d="m85 193 43-54 60 39" />
            <path className="wish-flower-stem" d="M81 152c-15 12-25 25-31 43" />
            <path
              className="wish-leaf"
              d="M58 171c-22-8-35 3-37 17 17 7 31 1 37-17ZM64 165c3-22 18-29 32-24 1 18-11 29-32 24Z"
            />
            <path
              className="wish-flower"
              d="M48 147c-15-8-28-1-28 12-12-3-20 7-15 18 7 15 29 13 43-5 14 18 36 20 43 5 5-11-3-21-15-18 0-13-13-20-28-12Z"
            />
            <path className="wish-flower-center" d="M41 158h14M48 151v14" />
            <path
              className="wish-heart"
              d="M184 50c-13-14-32 4-12 22l12 11 12-11c20-18 1-36-12-22Z"
            />
            <path
              className="wish-heart wish-heart-small"
              d="M205 24c-8-8-19 2-8 13l8 7 8-7c11-11 0-21-8-13Z"
            />
          </svg>
          <p>
            Gửi lời chúc tới
            <span>cô dâu chú rể</span>
          </p>
        </div>
      </section>

      {isModalOpen &&
        createPortal(
          <div
            className="wish-modal-backdrop"
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeModal();
            }}
          >
            <div
              ref={dialogRef}
              className="wish-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="wish-modal-title"
              aria-describedby="wish-modal-description"
            >
              <button
                className="wish-modal-close"
                type="button"
                onClick={closeModal}
                aria-label="Đóng biểu mẫu"
                disabled={submitState === "submitting"}
              >
                <span aria-hidden="true">×</span>
              </button>

              {submitState === "success" ? (
                <div className="wish-modal-success" role="status">
                  <span className="wish-modal-seal" aria-hidden="true">
                    ♡
                  </span>
                  <h2 id="wish-modal-title">Đã nhận lời chúc</h2>
                  <p>
                    Cảm ơn bạn đã gửi yêu thương đến Huyền Trân và Nhựt Hòa.
                  </p>
                  <button
                    className="wish-modal-submit"
                    type="button"
                    onClick={closeModal}
                  >
                    Đóng lại
                  </button>
                </div>
              ) : (
                <>
                  <p className="wish-modal-kicker">Gửi lời thương</p>
                  <h2 id="wish-modal-title" className="wish-modal-title">
                    Lời chúc của bạn
                  </h2>
                  <div style={{ marginTop: 30 }} />
                  <form onSubmit={handleSubmit}>
                    <fieldset className="attendance-fieldset">
                      <legend>Bạn có thể tham dự không?</legend>
                      <div className="attendance-options">
                        <label className="attendance-option">
                          <input
                            type="radio"
                            name="attendance"
                            value="Tham dự được"
                            defaultChecked
                          />
                          <span className="attendance-option-content">
                            <svg viewBox="0 0 40 40" aria-hidden="true">
                              <path d="M12 5h16v14H12V5ZM10 19h20v5H10v-5ZM13 24v11M27 24v11" />
                            </svg>
                            <span>Tham dự được</span>
                          </span>
                          <span className="attendance-check" aria-hidden="true">
                            ✓
                          </span>
                        </label>
                        <label className="attendance-option">
                          <input
                            type="radio"
                            name="attendance"
                            value="Không thể tham dự"
                          />
                          <span className="attendance-option-content">
                            <svg viewBox="0 0 40 40" aria-hidden="true">
                              <path d="M12 5h16v14H12V5ZM10 19h20v5H10v-5ZM13 24v11M27 24v11" />
                              <path d="M7 6l26 28" />
                            </svg>
                            <span>Không thể tham dự</span>
                          </span>
                          <span className="attendance-check" aria-hidden="true">
                            ✓
                          </span>
                        </label>
                      </div>
                    </fieldset>

                    <label htmlFor="wish-name">Tên của bạn</label>
                    <input
                      ref={firstInputRef}
                      id="wish-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      maxLength={80}
                      required
                    />

                    <label htmlFor="wish-message">Lời chúc</label>
                    <textarea
                      id="wish-message"
                      name="wish"
                      rows={4}
                      maxLength={500}
                      required
                    />

                    {submitState === "error" && (
                      <p className="wish-modal-error" role="alert">
                        {errorMessage}
                      </p>
                    )}

                    <button
                      className="wish-modal-submit"
                      type="submit"
                      disabled={submitState === "submitting"}
                    >
                      {submitState === "submitting"
                        ? "Đang gửi…"
                        : "Gửi lời chúc"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

export default ResponseSection;
