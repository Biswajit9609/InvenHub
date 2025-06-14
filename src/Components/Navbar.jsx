function Navbar(props) {

  return (
    <nav className="navbar w-[90%] flex flex-col lg:flex-row justify-between items-center py-6 lg:py-4 lg:px-10 lg:mt-4 rounded-2xl mx-auto">
      <div className="logo-container logo font text-2xl font-bold">
        <h1>
          Inven<span className="text-[var(--logo-Red)]">Hub</span>
        </h1>
      </div>

      <div
        className="lg:hidden absolute right-8 top-6 cursor-pointer"
        onClick={props.toggleMenuOpen}
        // onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </div>
      </div>

      {/* Nav Items */}
      <div
        className={`nav-list-container flex-col lg:flex-row gap-6 lg:gap-12 items-center text-lg ${
          props.isMenuOpen ? 'flex mt-6' : 'hidden'
        } lg:flex`}
      >
        <a href="#" className="nav-link"><span>Features</span></a>
        <a href="#" className="nav-link"><span>Pricing</span></a>
        <a href="#" className="nav-link"><span>Login</span></a>
        <a href="#" className="get-started-btn">Get Started</a>
      </div>
    </nav>
  );
}

export default Navbar;
