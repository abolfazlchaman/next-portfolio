import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { ProjectImage } from "./project-skeleton";

export interface ProjectProps {
  title: string;
  link: string;
  tech: string[];
  description: string;
  image: string;
}

export function Project({ title, link, tech, description, image }: ProjectProps) {
  return (
    <div className="flex flex-col space-y-4 items-center justify-between w-full h-full p-4 rounded-lg shadow-[0px_4px_30px_0px_var(--custom-shadow)] overflow-auto">
      <h3 className="text-2xl font-semibold tracking-tight mb-2">
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-lg text-foreground hover:text-muted-foreground underline underline-offset-4">
          <FiExternalLink
            size={20}
            className="mx-1"
          />
          {title}
        </Link>
      </h3>
      <div className="relative w-full shrink-0 h-48 rounded-lg overflow-hidden mb-4">
        <ProjectImage
          src={image}
          alt={title}
        />
      </div>
      <p className="text-lg text-muted-foreground text-justify mt-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((tech) => (
          <span
            key={tech}
            className="inline-block px-3 py-1 text-sm font-medium text-foreground bg-muted rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
