import { ArrowRight, Leaf, Sprout, Sun } from "lucide-react";

const VEGETABLES = [
    {
        id: 1,
        name: "Heirloom Tomato",
        price: "$4.50 / lb",
        farmer: "Willow Creek Farm",
        icon: Sun,
        image: "bg-red-900/20"
    },
    {
        id: 2,
        name: "Organic Kale",
        price: "$3.00 / bunch",
        farmer: "Green Valley Organics",
        icon: Leaf,
        image: "bg-green-900/20"
    },
    {
        id: 3,
        name: "Honeycrisp Apple",
        price: "$2.75 / lb",
        farmer: "Sunrise Orchards",
        icon: Sprout,
        image: "bg-yellow-900/20"
    },
    {
        id: 4,
        name: "Rainbow Chard",
        price: "$3.25 / bunch",
        farmer: "Deep Roots Garden",
        icon: Leaf,
        image: "bg-emerald-900/20"
    },
    {
        id: 5,
        name: "Purple Carrots",
        price: "$3.50 / bunch",
        farmer: "Earthy Delights",
        icon: Sprout,
        image: "bg-purple-900/20"
    },
    {
        id: 6,
        name: "Golden Beets",
        price: "$4.00 / bunch",
        farmer: "Amber Fields",
        icon: Sun,
        image: "bg-orange-900/20"
    }
];

export default function HarvestGrid() {
    return (
        <section className="relative w-full py-24 px-6 md:px-12 bg-[#121212] z-20">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Fresh this Week
                    </h2>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        Harvested yesterday, delivered today. See what our partner farmers have picked for you using regenerative practices.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {VEGETABLES.map((veg) => (
                        <div
                            key={veg.id}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                        >
                            {/* Abstract Background Decoration */}
                            <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full ${veg.image} blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-opacity-50`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/5 text-white shadow-inner">
                                    <veg.icon size={24} />
                                </div>

                                <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                                    {veg.name}
                                </h3>

                                <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                                            {veg.farmer}
                                        </p>
                                        <p className="text-lg font-bold text-white mt-1">
                                            {veg.price}
                                        </p>
                                    </div>

                                    <button className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center transform translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-green-400">
                                        <ArrowRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
