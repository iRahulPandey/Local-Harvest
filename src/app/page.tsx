import fs from "fs";
import path from "path";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import HarvestGrid from "@/components/HarvestGrid";

export default function Home() {
  const sequenceDir = path.join(process.cwd(), "public/sequence");
  let frames: string[] = [];

  try {
    frames = fs.readdirSync(sequenceDir)
      .filter((file) => file.endsWith(".webp"))
      .sort();
  } catch (error) {
    console.error("Error reading sequence directory:", error);
  }

  return (
    <main className="min-h-screen bg-[#121212] text-white">
      {/* Scroll Sequence */}
      <ScrollyCanvas frames={frames} />

      {/* Harvest Grid */}
      <HarvestGrid />

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <h3 className="text-xl font-bold tracking-tight mb-2">Local Harvest</h3>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Local Harvest. Connecting communities.
          </p>
        </div>
      </footer>
    </main>
  );
}
