import React from 'react';
import './Choose.css';
class Choose extends React.Component {
    render() {
        return (
            <div>
                <section className="section-choose">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="choose-heading">Why Slimestock?</div>
                            </div>
                        </div>

                        <div className="row choose_pix_cont">
                            <div className="col-4">
                                <div className="why">
                                    <img className="snail img-fluid" src="/images/Choose1.jpg" alt="snail1" />   
                                    <div className="why-body">
                                        <h5 className="why-head">Quality Products</h5>
                                      
                                        <p className="why-text"> We ensure our snails are fed with the best quality and right combination of feed to make them healthy and edible.</p>
                                    </div>
                                 </div>
                            </div>

                            <div className="col-4">
                                <div className="why">
                                    <img className="photoss img-fluid" src="/images/Choose2.jpg" alt="snail1" />   
                                    <div className="why-body">
                                        <h5 className="why-head">Work Smart</h5>
                                       
                                        <p className="why-text"> We ensure our snails are fed with the best quality and right combination of feed to make them healthy and edible.</p>
                                    </div>
                                 </div>
                            </div>

                            <div className="col-4">
                                <div className="why">
                                    <img className="snail img-fluid" src="/images/Choose1.jpg" alt="snail1" />   
                                    <div className="why-body">
                                        <h5 className="why-head">Excellent Services</h5>
                                       
                                        <p className="why-text"> We ensure our snails are fed with the best quality and right combination of feed to make them healthy and edible.</p>
                                    </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        )
    }
}

export default Choose;