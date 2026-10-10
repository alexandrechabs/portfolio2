export function SiteHeader() {
  return (
    <header className="flex h-[86px] items-center justify-between border-b border-line px-[clamp(24px,7.2vw,104px)] text-paper max-[760px]:h-[70px] max-[760px]:px-6">
      <a
        className="font-display text-[25px] leading-none font-bold tracking-[0] no-underline"
        href="#accueil"
        aria-label="Alexandre Chabane, accueil"
      >
        AC<span>.</span>
      </a>
      <nav
        className="flex items-center gap-[clamp(22px,4vw,55px)] text-[13px] max-[430px]:gap-[17px] max-[430px]:text-xs"
        aria-label="Navigation principale"
      >
        <a
          className="no-underline transition-colors hover:text-accent"
          href="#projets"
        >
          Projets
        </a>
        <a
          className="no-underline transition-colors hover:text-accent"
          href="#apropos"
        >
          À propos
        </a>
        <a
          className="no-underline transition-colors hover:text-accent"
          href="#cv"
        >
          CV
        </a>
        <a
          className="flex items-center gap-3 no-underline transition-colors hover:text-accent max-[430px]:gap-[5px]"
          href="#contact"
        >
          Contact <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
