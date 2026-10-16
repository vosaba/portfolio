import React from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import '../assets/styles/Cards.scss';

interface PressItem {
    outlet: string;
    kind: string;
    date?: string;
    title: string;
    quote?: string;
    note?: string;
    description: string;
    link: string;
}

const pressData: PressItem[] = [
    {
        outlet: 'ITC.ua',
        kind: 'Interview',
        date: 'Mar 13, 2026',
        title: 'Why bolting AI onto a product isn’t enough',
        quote: 'Don’t start with the model. Start with the data architecture.',
        note: 'In Ukrainian, quote translated',
        description: 'On architecting AI into enterprise products: why AI belongs in the data pipeline, and why it can help write code but doesn’t make system-level decisions.',
        link: 'https://itc.ua/ua/articles/chomu-prykrutyty-shi-do-produktu-nedostatno-rozmova-z-leonidom-abasovym-providnym-inzhenerom-prometheus-group/',
    },
    {
        outlet: 'Focus.ua',
        kind: 'Interview',
        date: 'Mar 4, 2026',
        title: 'AI without myths: what AI is already changing today',
        quote: 'Without a reliable foundation, no AI will save a system.',
        note: 'In Ukrainian, quote translated',
        description: 'Separating AI hype from production reality: why a demo model is not a production system, and why AI-agent permissions are a security surface.',
        link: 'https://focus.ua/uk/ukraine/745893-shi-bez-mifiv-leonid-abasov-pro-te-shcho-shtuchniy-intelekt-zminyuye-v-zhitti-vzhe-sogodni',
    },
    {
        outlet: 'Authority Magazine',
        kind: 'Interview',
        title: 'How we leveraged AI to take our company to the next level',
        description: 'Interview on how we put AI to work at Prometheus Group.',
        link: 'https://medium.com/authority-magazine/leonid-abasov-of-prometheus-group-how-we-leveraged-ai-to-take-our-company-to-the-next-level-41440fee51ef',
    },
    {
        outlet: 'BusinessWire',
        kind: 'Product launch',
        date: 'Sep 29, 2025',
        title: 'Prometheus Group unveils GWOS-AI',
        description: 'Launch of the AI maintenance planning and scheduling product whose architecture I led: crew-ready schedules in minutes instead of hours, built on 20+ years of maintenance data.',
        link: 'https://www.businesswire.com/news/home/20250929189840/en/Prometheus-Group-Unveils-GWOS-AI-Transforming-Maintenance-Planning-and-Scheduling-with-Artificial-Intelligence',
    },
];

const Press: React.FC = () => {
    return (
        <div className="card-section" id="press">
            <h1>Press &amp; Interviews</h1>
            <p className="card-section-intro">
                I talk about putting AI into production systems: why the data architecture matters more than the model,
                and what it takes for AI to earn trust in enterprise software.
            </p>
            <div className="card-grid card-grid--two">
                {pressData.map((item) => (
                    <article className="info-card" key={item.link}>
                        <div className="info-card-meta">
                            <span className="info-card-outlet">{item.outlet}</span>
                            <span>{item.kind}{item.date ? ` · ${item.date}` : ''}</span>
                        </div>
                        <h3 className="info-card-title">{item.title}</h3>
                        {item.quote && (
                            <blockquote className="info-card-quote">“{item.quote}”</blockquote>
                        )}
                        <p className="info-card-text">{item.description}</p>
                        <a className="info-card-link" href={item.link} target="_blank" rel="noreferrer">
                            {item.kind === 'Product launch' ? 'Read the announcement' : 'Read the interview'}
                            <OpenInNewIcon/>
                        </a>
                        {item.note && <span className="info-card-note">{item.note}</span>}
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Press;
