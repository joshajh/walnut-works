export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-300 bg-[#F0EEDE] noise-bg mt-32">
      <div className="max-w-7xl mx-auto px-12 py-24 grid grid-cols-3 gap-16">
        {/* Column 1: Brand */}
        <div>
          <h3 className="text-2xl font-playfair font-bold mb-6">Walnut Works</h3>
          <p className="text-sm leading-relaxed text-gray-700 font-light">
            A design studio dedicated to creating meaningful experiences through thoughtful craft and authentic collaboration.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h4 className="text-xs font-semibold mb-6 text-gray-900 tracking-wider uppercase">Explore</h4>
          <nav className="flex flex-col gap-3 text-sm">
            <a href="/about" className="text-gray-700 hover:opacity-60 transition-opacity font-light">
              About
            </a>
            <a href="/history" className="text-gray-700 hover:opacity-60 transition-opacity font-light">
              History
            </a>
            <a href="/work" className="text-gray-700 hover:opacity-60 transition-opacity font-light">
              Work
            </a>
          </nav>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="text-xs font-semibold mb-6 text-gray-900 tracking-wider uppercase">Visit</h4>
          <address className="text-sm not-italic leading-relaxed text-gray-700 font-light">
            Butley Mills Studio<br />
            Suffolk, UK
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-12 py-8 flex justify-between items-center text-xs text-gray-500">
          <p className="font-light">&copy; {new Date().getFullYear()} Walnut Works. All rights reserved.</p>
          <p className="font-light italic">Crafted with care</p>
        </div>
      </div>
    </footer>
  );
}
