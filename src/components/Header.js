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

import Logo from './Logo';
import MainMenu from './MainMenu';

export default function Header(props) {
    return (
        <Navbar color="light" light expand="md">
            <Logo />
            <MainMenu />
        </Navbar>
    );
}