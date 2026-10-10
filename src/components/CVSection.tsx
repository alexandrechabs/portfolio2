import cvFile from "../assets/ALEXANDRE CHABANE.pdf";

const experiences = [
  {
    dates: "Juil. 2025 — Janv. 2026",
    role: "Responsable technique",
    company: "Digit RE",
    logo: "https://www.digitregroup.com/wp-content/uploads/2023/01/groupe-digit-re-immobilier.png",
    details: [
      "Pilotage de la transition des outils techniques à la suite du rachat de Welmo par Digit RE.",
    ],
  },
  {
    dates: "Janv. 2024 — Juin 2025",
    role: "Responsable technique",
    company: "Welmo",
    logo: "https://chabs.fr/assets/images/welmo.png",
    details: [
      "Conception et développement d’un CRM performant et évolutif pour un réseau de mandataires immobiliers.",
      "Maintenance et optimisation des bases de données et des serveurs de production.",
    ],
  },
  {
    dates: "Janv. 2020 — Déc. 2023",
    role: "Développeur full-stack senior",
    company: "Welmo",
    logo: "https://chabs.fr/assets/images/welmo.png",
    details: [
      "Développement du CRM à destination des mandataires immobiliers allant de la prospection jusqu'à la facturation en passant par la gestion de rendez-vous, d’interfaces réactives et de tableaux de bord de suivi.",
      "Accompagnement de la croissance du réseau, passé de 5 à 200 mandataires.",
    ],
  },
  {
    dates: "Mars 2019 — Août 2019",
    role: "Stagiaire développeur full-stack",
    company: "Aubay France",
    logo: "https://chabs.fr/assets/images/aubay.png",
    details: [
      "Contribution au développement d’applications web et mobiles avec Angular et Ionic.",
    ],
  },
  {
    dates: "Avr. 2018 — Juil. 2018",
    role: "Stagiaire développeur mobile",
    company: "Technology Everywhere",
    logo: "https://chabs.fr/assets/images/te.png",
    details: ["Développement d’une application mobile avec React Native."],
  },
];

const education = [
  {
    dates: "2013 — 2019",
    diploma: "Master d’ingénieur en informatique",
    school: "ESIEA",
    logo: "https://chabs.fr/assets/images/esiea.png",
  },
  {
    dates: "2010 — 2013",
    diploma: "Baccalauréat scientifique",
    school: "Lycée Robert Garnier",
  },
];

const skills = [
  "React",
  "Node.js",
  "AdonisJS",
  "PostgreSQL",
  "NoSQL",
  "Git",
  "CI/CD",
  "Docker",
  "Développement full-stack",
];

