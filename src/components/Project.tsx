import React from 'react';
import ProjectCard from './ProjectCard';

import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';

import '../assets/styles/Project.scss';

const projectData = [
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
        description: "An open-source .NET library for reactive, stage-based data pipelines with explicit performance settings. It has 100K+ NuGet downloads and runs in production at Namecheap for high-volume domain-transaction processing.",
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
