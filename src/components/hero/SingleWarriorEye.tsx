"use client";

import { useEffect, useRef } from "react";

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export function SingleWarriorEye() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const eyeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const eye = eyeRef.current;

    if (!root || !eye) {
      return;
    }

    const rootElement = root;
    const eyeElement = eye;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarseQuery = window.matchMedia("(pointer: coarse)");
    const timeouts = new Set<number>();
    let animationFrame = 0;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let isPointerActive = false;
    let isIdleActive = false;

    const clearAllTimeouts = () => {
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
      timeouts.clear();
    };

    const scheduleTimeout = (callback: () => void, delay: number) => {
      const timeout = window.setTimeout(() => {
        timeouts.delete(timeout);
        callback();
      }, delay);
      timeouts.add(timeout);
      return timeout;
    };

    function getGazeLimits() {
      const styles = window.getComputedStyle(rootElement);
      const x = Number.parseFloat(styles.getPropertyValue("--look-max-x"));
      const y = Number.parseFloat(styles.getPropertyValue("--look-max-y"));

      return {
        x: Number.isFinite(x) ? x : 22,
        y: Number.isFinite(y) ? y : 10,
      };
    }

    function requestRender() {
      if (!animationFrame && !motionQuery.matches) {
        animationFrame = window.requestAnimationFrame(render);
      }
    }

    function setTarget(x: number, y: number) {
      const limits = getGazeLimits();
      targetX = clamp(x, -limits.x, limits.x);
      targetY = clamp(y, -limits.y, limits.y);
      requestRender();
    }

    function render() {
      currentX += (targetX - currentX) * 0.11;
      currentY += (targetY - currentY) * 0.11;
      rootElement.style.setProperty("--look-x", `${currentX.toFixed(2)}px`);
      rootElement.style.setProperty("--look-y", `${currentY.toFixed(2)}px`);

      if (
        (isPointerActive || isIdleActive) ||
        Math.abs(targetX - currentX) > 0.06 ||
        Math.abs(targetY - currentY) > 0.06
      ) {
        animationFrame = window.requestAnimationFrame(render);
      } else {
        animationFrame = 0;
      }
    }

    function resetGaze() {
      isPointerActive = false;
      setTarget(0, 0);
    }

    function updatePointerGaze(event: PointerEvent) {
      if (motionQuery.matches || coarseQuery.matches || event.pointerType === "touch") {
        return;
      }

      const limits = getGazeLimits();
      const bounds = eyeElement.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY) || 1;

      targetX = clamp(
        (deltaX / distance) * Math.min(limits.x, Math.abs(deltaX) / 16),
        -limits.x,
        limits.x,
      );
      targetY = clamp(
        (deltaY / distance) * Math.min(limits.y, Math.abs(deltaY) / 28),
        -limits.y,
        limits.y,
      );
      isPointerActive = true;
      isIdleActive = false;
      requestRender();
    }

    function blink() {
      if (motionQuery.matches) {
        return;
      }

      eyeElement.classList.add("is-blinking");
      scheduleTimeout(() => eyeElement.classList.remove("is-blinking"), 190);
    }

    function scheduleBlink() {
      if (motionQuery.matches) {
        return;
      }

      scheduleTimeout(() => {
        blink();
        if (Math.random() < 0.13) {
          scheduleTimeout(blink, 120 + Math.random() * 100);
        }
        scheduleBlink();
      }, 4000 + Math.random() * 5000);
    }

    function scheduleIdleGaze() {
      if (motionQuery.matches || !coarseQuery.matches) {
        return;
      }

      isIdleActive = true;
      const choices = [
        { x: 0, y: 0 },
        { x: -10, y: 1 },
        { x: 10, y: -1 },
        { x: -5, y: -3 },
        { x: 6, y: 2 },
      ];
      const next = choices[Math.floor(Math.random() * choices.length)];

      scheduleTimeout(() => {
        if (!isPointerActive) {
          setTarget(next.x, next.y);
        }
        scheduleTimeout(() => {
          if (!isPointerActive) {
            setTarget(0, 0);
          }
          scheduleIdleGaze();
        }, 500 + Math.random() * 400);
      }, 3000 + Math.random() * 3000);
    }

    function handleTouch(event: PointerEvent) {
      if (motionQuery.matches || event.pointerType !== "touch") {
        return;
      }

      const limits = getGazeLimits();
      const bounds = eyeElement.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY) || 1;

      isPointerActive = true;
      setTarget(
        (deltaX / distance) * Math.min(limits.x * 0.78, Math.abs(deltaX) / 18),
        (deltaY / distance) * Math.min(limits.y * 0.68, Math.abs(deltaY) / 34),
      );

      scheduleTimeout(() => {
        isPointerActive = false;
        setTarget(0, 0);
        scheduleIdleGaze();
      }, 1500);
    }

    function handleMotionChange() {
      clearAllTimeouts();
      isPointerActive = false;
      isIdleActive = false;
      currentX = 0;
      currentY = 0;
      targetX = 0;
      targetY = 0;
      rootElement.style.setProperty("--look-x", "0px");
      rootElement.style.setProperty("--look-y", "0px");
      eyeElement.classList.remove("is-blinking");

      if (!motionQuery.matches) {
        scheduleTimeout(scheduleBlink, 2500 + Math.random() * 2500);
        scheduleIdleGaze();
      }
    }

    window.addEventListener("pointermove", updatePointerGaze, { passive: true });
    window.addEventListener("pointerleave", resetGaze);
    window.addEventListener("blur", resetGaze);
    rootElement.addEventListener("pointerdown", handleTouch, { passive: true });
    motionQuery.addEventListener("change", handleMotionChange);
    coarseQuery.addEventListener("change", handleMotionChange);

    if (!motionQuery.matches) {
      scheduleTimeout(scheduleBlink, 2500 + Math.random() * 2500);
      scheduleIdleGaze();
    }

    return () => {
      clearAllTimeouts();
      window.removeEventListener("pointermove", updatePointerGaze);
      window.removeEventListener("pointerleave", resetGaze);
      window.removeEventListener("blur", resetGaze);
      rootElement.removeEventListener("pointerdown", handleTouch);
      motionQuery.removeEventListener("change", handleMotionChange);
      coarseQuery.removeEventListener("change", handleMotionChange);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div ref={rootRef} className="reference-eye" aria-hidden="true">
      <div className="outer-orbit" />
      <div ref={eyeRef} className="reference-eye-stage">
        <div className="reference-sclera">
          <div className="iris-track">
            <div className="iris-core">
              <div className="iris-texture" />
              <div className="pupil" />
              <div className="eye-highlight highlight-main" />
              <div className="eye-highlight highlight-small" />
            </div>
          </div>
        </div>
        <div className="upper-lid" />
        <div className="lower-lid" />
        <div className="corner-fade corner-fade-left" />
        <div className="corner-fade corner-fade-right" />
        <div className="blink-lid blink-upper" />
        <div className="blink-lid blink-lower" />
      </div>

      {/* Future transition boundary: this central iris can later expand into a scroll-driven tunnel handoff. */}
    </div>
  );
}
