import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view so the navbar can highlight it.
 * `sectionIds` should be a stable array of DOM ids (without the "#").
 */
export default function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const ids = Array.isArray(sectionIds) ? sectionIds : [sectionIds];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    let frame = 0;

    const update = () => {
      frame = 0;
      const marker = window.scrollY + Math.min(window.innerHeight * 0.35, 260);
      let current = ids[0] ?? "";

      for (const section of sections) {
        const top = section.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = section.id;
      }

      // When the page is scrolled to the very bottom, the last section wins.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom && sections.length) {
        current = sections[sections.length - 1].id;
      }

      setActiveId(current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [sectionIds]);

  return activeId;
}
