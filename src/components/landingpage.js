import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
    render(){
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://media.licdn.com/dms/image/D4D03AQGuWxcAs55F2w/profile-displayphoto-shrink_800_800/0/1674178098268?e=2147483647&v=beta&t=cD_m2rW6I9izEsSt1hJXL6Mzk7xTuAbhT9sDWxBKatM"
                        alt="avatar"
                        className="avatar-img"></img>

                        <div className="banner-text">
                            <h1>Software Engineer</h1>
                            <hr/>
                            <p>Python | JavaScript | React | VueJS | CI/CD | Cloud Applications</p>

                            <div className="social-links">
                                {/** GitHub */}
                                <a href="https://github.com/biancagotaski" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                                {/** Medium */}
                                <a href="https://medium.com/@gotaskibianca" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-medium-square" aria-hidden="true"></i>
                                </a>
                                {/** LinkedIn */}
                                <a href="https://br.linkedin.com/in/bianca-gotaski-b9bba284" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>    
            </div>
        )
    }
}

export default Landing;