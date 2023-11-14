import SkillsBar from "../skillsBar/SkillsBar";
import "./aboutMe.scss";

export default function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="wrapper">
        <div className="textContainer">
          <div className="box">
            <h1 className="heading">About me</h1>
            <p className="description">
              I am a skilled and enthusiastic web developer with a deep-seated
              passion for crafting innovative and user-friendly digital
              experiences. My expertise lies in harnessing the power of various
              programming languages and frameworks, to transform ideas into
              tangible and impactful web applications.
            </p>
          </div>
          <div className="box">
            <h1 className="heading">Education</h1>
            <span>2022-2026</span>
            <p className="description">
              B.Tech - SRM UNIVERSITY, KTR CAMPUS (curr. 3rd Sem)
            </p>
          </div>
        </div>
        <div className="skillContainer">
          <h1 className="title-text">Skills</h1>
          <div className="barContainer">
            <SkillsBar title="TypeScript" percent={80} />
            <SkillsBar title="JavaScript" percent={90} />
            <SkillsBar title="NextJS" percent={85} />
            <SkillsBar title="ReactJS" percent={95} />
            <SkillsBar title="NodeJS" percent={96} />
            <SkillsBar title="ExpressJS" percent={96} />
            <SkillsBar title="NestJS" percent={80} />
            <SkillsBar title="CSS/SASS" percent={98} />
            <SkillsBar title="Tailwind" percent={98} />
            <SkillsBar title="MUI" percent={90} />
          </div>
        </div>
      </div>
    </div>
  );
}
