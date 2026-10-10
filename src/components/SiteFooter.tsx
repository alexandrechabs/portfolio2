export function SiteFooter() {
  return (
    <footer className="flex min-h-[85px] items-center justify-between gap-5 px-[clamp(24px,7.2vw,104px)] text-[10px] text-[#95a2b7] max-[760px]:px-6 max-[430px]:flex-wrap max-[430px]:py-[19px]">
      <a
        className="font-display text-[21px] leading-none font-bold tracking-[0] text-ink no-underline"
        href="#accueil"
        aria-label="Retour en haut"
      >
        AC<span>.</span>
      </a>
      <span>Alexandre Chabane · Développeur full stack</span>
      <a
        className="font-mono text-[10px] no-underline transition-colors hover:text-accent"
        href="#accueil"
      >
        Retour en haut ↑
      </a>
    </footer>
  );
}
