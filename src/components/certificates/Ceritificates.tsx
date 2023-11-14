import Card from "../card/Card";
import "./certificates.scss";
export default function Ceritficates() {
  return (
    <div className="certificates">
      <div className="wrapper">
        <div className="cardContainer">
          <div className="row">
            <Card
              title="NPTEL : Data Science For Engineers"
              description="This comprehensive course from NPTEL, the National Programme on Technology Enhanced Learning, provides a solid foundation in data science for engineers. It covers the essential concepts, tools, and techniques for extracting valuable insights from data."
              buttonTag="Download"
              link="/docs/nptelds.pdf"
            />
            <Card
              title="SIH Internal Hackathon"
              description="In a display of exceptional problem-solving skills and innovative thinking, I, along with my team, emerged as the first-place winners for our problem-statement at the SIH Internal Hackathon."
              buttonTag="Download"
              link="/docs/sih.pdf"
            />
            <Card
              title="TALENT HUNT - 2023 (Coding Contest)"
              description="I am proud to share that I was awarded first place in coding contest at the prestigious Talent Hunt 2023 Hackathon, organized by the DSBS department of SRM University. This hackathon brought together some of the brightest minds in technology to tackle real-world challenges and develop innovative solutions."
              buttonTag="Download"
            />
          </div>
          <div className="row">
            <Card
              title="TALENT HUNT - 2023 (Project Presentation)"
              description="I am proud to share that I was awarded second place in Project Presentation at the prestigious Talent Hunt 2023 Hackathon, organized by the DSBS department of SRM University. This hackathon brought together some of the brightest minds in technology to tackle real-world challenges and develop innovative solutions."
              buttonTag="Download"
            />
            {/* <Card
              title="hello"
              description="font-size: medium;font-size: medium;font-size: medium;font-size: medium;font-size: medium;font-size: medium;font-size: medium;font-size: medium;"
              buttonTag="Download"
            /> */}
            <Card
              title="NPTEL : Programming in Java"
              description="The NPTEL Course on Programmin in Java is a comprehensive course that covers the essential concepts and skills of Java programming, one of the most popular and widely used programming languages today."
              buttonTag="Download"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
