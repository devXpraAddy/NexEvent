import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className="logo">KING's</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to="hero" spy smooth duration={500}>
            HOME
          </Link>
          <Link to="services" spy smooth duration={500}>
            SERVICES
          </Link>
          <Link to="about" spy smooth duration={500}>
            ABOUT
          </Link>
          <Link to="contact" spy smooth duration={500}>
            CONTACT
          </Link>
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
