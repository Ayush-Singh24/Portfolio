export default function Links() {
  const items: string[] = [
    "Homepage",
    "About Me",
    "Certificates",
    "Projects",
    "Contacts",
  ];
  return (
    <div className="links">
      {items.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
}
