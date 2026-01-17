'use client';

import { useEffect, useState, useRef } from 'react';

export default function SimpleCarScene() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particles with hexagonal pattern
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
    }> = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        color: ['#DC2626', '#EAB308', '#C0C0C0'][Math.floor(Math.random() * 3)],
        alpha: Math.random() * 0.5 + 0.5,
      });
    }

    let animationFrame: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connecting lines
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(220, 38, 38, ${(1 - dist / 120) * 0.2})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });

        // Update and draw particle
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.globalAlpha = p1.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, [mounted]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
    setMousePos({ x, y });
  };

  if (!mounted) return null;

  return (
    <div 
      ref={containerRef}
      className="w-full h-full bg-gradient-to-br from-secondary via-engine to-tire flex items-center justify-center overflow-hidden relative"
      onMouseMove={handleMouseMove}
      style={{ perspective: '2000px' }}
    >
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50"></div>
      
      {/* Spotlight effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      {/* Main Car Showroom */}
      <div 
        className="relative z-10 car-showroom"
        style={{
          transform: `perspective(2000px) rotateY(${mousePos.x * 0.5}deg) rotateX(${-mousePos.y * 0.3}deg)`,
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Showroom Platform */}
        <div className="platform">
          <div className="platform-base"></div>
          <div className="platform-glow"></div>
        </div>

        {/* Modern Sports Car */}
        <div className="modern-car">
          {/* Main Body */}
          <div className="car-chassis">
            {/* Front Section */}
            <div className="car-front-section">
              <div className="hood"></div>
              <div className="bumper-front">
                <div className="headlight-modern left">
                  <div className="led-strip"></div>
                </div>
                <div className="headlight-modern right">
                  <div className="led-strip"></div>
                </div>
                <div className="front-grill">
                  <div className="grill-line"></div>
                  <div className="grill-line"></div>
                  <div className="grill-line"></div>
                </div>
              </div>
            </div>
            
            {/* Cabin */}
            <div className="car-cabin">
              <div className="windshield"></div>
              <div className="roof-glass"></div>
              <div className="side-window left"></div>
              <div className="side-window right"></div>
            </div>
            
            {/* Rear Section */}
            <div className="car-rear-section">
              <div className="trunk"></div>
              <div className="bumper-rear">
                <div className="taillight-modern left"></div>
                <div className="taillight-modern right"></div>
                <div className="exhaust"></div>
              </div>
            </div>
            
            {/* Side panels */}
            <div className="side-panel left">
              <div className="door-handle"></div>
              <div className="side-stripe"></div>
            </div>
            <div className="side-panel right">
              <div className="door-handle"></div>
              <div className="side-stripe"></div>
            </div>
          </div>
          
          {/* Wheels System */}
          <div className="wheels-system">
            {['fl', 'fr', 'rl', 'rr'].map((pos) => (
              <div key={pos} className={`wheel-assembly ${pos}`}>
                <div className="wheel-modern">
                  <div className="tire-modern">
                    <div className="tire-tread"></div>
                  </div>
                  <div className="rim-modern">
                    <div className="spoke"></div>
                    <div className="spoke"></div>
                    <div className="spoke"></div>
                    <div className="spoke"></div>
                    <div className="spoke"></div>
                    <div className="hub-center"></div>
                  </div>
                  <div className="brake-disc"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Spoiler */}
          <div className="spoiler">
            <div className="spoiler-wing"></div>
          </div>
        </div>
        
        {/* Info Display */}
        <div className="car-info-display">
          <div className="info-item">
            <div className="info-icon">⚡</div>
            <div className="info-text">ELECTRIC</div>
          </div>
          <div className="info-item">
            <div className="info-icon">🏎️</div>
            <div className="info-text">SPORT</div>
          </div>
          <div className="info-item">
            <div className="info-icon">✨</div>
            <div className="info-text">PREMIUM</div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .car-showroom {
          position: relative;
          width: 100%;
          max-width: 500px;
          height: 400px;
          transform-style: preserve-3d;
        }
        
        .platform {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) translateZ(-20px);
          width: 450px;
          height: 180px;
        }
        
        .platform-base {
          width: 100%;
          height: 6px;
          background: linear-gradient(90deg, 
            rgba(220, 38, 38, 0.3), 
            rgba(234, 179, 8, 0.3),
            rgba(220, 38, 38, 0.3)
          );
          border-radius: 50%;
          box-shadow: 
            0 5px 30px rgba(220, 38, 38, 0.4),
            0 10px 60px rgba(234, 179, 8, 0.3),
            inset 0 -2px 10px rgba(220, 38, 38, 0.5);
          animation: platformPulse 3s ease-in-out infinite;
        }
        
        .platform-glow {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 120%;
          height: 40px;
          background: radial-gradient(ellipse, 
            rgba(220, 38, 38, 0.15) 0%, 
            transparent 70%
          );
          filter: blur(15px);
        }
        
        @keyframes platformPulse {
          0%, 100% { box-shadow: 0 5px 30px rgba(220, 38, 38, 0.4); }
          50% { box-shadow: 0 5px 50px rgba(220, 38, 38, 0.7); }
        }

        .modern-car {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) translateZ(50px);
          width: 350px;
          height: 160px;
          transform-style: preserve-3d;
        }
        
        .car-chassis {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: carHover 6s ease-in-out infinite;
        }
        
        @keyframes carHover {
          0%, 100% { transform: translateY(0px) translateZ(0px); }
          50% { transform: translateY(-15px) translateZ(10px); }
        }
        
        /* Front Section */
        .car-front-section {
          position: absolute;
          top: 35%;
          left: 0;
          width: 40%;
          height: 65%;
          background: linear-gradient(135deg, 
            #DC2626 0%, 
            #991B1B 50%,
            #7F1D1D 100%
          );
          border-radius: 15px 3px 3px 5px;
          box-shadow: 
            inset -2px 2px 8px rgba(255, 255, 255, 0.2),
            inset 2px -2px 8px rgba(0, 0, 0, 0.5),
            -5px 5px 20px rgba(0, 0, 0, 0.4);
          transform: translateZ(40px);
        }
        
        .hood {
          position: absolute;
          top: -8px;
          left: 5%;
          width: 90%;
          height: 25px;
          background: linear-gradient(180deg, #DC2626, #B91C1C);
          border-radius: 8px 8px 0 0;
          box-shadow: inset 0 2px 5px rgba(255, 255, 255, 0.3);
        }
        
        .bumper-front {
          position: absolute;
          bottom: 0;
          left: -5px;
          width: 105%;
          height: 35px;
          background: linear-gradient(90deg, #1F1F1F, #3F3F3F, #1F1F1F);
          border-radius: 5px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
        }
        
        .headlight-modern {
          position: absolute;
          bottom: 8px;
          width: 35px;
          height: 18px;
          background: linear-gradient(135deg, #FFF 0%, #EAB308 100%);
          border-radius: 5px;
          box-shadow: 
            0 0 20px rgba(234, 179, 8, 0.8),
            inset -1px -1px 3px rgba(0, 0, 0, 0.3);
          animation: headlightFlash 2s ease-in-out infinite;
        }
        
        .headlight-modern.left { left: 10px; }
        .headlight-modern.right { right: 10px; }
        
        .led-strip {
          position: absolute;
          top: 50%;
          left: 10%;
          width: 80%;
          height: 3px;
          background: linear-gradient(90deg, 
            rgba(255, 255, 255, 0) 0%, 
            rgba(255, 255, 255, 1) 50%, 
            rgba(255, 255, 255, 0) 100%
          );
          transform: translateY(-50%);
          animation: ledScan 1.5s ease-in-out infinite;
        }
        
        @keyframes headlightFlash {
          0%, 100% { box-shadow: 0 0 20px rgba(234, 179, 8, 0.8); }
          50% { box-shadow: 0 0 40px rgba(234, 179, 8, 1), 0 0 60px rgba(255, 255, 255, 0.5); }
        }
        
        @keyframes ledScan {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        .front-grill {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60%;
          height: 16px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        
        .grill-line {
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent, 
            #C0C0C0 20%, 
            #C0C0C0 80%, 
            transparent
          );
        }
        
        /* Cabin */
        .car-cabin {
          position: absolute;
          top: 10%;
          left: 35%;
          width: 35%;
          height: 70%;
          background: linear-gradient(135deg, 
            rgba(10, 10, 10, 0.9), 
            rgba(30, 30, 30, 0.95)
          );
          border-radius: 12px 12px 5px 5px;
          transform: translateZ(55px);
          box-shadow: 
            inset 0 2px 10px rgba(255, 255, 255, 0.1),
            0 5px 20px rgba(0, 0, 0, 0.5);
        }
        
        .windshield {
          position: absolute;
          top: 5px;
          left: 5px;
          right: 5px;
          height: 40%;
          background: linear-gradient(135deg, 
            rgba(100, 200, 255, 0.3), 
            rgba(50, 150, 255, 0.4)
          );
          border-radius: 10px 10px 0 0;
          box-shadow: inset 0 1px 5px rgba(255, 255, 255, 0.5);
          animation: glassReflect 3s ease-in-out infinite;
        }
        
        .roof-glass {
          position: absolute;
          top: 0;
          left: 10%;
          width: 80%;
          height: 25px;
          background: linear-gradient(90deg, 
            rgba(100, 200, 255, 0.2), 
            rgba(50, 150, 255, 0.3),
            rgba(100, 200, 255, 0.2)
          );
          border-radius: 8px;
        }
        
        @keyframes glassReflect {
          0%, 100% { 
            background: linear-gradient(135deg, 
              rgba(100, 200, 255, 0.3), 
              rgba(50, 150, 255, 0.4)
            );
          }
          50% { 
            background: linear-gradient(135deg, 
              rgba(150, 220, 255, 0.4), 
              rgba(100, 180, 255, 0.5)
            );
          }
        }
        
        .side-window {
          position: absolute;
          top: 25%;
          width: 35px;
          height: 45%;
          background: linear-gradient(135deg, 
            rgba(100, 200, 255, 0.25), 
            rgba(50, 150, 255, 0.35)
          );
          border-radius: 3px;
        }
        
        .side-window.left { 
          left: -38px; 
          transform: rotateY(-5deg);
        }
        .side-window.right { 
          right: -38px; 
          transform: rotateY(5deg);
        }
        
        /* Rear Section */
        .car-rear-section {
          position: absolute;
          top: 35%;
          right: 0;
          width: 35%;
          height: 65%;
          background: linear-gradient(225deg, 
            #DC2626 0%, 
            #991B1B 50%,
            #7F1D1D 100%
          );
          border-radius: 3px 12px 5px 3px;
          box-shadow: 
            inset 2px 2px 8px rgba(255, 255, 255, 0.2),
            inset -2px -2px 8px rgba(0, 0, 0, 0.5),
            5px 5px 20px rgba(0, 0, 0, 0.4);
          transform: translateZ(40px);
        }
        
        .trunk {
          position: absolute;
          top: -5px;
          left: 5%;
          width: 90%;
          height: 20px;
          background: linear-gradient(180deg, #DC2626, #B91C1C);
          border-radius: 5px 5px 0 0;
        }
        
        .bumper-rear {
          position: absolute;
          bottom: 0;
          right: -5px;
          width: 105%;
          height: 32px;
          background: linear-gradient(90deg, #1F1F1F, #3F3F3F, #1F1F1F);
          border-radius: 5px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
        }
        
        .taillight-modern {
          position: absolute;
          bottom: 8px;
          width: 30px;
          height: 16px;
          background: linear-gradient(135deg, #DC2626 0%, #7F1D1D 100%);
          border-radius: 4px;
          box-shadow: 
            0 0 15px rgba(220, 38, 38, 0.8),
            inset -1px -1px 3px rgba(0, 0, 0, 0.3);
          animation: taillightPulse 1.5s ease-in-out infinite;
        }
        
        .taillight-modern.left { left: 8px; }
        .taillight-modern.right { right: 8px; }
        
        @keyframes taillightPulse {
          0%, 100% { box-shadow: 0 0 15px rgba(220, 38, 38, 0.6); opacity: 0.8; }
          50% { box-shadow: 0 0 30px rgba(220, 38, 38, 1); opacity: 1; }
        }
        
        .exhaust {
          position: absolute;
          bottom: 5px;
          left: 50%;
          transform: translateX(-50%);
          width: 25px;
          height: 12px;
          background: radial-gradient(ellipse, #3F3F3F, #1F1F1F);
          border-radius: 50%;
          box-shadow: 
            inset 0 2px 5px rgba(0, 0, 0, 0.8),
            0 2px 10px rgba(100, 100, 100, 0.3);
        }
        
        /* Side Panels */
        .side-panel {
          position: absolute;
          top: 40%;
          width: 100%;
          height: 60%;
          background: linear-gradient(180deg, 
            #DC2626 0%,
            #B91C1C 50%,
            #991B1B 100%
          );
          box-shadow: 
            inset 0 3px 10px rgba(255, 255, 255, 0.15),
            inset 0 -3px 10px rgba(0, 0, 0, 0.5);
        }
        
        .side-panel.left { 
          left: 0;
          transform: translateZ(-15px) rotateY(-2deg);
          border-radius: 8px 0 0 5px;
        }
        .side-panel.right { 
          right: 0;
          transform: translateZ(-15px) rotateY(2deg);
          border-radius: 0 8px 5px 0;
        }
        
        .door-handle {
          position: absolute;
          top: 40%;
          width: 40px;
          height: 8px;
          background: linear-gradient(90deg, #C0C0C0, #E0E0E0, #C0C0C0);
          border-radius: 3px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
        }
        
        .side-panel.left .door-handle { left: 45%; }
        .side-panel.right .door-handle { right: 45%; }
        
        .side-stripe {
          position: absolute;
          top: 20%;
          left: 10%;
          width: 80%;
          height: 5px;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(234, 179, 8, 0.6) 30%, 
            rgba(234, 179, 8, 0.6) 70%, 
            transparent
          );
          box-shadow: 0 0 10px rgba(234, 179, 8, 0.5);
        }
        
        /* Wheels */
        .wheels-system {
          position: absolute;
          bottom: -20px;
          left: 0;
          width: 100%;
          height: 80px;
        }
        
        .wheel-assembly {
          position: absolute;
          bottom: 0;
          width: 70px;
          height: 70px;
          transform-style: preserve-3d;
        }
        
        .wheel-assembly.fl { left: 45px; }
        .wheel-assembly.fr { right: 110px; }
        .wheel-assembly.rl { left: 210px; }
        .wheel-assembly.rr { right: 45px; }
        
        .wheel-modern {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          transform-style: preserve-3d;
          animation: wheelRotate 3s linear infinite;
        }
        
        @keyframes wheelRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        
        .tire-modern {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: radial-gradient(circle, 
            #2F2F2F 0%, 
            #1F1F1F 60%,
            #0F0F0F 100%
          );
          box-shadow: 
            inset 0 0 15px rgba(0, 0, 0, 0.8),
            0 5px 20px rgba(0, 0, 0, 0.6);
        }
        
        .tire-tread {
          position: absolute;
          inset: 5px;
          border-radius: 50%;
          background: repeating-conic-gradient(
            from 0deg,
            #1F1F1F 0deg 10deg,
            #2F2F2F 10deg 20deg
          );
        }
        
        .rim-modern {
          position: absolute;
          inset: 15%;
          border-radius: 50%;
          background: linear-gradient(135deg, 
            #E0E0E0 0%,
            #C0C0C0 50%,
            #A0A0A0 100%
          );
          box-shadow: 
            0 0 15px rgba(192, 192, 192, 0.5),
            inset 0 2px 8px rgba(255, 255, 255, 0.6),
            inset 0 -2px 8px rgba(0, 0, 0, 0.4);
          transform: translateZ(5px);
        }
        
        .spoke {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, 
            rgba(255, 255, 255, 0.4), 
            rgba(160, 160, 160, 0.8),
            rgba(255, 255, 255, 0.4)
          );
          transform-origin: center;
        }
        
        .spoke:nth-child(1) { transform: translate(-50%, -50%) rotate(0deg); }
        .spoke:nth-child(2) { transform: translate(-50%, -50%) rotate(72deg); }
        .spoke:nth-child(3) { transform: translate(-50%, -50%) rotate(144deg); }
        .spoke:nth-child(4) { transform: translate(-50%, -50%) rotate(216deg); }
        .spoke:nth-child(5) { transform: translate(-50%, -50%) rotate(288deg); }
        
        .hub-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 30%;
          height: 30%;
          border-radius: 50%;
          background: linear-gradient(135deg, #DC2626, #991B1B);
          box-shadow: 
            0 0 10px rgba(220, 38, 38, 0.6),
            inset 0 2px 5px rgba(255, 255, 255, 0.3);
        }
        
        .brake-disc {
          position: absolute;
          inset: 10%;
          border-radius: 50%;
          background: radial-gradient(circle, 
            #666 0%, 
            #444 50%, 
            #333 100%
          );
          transform: translateZ(-3px);
          opacity: 0.6;
        }
        
        /* Spoiler */
        .spoiler {
          position: absolute;
          top: 25%;
          right: 5%;
          width: 100px;
          height: 30px;
          transform: translateZ(65px);
        }
        
        .spoiler-wing {
          width: 100%;
          height: 8px;
          background: linear-gradient(90deg, 
            #1F1F1F 0%,
            #3F3F3F 50%,
            #1F1F1F 100%
          );
          border-radius: 3px;
          box-shadow: 
            0 -3px 10px rgba(0, 0, 0, 0.5),
            inset 0 1px 3px rgba(255, 255, 255, 0.2);
          position: relative;
        }
        
        .spoiler-wing::before {
          content: '';
          position: absolute;
          bottom: 100%;
          left: 10%;
          right: 10%;
          height: 20px;
          background: linear-gradient(180deg, 
            transparent,
            rgba(31, 31, 31, 0.8)
          );
          border-radius: 5px 5px 0 0;
        }
        
        /* Info Display */
        .car-info-display {
          position: absolute;
          bottom: -70px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 20px;
          z-index: 10;
        }
        
        .info-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          padding: 10px 15px;
          background: rgba(10, 10, 10, 0.7);
          border: 1px solid rgba(220, 38, 38, 0.3);
          border-radius: 8px;
          backdrop-filter: blur(10px);
        }
        
        .info-icon {
          font-size: 24px;
          animation: iconFloat 2s ease-in-out infinite;
        }
        
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .info-text {
          font-size: 10px;
          font-weight: 700;
          color: #DC2626;
          letter-spacing: 1px;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .car-showroom {
            max-width: 350px;
            height: 300px;
          }
          
          .modern-car {
            width: 280px;
            height: 130px;
          }
          
          .platform {
            width: 350px;
            height: 150px;
          }
          
          .wheel-assembly {
            width: 55px;
            height: 55px;
          }
          
          .wheel-assembly.fl { left: 35px; }
          .wheel-assembly.fr { right: 85px; }
          .wheel-assembly.rl { left: 165px; }
          .wheel-assembly.rr { right: 35px; }
        }
        
        @media (max-width: 480px) {
          .car-showroom {
            max-width: 280px;
            height: 250px;
          }
          
          .modern-car {
            width: 220px;
            height: 100px;
          }
          
          .platform {
            width: 280px;
            height: 120px;
          }
          
          .wheel-assembly {
            width: 45px;
            height: 45px;
          }
          
          .wheel-assembly.fl { left: 25px; }
          .wheel-assembly.fr { right: 70px; }
          .wheel-assembly.rl { left: 130px; }
          .wheel-assembly.rr { right: 25px; }
          
          .car-info-display {
            bottom: -60px;
            gap: 10px;
          }
          
          .info-item {
            padding: 8px 12px;
          }
          
          .info-icon {
            font-size: 20px;
          }
          
          .info-text {
            font-size: 8px;
          }
        }
      `}</style>
    </div>
  );
}
