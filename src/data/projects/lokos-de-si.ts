import type { Project } from "../types";

/** Lokos de S.I — finanças e agenda pessoais, app Android com API própria. */
export const lokosDeSi: Project = {
  slug: "lokos-de-si",
  title: "Lokos de S.I",
  description: "Finanças e agenda pessoais: app Android com API própria. Veja o vídeo de demonstração no repositório.",
  repo: "https://github.com/MuriloRocha-01/Mobile-lokosdeSI",
  stack: ["React Native", "Expo", "FastAPI"],
  gradient: ["#5b21b6", "#1e1b4b"],
  year: "2026",
  tipo: "pessoal",
  detalhes: {
    resumo:
      "Aplicativo Android de finanças e agenda pessoais. Ele usa a mesma conta e o mesmo servidor do app desktop, então o que eu lanço no celular aparece nos dois.",
    dores: [
      "Controlar gastos e compromissos em lugares separados.",
      "Digitar à mão cada lançamento do extrato do banco.",
      "Ter de entrar de novo toda vez que o app fecha.",
    ],
    utilidades: [
      "Lançamentos financeiros e agenda no celular, sincronizados com o desktop.",
      "Importação de extratos OFX e CSV, com prévia e aviso de possíveis duplicados.",
      "Widgets de saldo e despesas na tela inicial do Android.",
      "Gastos fixos gerados automaticamente pelo servidor.",
      "Tema claro e escuro.",
    ],
    tecnologias: [
      { nome: "React Native", uso: "Aplicativo Android." },
      { nome: "Expo", uso: "Ferramentas, build e atualizações do app." },
      { nome: "TypeScript", uso: "Tipagem do app e do contrato com a API." },
      { nome: "FastAPI (Python)", uso: "API que atende o celular e o desktop." },
      { nome: "SQLite e PostgreSQL", uso: "Banco de dados da API." },
      { nome: "JWT", uso: "Login com sessão renovável." },
    ],
  },
};
