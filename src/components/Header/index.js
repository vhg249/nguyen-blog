import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMedia } from "react-use";
import breakpoints from "../../theme/breakpoints";
import { CloseIcon, HeaderWrapper, MenuIcon, Navbar } from "./style";

const Header = () => {
  const [showMenu, setshowMenu] = useState(false);
  const isMobile = useMedia(breakpoints.sm);
  return (
    <>
      <HeaderWrapper>
        <div className="mobile" />
        <div className="name">nguyen</div>
        {(!isMobile || (isMobile && showMenu)) && (
          <Navbar>
            <CloseIcon>
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"
                onClick={() => setshowMenu(false)}
              />
            </CloseIcon>
            <Link to="/">
              <p className="item">Home</p>
            </Link>
            <Link to="contact">
              <p className="item">Contact</p>
            </Link>
            <Link to="about">
              <p className="item">About</p>
            </Link>
          </Navbar>
        )}

        <MenuIcon
          src="https://img.icons8.com/material-rounded/24/000000/menu--v1.png"
          onClick={() => setshowMenu(true)}
        />
      </HeaderWrapper>
    </>
  );
};

export default Header;
