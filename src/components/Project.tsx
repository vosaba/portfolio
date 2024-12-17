import React from 'react';
import ProjectCard from './ProjectCard';

import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';

import '../assets/styles/Project.scss';

const projectData = [
    {
        image: mock10,
        link: "https://besportsmart.com/",
        title: "Be Sport Smart",
        description: "A smart tool designed to help individuals choose the best sport based on personalized measurements and goals, such as securing a scholarship or optimizing performance.",
    },
    {
        image: mock09,
        link: "https://www.nuget.org/packages/PipelineLauncher",
        title: "PipelineLauncher",
        description: "PipelineLauncher is a NuGet library designed for developers to follow the reactive programming paradigm, offering detailed performance configurations and clear stage separations.",
    },
];

const Project: React.FC = () => {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        link={project.link}
                        title={project.title}
                        description={project.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Project;
