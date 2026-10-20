const steps = [
  {
    number: "01",
    title: "Cadrer",
    description:
      "Clarifier le besoin, découper les fonctionnalités et faire émerger les cas à ne pas oublier.",
  },
  {
    number: "02",
    title: "Explorer",
    description:
      "Comparer des approches, documenter une API ou comprendre rapidement une base de code existante.",
  },
  {
    number: "03",
    title: "Développer",
    description:
      "Accélérer les tâches répétitives et obtenir un premier point de départ, toujours adapté au contexte du projet.",
  },
  {
    number: "04",
    title: "Vérifier",
    description:
      "Relire, tester et challenger les propositions. Le code livré reste compris, validé et maintenable.",
  },
];

export function AISection() {
  return (
    <section
      className="border-y border-line bg-section px-[clamp(24px,7.2vw,104px)] py-[105px] max-[760px]:px-6 max-[760px]:py-[78px]"
      id="ia"
    >
      <div className="grid grid-cols-[0.7fr_1.3fr] gap-[8%] max-[760px]:grid-cols-1 max-[760px]:gap-9">
        <div className="flex flex-col items-start justify-between max-[760px]:flex-row max-[760px]:items-center">
          <p className="mb-[22px] font-mono text-[11px] leading-[1.4] text-muted uppercase max-[760px]:m-0">
            Une aide, pas un pilote automatique
          </p>
          <span
            className="grid size-[97px] rotate-[8deg] place-content-center border border-[#53627a] font-mono text-center text-[11px] leading-[1.5] text-paper max-[760px]:size-[66px]"
            aria-hidden="true"
          >
            IA
            <br />+ DEV
          </span>
        </div>

        <div>
          <h2 className="mb-[22px] font-display text-[clamp(42px,5.4vw,68px)] leading-[1] font-semibold tracking-[0] max-[760px]:text-[clamp(42px,10vw,60px)]">
            Développer
            <br />
            <span className="text-[#aebbd0]">avec l’IA.</span>
          </h2>
          <p className="m-0 max-w-[610px] text-[15px] leading-[1.8] text-[#aab5c7]">
            J’utilise l’intelligence artificielle comme un outil de réflexion et
            d’accélération : elle m’aide à explorer des pistes et à avancer plus
            vite, tandis que je garde la maîtrise des choix techniques, du code
            et du résultat final.
          </p>

          <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2 border-t border-line pt-4">
            <span className="font-mono text-[10px] text-[#91a0b6] uppercase">
              Outils
            </span>
            <p className="m-0 text-xs leading-[1.7] text-[#c1cbd9]">
              GitHub Copilot et Windsurf auparavant · Claude Code aujourd’hui
            </p>
          </div>

          <ol className="mt-[42px] grid grid-cols-2 gap-x-8 gap-y-7 border-t border-line pt-6 max-[560px]:grid-cols-1 max-[560px]:gap-y-6">
            {steps.map((step) => (
              <li className="list-none" key={step.number}>
                <div className="mb-2 flex items-center gap-3">
                  <span className="font-mono text-[10px] text-[#91a0b6]">
                    {step.number}
                  </span>
                  <h3 className="m-0 font-display text-base font-semibold text-paper">
                    {step.title}
                  </h3>
                </div>
                <p className="m-0 pl-[29px] text-xs leading-[1.75] text-[#aab5c7]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
