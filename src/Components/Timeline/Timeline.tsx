import React, { ReactElement } from 'react'
import '../../App.scss'
import './timeline.scss'

interface TimelineProps {
    
}

export default function Timeline(props: TimelineProps) {
    return (
        <div className="Timeline">
            <div className="Line">
                <div className="Point"/>
                <div className="Point"/>
                <div className="Point"/>
            </div>
        </div>
    );
}