import React from 'react';
import './AboutUs.css';



 class AboutUs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show : false
        };
    }

    handleClick = () => {
        const {show} = this.state
        this.setState({ 
            show : !show
        })
    }


    render() {
        
        return (
            <div>
                <section className="section_about">
                <div className="container">
                    <div className="row abt-cont">
                        <div className="col-6">
                        
                        <img className="snail" src="/images/Snail1.jpg" alt="snail1" />   
                        </div>
                        <div className="col-6">
                            <div className="about_all">
                              <h1 className="about_heading">About Our Farm</h1>
                              <p className="about_paragraph">We are committed to snail        farming, snail meat            processing, and packaging.
                               SlimeStock is an agribusiness Company in Nigeria, offering snail products in the Nigerian Agricultural sector. 
                              </p>
                             {this.state.show && <Next />}
                             <button onClick={this.handleClick} className="read_more">Read More</button>
                            </div>
                        </div>
                    </div>
                </div> 
                </section>
            </div>
        )
    }
}




 class Next extends React.Component {
    render() {
        return (
            <div>
                <p className="about_paragraph">Do you need snail farming training or you need to set up your farm anywhere in Nigeria? We are here to equip you with the latest and modern trends about snail farming in Nigeria.</p>
            </div>
        )
    }
}

export default AboutUs;