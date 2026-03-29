const links = {
    Product: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
}

export default function Footer() {
    return (
        <footer className="border-t border-white/[0.08] px-10 pt-16 pb-10">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">

                    {/* Brand column */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="font-display text-2xl font-bold bg-gradient-to-r from-white to-indigo-400 bg-clip-text text-transparent mb-3">
                            Nexus
                        </div>
                        <p className="text-sm text-white/40 leading-relaxed max-w-[200px]">
                            The platform that replaces six tools and actually makes your team faster.
                        </p>
                    </div>

                    {/* Link columns */}
                    {Object.entries(links).map(([group, items]) => (
                        <div key={group}>
                            <p className="text-xs font-bold text-white/30 tracking-widest uppercase mb-4">{group}</p>
                            <ul className="space-y-3">
                                {items.map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/[0.08] gap-4">
                    <p className="text-sm text-white/30">© 2026 Nexus Inc. All rights reserved.</p>
                    <div className="flex gap-5">
                        {['Twitter', 'GitHub', 'LinkedIn'].map((s) => (
                            <a key={s} href="#" className="text-sm text-white/30 hover:text-white transition-colors duration-200">
                                {s}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}