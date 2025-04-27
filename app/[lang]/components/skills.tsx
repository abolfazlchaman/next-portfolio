import {
  SiAmazonwebservices,
  SiCypress,
  SiGraphql,
  SiJest,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Skill } from "./skill";
import { getDictionary } from "@/get-dictionary";

const skills = [
  { name: "TypeScript", icon: <SiTypescript size={40} /> },
  { name: "AWS", icon: <SiAmazonwebservices size={40} /> },
  { name: "React", icon: <SiReact size={40} /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} /> },
  { name: "Node.js", icon: <SiNodedotjs size={40} /> },
  { name: "GraphQL", icon: <SiGraphql size={40} /> },
  { name: "Redux", icon: <SiRedux size={40} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={40} /> },
  { name: "Jest", icon: <SiJest size={40} /> },
  { name: "Cypress", icon: <SiCypress size={40} /> },
];

export function Skills({
  skillsTitles,
  softSkills,
  languages,
}: {
  skillsTitles: Awaited<ReturnType<typeof getDictionary>>["skills"];
  softSkills: Awaited<ReturnType<typeof getDictionary>>["softSkills"];
  languages: Awaited<ReturnType<typeof getDictionary>>["languages"];
}) {
  return (
    <section className="container justify-center min-h-[calc(100vh-64px)] min-w-full flex flex-col items-center py-20">
      {/* Hard Skills Section */}
      <h2 className="text-3xl font-semibold tracking-tight mb-5 text-center">
        {skillsTitles.title}
      </h2>
      <p className="text-lg text-muted-foreground text-justify mb-10 max-w-3xl">
        {skillsTitles.sub}
      </p>
      <div className="w-full grid grid-cols-3 md:grid-cols-5 gap-10 mb-20 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex justify-center items-center">
            <Skill
              name={skill.name}
              icon={skill.icon}
            />
          </div>
        ))}
      </div>

      {/* Language and Soft Skills Sections */}
      <div className="w-full flex flex-col md:flex-row gap-10 justify-between">
        {/* Language Section */}
        <section className="w-full flex flex-col items-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-5">{languages.title}</h2>
          <ul className="flex flex-wrap gap-4 justify-center text-lg">
            {Object.entries(languages.items).map(([key, label]) => (
              <li
                key={key}
                className="bg-muted px-4 py-2 rounded-xl shadow-sm">
                {label}
              </li>
            ))}
          </ul>
        </section>

        {/* Soft Skills Section */}
        <section className="w-full flex flex-col items-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-5">{softSkills.title}</h2>
          <ul className="flex flex-wrap gap-4 justify-center text-lg">
            {softSkills.items.map((skill: string, index: number) => (
              <li
                key={index}
                className="bg-muted px-4 py-2 rounded-xl shadow-sm">
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
