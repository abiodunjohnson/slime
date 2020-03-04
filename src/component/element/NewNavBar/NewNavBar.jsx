import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './newnav.css';
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

 class NewNavBar extends Component {
     state ={
       scrolled : false,
       isOpen: false
     }
     componentDidMount(){
         window.addEventListener('scroll', ()=>{
             const isTop = window.scrollY < 600;
             if(isTop !== true){
                 this.setState({scrolled:true})
             }else{
                this.setState({scrolled:false})
             }
         })
     }
     toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    //  componentWillUnmount(){
    //      window.removeEventListener('scroll');
    //  }
    render() {
        return (
            <div className={this.state.scrolled ? 'nav scrolled': 'nav'}>
                <Navbar   expand="md">
                <NavbarBrand href="/"><img className="img-fluid"  src="https://i.ibb.co/f4GcYvC/SLIME-STOCK.png"  width="60px;" alt="Slimestock Logo" className="logo3" /></NavbarBrand>
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
        )
    }
}

export default NewNavBar;