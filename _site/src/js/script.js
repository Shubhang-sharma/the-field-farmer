

const blobSketch = (p) => {
  let blobPos = { x: 0, y: 0 };
  let isVisible = false;
  let xTo, yTo;

  p.setup = () => {
    const header = document.querySelector('.header');

    // Create canvas based on the header's actual size
    const canvas = p.createCanvas(header.offsetWidth, header.offsetHeight);

    // Move the canvas INSIDE the header element
    canvas.parent(header);
    // canvas.classList.add("blob-canvas");
    canvas.style('mix-blend-mode', 'difference');
    canvas.style('z-index', '10');

    xTo = gsap.quickTo(blobPos, "x", { duration: 1, ease: "power3.out" });
    yTo = gsap.quickTo(blobPos, "y", { duration: 1, ease: "power3.out" });

    header.addEventListener('mouseenter', () => {
      isVisible = true;
    });

    document.addEventListener('mousemove', (e) => {
      // Get the header's position on the screen
      const rect = header.getBoundingClientRect();

      // Calculate mouse position relative to the top-left of the header
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;

      xTo(relativeX);
      yTo(relativeY);
    });

    header.addEventListener('mouseleave', () => {
      isVisible = false
    });
  };

  p.draw = () => {
    p.clear();
    if (!isVisible) return;

    p.push();
    p.translate(blobPos.x, blobPos.y);

    // 1. Define the gradient path (Left to Right)
    // We use -50 to 50 so it covers a 100px wide area centered on the mouse
    let gradient = p.drawingContext.createLinearGradient(-50, 0, 50, 0);

    // 2. Map your CSS stops: (percentage as 0-1, hex code)
    gradient.addColorStop(0.1, '#d0ef8e');
    gradient.addColorStop(0.4, '#d0ef8e');
    gradient.addColorStop(1.0, '#d0ef8e');

    // 3. Apply to the canvas context
    p.drawingContext.fillStyle = gradient;
    p.noStroke();

    // 4. Draw your organic blob
    p.beginShape();
    for (let a = 0; a < p.TWO_PI; a += 0.1) {
      // Noise creates the organic movement
      let r = 35 + p.noise(p.cos(a) + 1, p.sin(a) + 1, p.frameCount * 0.02) * 20;
      p.vertex(r * 2 * p.cos(a), r * 2 * p.sin(a));
    }
    p.endShape(p.CLOSE);

    p.pop();
  };

  // Keep canvas size in sync if the header changes size
  p.windowResized = () => {
    const header = document.querySelector('.header');
    p.resizeCanvas(header.offsetWidth, header.offsetHeight);
  };
};

new p5(blobSketch);




