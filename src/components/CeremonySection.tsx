import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import ceremonyCouple from "../assets/photos/ceremony-couple.jpg";

gsap.registerPlugin(useGSAP);

function CeremonySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const dayRef = useRef<HTMLTimeElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const day = dayRef.current;

      if (!section || !day) return;

      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(day, { clearProps: "transform,willChange" });
      });

      media.add("(prefers-reduced-motion: no-preference)", () => {
        let isVisible = false;
        const hop = gsap.to(day, {
          y: -12,
          duration: 0.48,
          ease: "sine.inOut",
          repeat: -1,
          repeatDelay: 0.08,
          yoyo: true,
          paused: true,
        });

        const syncMotion = () => {
          if (isVisible && !document.hidden) {
            gsap.set(day, { willChange: "transform" });
            hop.play();
            return;
          }

          hop.pause();
          gsap.set(day, { willChange: "auto" });
        };

        const observer = new IntersectionObserver(
          ([entry]) => {
            isVisible = entry.isIntersecting;
            syncMotion();
          },
          { threshold: 0.25 },
        );

        observer.observe(section);
        document.addEventListener("visibilitychange", syncMotion);

        return () => {
          observer.disconnect();
          document.removeEventListener("visibilitychange", syncMotion);
          hop.kill();
          gsap.set(day, { clearProps: "transform,willChange" });
        };
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="ceremony-section"
      aria-labelledby="ceremony-title"
    >
      <div className="petals ceremony-petals" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <p className="ceremony-love" aria-hidden="true">
        L . O . V . E
      </p>

      <figure className="ceremony-portrait">
        <img
          src={ceremonyCouple}
          alt="Cô dâu và chú rể nhìn nhau trong khuôn viên xanh"
          loading="lazy"
        />
      </figure>

      <p className="ceremony-script">We got married</p>
      <h2 id="ceremony-title">LỄ TÂN HÔN</h2>

      <div className="ceremony-date" aria-label="Thời gian lễ tân hôn">
        <div className="ceremony-date-side ceremony-date-month">
          <span className="ceremony-rule" aria-hidden="true" />
          <span>THÁNG 09</span>
          <span className="ceremony-rule" aria-hidden="true" />
        </div>

        <div className="ceremony-date-center">
          <span>THỨ HAI</span>
          <time ref={dayRef} className="ceremony-day" dateTime="2026-09-28">
            28
          </time>
          <time className="ceremony-time" dateTime="2026-09-28T15:00:00+07:00">
            15:00
          </time>
        </div>

        <div className="ceremony-date-side ceremony-date-year">
          <span className="ceremony-rule" aria-hidden="true" />
          <span>NĂM 2026</span>
          <span className="ceremony-rule" aria-hidden="true" />
        </div>
      </div>

      <div className="ceremony-lunar">
        <p>(Nhằm ngày 18 tháng 08 năm Bính Ngọ)</p>
        <p>(Nhóm họ 17 tháng 08 năm Bính Ngọ)</p>
      </div>
    </section>
  );
}

export default CeremonySection;
