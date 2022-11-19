import React from "react";
import {BsPatchCheckFill} from 'react-icons/bs';
import './experience.css'

const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                        <div className="experience__content">
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>TypeScript</h4>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>Vue Js</h4>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>JavaScript</h4>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>React Js</h4>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>Tailwind Css</h4>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>Angular Js</h4>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>jQuery</h4>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>Bootstrap</h4>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>HTML</h4>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>Css</h4>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                        </div>
                </div>

                <div className="experience__backend">
                    <h3>Working Experience</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Sellsio Clinic Software</h4>
                                <small className="text-light">August 2022 - Present</small>
                                <p className="text-light">Internship</p>
                            </div>
                            <div>
                                <h4>Falcon Gaming Company</h4>
                                <small className="text-light">December 2021 - April 2022</small>
                                <p className="text-light">Internship</p>
                            </div>
                            <div>
                                <h4>Freelance</h4>
                                <small className="text-light">August 2021 - December 2021</small>
                                <p className="text-light">Freelance</p>
                            </div>
                        </article>
                     
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;