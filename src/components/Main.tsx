import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../assets/styles/Main.scss';

const SocialLinks = () => (
  <>
    <a href="https://github.com/vosaba" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
    <a href="https://www.linkedin.com/in/vosaba/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
    <a href="mailto:leonid.abasov@gmail.com" aria-label="Email"><EmailIcon/></a>
  </>
);

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://avatars.githubusercontent.com/u/8919888?v=4" alt="Leonid Abasov" />
        </div>
        <div className="content">
          <div className="social_icons">
            <SocialLinks/>
          </div>
          <h1>Leonid Abasov</h1>
          <p>Principal Software Engineer | Software Architect</p>
          <p className="tagline">
            I build platforms that other engineers move fast on: distributed systems, AI in production
            and enterprise integrations on .NET, TypeScript, AWS, Azure and Kubernetes.
          </p>
          <p className="location"><LocationOnIcon/> Raleigh, NC</p>

          <div className="mobile_social_icons">
            <SocialLinks/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
