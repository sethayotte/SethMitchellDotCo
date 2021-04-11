import React from "react";

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
} from "shards-react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "./components/About";
import Resources from "./components/Resources";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./sass/App.scss";

import { BsThreeDots } from "react-icons/bs";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false,
    };
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen,
      },
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen,
      },
    });
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar expand="md" className="navBar">
            <NavbarBrand href="/" className="navBrand">
              sethmitchell<span className="navBrandDot">dot</span>co
            </NavbarBrand>
            <NavbarToggler
              onClick={this.toggleNavbar}
              className="toggleContainer"
            >
              <span>
                <BsThreeDots className="toggleIcon" />
              </span>
            </NavbarToggler>
            <Collapse open={this.state.collapseOpen} navbar>
              <Nav navbar className="ml-auto">
                <Dropdown
                  className="dropdown"
                  open={this.state.dropdownOpen}
                  toggle={this.toggleDropdown}
                >
                  <NavLink href="/blog" className="navLink" id="blogLink">
                    Blog
                  </NavLink>
                  <DropdownToggle nav caret />
                  <DropdownMenu>
                    <DropdownItem>Investing</DropdownItem>
                    <DropdownItem>Budgeting</DropdownItem>
                    <DropdownItem>Personal Finance</DropdownItem>
                    <DropdownItem>Credit Cards</DropdownItem>
                    <DropdownItem>Reading</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <NavItem>
                  <NavLink href="/resources" className="navLink">
                    Resources
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact" className="navLink">
                    Contact
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/about" className="navLink">
                    About
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>

          <Switch>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/resources">
              <Resources />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}
