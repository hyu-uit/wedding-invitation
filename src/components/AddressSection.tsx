import { useEffect, useState } from "react";

import closingCouple from "../assets/photos/closing-couple.jpg";

const weddingTime = new Date("2026-09-28T15:00:00+07:00").getTime();
const septemberCalendar = [
  null,
  null,
  ...Array.from({ length: 30 }, (_, index) => index + 1),
];

function getCountdown() {
  const remaining = Math.max(weddingTime - Date.now(), 0);

  return {
    remaining,
    days: Math.floor(remaining / 86_400_000),
    hours: Math.floor((remaining / 3_600_000) % 24),
    minutes: Math.floor((remaining / 60_000) % 60),
    seconds: Math.floor((remaining / 1_000) % 60),
  };
}

function formatCountdownValue(value: number) {
  return value.toString().padStart(2, "0");
}

function AddressSection() {
  const [countdown, setCountdown] = useState(getCountdown);

  useEffect(() => {
    let timeoutId: number;

    const updateCountdown = () => {
      const nextCountdown = getCountdown();
      setCountdown(nextCountdown);

      if (nextCountdown.remaining > 0) {
        timeoutId = window.setTimeout(
          updateCountdown,
          1_000 - (Date.now() % 1_000),
        );
      }
    };

    updateCountdown();

    return () => window.clearTimeout(timeoutId);
  }, []);

  const countdownItems = [
    { value: countdown.days, label: "ngày" },
    { value: countdown.hours, label: "giờ" },
    { value: countdown.minutes, label: "phút" },
    { value: countdown.seconds, label: "giây" },
  ];

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
            src={closingCouple}
            alt="Huyền Trân và Nhựt Hòa trong ảnh chân dung cưới"
            loading="lazy"
          />
        </figure>

        <div className="address-content">
          <h2 id="address-title">Địa điểm tiệc cưới</h2>

          <address className="address-copy">
            <span>Tư gia nhà trai</span>
            <span>Ấp Đường Gỗ Vàm, Long Thạnh</span>
            <span>An Giang</span>
          </address>

          <div className="map-embed">
            <iframe
              src="https://www.google.com/maps?q=9.8425829,105.2663868&z=17&output=embed"
              title="Bản đồ địa điểm cưới"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div
          className="address-countdown"
          role="timer"
          aria-label="Đếm ngược đến 15 giờ ngày 28 tháng 09 năm 2026"
        >
          {countdownItems.map(({ value, label }) => (
            <div className="countdown-item" key={label}>
              <strong>{formatCountdownValue(value)}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div
          className="wedding-calendar"
          role="img"
          aria-label="Lịch tháng 09 năm 2026, ngày cưới 28 được đánh dấu bằng trái tim"
        >
          {septemberCalendar.map((day, index) => (
            <span
              className={
                day === 28
                  ? "wedding-calendar-day wedding-calendar-day-marked"
                  : "wedding-calendar-day"
              }
              aria-hidden="true"
              key={`${day ?? "blank"}-${index}`}
            >
              {day === 28 && (
                <svg viewBox="0 0 48 44">
                  <path d="M24 40 5.8 22.4C-4.4 12.6 2.2 2 11.4 2 17 2 21.1 5.4 24 9.3 26.9 5.4 31 2 36.6 2 45.8 2 52.4 12.6 42.2 22.4L24 40Z" />
                </svg>
              )}
              {day && <span>{day}</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AddressSection;
