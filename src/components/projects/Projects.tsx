import Card from "../card/Card";
import "./projects.scss";

export default function Projects() {
  return (
    <div className="projects">
      <div className="wrapper">
        <div className="cardContainer">
          <div className="row">
            <Card
              title="Blogdom : A Blog Website"
              description="I am a skilled and passionate web developer with a strong understanding of full-stack technologies. I am proud to present Blogdom, a comprehensive blog website I built using a modern JavaScript stack, including Next.js, React.js, Node.js, and Express.js."
              buttonTag="GitHub"
              link="https://github.com/Ayush-Singh24/Blogdom-FE"
            />
            <Card
              title="Projects Hub(Under Construction)"
              description="Made using Typescript as base with framework/libraries like NextJS and NestJS"
              buttonTag="GitHub"
            />
            <Card
              title="Joke Generator"
              description="Joke Generator is a fun and interactive web application designed to bring laughter and amusement to its users. It utilizes a combination of vanilla JavaScript, HTML, CSS, and Express.js to deliver a seamless user experience."
              buttonTag="GitHub"
              link="https://github.com/Ayush-Singh24/Joke-Generator-FE"
            />
          </div>
          <div className="row">
            <Card
              title="To Do List"
              description="A comprehensive TO-DO-List web app. This project not only demonstrates my proficiency in ReactJS but also highlights my ability to create user-friendly and intuitive web applications."
              buttonTag="GitHub"
              link="https://github.com/Ayush-Singh24/To-do-list"
            />
            <Card
              title="Pet-Store-API"
              description="A robust API for a pet store, built using the powerful ExpressJS framework. This API provides a seamless interface for managing pet information, enabling users to perform essential CRUD (Create, Read, Update, Delete) operations with ease."
              buttonTag="GitHub"
              link="https://github.com/Ayush-Singh24/Pet-Store-API-"
            />
            <Card
              title="Stopwatch"
              description="The Stopwatch Web Application is a simple yet powerful tool that I developed using ReactJS to deepen my understanding of state variables. This application is a testament to the power of ReactJS and its ability to manage and manipulate state variables effectively."
              buttonTag="GitHub"
              link="https://github.com/Ayush-Singh24/Stopwatch"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
