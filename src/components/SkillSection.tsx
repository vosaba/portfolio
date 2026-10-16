import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chip from '@mui/material/Chip';

import '../assets/styles/Expertise.scss';

interface SkillSectionProps {
    icon: IconProp;
    title: string;
    description: string;
    labels: string[];
    chipsTitle?: string;
    wide?: boolean;
}

const SkillSection: React.FC<SkillSectionProps> = ({ icon, title, description, labels, chipsTitle = 'Tech stack:', wide = false }) => {
    return (
        <div className={`skill${wide ? ' skill-wide' : ''}`}>
            <FontAwesomeIcon icon={icon} size="3x" />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="flex-chips">
                <span className="chip-title">{chipsTitle}</span>
                {labels.map((label) => (
                    <Chip key={label} className="chip" label={label} />
                ))}
            </div>
        </div>
    );
};

export default SkillSection;
