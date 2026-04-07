import { useEffect, useRef } from "react";

/**
 * Premium "Deep Space Galaxy" Background.
 * 
 * Features:
 * - 3D Parallax Starfield: Three layers of stars moving at different speeds for infinite depth.
 * - Twinkling Logic: Each star pulses at a random frequency to feel "alive."
 * - Luminous Nebulae: Soft, slow-moving colorful clouds (Indigo, Violet, Cyan).
 * - Rare Shooting Stars: Occasional fast streaks for a high-end "live" feel.
 * - Perspective Drift: Star layers subtly shift based on mouse position.
 */
export default function ParticleBackground({ darkMode }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const shootingStars = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0, dpr = 1;
    let stars = [];
    let nebulae = [];

    // ─────────────────────────────────────────────────────────────────────
    // Palettes — "Deep Space / Milky Way"
    // ─────────────────────────────────────────────────────────────────────
    const dk = {
      bg: "#020617",          // Deep Space Black
      p1: "79, 70, 229",      // Indigo Nebula
      p2: "124, 58, 237",     // Violet Nebula
      p3: "14, 165, 233",     // Cyan Nebula
      star: "255, 255, 255",
      glowOp: 0.15,
    };

    const lt = {
      bg: "#f8faff",          // Morning sky/Milky Way light
      p1: "199, 210, 254",    // Pale Indigo
      p2: "221, 214, 254",    // Pale Violet
      p3: "186, 230, 253",    // Pale Cyan
      star: "99, 102, 241",
      glowOp: 0.1,
    };

    const pal = darkMode ? dk : lt;
    const rand = (a, b) => Math.random() * (b - a) + a;

    // ─────────────────────────────────────────────────────────────────────
    // Star Class — Parallax & Twinkle
    // ─────────────────────────────────────────────────────────────────────
    class Star {
      constructor() {
        this.init();
      }

      init() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        // z represents depth (0 to 1). 0 is background, 1 is foreground.
        this.z = Math.random();
        this.size = rand(0.5, 2) * (0.3 + 0.7 * this.z);
        this.baseOpacity = rand(0.2, 0.8) * (0.3 + 0.7 * this.z);
        this.opacity = this.baseOpacity;
        this.twinkleSpeed = rand(0.01, 0.05);
        this.phase = Math.random() * Math.PI * 2;
      }

      update() {
        this.phase += this.twinkleSpeed;
        this.opacity = this.baseOpacity * (0.7 + 0.3 * Math.sin(this.phase));

        // Subtle movement (drift)
        this.y -= 0.05 * (0.2 + 0.8 * this.z);
        if (this.y < -10) this.y = H + 10;
      }

      draw(offsetX, offsetY) {
        // Apply parallax offset based on depth (z)
        const px = this.x + offsetX * this.z;
        const py = this.y + offsetY * this.z;

        ctx.beginPath();
        ctx.arc(px, py, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${pal.star}, ${this.opacity})`;
        ctx.fill();

        if (this.z > 0.8 && this.opacity > 0.6) {
          ctx.shadowBlur = 4 * this.z;
          ctx.shadowColor = `rgba(${pal.star}, ${this.opacity})`;
        } else {
          ctx.shadowBlur = 0;
        }
      }
    }

    // ─────────────────────────────────────────────────────────────────────
    // Shooting Star Manager
    // ─────────────────────────────────────────────────────────────────────
    class ShootingStar {
      constructor() {
        this.init();
      }
      init() {
        this.x = rand(0, W);
        this.y = rand(0, H * 0.5);
        this.len = rand(100, 250);
        this.speed = rand(15, 25);
        this.angle = rand(Math.PI * 0.7, Math.PI * 0.9); // Mostly down and right
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = Math.sin(this.angle) * this.speed;
        this.opacity = 1;
        this.active = true;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.opacity -= 0.02;
        if (this.opacity <= 0) this.active = false;
      }
      draw() {
        if (!this.active) return;
        const grad = ctx.createLinearGradient(this.x, this.y, this.x - this.vx * 2, this.y - this.vy * 2);
        grad.addColorStop(0, `rgba(${pal.star}, ${this.opacity})`);
        grad.addColorStop(1, "transparent");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.vx * 2, this.y - this.vy * 2);
        ctx.stroke();
      }
    }

    // ─────────────────────────────────────────────────────────────────────
    // Nebula Cloud
    // ─────────────────────────────────────────────────────────────────────
    class Nebula {
      constructor(cx, cy, radius, color, baseAlpha, speed) {
        this.x = cx; this.y = cy; this.radius = radius;
        this.color = color; this.alpha = baseAlpha;
        this.phaseX = Math.random() * Math.PI * 2;
        this.phaseY = Math.random() * Math.PI * 2;
        this.speed = speed;
      }
      update() {
        this.phaseX += 0.001 * this.speed;
        this.phaseY += 0.0012 * this.speed;
        this.cx = this.x + Math.sin(this.phaseX) * 0.1;
        this.cy = this.y + Math.cos(this.phaseY) * 0.1;
      }
      draw() {
        const px = this.cx * W; const py = this.cy * H;
        const rad = this.radius * Math.min(W, H);
        const grad = ctx.createRadialGradient(px, py, 0, px, py, rad);
        grad.addColorStop(0, `rgba(${this.color}, ${this.alpha})`);
        grad.addColorStop(0.5, `rgba(${this.color}, ${this.alpha * 0.2})`);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
      }
    }

    const buildScene = () => {
      // Create star layers
      const count = Math.min(Math.floor(W / 4), 500);
      stars = Array.from({ length: count }, () => new Star());
      
      const g = pal.glowOp;
      nebulae = [
        new Nebula(0.2, 0.3, 0.8, pal.p1, g, 1.0),
        new Nebula(0.8, 0.2, 0.7, pal.p2, g * 0.8, 0.8),
        new Nebula(0.4, 0.8, 0.6, pal.p3, g * 0.6, 1.2),
      ];
      shootingStars.current = [];
    };

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      buildScene();
    };

    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      
      // 1. Deep Space Base
      ctx.fillStyle = pal.bg;
      ctx.fillRect(0, 0, W, H);

      // 2. Nebulae Depth
      nebulae.forEach(n => { n.update(); n.draw(); });

      // 3. Parallax Starfield
      // Parallax shift based on mouse distance from center
      const offsetX = (mouseRef.current.x - W / 2) * 0.05;
      const offsetY = (mouseRef.current.y - H / 2) * 0.05;

      stars.forEach(s => {
        s.update();
        s.draw(offsetX, offsetY);
      });

      // 4. Shooting Stars
      if (Math.random() < 0.005) {
        shootingStars.current.push(new ShootingStar());
      }
      shootingStars.current = shootingStars.current.filter(ss => {
        ss.update();
        ss.draw();
        return ss.active;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: -1,
        animation: "bgFadeIn 3s ease-out forwards",
      }}
    />
  );
}

// Global style for the background fade
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes bgFadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;
  document.head.appendChild(style);
}