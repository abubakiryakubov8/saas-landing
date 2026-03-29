export default function Hero() {
    return (
        <section className="text-center py-28 px-10 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 px-4 py-2 rounded-full text-sm text-indigo-300 mb-8">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                Now in public beta
            </div>
            <h1 className="font-display text-6xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
                Build products at{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                    warp speed
                </span>
            </h1>
            <p className="text-lg text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
                The all-in-one platform that replaces 6 tools. Ship faster, collaborate smarter, scale without limits.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
                <button className="bg-indigo-600 px-8 py-4 rounded-xl text-base font-semibold hover:bg-indigo-500 transition-all hover:-translate-y-0.5">
                    Start for free →
                </button>
                <button className="border border-white/10 px-8 py-4 rounded-xl text-base font-semibold hover:border-indigo-500 transition-all">
                    Watch demo
                </button>
            </div>
            <div className="flex gap-16 justify-center mt-16 pt-12 border-t border-white/8">
                {[['50K+', 'Teams using Nexus'], ['99.9%', 'Uptime SLA'], ['4.9★', 'Average rating']].map(([num, label]) => (
                    <div key={label}>
                        <div className="font-display text-3xl font-bold">{num}</div>
                        <div className="text-sm text-white/40 mt-1">{label}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}