/**
 * Dados estruturados (JSON-LD): um bloco invisível que diz ao Google, em formato padronizado
 * (schema.org), quem é a pessoa por trás do site e onde mais ela aparece na internet.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // "<" vira < para o texto nunca conseguir fechar a tag <script> por engano
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
