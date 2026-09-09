import { useLayoutEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import dragonPhoenix from "../assets/dragon-phoenix.png";

gsap.registerPlugin(useGSAP);

type InvitationCoverProps = {
  onOpening: () => void;
  onOpened: () => void;
};

function InvitationCover({ onOpening, onOpened }: InvitationCoverProps) {
  const coverRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isOpening, setIsOpening] = useState(false);

  useLayoutEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    const syncAmbientMotion = () => {
      coverRef.current?.classList.toggle("cover-paused", document.hidden);
    };

    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.body.classList.add("cover-is-open");
    document.addEventListener("visibilitychange", syncAmbientMotion);
    syncAmbientMotion();

    return () => {
      document.body.classList.remove("cover-is-open");
      document.removeEventListener("visibilitychange", syncAmbientMotion);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useGSAP(
    () => {
      if (!isOpening || !coverRef.current || !cardRef.current) return;

      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(coverRef.current, { autoAlpha: 0 });
        onOpened();
      });

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ onComplete: onOpened })
          .to(cardRef.current, {
            scale: 1.04,
            filter: "blur(6px)",
            opacity: 0,
            duration: 0.75,
            ease: "expo.in",
          })
          .to(
            coverRef.current,
            {
              opacity: 0,
              duration: 0.55,
              ease: "power2.out",
            },
            "-=0.32",
          );
      });

      return () => media.revert();
    },
    {
      dependencies: [isOpening],
      revertOnUpdate: true,
      scope: coverRef,
    },
  );

  const openCover = () => {
    if (isOpening) return;

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    onOpening();
    setIsOpening(true);
  };

  return (
    <div ref={coverRef} className="cover-screen" aria-busy={isOpening}>
      <div className="cover-happiness-field" aria-hidden="true">
        <span>囍</span>
        <span>囍</span>
        <span>囍</span>
        <span>囍</span>
        <span>囍</span>
        <span>囍</span>
        <span>囍</span>
        <span>囍</span>
      </div>

      <div ref={cardRef} className="cover-card">
        <img
          className="cover-dragon-phoenix"
          src={dragonPhoenix}
          alt=""
          aria-hidden="true"
        />

        <div className="cover-seal" aria-hidden="true">
          <span>囍</span>
        </div>

        <div className="cover-copy">
          <p className="cover-invitation-label">Thiệp mời lễ tân hôn</p>
          <h1>
            <span>Nhựt Hòa</span>
            <b>&amp;</b>
            <span>Huyền Trân</span>
          </h1>
          <time dateTime="2026-09-28T15:00:00+07:00">15:00 · 28.09.2026</time>

          <div className="cover-guest">
            <span>Kính mời</span>
            <strong>Quý gia đình</strong>
          </div>

          <p className="cover-invite-note">
            Đến dự buổi tiệc chung vui cùng gia đình
          </p>

          <button type="button" onClick={openCover} disabled={isOpening}>
            {isOpening ? "Đang mở thiệp…" : "Mở thiệp"}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default InvitationCover;
