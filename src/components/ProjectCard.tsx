import React from 'react';
import Chip from '@mui/material/Chip';

interface ProjectLink {
    label: string;
    url: string;
}

interface ProjectCardProps {
    image: string;
    link: string;
    title: string;
    description: string;
    tags?: string[];
    links?: ProjectLink[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, link, title, description, tags = [], links = [] }) => {
    return (
        <div className="project">
            <a href={link} target="_blank" rel="noreferrer">
                <img src={image} className="zoom" alt={`${title} screenshot`} width="100%" />
            </a>
            <a href={link} target="_blank" rel="noreferrer">
                <h2>{title}</h2>
            </a>
            <p>{description}</p>
            {tags.length > 0 && (
                <div className="flex-chips">
                    {tags.map((tag) => (
                        <Chip key={tag} className="chip" label={tag} />
                    ))}
                </div>
            )}
            {links.length > 0 && (
                <div className="project-links">
                    {links.map((item) => (
                        <a key={item.url} href={item.url} target="_blank" rel="noreferrer">{item.label}</a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
