import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


 class Footer extends React.Component {

    render() {
        return (
            <div>
                <footer id="footer">
                <div className="footer-top">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-info">
                                <img className="logo" src="https://i.ibb.co/f4GcYvC/SLIME-STOCK.png"  width="60px;" alt="snail1" />
                                <p className="footer-paragraph">Solving insufficient snail supply in africa</p>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                               <h4 className="link-heading">Links</h4>
                             
                                    <ul>
                                        <li className="link-style"><Link to="/">Home</Link></li>
                                        <li className="link-style"><Link to="/aboutus">About Us</Link></li>
                                        <li className="link-style"><Link to="/">Product</Link></li>
                                        <li className="link-style"><Link to="/">Service</Link></li>
                                        <li className="link-style"><Link to="/">Privacy</Link></li>
                                    </ul>
                                    
                                {/* <ul> <li></li>class="link-style"><li>="index.html">Home</li>
                                <ul class="link-style"><li><a href="about.html">About Us</a></li>
                             <ul class="link-style"><li>Product</a></li></ul>
                             <ul class="link-style"><li>Service</a></li></ul>
                             <ul class="link-style"><li><a href="privacy.html">Privacy</a></li></ul> */}
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