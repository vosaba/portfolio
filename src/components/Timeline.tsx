import React from 'react';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline } from 'react-vertical-timeline-component';

import TimelineCard from './TimelineCard';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

const timelineData = [
    {
        date: 'Jan 2023 - Present',
        company: 'PSD Consulting',
        location: 'New York, NY',
        link: 'https://psdconsulting.com/',
        title: 'Software Architect',
        description:
            'As a Software Architect at PSD Consulting, I designed .NET and NodeJS microservice frameworks, boosting delivery speed by 35% and code efficiency by 20%. I led incident response efforts with Kubernetes and ELK, conducted 50+ knowledge-sharing sessions, and optimized cloud efficiency by 50% using Terraform and CI/CD pipelines.',
        icon: faBriefcase,
    },
    {
        date: 'Jul 2017 - Jan 2023',
        company: 'Namecheap',
        location: 'Houston, TX',
        link: 'https://www.namecheap.com/',
        title: 'Staff Software Engineer',
        description:
            'As a Staff Software Engineer at Namecheap, I developed over 30 microservices and micro-frontends, driving $200M in annual revenue. I built internal tools that reduced engineering intervention, helping Namecheap achieve top 2 global domain registrar status in 2021. I transformed monolithic systems into scalable architectures with NGINX and Kubernetes, cutting infrastructure costs by 30%. Additionally, I improved the Domain Marketplace system performance 4x within 6 months and introduced TDD practices, increasing team productivity by 15%.',
        icon: faBriefcase,
    },
    {
        date: 'Jan 2016 - Jul 2017',
        company: 'GlobalLogic',
        location: 'Kharkiv, Ukraine',
        title: 'Senior Software Engineer',
        description:
            'As a Senior Software Engineer at GlobalLogic, I refactored monolithic applications into modular components using .NET, Angular, and CQRS, reducing load times by 40%. I bootstrapped Microsoft Dynamics AX plugins to improve CRM integration speed by 15% and integrated AWS services for scalability. I also created a React UI kit, boosting development speed by 50% and achieving 100% design consistency.',
        icon: faBriefcase,
    },
    {
        date: 'Jan 2015 - Jan 2016',
        company: 'IHS',
        location: 'Minsk, Belarus',
        title: 'Senior Software Engineer',
        description:
            'At IHS Markit, I increased customer satisfaction by 20% by implementing distributed MongoDB shards and Prometheus-based failover mechanisms. I optimized ODATA and MSSQL queries, boosting revenue by 20%, and reduced execution time for SQL queries by 35%. I also enhanced system performance by 40% through caching optimizations.',
        icon: faBriefcase,
    },
    {
        date: 'Dec 2013 - Jan 2015',
        company: 'Andersen Lab',
        location: 'Kharkiv, Ukraine',
        title: 'Software Engineer',
        description:
            'As a Software Engineer at Andersen Lab, I developed IoT-enabled applications for automated parcel machines, improving efficiency by 30% and reducing errors by 40%. I created reusable charts with ASP.Net and AngularJS, doubling development speed, and mentored over 500 professionals through company training. I also programmed controllers for Ukraine\'s high-speed trains, saving 15-20% energy.',
        icon: faBriefcase,
    },
];

const Timeline: React.FC = () => {
    return (
        <div id="history">
            <div className="items-container">
                <h1>Career History</h1>
                <VerticalTimeline>
                    {timelineData.map((item, index) => (
                        <TimelineCard
                            key={index}
                            date={item.date}
                            company={item.company}
                            location={item.location}
                            link={item.link}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Timeline;
