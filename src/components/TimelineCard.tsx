import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import Chip from '@mui/material/Chip';
import 'react-vertical-timeline-component/style.min.css';

const SubtitleRow = ({ title, subtitle, link }: { title: string, subtitle: string, link?: string }) => (
  <div
    className="vertical-timeline-element-subtitle-container"
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '8px 0',
    }}
  >
    {link ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="vertical-timeline-element-subtitle">{title}</span>
      </a>
    ) : (
      <span className="vertical-timeline-element-subtitle">{title}</span>
    )}
    <span style={{ fontSize: '14px', color: '#6c757d', }}>
      {subtitle}
    </span>
  </div>
);

interface TimelineCardProps {
    date: string;
    company: string;
    client?: string;
    location: string;
    link?: string;
    title: string;
    summary?: string;
    highlights: string[];
    tags?: string[];
    icon: IconProp;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
    date,
    company,
    client,
    location,
    link,
    title,
    summary,
    highlights,
    tags = [],
    icon,
}) => {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date={date}
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={icon} />}
        >
            <SubtitleRow title={company} subtitle={location} link={link} />
            <h3 className="vertical-timeline-element-title">{title}</h3>
            {client && <p className="timeline-client">Client: {client}</p>}
            {summary && <p className="timeline-summary">{summary}</p>}
            <ul className="timeline-highlights">
                {highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                ))}
            </ul>
            {tags.length > 0 && (
                <div className="timeline-tags">
                    {tags.map((tag) => (
                        <Chip key={tag} className="chip" label={tag} size="small" />
                    ))}
                </div>
            )}
        </VerticalTimelineElement>
    );
};

export default TimelineCard;
