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
    decisoes: [
      {
        titulo: "Contas fixas sem agendador",
        problema:
          "Assinaturas e contas mensais precisam aparecer sozinhas, mas o servidor gratuito dorme quando ninguém usa e não tem um agendador rodando.",
        solucao:
          "A cada vez que as Finanças são abertas, a API lança todas as ocorrências vencidas de cada série, da última lançada até hoje, incluindo as de períodos em que o app ficou fechado.",
        resultado: "A conta aparece assim que a data vence, ou de uma vez quando a pessoa volta depois de dias.",
      },
      {
        titulo: "Leituras simultâneas não duplicam gastos",
        problema:
          "O painel faz várias leituras ao mesmo tempo, e cada uma poderia lançar a mesma conta do mês, gerando gastos duplicados.",
        solucao:
          "Uma seção crítica de escrita deixa só uma requisição passar por vez: BEGIN IMMEDIATE no SQLite e uma trava consultiva da transação (pg_advisory_xact_lock) no PostgreSQL. Um teste automático cobre o caso de leituras em paralelo.",
        resultado: "Uma ocorrência por mês, nos dois bancos.",
      },
      {
        titulo: "Login que não entrega pistas",
        problema:
          "Tempos de resposta diferentes revelam se um e-mail existe, e uma senha acima de 72 bytes seria cortada pelo bcrypt e aceita só pelo começo.",
        solucao:
          "Quando o e-mail não existe, a API confere um hash falso para gastar o mesmo tempo. Senhas acima de 72 bytes são recusadas, e 5 erros seguidos bloqueiam aquele e-mail por 30 segundos.",
      },
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
