import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faChalkboardUser, faCodeBranch, faFlask, faPeopleGroup, faPersonChalkboard, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Cards.scss';

interface TeachingItem {
    icon: IconProp;
    title: string;
    org: string;
    date?: string;
    description: string;
    link?: string;
}

const teachingData: TeachingItem[] = [
    {
        icon: faPersonChalkboard,
        title: 'React & Frontend Architecture Bootcamp',
        org: 'Prometheus Group',
        date: 'Jan 2026',
        description: 'Designed and taught a 2-week, 25-session bootcamp for new-grad engineers: hooks and state management at scale, TypeScript, Redux Toolkit and RTK Query, auth flows, performance profiling, memory leaks and testing. New grads were shipping production code within weeks.',
    },
    {
        icon: faFlask,
        title: 'Unit Testing & AI series',
        org: 'Prometheus Group',
        date: 'Jul 2025',
        description: 'A lunch-and-learn series for the engineering team: unit testing, integration testing, AI-enhanced testing and code analysis, and test-driven development with Cursor.',
    },
    {
        icon: faChalkboardUser,
        title: 'Technical Coach & Advisor',
        org: 'LI Solutions',
        description: 'Invited by the CEO to train engineering teams in .NET architecture, React, Azure and software testing. Engineers I mentored were later promoted to senior roles, and I advise on architecture decisions.',
        link: 'https://li.solutions/#about',
    },
    {
        icon: faUserGraduate,
        title: 'Hiring & mentoring',
        org: 'Prometheus Group',
        description: 'Wrote the leveled technical-interview framework (Associate to Lead), mentored 7 engineers, and reviewed 2,300+ merge requests from 44 engineers.',
    },
    {
        icon: faCodeBranch,
        title: 'Masterclasses',
        org: 'kottans.org',
        description: 'Ran masterclasses and helped develop an open-source community course on cloud-native development with AWS (EKS, SNS, SQS, Lambda, S3, RDS).',
        link: 'https://kottans.org/',
    },
    {
        icon: faPeopleGroup,
        title: 'Knowledge sharing at scale',
        org: 'PSD · Andersen Lab',
        description: 'Ran 50+ knowledge-sharing sessions at PSD, and trained 500+ professionals through Andersen Lab’s training program.',
    },
];

const Teaching: React.FC = () => {
    return (
        <div className="card-section" id="teaching">
            <h1>Teaching &amp; Mentoring</h1>
            <p className="card-section-intro">
                Growing engineers is part of the job: bootcamps, workshops, code review and one-on-one mentoring.
            </p>
            <div className="card-grid">
                {teachingData.map((item) => (
                    <article className="info-card" key={item.title}>
                        <FontAwesomeIcon className="info-card-icon" icon={item.icon} size="lg" />
                        <div className="info-card-meta">
                            <span className="info-card-outlet">{item.org}</span>
                            {item.date && <span>{item.date}</span>}
                        </div>
                        <h3 className="info-card-title">{item.title}</h3>
                        <p className="info-card-text">{item.description}</p>
                        {item.link && (
                            <a className="info-card-link" href={item.link} target="_blank" rel="noreferrer">
                                Visit {item.org}
                            </a>
                        )}
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Teaching;
