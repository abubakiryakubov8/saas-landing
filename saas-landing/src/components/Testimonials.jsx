const testimonials = [
    {
        stars: 5,
        text: '"We cut our deployment time by 80% in the first week. The DX is just on another level compared to what we were using before."',
        initials: 'SR',
        name: 'Sarah R.',
        role: 'CTO at Forma',
    },
    {
        stars: 5,
        text: '"Migrated our entire infra in a weekend. The docs are clear, support is insanely fast, and pricing makes sense at our scale."',
        initials: 'DK',
        name: 'David K.',
        role: 'Lead Engineer at Orbit',
    },
    {
        stars: 5,
        text: '"The analytics dashboard alone saved us from two critical incidents last quarter. I can\'t imagine going back."',
        initials: 'ML',
        name: 'Maya L.',
        role: 'Head of Product at Velo',
    },
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 px-10 max-w-6xl mx-auto">
            <p className="text-xs font-bold text-indigo-400 tracking-[3px] uppercase mb-3">Testimonials</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
                Loved by builders worldwide
            </h2>
            <p className="text-white/50 text-base max-w-md leading-relaxed">
                Don't take our word for it — hear from the teams shipping with Nexus every day.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
                {testimonials.map(({ stars, text, initials, name, role }) => (
                    <div
                        key={name}
                        className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 transition-all duration-300 hover:border-indigo-500/30"
                    >
                        <div className="text-yellow-400 tracking-widest text-sm mb-4">
                            {'★'.repeat(stars)}
                        </div>
                        <p className="text-sm text-white/70 leading-relaxed italic mb-5">{text}</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center font-bold text-sm flex-shrink-0">
                                {initials}
                            </div>
                            <div>
                                <p className="text-sm font-semibold">{name}</p>
                                <p className="text-xs text-white/40">{role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}