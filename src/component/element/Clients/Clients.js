import React from 'react';
import './Clients.css';


class Clients extends React.Component {

    render() {
        return (
            <div>
                <section className="section-clients">
                    <div className="container">
                        <div className="row">
                            <div className="col">   
            <h1 className="client-heading">Our Clients</h1>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <div className="clients-img">
                                <img className="clients-image" src="/images/mf-avatar.svg" alt="snail1" />
                                </div>

                                <div className="client-card">
                                    <p className="client-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                                    <div className="client-text">
                                    <h1 className="client-name">Johnson</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="clients-img">
                                <img className="clients-image" src="/images/mf-avatar.svg" alt="snail1" />
                                </div>

                                <div className="client-card">
                                    <p className="client-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                                    <div className="client-text">
                                    <h1 className="client-name">Johnson</h1>
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
export default Clients;