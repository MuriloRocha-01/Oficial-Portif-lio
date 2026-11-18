/**
 * Transforma um texto em um nome seguro para URL/arquivo:
 * "Pokédex" vira "pokedex" e "Lokos de S.I" vira "lokos-de-s-i".
 */
export function toSlug(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // remove os acentos separados pelo NFD
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");
}
