import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group first:col-span-full first:grid first:grid-cols-[1.3fr_0.7fr] first:items-center first:gap-x-[35px] max-[760px]:first:block">
      <div className="relative aspect-[1.37] min-w-0 overflow-hidden bg-accent first:aspect-[1.67] max-[760px]:first:aspect-[1.25]">
        <img
          className="block size-full object-cover transition-transform duration-[400ms] group-hover:scale-[1.035]"
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
        />
        <span className="absolute top-4 left-4 bg-paper px-[10px] py-2 font-mono text-[9px] text-ink">
          {project.number} / 05
        </span>
        <span
          className="absolute top-4 right-4 inline-flex items-center gap-[7px] bg-[#090d14e8] px-[10px] py-2 font-mono text-[9px] text-paper uppercase"
          aria-label={`Projet ${project.active ? "actif" : "inactif"}`}
        >
          <span
            className={`size-1.5 rounded-full ${project.active ? "bg-accent" : "bg-[#66748a]"}`}
            aria-hidden="true"
          />
          {project.active ? "Actif" : "Inactif"}
        </span>
      </div>
      <div className="pt-5 first:py-[25px] first:pl-[5px] max-[760px]:first:pt-5">
        <div className="mb-[9px] flex items-baseline justify-between gap-3">
          <p className="m-0 font-mono text-[10px] text-[#99a6ba]">
            {project.category}
          </p>
          <time
            className="shrink-0 font-mono text-[10px] text-paper"
            dateTime={String(project.year)}
          >
            {project.year}
          </time>
        </div>
        <h3 className="m-0 max-w-[390px] font-display text-[clamp(24px,3vw,34px)] leading-[1.1] font-semibold tracking-[0] max-[760px]:text-[29px]">
          {project.title}
        </h3>
        <p className="mt-[13px] mb-[17px] max-w-[390px] text-[13px] leading-[1.6] text-[#a7b2c3]">
          {project.description}
        </p>
        <ul
          className="m-0 flex list-none flex-wrap gap-[7px] p-0"
          aria-label="Technologies"
        >
          {project.tags.map((tag) => (
            <li
              className="border border-[#35435a] px-[9px] py-1.5 font-mono text-[9px] text-[#d5deed]"
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-[18px] flex flex-wrap gap-4">
          {project.links.map((link) => {
            const isLinkActive = project.active && link.active;

            return isLinkActive ? (
              <a
                href={link.url}
                key={link.url}
                target="_blank"
                rel="noreferrer"
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span
                className="inline-flex cursor-not-allowed items-center gap-[7px] font-mono text-[10px] text-[#78869a] line-through decoration-[#536176] underline-offset-4"
                key={link.url}
                aria-label={`${link.label}, lien inactif`}
                title="Ce lien est inactif"
              >
                {link.label} <span aria-hidden="true">×</span>
              </span>
            );
          })}
        </div>
      </div>
    </article>
  );
}
