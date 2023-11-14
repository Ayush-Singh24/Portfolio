import "./card.scss";
export default function Card({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="card">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <a href="/docs/nptelds.pdf" className="button">
        Download
      </a>
    </div>
  );
}
