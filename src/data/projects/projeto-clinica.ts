import type { Project } from "../types";

/** Projeto Clínica — agenda, fila de atendimento e painel de chamada. */
export const projetoClinica: Project = {
  slug: "projeto-clinica",
  title: "Projeto Clínica",
  description: "Sistema de agendamento e gestão para clínicas, com agenda semanal e fila de atendimento.",
  repo: "https://github.com/MuriloRocha-01/Projeto-clinica",
  stack: ["Next.js", "Go", "PostgreSQL"],
  image: "/projects/clinica.jpg",
  fit: "contain",
  gradient: ["#1750c4", "#0b3a8c"],
  year: "2026",
  detalhes: {
    resumo:
      "Sistema de gestão para clínicas que reúne agenda, fila de atendimento e cadastro de pacientes em um só lugar, com um modo de demonstração interativa.",
    dores: [
      "Conflito de horários e reservas simultâneas para o mesmo profissional.",
      "Recepção sem uma visão clara de quem já chegou e de quem está em atendimento.",
      "Fichas de pacientes difíceis de consultar e de atualizar.",
    ],
    utilidades: [
      "Agenda em grade semanal, por profissional.",
      "Fila de atendimento com status: aguardando, em atendimento e concluído.",
      "Ficha editável do paciente.",
      "Visão geral do dia, com valores de consultas particulares e de convênios.",
      "Busca rápida (Ctrl+K) por paciente ou tela, e tempo de espera ao vivo na fila.",
      "Painel de chamada para a sala de espera, com senha, consultório e voz.",
    ],
    tecnologias: [
      { nome: "Next.js", uso: "Interface e rotas (App Router)." },
      { nome: "TypeScript", uso: "Tipagem das entidades do sistema." },
      { nome: "Tailwind CSS", uso: "Estilo, com tokens e componentes reutilizáveis (design system)." },
      { nome: "Go", uso: "API em camadas: handlers, services e repository." },
      { nome: "PostgreSQL", uso: "Banco de dados, com transações que evitam reservas duplicadas." },
    ],
  },
};
