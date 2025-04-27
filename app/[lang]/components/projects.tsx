import { getDictionary } from "@/get-dictionary";
import { Project } from "./project";

export function Projects({
  projects,
}: {
  projects: Awaited<ReturnType<typeof getDictionary>>["projects"];
}) {
  return (
    <section className="container min-h-[calc(100vh-64px)] min-w-full flex flex-col items-center justify-center my-24">
      <h2 className="text-3xl mb-5 font-semibold tracking-tight text-center">{projects.title}</h2>
      {/* TODO <div className="text-sm text-nowrap flex my-2 justify-center">
          <Link
            href={isFarsi ? '/fa/projects' : '/projects'}
            className="text-muted-foreground hover:underline mx-4"
          >
            {isFarsi ? 'مشاهده تمامی پروژه‌ها' : 'See all projects'}
          </Link>
        </div> */}
      <p className="text-lg text-muted-foreground text-justify mb-10">{projects.subtitle}</p>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10">
        {projects.projectsData.map((project) => (
          <div
            key={project.link}
            className="flex flex-col justify-between items-center w-full md:w-1/2 xl:w-1/3 min-h-fit h-[500px] overflow-scroll">
            {" "}
            <Project
              key={project.title}
              title={project.title}
              link={project.link}
              tech={project.technologies}
              description={project.description}
              image={project.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
