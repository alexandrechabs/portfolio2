export function AboutSection() {
  return (
    <section
      className="grid grid-cols-[0.7fr_1.3fr] gap-[8%] px-[clamp(24px,7.2vw,104px)] py-[125px_130px] max-[760px]:grid-cols-1 max-[760px]:gap-[34px] max-[760px]:px-6 max-[760px]:py-[82px_85px]"
      id="apropos"
    >
      <div className="flex flex-col items-start justify-between max-[760px]:flex-row max-[760px]:items-center">
        <p className="mb-[22px] font-mono text-[11px] leading-[1.4] text-muted uppercase max-[760px]:m-0">
          Une idée, puis du code
        </p>
        <span
          className="grid size-[97px] rotate-[-12deg] place-content-center rounded-full border border-[#3c4c65] text-center font-mono text-sm leading-[1.35] text-paper max-[760px]:size-[66px] max-[760px]:text-[11px]"
          aria-hidden="true"
        >
          AC
          <br />✳
        </span>
      </div>
      <div>
        <h2 className="mb-[27px] font-display text-[clamp(46px,6vw,74px)] leading-[0.98] font-semibold tracking-[0] max-[760px]:text-[clamp(46px,11vw,68px)]">
          Le web, de
          <br />
          bout en <span className="text-paper">bout.</span>
        </h2>
        <p className="m-0 max-w-[590px] text-[15px] leading-[1.8] text-[#aab5c7]">
          Développeur full stack, j’aime relier une interface claire à une base
          solide. Je peux intervenir sur toute la chaîne : comprendre le besoin,
          concevoir l’expérience, développer le produit et le faire évoluer.
        </p>
        <div className="mt-[37px] grid grid-cols-3 gap-[15px] border-t border-line pt-5 max-[760px]:grid-cols-1 max-[760px]:gap-[17px]">
          <div>
            <span className="font-mono text-[9px] text-[#95a2b7]">
              FRONT-END
            </span>
            <p className="mt-2 mb-0 text-xs leading-[1.6]">
              React · TypeScript · CSS · Tailwind CSS · Vite
            </p>
          </div>
          <div>
            <span className="font-mono text-[9px] text-[#95a2b7]">
              BACK-END
            </span>
            <p className="mt-2 mb-0 text-xs leading-[1.6]">
              Node.js · TypeScript · API · PostgreSQL · NoSQL
            </p>
          </div>
          <div>
            <span className="font-mono text-[9px] text-[#95a2b7]">
              ET AUSSI
            </span>
            <p className="mt-2 mb-0 text-xs leading-[1.6]">
              Git · Tests · Déploiement · CI/CD · Docker
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
