import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return (
            <div>
                <Grid>
                    {/** Left Side*/}
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://pbs.twimg.com/profile_images/1128504038142689280/m0Bi_WOb_400x400.jpg"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Bianca Gotaski</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five 
                            centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged.
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Phone</h5>
                        <p>+55 21 96844-7916</p>
                        <h5>E-mail</h5>
                        <p>gotaskibianca@gmail.com</p>
                        <h5>Web</h5>
                        <p>gotaski.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>

                    {/** Right Side*/}
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2016}
                            endYear={"Present"}
                            schoolName={"Instituto Infnet"}
                            description={"*Explicar o que foi estudado durante o curso*"}
                        />
                        <Education
                            startYear={2012}
                            endYear={2014}
                            schoolName={"SENAI"}
                            description={"*Explicar o que foi estudado durante o curso*"}
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Experience</h2>
                        <Experience
                            startYear={2018}
                            endYear={"Present"}
                            jobName={"IBM"}
                            description={"Maintenance of the application and development to IBM Global Financial using agile methodology. Some of my activities:"}
                        />
                        <Experience
                            startYear={2017}
                            endYear={2018}
                            jobName={"Donnelley Financial Solutions"}
                            description={"Development of projects using agile methodology. Some of my activities: •	Prototyped a new interactive table from AngularJS to React that has potential to improve overall performance and UX"}
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills
                            skill="JavaScript"
                            progress={70}
                        />
                        <Skills
                            skill="React"
                            progress={30}
                        />
                        <Skills
                            skill="VueJS"
                            progress={60}
                        />
                        <Skills
                            skill="Angular 5"
                            progress={40}
                        />
                        <Skills
                            skill="GitHub"
                            progress={50}
                        />
                        <Skills
                            skill="C#"
                            progress={70}
                        />
                        <Skills
                            skill="Domain Driven Design (DDD)"
                            progress={60}
                        />
                        <Skills
                            skill="MVC"
                            progress={70}
                        />
                        <Skills
                            skill="DB2"
                            progress={50}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;