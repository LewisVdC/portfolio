import { useState } from "react";
import Testproject from "./projects/testproject.jsx";
export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div id="projectgridmain">
      <div className="projectsgrid">
        <div id="project1">
          <Testproject />
        </div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  );
}
