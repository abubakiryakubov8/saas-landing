export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-10 py-5 border-b border-white/8 sticky top-0 z-50 bg-[#050510]/80 backdrop-blur-xl">
            <div className="font-display text-2xl font-bold bg-gradient-to-r from-white to-indigo-400 bg-clip-text text-transparent">
                Nexus
            </div>
            <ul className="flex gap-7 list-none text-sm text-white/60">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
            </ul>
            <div className="flex gap-3">
                <button className="border border-white/10 px-5 py-2 rounded-lg text-sm font-semibold hover:border-indigo-500 transition-all">Sign in</button>
                <button className="bg-indigo-600 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-500 transition-all">Get started</button>
            </div>
        </nav>
    )
}