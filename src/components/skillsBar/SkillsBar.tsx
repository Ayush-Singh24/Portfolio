import "./skillsBar.scss";
export default function SkillsBar({
  title,
  percent,
}: {
  title: string;
  percent: number;
}) {
  return (
    <div className="skill-box">
      <span className="title">{title}</span>
      <div className="skill-bar">
        <span
          className="skill-per"
          style={{ width: `${percent}%`, animationDelay: "0.3s" }}
        ></span>
        <span className="tooltip">{percent}%</span>
      </div>
    </div>
  );
}
