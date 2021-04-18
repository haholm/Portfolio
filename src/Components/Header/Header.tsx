import React from 'react'
import './header.scss'

interface HeaderProps {
}

export default function Header(props: HeaderProps) {
    return (
        <div className="Header">
            <div className="CelestialBody"/>
            <h1>
                Welcome to my portfolio.
            </h1>
            <h4>
                My name is Hampus.<br/>I am a Computer Science Student, a Full Stack Developer and a Runner.
            </h4>
            <span className="Contact"><a href="mailto:mail@hampusholm.dev">Contact me!</a> (mail@hampusholm.dev)</span>
        </div>
    );
}