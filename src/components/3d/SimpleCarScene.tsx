'use client';

import { useEffect, useRef } from 'react';

export default function ModernScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      size: number;
      speedX: number;
      speedY: number;
      speedZ: number;
      color: string;
      life: number;
      maxLife: number;
    }> = [];

    // Geometric shapes
    const shapes: Array<{
      x: number;
      y: number;
      z: number;
      rotation: number;
      rotationSpeed: number;
      size: number;
      type: 'ring' | 'cube' | 'triangle';
      color: string;
    }> = [];

    // Wave lines
    const waves: Array<{
      y: number;
      amplitude: number;
      frequency: number;
      phase: number;
      speed: number;
      color: string;
      width: number;
    }> = [];

    // Initialize particles
    for (let i = 0; i < 150; i++) {
      const colors = ['#DC2626', '#EF4444', '#F97316', '#FB923C', '#FBBF24'];
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        speedZ: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 200 + 100,
      });
    }

    // Initialize shapes
    for (let i = 0; i < 8; i++) {
      const types: Array<'ring' | 'cube' | 'triangle'> = ['ring', 'cube', 'triangle'];
      const colors = ['#DC2626', '#EF4444', '#F97316'];
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 800 + 200,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        size: Math.random() * 100 + 50,
        type: types[Math.floor(Math.random() * types.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Initialize waves
    for (let i = 0; i < 5; i++) {
      const colors = ['#DC2626', '#EF4444', '#F97316', '#FB923C'];
      waves.push({
        y: (canvas.height / 6) * (i + 1),
        amplitude: Math.random() * 30 + 20,
        frequency: Math.random() * 0.01 + 0.005,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.01,
        color: colors[Math.floor(Math.random() * colors.length)],
        width: Math.random() * 2 + 1,
      });
    }

    // Animation loop
    let animationFrame: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw waves
      waves.forEach(wave => {
        wave.phase += wave.speed;
        
        ctx.save();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = wave.width;
        ctx.globalAlpha = 0.3;
        ctx.shadowColor = wave.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();

        for (let x = 0; x < canvas.width; x += 5) {
          const y = wave.y + Math.sin(x * wave.frequency + wave.phase) * wave.amplitude;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
        ctx.restore();
      });

      // Draw shapes
      shapes.forEach(shape => {
        shape.rotation += shape.rotationSpeed;
        shape.z -= 0.5;
        if (shape.z < 1) {
          shape.z = 1000;
          shape.x = Math.random() * canvas.width;
          shape.y = Math.random() * canvas.height;
        }

        const scale = 800 / (800 + shape.z);
        const x = (shape.x - canvas.width / 2) * scale + canvas.width / 2;
        const y = (shape.y - canvas.height / 2) * scale + canvas.height / 2;
        const size = shape.size * scale;
        const opacity = 0.3 * scale;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(shape.rotation);
        ctx.globalAlpha = opacity;
        ctx.strokeStyle = shape.color;
        ctx.lineWidth = 2 * scale;
        ctx.shadowColor = shape.color;
        ctx.shadowBlur = 15 * scale;

        switch (shape.type) {
          case 'ring':
            ctx.beginPath();
            ctx.arc(0, 0, size, 0, Math.PI * 2);
            ctx.stroke();
            break;
          case 'cube':
            ctx.strokeRect(-size / 2, -size / 2, size, size);
            break;
          case 'triangle':
            ctx.beginPath();
            ctx.moveTo(0, -size / 2);
            ctx.lineTo(size / 2, size / 2);
            ctx.lineTo(-size / 2, size / 2);
            ctx.closePath();
            ctx.stroke();
            break;
        }

        ctx.restore();
      });

      // Draw particles
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.z -= particle.speedZ;
        particle.life++;

        if (particle.z < 1) {
          particle.z = 1000;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        if (particle.life > particle.maxLife) {
          particle.z = 1000;
          particle.life = 0;
        }

        const scale = 1000 / (1000 + particle.z);
        const x = (particle.x - canvas.width / 2) * scale + canvas.width / 2;
        const y = (particle.y - canvas.height / 2) * scale + canvas.height / 2;
        const size = particle.size * scale;
        const opacity = Math.max(0, 1 - particle.life / particle.maxLife) * scale;

        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = particle.color;
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20 * scale;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
}
