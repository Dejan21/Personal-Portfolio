import React from "react";
import './about.css';
import {MdOutlineSchool} from 'react-icons/md';
import {VscFolderLibrary} from 'react-icons/vsc';
import {MdOutlineSportsEsports} from 'react-icons/md';
import IMG1 from '../../assets/img6.png'

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={IMG1} alt=""/>
                    </div>
                </div>

                    <div className="about__content">
                        <div className="about__cards">
                            <article className="about__card">
                                <MdOutlineSchool className="about__icon"/>
                                <h4>Education</h4>
                                <br />
                                <h5>- <strong>Front-end Academy</strong><br /><small>Brainster</small></h5>
                                <h5>- <strong>Front-end MERN Developer,</strong></h5><small>Semos Computer Education Center</small>
                                <br />
                                <h5>- <strong>Bachelor's, ,, Faculty of Economics,</strong> 
                                <br />
                                <small> Ss Cyril and Methodius 
                                University</small></h5>
                            </article>
                            <article className="about__card">
                                <VscFolderLibrary className="about__icon"/>
                                <h5>Projects</h5>
                                <small>5 Projects Completed</small>
                            </article>
                            <article className="about__card">
                                <MdOutlineSportsEsports className="about__icon"/>
                                <h5>Interests</h5>
                                <small>Tennis</small>
                                <br/>
                                <small>Cycling</small>
                                <br/>
                                <small>Coding</small>
                            </article>
                        </div>
                        <p>Passionate for programming, a self-motivated individual willing to learn and create collaborative projects. Looking forward to a new opportunity in my professional career
                        </p>

                        <a href="#contact" className="btn btn-primary">Let's Talk</a>
                    </div>
                </div>
        </section>
    )
}

export default About;