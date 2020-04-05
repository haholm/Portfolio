import React, { useEffect, useRef } from 'react'
import './timeline.scss'
import Showcase from '../Showcase';
import Projects from '../../Images/Projects';

interface TimelineProps {
    
}

export default function Timeline(props: TimelineProps) {
    function GeneratePoints(projects: Project[]) {
        return projects.map(project => {
            if (project === undefined) {
                return;
            }

            return (
                <div className="Point">
                    <Showcase project={project}/>
                </div>
            );
        });
    }

    return (
        <div className="Timeline">
            <div className="Line">
                {GeneratePoints(Projects)}
            </div>
        </div>
    );
}