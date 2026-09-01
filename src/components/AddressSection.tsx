import { useEffect, useState } from "react";

import addressCouple from "../assets/photos/address-couple.jpg";

const weddingTime = new Date("2026-09-16T09:00:00+07:00").getTime();

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
            src={addressCouple}
            alt="Cô dâu nắm tay chú rể trong trang phục cưới"
            loading="lazy"
          />
        </figure>

        <div className="address-content">
          <h2 id="address-title">ADDRESS</h2>

          <p>255 Ấp Hồng Hạnh</p>
          <p>Giồng Riềng - An Giang</p>

          <div className="map-embed">
            <iframe
              src="https://www.google.com/maps?q=9.8956069,105.3014338&z=17&output=embed"
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
          aria-label="Đếm ngược đến 09 giờ ngày 16 tháng 09 năm 2026"
        >
          {countdownItems.map(({ value, label }) => (
            <div className="countdown-item" key={label}>
              <strong>{formatCountdownValue(value)}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AddressSection;
