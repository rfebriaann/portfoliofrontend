import Navbar from "../navbar";
import Jumbotorn from "./component/jumbotorn";
import Projects from "./component/projects";

export default function Works() {
  return (
    <div>
      <Navbar />
      <Jumbotorn />
      <Projects />
      <div className="h-screen"></div>
    </div>
  );
}
