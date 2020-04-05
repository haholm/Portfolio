declare interface Technology {
    id: number,
    name: string,
    color: string
}

declare interface Screenshot {
    id: number,
    source: string
}

declare interface Project {
    id: number,
    name: string,
    description: string,
    github: string,
    icon: string,
    technologies: Technology[]
    timestamp: string,
    screenshots: Screenshot[]
}