import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "./StyleSheets/header.css";

const Header = () => {
  const [active, setActive] = useState("/");
  const menuData = [
    { path: "/", link: "Home" },
    { path: "/about", link: "About" },
    { path: "/contact", link: "Contact" },
  ];
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className="navBar">
        <div className="container nav-container">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="menu-toggle"
          />
          <Navbar.Brand to="/" className="nav-logo">
            <img src={logo} alt="logo" />
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0 ">
              {menuData.map((item, i) => (
                <Nav.Link
                  as={Link}
                  to={item.path}
                  key={i}
                  onClick={() => setActive(item?.path)}
                  className={`nav_link ${
                    item?.path === active ? "active" : ""
                  }`}
                >
                  {item.link}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Header;
