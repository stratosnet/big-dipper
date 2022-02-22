import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

import { Link } from 'react-router-dom';
import moment from 'moment';
import i18n from 'meteor/universe:i18n';

const T = i18n.createComponent();

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md" fixed="bottom" id="footer" className="d-none d-md-flex">
                    <span className="text-muted"><a href="https://www.thestratos.org/privacy-policy.html" target="_blank"><T>navbar.policy</T></a> &copy;2022 Stratos </span>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="https://www.thestratos.org/contact.html" target="_blank"><T>navbar.contact</T> <i className="fa fa-phone-square"></i></NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                <Navbar color="light" light fixed="bottom" className="d-block d-md-none mobile-menu">
                    <Nav>
                        <NavItem>
                            <NavLink tag={Link} to="/"><i className="material-icons">home</i></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/validators"><i className="material-icons">perm_contact_calendar</i></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/blocks"><i className="fas fa-square"></i></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/transactions"><i className="fas fa-sync"></i></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/proposals"><i className="material-icons">insert_drive_file</i></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/voting-power-distribution"><i className="material-icons">power_on</i></NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
