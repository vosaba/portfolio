import React from 'react';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline } from 'react-vertical-timeline-component';

import TimelineCard from './TimelineCard';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

const timelineData = [
    {
        date: 'Apr 2025 – Present',
        company: 'Prometheus Group',
        location: 'Raleigh, NC',
        link: 'https://www.prometheusgroup.com/',
        title: 'Principal Software Engineer',
        summary:
            'Top individual contributor and technical lead for the flagship Shutdown, Turnaround & Outage platform at a $1B+ enterprise asset-management software company, working directly with ExxonMobil, Shell, BP, Marathon Petroleum, Ecopetrol, CITGO and Covestro.',
        highlights: [
            'Led the architecture of GWOS-AI, an AI maintenance planning and scheduling product (launched Sep 2025) that turns 20+ years of maintenance data into crew-ready schedules in minutes instead of hours.',
            'Built the shared .NET platform (35+ packages) and service template every new service starts from, and consolidated 12 legacy modules and microservices into one, cutting infrastructure cost in every customer environment.',
            'Carved the Oracle Primavera P6 integration into its own service, led SAP multi-instance support, and wrote the API integration guide that became the standard for all client integrations.',
            'Introduced an org-wide integration-testing strategy, performance monitoring and an observability service; root-caused critical incidents for top accounts and closed all high-severity penetration-test findings.',
            'Designed and taught a 25-session React and frontend-architecture bootcamp, mentored 7 engineers and reviewed 2,300+ merge requests from 44 engineers.',
        ],
        tags: ['.NET 10', 'TypeScript', 'React', 'PostgreSQL', 'Kubernetes', 'AWS', 'SAP', 'Oracle P6', 'AI'],
        icon: faBriefcase,
    },
    {
        date: 'Jan 2023 – Mar 2025',
        company: 'PSD Consulting',
        location: 'New York, NY',
        link: 'https://psdconsulting.com/',
        title: 'Software Architect',
        summary:
            'Performance Systems Development builds energy-efficiency software for utilities, state agencies and U.S. Department of Energy programs (ENERGY STAR partner). Promoted from Senior Software Engineer to lead the company’s technology modernization.',
        highlights: [
            'Designed and built the company’s entire Azure cloud architecture and the .NET and Node.js microservice frameworks every team uses: delivery speed +35%, code efficiency +20%.',
            'Built the microservices platform behind the Clarity Heat Pump Toolkit (DOE-approved for the IRA Section 50121 modeled pathway, BPI-2400 compliant), helping PSD win the maximum $1.15M DOE SBIR Phase II award.',
            'Architected the Compass program platform from scratch, underpinning a $920K NYSERDA contract and National Grid’s New York contractor portal.',
            'Migrated a customer off an end-of-life system costing $100K+ a year in hosting; the new platform automated 50,000+ incentive payments.',
            'Led incident response with ELK and Grafana on Kubernetes, improved cloud efficiency 50% with Terraform, and ran 50+ knowledge-sharing sessions.',
        ],
        tags: ['Azure', 'AKS', 'Event Hubs', '.NET', 'Node.js', 'React', 'Terraform'],
        icon: faBriefcase,
    },
    {
        date: 'Jul 2017 – Jan 2023',
        company: 'Namecheap',
        location: 'Houston, TX',
        link: 'https://www.namecheap.com/',
        title: 'Staff Software Engineer',
        summary:
            'The world’s #2 domain registrar, with 17M+ domains and 10M users. Promoted from Senior Software Engineer in 2019.',
        highlights: [
            'Built the automated domain-renewal platform for the entire customer base: about $80K a day ($29M+ a year) with no manual intervention.',
            'Designed and delivered 30+ microservices and micro-frontends for domain search, purchase, payments and accounts, supporting $200M in annual revenue.',
            'Led the strangler-fig migration from the monolith using NGINX routing on Kubernetes, enabling iterative delivery to 10M users and cutting infrastructure costs 30%.',
            'Made the Domain Marketplace 4x faster in 6 months, and put my open-source PipelineLauncher into production at thousands of transactions per minute.',
            'Built support tooling that helped Namecheap become a top-2 global registrar (2021), and introduced TDD across teams (+15% productivity).',
        ],
        tags: ['.NET', 'Node.js', 'React', 'AWS', 'PostgreSQL', 'MSSQL', 'Redis', 'Kubernetes', 'NGINX'],
        icon: faBriefcase,
    },
    {
        date: 'Jan 2016 – Jul 2017',
        company: 'GlobalLogic',
        client: 'Microsoft',
        location: 'Kharkiv, Ukraine',
        title: 'Senior Software Engineer',
        summary:
            'Engineering for Microsoft through GlobalLogic: Dynamics AX and Office 365 integration and internal web applications.',
        highlights: [
            'Led the refactoring of a monolith into 10 modules along domain-driven bounded contexts, using event sourcing and CQRS over RabbitMQ; load time fell 40%.',
            'Bootstrapped the Microsoft Dynamics AX plugins that synchronize data with Office 365, speeding CRM integration 15%.',
            'Led the creation of an internal React UI kit and component library: development speed +50% and a fully consistent look and feel.',
        ],
        tags: ['.NET', 'Angular', 'React', 'CQRS', 'Event Sourcing', 'RabbitMQ'],
        icon: faBriefcase,
    },
    {
        date: 'Jan 2015 – Jan 2016',
        company: 'IHS',
        client: 'NASA',
        location: 'Minsk, Belarus',
        title: 'Senior Software Engineer',
        summary:
            'Engineering-standards and technical-reference platform used by NASA and enterprise B2B customers.',
        highlights: [
            'Designed geographically distributed MongoDB sharding with resilient failover and Prometheus monitoring: server-upgrade downtime −90%, satisfaction +20% for 2 key B2B customers.',
            'Optimized the OData and MSSQL queries behind a single point of access to engineering reference content used by NASA: SQL execution time −35%, contributing to a 20% revenue lift in one month.',
            'Introduced caching for frequently requested reference data, improving system performance 40%.',
        ],
        tags: ['.NET', 'MongoDB', 'MSSQL', 'OData', 'Prometheus'],
        icon: faBriefcase,
    },
    {
        date: 'Dec 2013 – Jan 2015',
        company: 'Andersen Lab',
        location: 'Kharkiv, Ukraine',
        title: 'Software Engineer',
        highlights: [
            'Built 3 IoT applications for managing automated parcel machines: operational efficiency +30%, manual errors −40%.',
            'Programmed controllers for Ukraine’s high-speed trains that saved 15–20% energy.',
            'Built reusable ASP.NET and AngularJS charting components that doubled development speed, and trained 500+ professionals through the company’s training program.',
        ],
        tags: ['.NET', 'Java', 'Spring', 'Oracle', 'Kafka', 'ActiveMQ', 'AngularJS'],
        icon: faBriefcase,
    },
];

const Timeline: React.FC = () => {
    return (
        <div id="history">
            <div className="items-container">
                <h1>Career History</h1>
                <VerticalTimeline>
                    {timelineData.map((item) => (
                        <TimelineCard
                            key={item.company}
                            date={item.date}
                            company={item.company}
                            client={item.client}
                            location={item.location}
                            link={item.link}
                            title={item.title}
                            summary={item.summary}
                            highlights={item.highlights}
                            tags={item.tags}
                            icon={item.icon}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Timeline;
