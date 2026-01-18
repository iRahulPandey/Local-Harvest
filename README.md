# Local Harvest

A cinematic "Scrollytelling" landing page for **Local Harvest**, connecting users with local farmers through an immersive scroll-linked animation.

## Tech Stack

* **Framework:** Next.js 14+ (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (Dark Mode)
* **Animation:** Framer Motion
* **Rendering:** HTML5 Canvas
* **UI:** Custom Glassmorphism Components

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/components/ScrollyCanvas.tsx`: Core component rendering the image sequence on Canvas.
- `src/components/Overlay.tsx`: Parallax text overlay that reacts to scroll position.
- `src/components/HarvestGrid.tsx`: SVG glass-morphism grid for product showcase.
- `public/sequence/`: Contains the frame sequence for the scroll animation.
