import React, {Component} from 'react';

class About extends Component{
    render(){
        return (
            <div className="about-me">
                <img
                    src="https://cdn.dribbble.com/users/492711/screenshots/2528440/hourglass_loader.gif"
                    style={{width: '250px'}}
                />
                <p style={{width: '25%', margin: 'auto', paddingTop: '1em'}}>
                    I have +5 years of experience in IT. Whether it's programming, troubleshooting, helping teams and implementing code or infrastructure around companies I worked with.
                    I started first as a developer, writing code for maintenance and creating functionalities for web applications, then later on I supported developers at IBM with the operational side, and lastly, I've made advocacy for a startup, in order to help increase the product visibility and engage with developers on understanding about the product.
                </p>
            </div>
        )
    }
}

export default About;