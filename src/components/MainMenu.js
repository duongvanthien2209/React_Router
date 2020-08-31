import React from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function MainMenu(props) {
    return (
        <Nav className="ml-auto" navbar>
            <NavItem>
                <Link className="nav-link" to="/">Trang chủ</Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to="/aboutme">About Me</Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to="/blog">Blog</Link>
            </NavItem>
        </Nav>
    );
}