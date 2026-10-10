import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return (
    <section
      className="border-y border-line bg-section px-[clamp(24px,7.2vw,104px)] pt-[113px] pb-[122px] max-[760px]:px-6 max-[760px]:pt-[76px] max-[760px]:pb-[85px]"
      id="projets"
    >
      <div className="mb-12 flex items-end justify-between gap-[35px] max-[760px]:mb-[35px] max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-[19px]">
        <div>
          <p className="mb-[17px] font-mono text-[11px] leading-[1.4] text-muted uppercase">
            Projets sélectionnés
          </p>
          <h2 className="m-0 font-display text-[clamp(46px,6vw,74px)] leading-[0.98] font-semibold tracking-[0] max-[760px]:text-[clamp(46px,11vw,68px)]">
            Du concret,
          </h2>
        </div>
        <p className="m-0 mb-[6px] max-w-[315px] text-[13px] leading-[1.7] text-[#9ba8bb]">
          Applications mobiles, expériences web et projets personnels,
          développés du front-end au back-end.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-[100px] max-[760px]:grid-cols-1 max-[760px]:gap-y-[38px]">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.number} />
        ))}
      </div>
    </section>
  );
}
