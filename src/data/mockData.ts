export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  slots: number;
  enrolled: number;
  active: boolean;
}

export interface Enrollment {
  id: string;
  name: string;
  contact: string;
  courseId: string;
  specialNeeds?: string;
  date: string;
}

export const initialCourses: Course[] = [
  {
    id: "1",
    title: "Informática Básica Adaptada",
    description: "Aprenda a usar computadores com tecnologias assistivas. Teclados adaptados, leitores de tela e muito mais.",
    duration: "3 meses",
    slots: 20,
    enrolled: 14,
    active: true,
  },
  {
    id: "2",
    title: "Artesanato Inclusivo",
    description: "Técnicas de artesanato adaptadas para pessoas com diferentes habilidades motoras.",
    duration: "2 meses",
    slots: 15,
    enrolled: 10,
    active: true,
  },
  {
    id: "3",
    title: "Libras para Iniciantes",
    description: "Curso introdutório de Língua Brasileira de Sinais para comunicação inclusiva.",
    duration: "4 meses",
    slots: 25,
    enrolled: 22,
    active: true,
  },
  {
    id: "4",
    title: "Culinária Adaptada",
    description: "Receitas e técnicas culinárias com utensílios adaptados e acessibilidade total na cozinha.",
    duration: "2 meses",
    slots: 12,
    enrolled: 8,
    active: true,
  },
];

export const initialEnrollments: Enrollment[] = [
  { id: "1", name: "Maria Silva", contact: "maria@email.com", courseId: "1", specialNeeds: "Cadeirante", date: "2026-03-15" },
  { id: "2", name: "João Santos", contact: "joao@email.com", courseId: "2", date: "2026-03-18" },
  { id: "3", name: "Ana Oliveira", contact: "ana@email.com", courseId: "3", specialNeeds: "Baixa visão", date: "2026-03-20" },
  { id: "4", name: "Pedro Costa", contact: "pedro@email.com", courseId: "1", date: "2026-03-22" },
  { id: "5", name: "Luísa Ferreira", contact: "luisa@email.com", courseId: "4", specialNeeds: "Prótese no braço direito", date: "2026-03-25" },
];

export const testimonials = [
  {
    name: "Maria Silva",
    text: "Os cursos da Mãos que Ensinam mudaram minha vida! Aprendi a usar o computador e hoje consigo trabalhar de casa.",
    course: "Informática Básica",
  },
  {
    name: "Carlos Mendes",
    text: "A equipe é incrível e as aulas são totalmente adaptadas às minhas necessidades. Recomendo a todos!",
    course: "Artesanato Inclusivo",
  },
  {
    name: "Patrícia Lima",
    text: "Finalmente encontrei um lugar onde me sinto acolhida e capaz. A acessibilidade aqui é real.",
    course: "Libras para Iniciantes",
  },
];
