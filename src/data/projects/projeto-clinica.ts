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
    decisoes: [
      {
        titulo: "Duas pessoas marcando o mesmo horário",
        problema:
          "Dois atendentes podem reservar o mesmo profissional ao mesmo tempo: as duas checagens de \"horário livre\" passam antes de qualquer uma gravar, e o horário é marcado duas vezes.",
        solucao:
          "Toda gravação de agenda abre uma transação e trava a linha do profissional (SELECT ... FOR UPDATE) antes de checar conflitos. A segunda requisição espera a primeira terminar e já enxerga o horário ocupado.",
        resultado: "Sem reserva duplicada, e quem garante isso é o banco, não um \"if\" no código que poderia falhar.",
      },
      {
        titulo: "Lembretes que não saem em dobro",
        problema:
          "O envio de lembretes por WhatsApp roda em segundo plano e pode rodar em mais de um processo; dois processos poderiam pegar o mesmo lembrete e avisar o paciente duas vezes.",
        solucao:
          "Cada processo reserva um lote com FOR UPDATE SKIP LOCKED, que ignora o que outro já travou, e fica com uma concessão de 10 minutos. Há até 5 tentativas, com intervalo crescente, e o envio só acontece se o lembrete ainda for válido.",
        resultado: "Se um processo cair no meio, a concessão expira e outro assume o lembrete.",
      },
      {
        titulo: "Várias clínicas no mesmo banco",
        problema: "Em um sistema usado por mais de uma clínica, os dados de uma nunca podem aparecer para outra.",
        solucao:
          "Todas as tabelas guardam o id da clínica, e toda consulta filtra por ele, inclusive as checagens de paciente e de profissional. O banco também tem chaves únicas por (clínica, id).",
      },
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
