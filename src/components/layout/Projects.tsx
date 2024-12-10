import Heading from "../ui/Heading";
import Link from "../ui/Link";

function Projects() {
  return (
    <section>
      <Heading as="h2">Project</Heading>
      <div className="mb-6">
        <ul>
          <li>
            <Link variant="group" href="https://github.com/glunoty/SonicFlow">
              <Heading as="h3" variant="link">
                SonicFlow
              </Heading>
              <span className="text-sm text-muted block mt-2 mb-2">
                Creator
              </span>
              <p>
                open-source project for initializing full-stack next.js apps.
                24k+ stars, 200+ contributors
              </p>
            </Link>
          </li>
        </ul>
      </div>

      <Link variant="labeledIcon" href="#">
        All Projects
      </Link>
    </section>
  );
}

export default Projects;
