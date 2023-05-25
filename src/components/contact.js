import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component{
    render(){
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Bianca Gotaski</h2>
                        <img src="https://pbs.twimg.com/profile_images/1128504038142689280/m0Bi_WOb_400x400.jpg" 
                            alt="picture"
                            style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            I love learning new areas within IT and understand about the business model and use all my technical expertise to increase business reliability, sustainability and functionality.
                            
                        </p>
                        <p style={{width: '85%', margin: 'auto', paddingTop: '1em', fontSize: '15px'}}>
                            Let's pick up a coffe! Let me know how I can help your business grow.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        {/** LinkedIn */}
                                        <a href="https://br.linkedin.com/in/bianca-gotaski-b9bba284" rel="noopener noreferrer" target="_blank">
                                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                            LinkedIn
                                        </a>
                                    </ListItemContent>
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        gotaskibianca@gmail.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;