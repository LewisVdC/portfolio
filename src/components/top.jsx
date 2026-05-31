import Aboutme from "./aboutme.jsx";
import Projects from "./projects.jsx";

export default function Top({ page }) {
  return (
    <div>
      {page === "aboutme" && <Aboutme />}
      {page === "projects" && <Projects />}
    </div>
  );
}
