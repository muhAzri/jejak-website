"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const SCREEN_W = 393;
const SCREEN_H = 852;

/**
 * A cropped phone bezel that renders a fixed 393×852 screen and scales it
 * to whatever width the frame ends up with.
 */
export function PhoneFrame({
  frameStyle,
  screenStyle,
  initialScale,
  children,
}: {
  frameStyle: CSSProperties;
  screenStyle: CSSProperties;
  initialScale: number;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(initialScale);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / SCREEN_W);
    const ro = new ResizeObserver(update);
    ro.observe(el);
    update();
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} aria-hidden="true" style={frameStyle}>
      <div
        style={{
          width: SCREEN_W,
          height: SCREEN_H,
          transformOrigin: "0 0",
          transform: `scale(${scale})`,
          display: "flex",
          flexDirection: "column",
          fontVariantNumeric: "tabular-nums",
          textAlign: "left",
          ...screenStyle,
        }}
      >
        {children}
      </div>
    </div>
  );
}