export function CVSection() {
  return (
    <section
      className="border-t border-line bg-[#0c121c] px-[clamp(24px,7.2vw,104px)] pt-[110px] pb-[120px] max-[760px]:px-6 max-[760px]:pt-[78px] max-[760px]:pb-[82px]"
      id="cv"
    >
      <div className="mb-[60px] flex items-end justify-between gap-6 max-[760px]:mb-[42px] max-[760px]:flex-col max-[760px]:items-start">
        <div>
          <p className="mb-[18px] font-mono text-[11px] leading-[1.4] text-muted uppercase">
            Parcours professionnel
          </p>
          <h2 className="m-0 font-display text-[clamp(46px,6vw,74px)] leading-[0.98] font-semibold tracking-[0] max-[760px]:text-[clamp(46px,11vw,68px)]">
            Expérience &amp;
            <br />
            <span className="text-[#aebbd0]">formation.</span>
          </h2>
        </div>
        <a
          className="inline-flex min-h-[46px] items-center gap-[18px] bg-accent px-4 text-xs font-semibold text-white no-underline transition-transform hover:-translate-y-0.5 hover:brightness-110"
          href={cvFile}
          download="Alexandre-Chabane-CV.pdf"
        >
          Télécharger le CV <span aria-hidden="true">↓</span>
        </a>
      </div>

      <div className="grid grid-cols-[minmax(0,1.5fr)_minmax(250px,0.75fr)] gap-[clamp(38px,7vw,96px)] max-[760px]:grid-cols-1 max-[760px]:gap-12">
        <div>
          <h3 className="mb-7 flex items-center gap-3 border-b border-line pb-[14px] font-display text-sm font-medium text-paper">
            <span className="font-mono text-[10px] text-[#9ba8bb]">01</span>{" "}
            Expériences
          </h3>
          <ol className="m-0 list-none border-l border-[#35445d] p-0 pl-5">
            {experiences.map((experience) => (
              <li
                className="relative pb-[34px] pl-5 last:pb-0 before:absolute before:top-[3px] before:left-[-24px] before:size-[7px] before:rounded-full before:border-2 before:border-[#0c121c] before:bg-accent before:shadow-[0_0_0_1px_#5b8dff] before:content-['']"
                key={`${experience.company}-${experience.dates}`}
              >
                <p className="mb-2 font-mono text-[10px] text-[#9ba8bb]">
                  {experience.dates}
                </p>
                <div className="flex items-start justify-between gap-4">
                  <h4 className="m-0 font-display text-lg leading-[1.3] font-semibold text-paper">
                    {experience.role}
                  </h4>
                  <span className="inline-flex shrink-0 flex-col items-center gap-1 text-xs text-[#c1cbd9]">
                    <img
                      className="h-7 w-[68px] bg-white p-[3px] object-contain"
                      src={experience.logo}
                      alt=""
                      loading="lazy"
                    />
                    <span>
                      {experience.company.split(" ").map((word) => (
                        <span className="block" key={word}>
                          {word}
                        </span>
                      ))}
                    </span>
                  </span>
                </div>
                <ul className="mt-3 mb-0 list-disc pl-[17px] text-xs leading-[1.7] text-[#aab5c7] [&>li+li]:mt-[5px]">
                  {experience.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <aside className="flex flex-col gap-[35px] max-[760px]:grid max-[760px]:grid-cols-2 max-[760px]:gap-x-[22px] max-[760px]:gap-y-8">
          <section className="max-[760px]:col-span-full">
            <h3 className="mb-[18px] flex items-center gap-3 border-b border-line pb-[14px] font-display text-sm font-medium text-paper">
              <span className="font-mono text-[10px] text-[#9ba8bb]">02</span>{" "}
              Formation
            </h3>
            <div className="grid gap-5">
              {education.map((item) => (
                <article key={item.school}>
                  <p className="mb-2 font-mono text-[10px] text-[#9ba8bb]">
                    {item.dates}
                  </p>
                  <h4 className="m-0 font-display text-sm leading-[1.3] font-semibold text-paper">
                    {item.diploma}
                  </h4>
                  <p className="mt-[5px] mb-0 flex items-center gap-2 text-xs text-[#aab5c7]">
                    {item.logo && (
                      <img
                        className="size-7 bg-white p-0.5 object-contain"
                        src={item.logo}
                        alt=""
                        loading="lazy"
                      />
                    )}
                    {item.school}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h3 className="mb-[18px] flex items-center gap-3 border-b border-line pb-[14px] font-display text-sm font-medium text-paper">
              <span className="font-mono text-[10px] text-[#9ba8bb]">03</span>{" "}
              Compétences
            </h3>
            <ul className="m-0 flex list-none flex-wrap gap-[7px] p-0">
              {skills.map((skill) => (
                <li
                  className="border border-[#35435a] px-[9px] py-[7px] font-mono text-[9px] text-[#d5deed]"
                  key={skill}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="mb-[18px] flex items-center gap-3 border-b border-line pb-[14px] font-display text-sm font-medium text-paper">
              <span className="font-mono text-[10px] text-[#9ba8bb]">04</span>{" "}
              Langues
            </h3>
            <ul className="m-0 grid list-none gap-[11px] p-0 text-xs">
              <li className="flex justify-between gap-3">
                <span className="text-paper">Français</span>
                <span className="text-[#9ba8bb]">Courant</span>
              </li>
              <li className="flex justify-between gap-3">
                <span className="text-paper">Anglais</span>
                <span className="text-[#9ba8bb]">Pratiqué</span>
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </section>
  );
}
