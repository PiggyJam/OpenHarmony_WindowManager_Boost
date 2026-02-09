/**
 * Technical Blueprint - Cursor Effects
 * Adds interactive cursor effects and element highlights
 */

(function() {
  'use strict';

  class CursorEffect {
    constructor() {
      this.cursor = null;
      this.cursorFollower = null;
      this.coords = { x: 0, y: 0 };
      this.followerCoords = { x: 0, y: 0 };
      this.isHovering = false;

      this.config = {
        cursorSize: 8,
        followerSize: 40,
        followerDelay: 0.15,
        cursorColor: '#FF6B35',
        followerColor: 'rgba(59, 130, 246, 0.3)'
      };

      this.init();
    }

    init() {
      // Create custom cursor
      this.cursor = document.createElement('div');
      this.cursor.className = 'bp-cursor';
      this.cursor.style.cssText = `
        position: fixed;
        width: ${this.config.cursorSize}px;
        height: ${this.config.cursorSize}px;
        border: 2px solid ${this.config.cursorColor};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: transform 0.1s ease, border-color 0.2s ease, width 0.2s ease, height 0.2s ease;
        mix-blend-mode: difference;
      `;

      // Create cursor follower
      this.cursorFollower = document.createElement('div');
      this.cursorFollower.className = 'bp-cursor-follower';
      this.cursorFollower.style.cssText = `
        position: fixed;
        width: ${this.config.followerSize}px;
        height: ${this.config.followerSize}px;
        border: 1px solid ${this.config.followerColor};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        transform: translate(-50%, -50%);
        transition: transform 0.3s ease-out, width 0.3s ease, height 0.3s ease;
      `;

      document.body.appendChild(this.cursor);
      document.body.appendChild(this.cursorFollower);

      // Track mouse
      document.addEventListener('mousemove', (e) => this.onMouseMove(e));
      document.addEventListener('mousedown', () => this.onMouseDown());
      document.addEventListener('mouseup', () => this.onMouseUp());

      // Add hover effects to interactive elements
      this.addHoverEffects();

      // Start animation loop
      this.animate();

      // Hide default cursor on supported browsers
      document.body.style.cursor = 'none';
    }

    onMouseMove(e) {
      this.coords.x = e.clientX;
      this.coords.y = e.clientY;

      // Immediate update for cursor
      this.cursor.style.left = this.coords.x + 'px';
      this.cursor.style.top = this.coords.y + 'px';
    }

    onMouseDown() {
      this.cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
      this.cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.9)';
    }

    onMouseUp() {
      this.cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      this.cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
    }

    addHoverEffects() {
      const interactiveElements = document.querySelectorAll('a, button, .md-nav__link, .md-header__button, pre code, .bp-card');

      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => this.onHoverEnter(el));
        el.addEventListener('mouseleave', () => this.onHoverLeave(el));
      });
    }

    onHoverEnter(el) {
      this.isHovering = true;

      // Check if element needs special cursor
      if (el.tagName === 'A' || el.classList.contains('md-nav__link')) {
        this.cursor.style.borderColor = '#3B82F6';
        this.cursor.style.width = '40px';
        this.cursor.style.height = '40px';
        this.cursorFollower.style.width = '60px';
        this.cursorFollower.style.height = '60px';
      }

      if (el.tagName === 'PRE' || el.closest('pre')) {
        this.cursor.style.borderColor = '#22C55E';
        this.cursor.style.width = '16px';
        this.cursor.style.height = '16px';
        this.cursorFollower.style.borderColor = 'rgba(34, 197, 94, 0.3)';
      }
    }

    onHoverLeave(el) {
      this.isHovering = false;

      // Reset cursor
      this.cursor.style.borderColor = this.config.cursorColor;
      this.cursor.style.width = this.config.cursorSize + 'px';
      this.cursor.style.height = this.config.cursorSize + 'px';
      this.cursorFollower.style.width = this.config.followerSize + 'px';
      this.cursorFollower.style.height = this.config.followerSize + 'px';
      this.cursorFollower.style.borderColor = this.config.followerColor;
    }

    animate() {
      // Smooth follower animation
      const dx = this.coords.x - this.followerCoords.x;
      const dy = this.coords.y - this.followerCoords.y;

      this.followerCoords.x += dx * this.config.followerDelay;
      this.followerCoords.y += dy * this.config.followerDelay;

      this.cursorFollower.style.left = this.followerCoords.x + 'px';
      this.cursorFollower.style.top = this.followerCoords.y + 'px';

      requestAnimationFrame(() => this.animate());
    }
  }

  // Intersection Observer for scroll animations
  class ScrollAnimations {
    constructor() {
      this.init();
    }

    init() {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      }, observerOptions);

      // Observe elements
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.observe(el);
      });

      // Add reveal class to content elements
      this.addRevealClasses();
    }

    addRevealClasses() {
      const contentElements = document.querySelectorAll(
        '.md-content h2, .md-content h3, .md-content p, .md-content ul, .md-content ol, .md-content pre, .md-content table, .admonition'
      );

      contentElements.forEach(el => {
        el.classList.add('reveal-on-scroll');
      });
    }
  }

  // Initialize effects when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      // Only initialize cursor effect on desktop
      if (window.matchMedia('(pointer: fine)').matches) {
        new CursorEffect();
      }
      new ScrollAnimations();
    });
  } else {
    if (window.matchMedia('(pointer: fine)').matches) {
      new CursorEffect();
    }
    new ScrollAnimations();
  }

  // Expose for potential manual control
  window.CursorEffect = CursorEffect;
  window.ScrollAnimations = ScrollAnimations;
})();
