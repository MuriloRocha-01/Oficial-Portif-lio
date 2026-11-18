// Classes de botões/links em formato de pílula, usadas em várias seções.
// São só strings de Tailwind: use em <a className={buttonPrimary}>.

/** Botão cheio (cor de tinta). Ação principal. */
export const buttonPrimary =
  "inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-bg transition-transform hover:-translate-y-0.5";

/** Botão só com borda. Ação secundária. */
export const buttonGhost =
  "inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 font-semibold transition-colors hover:bg-ink hover:text-bg";

/** Link em pílula menor, usado nas páginas de projeto. */
export const buttonPill =
  "inline-flex items-center gap-2 rounded-full border-2 border-ink px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-ink hover:text-bg";
