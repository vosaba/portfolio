import React from 'react';
import ProjectCard from './ProjectCard';

import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import mock11 from '../assets/images/mock11.jpg';

import '../assets/styles/Project.scss';

const projectData = [
    {
        image: mock11,
        link: "https://lockit.wtf/",
        title: "LockIt.wtf",
        description: "A mobile-first successor to When2meet: one link for the group chat, everyone paints when they're free on a live heatmap, votes on where and what, and the host locks it in. No accounts. Imports busy times from Google, iCloud or Outlook calendars without ever reading event details, and ships in English, German and Ukrainian. Built as a showcase of speed: no front-end framework, sub-second loads.",
        tags: [".NET 10", "Redis", "Server-Sent Events", "Vanilla JS", "Docker", "Caddy", "Hetzner"],
        links: [
            { label: "Live site", url: "https://lockit.wtf/" },
        ],
    },
    {
        image: mock10,
        link: "https://besportsmart.com/",
        title: "Be Sport Smart",
        description: "A data-driven web app that helps young athletes and their families choose the sport they're most likely to excel in, based on body measurements, physical attributes and goals such as earning a college scholarship.",
        tags: ["React", "TypeScript", ".NET 8", "Azure AKS", "Cosmos DB", "Terraform", "GitHub Actions"],
        links: [
            { label: "Live site", url: "https://besportsmart.com/" },
            { label: "Infrastructure", url: "https://github.com/vosaba/be-sport-smart-infra" },
            { label: "Backend", url: "https://github.com/vosaba/be-sport-smart-backend" },
            { label: "Frontend", url: "https://github.com/vosaba/be-sport-smart-frontend" },
        ],
    },
    {
        image: mock09,
        link: "https://www.nuget.org/packages/PipelineLauncher",
        title: "PipelineLauncher",
        description: "An open-source .NET library for reactive, stage-based data pipelines with explicit performance settings. It has 107K+ NuGet downloads and runs in production at Namecheap for high-volume domain-transaction processing.",
        tags: [".NET", "Rx.NET", "TPL Dataflow", "NuGet"],
        links: [
            { label: "NuGet", url: "https://www.nuget.org/packages/PipelineLauncher" },
            { label: "GitHub", url: "https://github.com/vosaba/Pipeline.Launcher" },
            { label: "Architecture demo", url: "https://github.com/vosaba/PipelineLauncher.Demo/blob/master/Dataflow%20and%20Pipeline%20Launcher.pdf" },
        ],
    },
];

const Project: React.FC = () => {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                {projectData.map((project) => (
                    <ProjectCard
                        key={project.title}
                        image={project.image}
                        link={project.link}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        links={project.links}
                    />
                ))}
            </div>
        </div>
    );
};

export default Project;
