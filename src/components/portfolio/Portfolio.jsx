import React from "react";

import IMG1 from '../../assets/img5.png';
import IMG2 from '../../assets/img2.png';
import './portfolio.css';
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'SpaceX',
        github: 'https://github.com/Dejan21/spacex'
    },
    {
        id: 2,
        image: IMG2,
        title: 'E-shop Application',
        github: 'https://github.com/Dejan21/e-shop/tree/main/src'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Popular Movies Application',
        github: 'https://github.com/Dejan21/Popular-Movies'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Vue-application',
        github: 'https://github.com/Dejan21/Vue-app'
    },
]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github}) =>{
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio_item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className="btn btn-primary" target='_blank'>Github</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio;