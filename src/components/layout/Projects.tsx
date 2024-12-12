import Heading from "../ui/Heading";
import Link from "../ui/Link";
import projects from "@/data/projects.json";

const ProjectList = () => {
  return (
    <ul className="flex flex-col gap-6">
      {projects.map((project, index) => (
        <li key={index}>
          <Link variant="group" href={project.link}>
            <Heading as="h3" variant="link">
              {project.label}
            </Heading>
            <span className="text-muted text-sm block mt-2 mb-4">Creator</span>
            <p>{project.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

function Projects() {
  return (
    <section>
      <Heading as="h2">Project</Heading>
      <div>
        <ProjectList />
      </div>
    </section>
  );
}

export default Projects;
