const plans = [
    {
        name: 'Starter',
        price: '0',
        cycle: 'Free forever',
        features: ['Up to 3 projects', '5GB storage', 'Community support', 'Basic analytics'],
        cta: 'Get started free',
        popular: false,
    },
    {
        name: 'Pro',
        price: '49',
        cycle: 'per month, billed monthly',
        features: ['Unlimited projects', '100GB storage', 'Priority support', 'Advanced analytics', 'Custom domains', 'Team collaboration'],
        cta: 'Start Pro trial →',
        popular: true,
    },
    {
        name: 'Enterprise',
        price: null,
        cycle: 'contact us',
        features: ['Everything in Pro', 'Unlimited storage', 'Dedicated SLA', 'SSO / SAML', 'Custom contracts', 'Onboarding support'],
        cta: 'Talk to sales',
        popular: false,
    },
]

export default function Pricing() {
    return (
        <section id="pricing" className="py-20 border-t border-b border-white/[0.08] bg-white/[0.02]">
            <div className="max-w-6xl mx-auto px-10">
                <p className="text-xs font-bold text-indigo-400 tracking-[3px] uppercase mb-3">Pricing</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
                    Simple, transparent pricing
                </h2>
                <p className="text-white/50 text-base max-w-md leading-relaxed">
                    Start free. Scale as you grow. No surprise invoices.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
                    {plans.map(({ name, price, cycle, features, cta, popular }) => (
                        <div
                            key={name}
                            className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${popular
                                    ? 'border-indigo-500 bg-indigo-500/[0.08]'
                                    : 'border-white/[0.08]'
                                }`}
                        >
                            {popular && (
                                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                                    Most popular
                                </span>
                            )}

                            <p className="text-xs font-bold text-white/50 tracking-widest uppercase mb-3">{name}</p>

                            {price !== null ? (
                                <div className="font-display text-5xl font-bold mb-1">
                                    <sup className="text-2xl align-top mt-2">$</sup>{price}
                                </div>
                            ) : (
                                <div className="font-display text-4xl font-bold mb-1 pt-2">Custom</div>
                            )}

                            <p className="text-sm text-white/40 mb-6">{cycle}</p>

                            <ul className="mb-7 space-y-0">
                                {features.map((f) => (
                                    <li key={f} className="flex items-center gap-2 text-sm text-white/60 py-2 border-b border-white/[0.08]">
                                        <span className="text-indigo-400 font-bold flex-shrink-0">✓</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${popular
                                        ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                                        : 'bg-transparent border border-white/[0.08] text-white hover:border-indigo-500 hover:text-indigo-400'
                                    }`}
                            >
                                {cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}