import { Link } from 'react-router-dom';
function Navbar(props) {

  return (
    <nav className="navbar w-[90%] flex flex-col lg:flex-row justify-between items-center py-6 lg:py-4 lg:px-10 lg:mt-4 rounded-2xl mx-auto">
      <div className="logo-container logo font text-2xl font-bold">
        <Link to="/"><h1>Inven<span className="text-[var(--logo-Red)]">Hub</span></h1></Link>
      </div>
      <div
            className="lg:hidden absolute right-8 top-7 cursor-pointer"
            onClick={props.toggleMenuOpen}
          >
        {
        props.isMenuOpen ? 
          <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/multiply.png" alt="multiply"/>
          :
          <img width="30" height="30" src="https://img.icons8.com/sf-black/64/menu.png" alt="menu"/>
        }
        </div>
      <div
        className={`nav-list-container flex-col w-full lg:w-auto lg:flex-row gap-6 lg:gap-12 items-center text-lg ${
          props.isMenuOpen ? 'flex mt-6' : 'hidden'
        } lg:flex`}
      >
        <Link to="#" className="nav-link"><span>Features</span></Link>
        <Link to="#" className="nav-link"><span>Pricing</span></Link>
        <Link to="/login" className="nav-link"><span>Login</span></Link>
        <Link to="/sign-up" className="get-started-btn">Get Started</Link>
      </div>
    </nav>
  );
}

export default Navbar;
