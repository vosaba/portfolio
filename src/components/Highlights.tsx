import React from 'react';
import '../assets/styles/Highlights.scss';

const highlights = [
    { value: '12+ years', label: 'Building distributed, cloud-native systems' },
    { value: '$1B+', label: 'Enterprise software company where I am the top individual contributor' },
    { value: '$29M/yr', label: 'Revenue through the renewal platform I built at Namecheap' },
    { value: '$2M+', label: 'DOE and New York State contracts my platform helped win' },
    { value: '100K+', label: 'NuGet downloads of my open-source PipelineLauncher' },
    { value: '2,300+', label: 'Code reviews for 44 engineers' },
];

const Highlights: React.FC = () => {
    return (
        <section className="highlights" aria-label="Career highlights">
            <ul className="highlights-grid">
                {highlights.map((item) => (
                    <li className="highlight" key={item.value}>
                        <span className="highlight-value">{item.value}</span>
                        <span className="highlight-label">{item.label}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Highlights;
