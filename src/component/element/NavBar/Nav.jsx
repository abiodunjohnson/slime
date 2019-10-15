import React from 'react';
import './Nav.css';
// import $ from 'jquery';
// import {findDOMNode} from 'react-dom';
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
  DropdownItem } from 'reactstrap';
  import {Link} from 'react-router-dom';


 class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


// componentDidMount = ()=>{
  // $("Navbar").show();

    
  //       $('Navbar').scroll(function() {
  //           if ($(this).scrollTop() < 570) {
  //               $('Navbar').fadeIn();
  //           } else {
  //               $('Navbar').fadeOut();
  //           }
  //       });
    
// }

  render() {
    return (
      <div className="nav-container">
        <Navbar   expand="md" fixed="top">
          <NavbarBrand href="/"><img src="https://i.ibb.co/f4GcYvC/SLIME-STOCK.png"  width="60px;" alt="Slimestock Logo" className="logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto navbar" navbar>
              <NavItem>
                <NavLink >   <Link className="nav-link" to='/'>Home </Link></NavLink>
              </NavItem>
              <NavItem>
           <NavLink> <Link  className="nav-link" to ='/aboutus' >About</Link> </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Products
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
            <Link className="nav-link" to='/training'> Training </Link> 
                  </DropdownItem>
                  <DropdownItem>
                  <Link className="nav-link" to='/snails'> Snails </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
              <NavLink ><Link className="nav-link" to="/photo">Photo</Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink className="nav-link" href=""><Link className="nav-link" to="/contact">Contact</Link></NavLink>
          </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavigationBar;




