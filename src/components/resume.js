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
                        <h2 style={{marginTop: '1em'}}>Bianca Gotaski</h2>
                        <h4 style={{color: 'grey'}}>Software Engineer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p style={{width: '80%'}}>
                            I have +5 years of experience in IT. Whether it's programming, troubleshooting, helping teams and implementing code or infrastructure around companies I worked with.
                            I started first as a developer, writing code for maintenance and creating functionalities for web applications, then later on I supported developers at IBM with the operational side, and lastly, I've made advocacy for a startup, in order to help increase the product visibility and engage with developers on understanding about the product.
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>E-mail</h5>
                        <p>gotaskibianca@gmail.com</p>
                        <h5>LinkedIn</h5>
                        <p>
                            <a href="https://br.linkedin.com/in/bianca-gotaski-b9bba284" target="_blank">in/biancagotaski/</a>
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>

                    {/** Right Side*/}
                    <Cell className="resume-right-col" col={8}>
                        <h2>Experience</h2>
                        <Experience
                            startYear={2022}
                            endYear={2023}
                            jobName={"CTO.ai"}
                            description={"As a Developer Advocate, I worked on many initiatives at this startup for brand awareness and guidance through developers with technical questions about the Platform, what CTO.ai does, what are the benefits of using the Platform and so on. You can see samples of my work on the Projects page."}
                        />
                        <Experience
                            startYear={2018}
                            endYear={2022}
                            jobName={"IBM"}
                            description={"Support of a critical web application for its 24x7 availability. I developed pipelines for build and deployments, plus automated processes to enhance the team's work life balance. In one of these automations, the team was capable of granting user permissions to all environments level up to 20 minutes, and before that automation, the team used to take 1-2 days of work, since it was a 100% manual process. See more details of this success case on my resume."}
                        />
                        <Experience
                            startYear={2017}
                            endYear={2018}
                            jobName={"Donnelley Financial Solutions"}
                            description={"Prototyped a new interactive table from AngularJS to React that has potential to improve overall performance and UX. Most of the work was on the front end of the many web applications existing at their ecossystem, and this project especifically, was to enhance end users experience with the investor's table, with data that were populated with an API from the CVM (The Securities and Exchange Commission of Brazil / Comissão de Valores Mobiliários). See more details on my resume."}
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Education</h2>
                        <Education
                            startYear={2017}
                            endYear={2020}
                            schoolName={"Instituto Infnet"}
                            description={"This is the place where I learned in depth about programming languages and IT. Some of them are: JavaScript (with AngularJS), Java (with Spring boot / tomcat), .NET (C#), Algorithms and Data Structure."}
                        />
                        <Education
                            startYear={2012}
                            endYear={2014}
                            schoolName={"SENAI"}
                            description={"At this time, during the High School, I learned many things in this course, which are related to fabric and its equipments. I've learned how to provide maintenance to those type of machines with general concepts of pneumatic, eletronic, eletric engineering, mechanics, etc. And it was the first time I used Arduino and learned how to code in C/C++ to control machines and eletrical devices. That's when my passion for programming started :)"}
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills
                            skill="Python"
                            progress={70}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={70}
                        />
                        <Skills
                            skill="CI/CD pipelines"
                            progress={80}
                        />
                        <Skills
                            skill="Cloud Applications"
                            progress={60}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;