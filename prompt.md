**ACT AS:**
A world-class Creative Developer (Awwwards-level) specializing in Next.js, Framer Motion, and high-performance HTML5 Canvas animations.

**THE TASK:**
Build a high-end "Scrollytelling" landing page for a concept brand called **"Local Harvest."** The site connects users with local farmers. The core mechanic is a scroll-linked animation that creates a cinematic video effect by scrubbing through an image sequence.

**TECH STACK:**

* **Framework:** Next.js 14+ (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (Dark Mode default)
* **UI Components:** Shadcn UI (or similar modern library like Radix Primitives) + Lucide React icons.
* **Animation:** Framer Motion
* **Rendering:** HTML5 Canvas (for maximum performance)

**ASSETS & CRITICAL CONSTRAINTS:**

* **Image Location:** A sequence of ~240 WebP images located in `/sequence/`.
* **THE FILENAME:** The raw filenames in the folder are sequentially uniform. They look like `frame_000_delay-0.033s.webp`, followed by `frame_001_delay-0.034s.webp`, etc. 
* **Global Style:** The page background color must match the background color of the image frames (e.g., Hex `#121212`) for a seamless blend.

**IMPLEMENTATION BLUEPRINT:**

1. Global Styles & Reset:

Set the global background color to #121212 (or the exact hex of the video frames) for seamless blending.

Use a clean, modern sans-serif font (Inter or Geist Sans).

2. Component 1: The Sticky Scroller (ScrollyCanvas.tsx):

Create a parent container with a height of 500vh (for a long, cinematic scroll).

Inside, create a sticky container (top-0 h-screen w-full).

Use an HTML5 <canvas> element to render the images.

Logic: Use Framer Motion's useScroll to map the scroll progress (0 to 1) to the image frame index (0 to ~89).

Optimization: You MUST preload the images in a useEffect hook to prevent flickering.

Responsiveness: Implement custom math to simulate CSS object-fit: cover on the canvas so the image fills the screen on Mobile and Desktop without distortion.

3. Component 2: The Parallax Overlay (Overlay.tsx):

Create text sections that sit on top of the canvas (z-index 10).

As the user scrolls, these text elements should fade in/out using motion.div with parallax speed.

Copy:

Section 1 (0% scroll): "Local Harvest. Rooted in Community." (Centered, Hero size)

Section 2 (30% scroll): "Organic. Sustainable. Ethical." (Left aligned)

Section 3 (60% scroll): "Straight from the soil to your table." (Right aligned)

4. Component 3: The Harvest Grid (HarvestGrid.tsx):

Placed after the scroll animation finishes (below the 500vh container).

A modern grid layout showcasing this week's vegetables.

Data: Create a vegetables array with dummy data (e.g., "Heirloom Tomato", "Organic Kale", "Honeycrisp Apple") including Price and Farmer Name.

Style: Glass-morphism cards (dark backdrop-blur, thin borders, subtle hover glow).

EXECUTION RULES:

No Video Tags: Strictly use Canvas for the animation.

Code Quality: Write clean, modular, typed code.

Aesthetics: High-end, dark, modern feel.

START: Begin by scaffolding the directory structure and writing the ScrollyCanvas component. Ensure the image loading logic accounts for the filename pattern frame_XX_delay-0.067s.webp.