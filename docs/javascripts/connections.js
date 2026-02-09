/**
 * Technical Blueprint - Code Connections Animation
 * Creates animated connection points and lines in the background
 */

(function() {
  'use strict';

  class ConnectionNetwork {
    constructor() {
      this.canvas = null;
      this.ctx = null;
      this.points = [];
      this.connections = [];
      this.mouse = { x: 0, y: 0 };
      this.animationId = null;

      this.config = {
        pointCount: 15,
        connectionDistance: 150,
        mouseDistance: 200,
        pointSize: 2,
        lineOpacity: 0.15,
        animationSpeed: 0.001
      };

      this.init();
    }

    init() {
      // Create canvas
      this.canvas = document.createElement('canvas');
      this.canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        opacity: 0.4;
      `;

      document.body.appendChild(this.canvas);
      this.ctx = this.canvas.getContext('2d');

      // Set canvas size
      this.resize();
      window.addEventListener('resize', () => this.resize());

      // Track mouse
      document.addEventListener('mousemove', (e) => {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
      });

      // Create points
      this.createPoints();

      // Start animation
      this.animate();
    }

    resize() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    createPoints() {
      this.points = [];

      for (let i = 0; i < this.config.pointCount; i++) {
        this.points.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * this.config.pointSize + 1,
          phase: Math.random() * Math.PI * 2
        });
      }
    }

    animate() {
      const ctx = this.ctx;
      const width = this.canvas.width;
      const height = this.canvas.height;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Update and draw points
      this.points.forEach(point => {
        // Update position
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off edges
        if (point.x < 0 || point.x > width) point.vx *= -1;
        if (point.y < 0 || point.y > height) point.vy *= -1;

        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.5)';
        ctx.fill();

        // Draw glow
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, point.radius * 4
        );
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius * 4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections between points
      for (let i = 0; i < this.points.length; i++) {
        for (let j = i + 1; j < this.points.length; j++) {
          const dx = this.points[i].x - this.points[j].x;
          const dy = this.points[i].y - this.points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < this.config.connectionDistance) {
            const opacity = (1 - distance / this.config.connectionDistance) * this.config.lineOpacity;
            ctx.beginPath();
            ctx.moveTo(this.points[i].x, this.points[i].y);
            ctx.lineTo(this.points[j].x, this.points[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw connections to mouse
      this.points.forEach(point => {
        const dx = point.x - this.mouse.x;
        const dy = point.y - this.mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.config.mouseDistance) {
          const opacity = (1 - distance / this.config.mouseDistance) * this.config.lineOpacity * 2;
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(this.mouse.x, this.mouse.y);
          ctx.strokeStyle = `rgba(255, 107, 53, ${opacity})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      });

      // Continue animation
      this.animationId = requestAnimationFrame(() => this.animate());
    }

    destroy() {
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
      }
      if (this.canvas && this.canvas.parentNode) {
        this.canvas.parentNode.removeChild(this.canvas);
      }
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new ConnectionNetwork());
  } else {
    new ConnectionNetwork();
  }

  // Expose for potential manual control
  window.ConnectionNetwork = ConnectionNetwork;
})();
