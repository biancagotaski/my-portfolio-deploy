import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Icon } from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}} >React Project #1</CardTitle>
                    <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                )
            } else if(this.state.activeTab === 1){
            return (
                <div><h1>This is Angular</h1></div>
            )
        } else if(this.state.activeTab === 2){
            return (
                <div><h1>This is VueJS</h1></div>
            )
        } else if(this.state.activeTab === 3){
            return (
                <div><h1>This is MongoDB</h1></div>
            )
        }
    }

    render(){
        return (
            <div className="category-tabs">
                <Tabs activeTab={ this.state.activeTab } onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    {/** Categories / Skills */}
                    {/** Projects that you want to show by category */}
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                    {this.toggleCategories()}
                </section>
            </div>
        )
    }
}

export default Projects;