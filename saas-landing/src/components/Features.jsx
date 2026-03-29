const features = [
    { icon: '⚡', title: 'Instant deployment', desc: 'Push to production in seconds. Zero-config pipelines with automatic rollbacks and health checks.' },
    { icon: '🔒', title: 'Enterprise security', desc: 'SOC 2 Type II, end-to-end encryption, SSO, and role-based access control out of the box.' },
    { icon: '📊', title: 'Real-time analytics', desc: 'Live dashboards, custom reports, and anomaly detection so you always know what\'s happening.' },
    { icon: '🔗', title: '200+ integrations', desc: 'Connect to your existing stack in minutes. Slack, GitHub, Jira, Stripe — it\'s all there.' },
    { icon: '🌍', title: 'Global CDN', desc: 'Serve users from 38 edge locations worldwide. Sub-50ms response times, guaranteed.' },
    { icon: '🤖', title: 'AI co-pilot', desc: 'Let our AI suggest optimizations, catch bugs before they ship, and write documentation for you.' },
]

export default function Features() {
    return (
        <section id="features" className="py-20 px-10 max-w-6xl mx-auto">
            <p className="text-xs font-bold text-indigo-400 tracking-[3px] uppercase mb-3">Features</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
                Everything you need,<br />nothing you don't
            </h2>
            <p className="text-white/50 text-base max-w-md leading-relaxed">
                Purpose-built tools that actually work together — no duct tape required.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
                {features.map(({ icon, title, desc }) => (
                    <div
                        key={title}
                        className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 transition-all duration-300 hover:border-indigo-500/40 hover:bg-indigo-500/[0.06] hover:-translate-y-1 cursor-default"
                    >
                        <div className="w-11 h-11 rounded-xl bg-indigo-500/15 flex items-center justify-center text-xl mb-5">
                            {icon}
                        </div>
                        <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
                        <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}