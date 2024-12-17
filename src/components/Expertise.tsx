import React from 'react';
import { faDocker } from '@fortawesome/free-brands-svg-icons';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';

import SkillSection from './SkillSection';
import '../assets/styles/Expertise.scss';

const expertiseData = [
    {
        icon: faFileCode,
        title: "Languages & Frameworks",
        description: "I have extensive experience building scalable applications using modern languages and frameworks across the full stack. My focus lies in writing clean, maintainable, and efficient code, adhering to best practices and patterns for both backend and frontend development.",
        labels: [
            "C#", ".Net", "Java", "NodeJS", "React", "TypeScript", "JavaScript",
            "VueJS", "MobX", "Redux", "Angular", "SQL", "Groovy", "Terraform",
            "Bash/PowerShell", "YAML", "SignalR", "Blazor", "WPF", "WCF", "ASP.NET",
        ]
    },
    {
        icon: faDocker,
        title: "DevOps & Automation",
        description: "I design and implement robust DevOps pipelines and cloud-native infrastructure to ensure seamless deployments, scaling, and monitoring. Leveraging automation, I optimize workflows, improve system reliability, and manage databases across distributed environments.",
        labels: [
            "Docker", "k8s", "AWS", "Azure", "DynamoDB", "PostgreSQL", "MSSQL",
            "Oracle", "MySQL", "MongoDB", "Redis", "RabbitMQ", "Kafka", "Jenkins",
            "Git/TFS", "CI/CD", "Vault", "CDN", "DNS", "Monitoring"
        ]
    },
    {
        icon: faSitemap,
        title: "Architecture & Design",
        description: "As a Software Architect, I specialize in designing and leading large-scale systems for both cloud and on-premises environments. I create efficient, distributed architectures that align with business goals while ensuring high availability, scalability, and performance.",
        labels: [
            "Microservices", "Micro-frontends", "Distributed Systems", "API Design",
            "System Design", "DDD", "CQRS", "Event-Driven", "TDD", "Clean Architecture",
            "Saga", "Distributed Tracing", "BFF", "Bounded Contexts",
            "Service-Oriented Architecture"
        ]
    }
];

const Expertise: React.FC = () => {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    {expertiseData.map((item, index) => (
                        <SkillSection
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            labels={item.labels}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Expertise;
