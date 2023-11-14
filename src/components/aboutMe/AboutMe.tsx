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
        <div className="skillContainer">skill</div>
      </div>
    </div>
  );
}
