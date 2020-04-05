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
                My name is Hampus, a Full Stack Developer.
            </h4>
        </div>
    );
}