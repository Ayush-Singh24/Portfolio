import "./card.scss";
export default function Card({
  title,
  description,
  buttonTag,
  link,
}: {
  title: string;
  description: string;
  buttonTag: string;
  link?: string;
}) {
  return (
    <div className="card">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <a href={`${link}`} className="button">
        {buttonTag}
      </a>
    </div>
  );
}
