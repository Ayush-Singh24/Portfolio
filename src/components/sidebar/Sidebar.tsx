import Links from "./links/Links";
import "./sidebar.sccs";
import ToggleButton from "./toggleButton/ToggleButton";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="bg">
        <Links />
      </div>
      <ToggleButton />
    </div>
  );
}
