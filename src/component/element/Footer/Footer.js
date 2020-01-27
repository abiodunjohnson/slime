import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

 class Footer extends React.Component {

    render() {
        return (
            <div>
                <footer id="footer">
                    {/* <div className="container">
                    <div class="row text-white p-5">
                <div class="col-md-3">
                <img className="logo" src="https://i.ibb.co/f4GcYvC/SLIME-STOCK.png"  width="60px;" alt="snail1" />
                </div>
                <div className="col-md-4">
                    <h6 className="footer-heading">Useful Links</h6>
                    <ul className="footer-link">
                    <li className="link-style"><Link to="/">Home</Link></li>
                    <li className="link-style"><Link to="/aboutus">About Us</Link></li>
                    <li className="link-style"><Link to="/">Product</Link></li>
                    <li className="link-style"><Link to="/">Service</Link></li>
                    <li className="link-style"><Link to="/">Privacy</Link></li>
                  
                    </ul>
                </div> */}
                {/* <div class="col-md-4">
                    <h6>Resources</h6>
                    <p><a href="#">Terms & Conditions</a></p>
                    <p><a href="#">Help</a> </p>
                    <p><a href="#">FAQ'S</a></p>
                    <p><a href="#">Wallet Pin</a></p>
                    <p><a href="#">Escrow Account</a></p>
                </div> */}




                {/* <div className="col-md-4 block-right">
                    <h6 className="footer-heading">Contact</h6>
                    <hr></hr>
                    <div className="left-block">
                    <ul className="footer-list-social-icon">
                                       
                                       <li className="social-icon"><Link to=""><FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon></Link></li>
                                          
                                       <li className="social-icon"><Link to=""><FontAwesomeIcon icon={faFacebookSquare} size="md"></FontAwesomeIcon></Link></li>
                                           
   
                                        <li className="social-icon"><Link to=""><FontAwesomeIcon icon={faInstagram} size="md"></FontAwesomeIcon></Link></li>
   
                                       <li className="social-icon"><Link to=""><FontAwesomeIcon icon={faLinkedin} size="md"></FontAwesomeIcon></Link></li>
                                          
                                           
                                   </ul>
                                   </div>
                </div> */}

            {/* </div>
            </div> */}
            {/* <div class="row">
                <div class="col-md-12 text-center p-2 text-white bg-dark">
                    <p>Copyright &copy; 2020</p>
                </div>
            </div> */}
                    <div className="footer-top">
                      <div className="container">

                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-info">
                                <img className="logo" src="https://i.ibb.co/f4GcYvC/SLIME-STOCK.png"  width="60px;" alt="snail1" />
                                <p className="logo-paragraph">Solving insufficient snail supply in Africa</p>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-links">
                            <h4 className="link-heading">Links</h4>
                                    <ul>
                                        <li className="link-style"><Link to="/">Home</Link></li>
                                        <li className="link-style"><Link to="/aboutus">About Us</Link></li>
                                        <li className="link-style"><Link to="/">Product</Link></li>
                                        <li className="link-style"><Link to="/">Service</Link></li>
                                         <li className="link-style"><Link to="/">Privacy</Link></li> 
                                     </ul>
                                </div>

                                <div className="col-lg-4 col-md-6 footer-links"> 
                               
                             
                                     <ul className="footer-list-social-icon">
                                       
                                    <li className="social-icon"><Link to=""><FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon></Link></li>
                                       
                                    <li className="social-icon"><Link to=""><FontAwesomeIcon icon={faFacebookSquare} size="md"></FontAwesomeIcon></Link></li>
                                        

                                     <li className="social-icon"><Link to=""><FontAwesomeIcon icon={faInstagram} size="md"></FontAwesomeIcon></Link></li>

                                    <li className="social-icon"><Link to=""><FontAwesomeIcon icon={faLinkedin} size="md"></FontAwesomeIcon></Link></li>
                                       
                                        
                                </ul> 
                                    
                               
                              </div> 

                             
                             </div>
                         </div> 
                    </div> 
                   
                </footer>
            </div>
        )
    }
}
export default Footer;