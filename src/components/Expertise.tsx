import React from 'react';
import { faDocker } from '@fortawesome/free-brands-svg-icons';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';
import { faBrain, faChalkboardUser, faPlug, faShieldHalved, faSitemap } from '@fortawesome/free-solid-svg-icons';

import SkillSection from './SkillSection';
import '../assets/styles/Expertise.scss';

const expertiseData = [
    {
        icon: faSitemap,
        title: "Architecture & Design",
        description: "I set technical direction for large systems in the cloud and on-premises: service boundaries, data flows and integration contracts that keep teams independent and systems available, scalable and fast. I've moved monoliths to microservices, and microservices back into modular services when that was cheaper.",
        chipsTitle: "Patterns:",
        labels: [
            "Distributed Systems", "Microservices", "Modular Monoliths", "Micro-frontends",
            "Event-Driven", "DDD", "CQRS", "Event Sourcing", "Saga", "API Design",
            "System Design", "Clean Architecture", "BFF", "Bounded Contexts",
            "Strangler Fig", "Service-Oriented Architecture", "Distributed Tracing",
        ]
    },
    {
        icon: faBrain,
        title: "AI in Production",
        description: "I led the architecture of GWOS-AI, an AI maintenance planning and scheduling product built on 20+ years of real-world maintenance data. My rule: start with the data architecture, not the model. Data quality, integrations, permissions and observability decide whether AI earns trust in production.",
        chipsTitle: "Focus:",
        labels: [
            "AI Product Architecture", "Data Pipelines", "Schedule Optimization",
            "Constraint-Aware Scheduling", "ERP / EAM Data", "AI Agent Permissions",
            "AI-Assisted Engineering", "Cursor",
        ]
    },
    {
        icon: faDocker,
        title: "Platform Engineering & Cloud",
        description: "I build paved roads: shared platform libraries, service templates, CI/CD and infrastructure as code, so a new service starts production-ready and teams stop re-solving the same problems. I built a company's entire Azure platform from scratch and run production systems on AWS.",
        chipsTitle: "Tech stack:",
        labels: [
            "Kubernetes", "Docker", "Helm", "Terraform", "AWS (EKS, Lambda, SNS/SQS, S3, RDS)",
            "Azure (AKS, Event Hubs, Cosmos DB)", "GitLab CI", "GitHub Actions", "Jenkins",
            "semantic-release", "Nx", "NGINX", "Vault", "CDN", "DNS", "Git/TFS",
        ]
    },
    {
        icon: faPlug,
        title: "Enterprise Integration",
        description: "I connect products to the systems enterprises run on. That means SAP and Oracle Primavera integrations built to handle multiple instances, unreliable networks and older clients, and event-driven APIs that became the standard for client implementations.",
        chipsTitle: "Tech stack:",
        labels: [
            "SAP (RFC, OData)", "Oracle Primavera P6", "Primavera Cloud", "SOAP / REST",
            "OAuth 2.0 / JWT", "AWS SNS / SQS", "Idempotent APIs", "Dynamics AX", "Office 365",
            "ERP / EAM",
        ]
    },
    {
        icon: faShieldHalved,
        title: "Reliability, Performance & Security",
        description: "When production breaks for the biggest customers, I find the root cause, from memory dumps to correlating logs across services. Then I build the testing, observability and security practices that stop it from happening again.",
        chipsTitle: "Practices:",
        labels: [
            "Observability", "ELK", "Grafana", "Prometheus", "Incident Command",
            "Root-Cause Analysis", "Memory Profiling", "Integration Testing",
            "Testcontainers", "TDD", "Penetration-Test Remediation", "RBAC", "Keycloak",
        ]
    },
    {
        icon: faChalkboardUser,
        title: "Technical Leadership",
        description: "I lead through architecture specs, code review and teaching. In 18 months at Prometheus Group alone: 290+ specs and 17 epics delivered by other engineers and 2,300+ merge requests reviewed. Across my career: bootcamps that get new grads shipping within weeks, 500+ professionals trained, and mentoring that grows engineers into senior roles.",
        chipsTitle: "Practices:",
        labels: [
            "Technical Strategy", "Architecture Specs", "Code Review", "Mentoring",
            "Bootcamps & Training", "Technical Interviewing", "Cross-Team Alignment",
            "Stakeholder Communication",
        ]
    },
];

const toolbox = {
    icon: faFileCode,
    title: "Languages, Frameworks & Data",
    description: "The tools I reach for every day, from backend and frontend to data and messaging. I write clean, maintainable code and stay hands-on in the hardest parts of the system.",
    chipsTitle: "Tech stack:",
    labels: [
        "C#", ".NET 10", "ASP.NET Core", "EF Core", "Rx.NET", "TPL Dataflow", "Java", "Spring",
        "Node.js", "TypeScript", "JavaScript", "React", "Redux", "MobX", "Angular", "Vue.js",
        "SignalR", "Blazor", "WPF", "WCF", "SQL", "PostgreSQL", "MSSQL", "Oracle", "MySQL",
        "MongoDB", "DynamoDB", "Cosmos DB", "Redis", "Kafka", "RabbitMQ", "ActiveMQ",
        "Quartz.NET", "Groovy", "Bash/PowerShell", "YAML",
    ]
};

const Expertise: React.FC = () => {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    {expertiseData.map((item) => (
                        <SkillSection
                            key={item.title}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            chipsTitle={item.chipsTitle}
                            labels={item.labels}
                        />
                    ))}
                    <SkillSection
                        icon={toolbox.icon}
                        title={toolbox.title}
                        description={toolbox.description}
                        chipsTitle={toolbox.chipsTitle}
                        labels={toolbox.labels}
                        wide
                    />
                </div>
            </div>
        </div>
    );
};

export default Expertise;
