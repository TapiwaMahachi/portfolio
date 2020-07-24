import React from "react"

export default function Project(props){

    return(
        <div className="project-card">
            <h3 className="project-subtitle">{props.title}</h3>
            <img className="portfolio-img" src={props.img} alt="project-img" />
            <hr />
            <p>{props.description}</p>
            <p>
                <strong> Accomplishments </strong><br/>
                {props.accomplishments}
            </p>
             
            <p className="project-link"><a href={props.link}>source code <i className="fab fa-github"></i></a>
            </p>
        </div>

    );
};