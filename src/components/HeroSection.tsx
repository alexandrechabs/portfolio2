import alexandrePhoto from "../assets/alexandre.jpg";

export function HeroSection() {
  return (
    <section
      className="relative grid min-h-[650px] grid-cols-[1.05fr_0.95fr] items-center gap-x-[6%] px-[clamp(24px,7.2vw,104px)] pt-[76px] pb-[42px] max-[760px]:min-h-0 max-[760px]:grid-cols-1 max-[760px]:gap-[42px] max-[760px]:px-6 max-[760px]:pt-[65px] max-[760px]:pb-20"
      id="accueil"
    >
      <div className="relative z-[1] animate-[arrive_700ms_both] pb-[35px] max-[760px]:pb-0">
        <p className="mb-[22px] font-mono text-[11px] leading-[1.4] text-muted uppercase tracking-[0]">
          <span className="mr-[9px] inline-block size-2 rounded-full bg-accent align-[1px]" />{" "}
          Développeur full stack
        </p>
        <h1 className="m-0 font-display text-[clamp(68px,9vw,124px)] leading-[0.88] font-semibold tracking-[0] max-[760px]:text-[clamp(66px,15vw,100px)]">
          Alexandre
          <br />
          <span className="text-paper">Chabane</span>
        </h1>
        <p className="mt-[30px] mb-[29px] max-w-[445px] text-[17px] leading-[1.65] text-[#aab5c7] max-[760px]:mt-6 max-[760px]:text-[15px]">
          Je transforme les bonnes idées en produits web rapides, utiles et
          agréables à utiliser.
        </p>
        <div className="flex flex-wrap items-center gap-[22px] max-[430px]:flex-col max-[430px]:items-start max-[430px]:gap-4">
          <a
            className="inline-flex min-h-12 items-center justify-between gap-6 bg-accent px-[19px] text-[13px] font-semibold text-white no-underline transition-transform hover:-translate-y-0.5 hover:brightness-90"
            href="#projets"
          >
            Découvrir mes projets <span aria-hidden="true">↓</span>
          </a>
          <a
            className="border-b border-[#52617a] pb-[5px] text-xs no-underline"
            href="#contact"
          >
            Parlons de votre projet <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="relative w-full max-w-[475px] justify-self-end animate-[arrive_850ms_100ms_both] border border-[#4d5b73] bg-[#101722] pt-[34px] shadow-[0_24px_70px_#0006] max-[760px]:w-[calc(100%-15px)] max-[760px]:max-w-[520px] max-[760px]:justify-self-start">
        <div
          className="absolute inset-x-0 top-0 flex h-[34px] items-center gap-[13px] border-b border-line px-3 font-mono text-[9px] text-[#aab5c7]"
          aria-hidden="true"
        >
          <span className="flex gap-[5px]">
            <i className="size-[7px] rounded-full bg-accent opacity-75" />
            <i className="size-[7px] rounded-full bg-accent opacity-50" />
            <i className="size-[7px] rounded-full bg-accent opacity-30" />
          </span>
          <span className="mr-auto">src / alexandre.tsx</span>
          <span className="text-paper">TSX</span>
        </div>
        <img
          className="mx-auto block aspect-square object-cover object-center"
          src={alexandrePhoto}
          alt="Portrait d’Alexandre Chabane"
        />
        <div className="absolute right-[-22px] bottom-6 flex min-h-[68px] w-[230px] items-center gap-3 border border-[#31415e] bg-[#101722] px-[14px] py-3 font-mono text-[10px] leading-[1.55] text-[#d6deec] max-[430px]:right-[-10px] max-[430px]:bottom-[14px] max-[430px]:w-[215px] max-[430px]:min-h-[62px] max-[430px]:px-[10px] max-[430px]:py-[9px] max-[430px]:text-[9px]">
          <span
            className="font-mono text-[19px] font-bold text-paper"
            aria-hidden="true"
          >
            &gt;_
          </span>
          <span>
            <b>$ npm run build</b>
            <br />✓ Compiled successfully
          </span>
        </div>
        <div className="absolute top-[45px] left-5 bg-[#090d14d9] px-[9px] py-[7px] font-mono text-[8px] text-[#e8edf6]">
          FULL STACK DEVELOPER · 2026
        </div>
      </div>
      <div
        className="absolute right-[clamp(24px,7.2vw,104px)] bottom-[21px] left-[clamp(24px,7.2vw,104px)] flex justify-between border-t border-line pt-[15px] font-mono text-[9px] text-[#8491a6] max-[760px]:right-6 max-[760px]:bottom-5 max-[760px]:left-6"
        aria-hidden="true"
      >
        <span>~/ALEXANDRE-CHABANE</span>
        <span className="max-[760px]:hidden">REACT · TYPESCRIPT · NODE.JS</span>
        <span>BUILD: SUCCESS</span>
      </div>
    </section>
  );
}
