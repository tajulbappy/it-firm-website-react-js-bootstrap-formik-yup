// @ts-nocheck
import React, { useEffect, useState, useRef } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import logo from "../../assets/is-images/logo.jpg";
//icons
import { FaPhoneVolume } from "react-icons/fa6";

const NavbarComponent = () => {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [expanded, setExpanded] = useState(false); // Control navbar collapse
  const inactivityTimer = useRef(null);
  const dropdownOpen = useRef(false);
  const lastActivity = useRef(Date.now()); // Track last activity time

  // Hide navbar after 3 seconds of inactivity
  const startInactivityTimer = () => {
    if (dropdownOpen.current) return; // Don't hide if dropdown is open

    clearTimeout(inactivityTimer.current);

    inactivityTimer.current = setTimeout(() => {
      setNavbarVisible(false);
    }, 3000);
  };

  // Reset timer on user activity
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Close mobile menu when clicking any link
  const handleLinkClick = () => {
    setExpanded(false);
    scrollToTop();
  };

  // Track dropdown state
  const handleDropdownToggle = (isOpen) => {
    dropdownOpen.current = isOpen;
    if (isOpen) {
      setNavbarVisible(true);
      clearTimeout(inactivityTimer.current);
    } else {
      startInactivityTimer();
    }
  };

  useEffect(() => {
    const handleUserActivity = () => {
      const now = Date.now();
      const timeSinceLastActivity = now - lastActivity.current;

      // Only show navbar if it's been hidden AND there's actual user interaction
      // Ignore rapid-fire events (like scroll) that happen within 100ms
      if (timeSinceLastActivity > 100) {
        lastActivity.current = now;

        // Only show navbar if it's currently hidden
        if (!navbarVisible) {
          setNavbarVisible(true);
        }

        // Always restart the inactivity timer
        startInactivityTimer();
      }
    };

    const activityEvents = [
      "mousemove",
      "keydown",
      "touchstart",
      "click",
      "wheel", // Better than scroll for detecting intentional scrolling
    ];

    activityEvents.forEach((event) =>
      window.addEventListener(event, handleUserActivity, { passive: true })
    );

    // Start the inactivity timer initially
    startInactivityTimer();

    return () => {
      clearTimeout(inactivityTimer.current);
      activityEvents.forEach((event) =>
        window.removeEventListener(event, handleUserActivity)
      );
    };
  }, [navbarVisible]); // Add navbarVisible as dependency

  return (
    <>
      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={(expanded) => setExpanded(expanded)}
        className={`fixed-top bg-body-tertiary shadow transition-navbar py-0 ${
          navbarVisible ? "" : "navbar-hidden"
        }`}
        style={{
          transition: "transform 0.3s ease-in-out",
          transform: navbarVisible ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <Container fluid>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand fw-semibold d-flex">
              <div>
                <img
                  src={logo}
                  alt="company-logo"
                  className="img-fluid me-3 rounded-pill"
                  id="company-logo"
                />
              </div>
              <div className="d-flex flex-column">
                <span id="company-name" className="text-uppercase fs-5">
                  Innovative Solutions
                </span>
                <span className="quality-support text-capitalize text-primary">
                  Quality support in time
                </span>
              </div>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="bg-primary fw-normal rounded mx-auto justify-content-center px-2 py-1 w-100 custom-nav"
              id="nav-link"
            >
              <Link
                to="/"
                className="nav-link text-light my-style"
                id="basic-nav"
                onClick={handleLinkClick}
              >
                Home
              </Link>

              {/* -----------Server & Network Solutions Start------ */}
              <NavDropdown
                title="Server"
                id="basic-nav-dropdown"
                onToggle={handleDropdownToggle}
                className="text-capitalize"
              >
                <NavDropdown.Item>
                  <Link
                    onClick={handleLinkClick}
                    to="/svr-repair"
                    className="nav-link fw-medium"
                  >
                    Server repair & servicing
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    onClick={handleLinkClick}
                    to="/svr-parts"
                    className="nav-link fw-medium"
                  >
                    Server accessories
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    onClick={handleLinkClick}
                    to="/used-server"
                    className="nav-link fw-medium"
                  >
                    Used server sell
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    onClick={handleLinkClick}
                    to="/svr-amc"
                    className="nav-link fw-medium"
                  >
                    Server AMC
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              {/* -----------Server & Network Solutions End------ */}

              {/* -----------Printer Solutions Start------ */}
              <NavDropdown
                title="Printer"
                id="basic-nav-dropdown"
                onToggle={handleDropdownToggle}
              >
                <NavDropdown.Item>
                  <NavLink
                    onClick={handleLinkClick}
                    to="/laserprinterservice"
                    className="nav-link fw-medium"
                  >
                    Laser Printer Service
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    onClick={handleLinkClick}
                    to="/laserprinterparts"
                    className="nav-link fw-medium"
                  >
                    Laser Printer Parts
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    onClick={handleLinkClick}
                    to="/usedprinter"
                    className="nav-link fw-medium"
                  >
                    Used Printer
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    onClick={handleLinkClick}
                    to="/mkitrepair"
                    className="nav-link fw-medium"
                  >
                    Maintenance Kit Repair
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    onClick={handleLinkClick}
                    to="/printertonerink"
                    className="nav-link fw-medium"
                  >
                    Printer Toner or INK
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link
                    onClick={handleLinkClick}
                    to="/printererrorcode"
                    className="nav-link fw-medium"
                  >
                    Printer Error Code
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              {/* -----------Printer Solutions End------ */}

              {/* -----------Power-Backup Solutions End------ */}
              <NavDropdown
                title="Power Backup"
                id="basic-nav-dropdown"
                onToggle={handleDropdownToggle}
              >
                <NavDropdown.Item>
                  <Link
                    onClick={handleLinkClick}
                    to="/ups-onoff"
                    className="nav-link  fw-medium"
                  >
                    UPS Online/Offline
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              {/* -----------Power-Backup Solutions End------ */}

              {/* -----------Software Solutions Start------ */}
              <NavDropdown
                title="Software"
                id="basic-nav-dropdown"
                onToggle={handleDropdownToggle}
              >
                <NavDropdown.Item>
                  <Link
                    onClick={handleLinkClick}
                    to="/webdev"
                    className="nav-link fw-medium"
                  >
                    Website Development
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    onClick={handleLinkClick}
                    to="/software"
                    className="nav-link fw-medium"
                  >
                    Management Software
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              {/* -----------Software Solutions End------ */}

              {/* -----------Others Solutions Start------ */}
              <NavDropdown
                title="Others"
                id="basic-nav-dropdown"
                onToggle={handleDropdownToggle}
              >
                <NavDropdown.Item>
                  <Link
                    onClick={handleLinkClick}
                    to="/safety"
                    className="nav-link fw-medium"
                  >
                    Safety & Security
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              {/* -----------Others Solutions End------ */}
              <Link
                to="/blog"
                className="nav-link text-light"
                id="basic-nav"
                onClick={handleLinkClick}
              >
                Blog
              </Link>
              <Link
                to="/about"
                className="nav-link text-light"
                id="basic-nav"
                onClick={handleLinkClick}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="nav-link text-light"
                id="basic-nav"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
          {/*  Hotline number */}
          <div
            className="text-danger fw-normal d-flex justify-content-center align-items-center fw-semibold ms-4 ms-md-2 p-2"
            id="hotline"
          >
            <FaPhoneVolume className="me-2 fs-6" />{" "}
            <span className="text-dark fs-6 fw-normal">01716093650</span>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
