import React from 'react'
import './showcase.scss'
import GitHubMark from '../../Images/github32.png';

interface ShowcaseProps {
    project: Project
}

export default function Showcase(props: ShowcaseProps) {
    const projectScreenshots = props.project.screenshots.map(screenshot => {
        return (
            <div key={screenshot.id} className="Screenshot">
                <img src={screenshot.source}/>
            </div>
        );
    });
    const projectTechnologies = props.project.technologies.map(technology => {
        return (
            <p className="Technology" 
                style={{backgroundColor: technology.color}}>
                {technology.name}
            </p>
        );
    });

    return (
        <div className="Showcase">
            <div className="TopArea">
                <img className="Icon" src={props.project.icon}/>
                <div className="TitleArea">
                    <h2 className="Name">{props.project.name}</h2>
                    <h4 className="Description">{props.project.description}</h4>
                </div>
                <a className="GitHub" href={props.project.github} target="_blank">
                    <img src={GitHubMark}/>
                </a>
            </div>
            <div className="Screenshots">
                {projectScreenshots}
            </div>
            <div className="BottomArea">
                <div className="Technologies">
                    {projectTechnologies}
                </div>
                <h5 className="Timestamp">{props.project.timestamp}</h5>
            </div>
        </div>
    )
}