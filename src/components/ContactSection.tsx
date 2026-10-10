export function ContactSection() {
  return (
    <section className="border-t border-line bg-[#080b11] px-[clamp(24px,7.2vw,104px)] pt-[77px] pb-[85px] text-paper max-[760px]:px-6 max-[760px]:pt-[65px] max-[760px]:pb-[67px]">
      <p className="mb-[22px] font-mono text-[11px] leading-[1.4] text-[#b2bdcf] uppercase">
        <span className="mr-[9px] inline-block size-2 rounded-full bg-accent align-[1px]" />{" "}
        Et maintenant ?
      </p>
      <div className="flex items-end justify-between gap-9 max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-7">
        <h2 className="m-0 font-display text-[clamp(46px,6vw,74px)] leading-[0.98] font-semibold tracking-[0] max-[760px]:text-[clamp(46px,11vw,68px)]">
          Un projet en tête ?<br />
          <span className="text-paper">On en parle.</span>
        </h2>
        <div className="max-w-[310px] max-[760px]:max-w-[390px]">
          <p className="mb-5 text-xs leading-[1.7] text-[#aab5c7]">
            Échangeons autour de ton idée, de ton équipe ou d’un nouveau défi
            produit.
          </p>
          <div className="flex flex-wrap gap-[10px]">
            <a
              className="inline-flex min-h-12 items-center bg-accent px-[19px] text-[13px] font-semibold text-white no-underline"
              href="mailto:alexandrechabane72@gmail.com"
            >
              alexandrechabane72@gmail.com
            </a>
            <a
              className="inline-flex min-h-12 items-center gap-3 border border-[#3b4d69] px-4 text-[13px] font-semibold text-paper no-underline transition-colors hover:border-accent hover:bg-[#5b8dff20]"
              href="https://www.linkedin.com/in/alexandre-chabane"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
