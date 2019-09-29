import React from 'react'
import './Service.css';
 class Service extends React.Component {
    render() {
        return (
            <div>
              <section className="section-services">
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <div className="choose-heading">Our Services</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-card">
                                <div className="illustration-box">
                                <img className="illustration img-fluid" src="/images/undraw1.png" alt="snail1" />
                                </div>
                                <div className="service-body">
                                    <h3 className="pri-text">Consult</h3>
                                    <p className="sec-text">Do you need to set up your farm anywhere in Nigeria? SlimeStock here to equip you with the latest and modern trends about snail farming in Nigeria.</p>
                               </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-card">
                                <div className="illustration-box">
                                <img className="illustration img-fluid" src="/images/undraw2.png" alt="snail1" />
                                </div>
                                <div className="service-body">
                                    <h3 className="pri-text">Training</h3>
                                    <p className="sec-text">Will you like to learn or further enhance your knowledge of snail farming and or how to profitably run one? If yes, We at Slimestock Farming, offers snail farming training.</p>
                               </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="service-card">
                                <div className="illustration-box">
                                <img className="illustration img-fluid" src="/images/undraw3.png" alt="snail1" />
                                </div>
                                <div className="service-body">
                                    <h3 className="pri-text">Sales</h3>
                                    <p className="sec-text">We supply and render door to door delivery of snails in different sizes, from infant stages to the adult table size to individuals and organization.</p>
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
export default Service;