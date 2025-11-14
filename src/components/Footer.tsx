export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-300 bg-[#F0EEDE] noise-bg">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-3 gap-8">
        {/* Column 1: Brand */}
        <div>
          <h3 className="text-2xl font-spectral font-bold mb-4">Walnut Works</h3>
          <p className="text-sm leading-relaxed text-gray-700">
            A design studio dedicated to creating meaningful experiences through thoughtful craft and authentic collaboration.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h4 className="text-sm font-bold mb-4 text-gray-900">Explore</h4>
          <nav className="flex flex-col gap-2 text-sm">
            <a href="/about" className="text-gray-700 hover:opacity-60 transition-opacity">
              About
            </a>
            <a href="/history" className="text-gray-700 hover:opacity-60 transition-opacity">
              History
            </a>
            <a href="/work" className="text-gray-700 hover:opacity-60 transition-opacity">
              Work
            </a>
          </nav>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="text-sm font-bold mb-4 text-gray-900">Visit</h4>
          <address className="text-sm not-italic leading-relaxed text-gray-700">
            Butley Mills Studio<br />
            Suffolk, UK
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Walnut Works. All rights reserved.</p>
          <p>Crafted with care</p>
        </div>
      </div>
    </footer>
  );
}
