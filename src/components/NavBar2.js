import React, { useState } from "react"
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
  //   NavbarText,
} from "reactstrap"

const NavBar2 = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar light expand="md" className="nav-bar">
        <NavbarBrand href="/chess-champions/">
          &nbsp;&nbsp;ChessChampions
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://bateman.studio/">My Website</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/michael-bateman-979695194/">
                My LinkedIn
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.chess.com/news/view/published-data-api">
                API Used
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                GitHub
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem
                  href="https://github.com/MikeNotu"
                  className="dark-text"
                >
                  My GitHub
                </DropdownItem>
                <DropdownItem
                  href="https://github.com/MikeNotu/chess-champions"
                  className="dark-text"
                >
                  This Project's Repository
                </DropdownItem>{" "}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar2
