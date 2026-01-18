"use client";

import { MotionValue, motion, useTransform } from "framer-motion";

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
    // Section 1: Intro (0% - 15%)
    const opacity1 = useTransform(scrollYProgress, [0, 0.10], [1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.10], [0, -50]);

    // Section 2: European Farmers (15% - 30%)
    const opacity2 = useTransform(scrollYProgress, [0.15, 0.22, 0.30], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.15, 0.30], [50, -50]);

    // Section 3: Values (35% - 50%)
    const opacity3 = useTransform(scrollYProgress, [0.35, 0.42, 0.50], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.35, 0.50], [50, -50]);

    // Section 4: Direct to Consumer (55% - 70%)
    const opacity4 = useTransform(scrollYProgress, [0.55, 0.62, 0.70], [0, 1, 0]);
    const y4 = useTransform(scrollYProgress, [0.55, 0.70], [50, -50]);

    // Section 5: Conclusion (75% - 90%)
    const opacity5 = useTransform(scrollYProgress, [0.75, 0.82, 0.90], [0, 1, 0]);
    const y5 = useTransform(scrollYProgress, [0.75, 0.90], [50, -50]);

    return (
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center">
            {/* Section 1 - Centered Hero */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute inset-0 flex items-center justify-center p-6"
            >
                <div className="text-center p-10 rounded-3xl bg-black/30 backdrop-blur-sm border border-white/5 shadow-2xl max-w-4xl">
                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white mb-6 drop-shadow-2xl">
                        Local <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Harvest.</span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-200 tracking-wide font-light uppercase">
                        Rooted in <span className="font-medium text-white">Community</span>.
                    </p>
                </div>
            </motion.div>

            {/* Section 2 - Left Aligned: Connecting Europe */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-0 flex items-center justify-start px-6 md:px-24"
            >
                <div className="max-w-2xl p-10 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Connecting farmers <br /> <span className="text-green-400">across Europe.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-200 font-medium">
                        From the rolling hills of Tuscany to the orchards of Normandy, we bridge the gap.
                    </p>
                </div>
            </motion.div>

            {/* Section 3 - Center Right: Values (Fixed: Added Colors) */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-0 flex items-center justify-end px-6 md:px-32"
            >
                <div className="max-w-xl text-right p-10 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Organic. <br />
                        <span className="text-yellow-200">Sustainable.</span> <br />
                        <span className="text-emerald-400">Ethical.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-200 font-medium">
                        We partner with farmers who care about the land as much as you do.
                    </p>
                </div>
            </motion.div>

            {/* Section 4 - Center Left: Direct to Consumer */}
            <motion.div
                style={{ opacity: opacity4, y: y4 }}
                className="absolute inset-0 flex items-center justify-start px-6 md:px-24"
            >
                <div className="max-w-2xl p-10 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Directly to <br /> <span className="text-yellow-400">your doorstep.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-200 font-medium">
                        Bypassing industrial supply chains to bring you the freshest produce possible.
                    </p>
                </div>
            </motion.div>

            {/* Section 5 - Centered Bottom: Conclusion (Fixed: Added creative layout) */}
            <motion.div
                style={{ opacity: opacity5, y: y5 }}
                className="absolute inset-0 flex items-center justify-center p-6"
            >
                <div className="max-w-4xl text-center p-12 rounded-[3rem] bg-black/50 backdrop-blur-xl border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight">
                        Straight from the <span className="text-amber-600">soil</span> <br />
                        to your <span className="text-green-500">table.</span>
                    </h2>
                    <div className="inline-block px-8 py-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-lg">
                        <p className="text-xl text-white font-medium tracking-wide">
                            No warehouses. No preservatives. Just real food.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
