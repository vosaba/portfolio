import React from 'react';

interface ProjectCardProps {
    image: string;
    link: string;
    title: string;
    description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, link, title, description }) => {
    return (
        <div className="project">
            <a href={link} target="_blank" rel="noreferrer">
                <img src={image} className="zoom" alt="thumbnail" width="100%" />
            </a>
            <a href={link} target="_blank" rel="noreferrer">
                <h2>{title}</h2>
            </a>
            <p>{description}</p>
        </div>
    );
};

export default ProjectCard;
