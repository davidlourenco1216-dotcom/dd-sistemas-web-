import {
  NavItem,
  SolutionItem,
  DifferentialItem,
  TestimonialItem,
  MetricItem,
} from "@/types";

// ==========================================
// CONFIGURAÇÃO GERAL DA EMPRESA
// ==========================================
// IMPORTANTE: Altere o número de WhatsApp abaixo para o número real da DD Sistemas (DDI + DDD + Número)
export const WHATSAPP_NUMBER = "5585999999999";
export const WHATSAPP_DISPLAY = "(85) 99999-9999";
export const COMPANY_EMAIL = "contato@ddsistemas.com.br";
export const COMPANY_NAME = "DD Sistemas";
export const COPYRIGHT_TEXT = "© 2026 DD Sistemas. Todos os direitos reservados.";

// Itens de Navegação
export const NAV_ITEMS: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

// Seção de Soluções
export const SOLUTIONS: SolutionItem[] = [
  {
    id: "pequenos-empreendedores",
    title: "Pequenos Empreendedores & Comércio",
    targetAudience: "Açaíterias, Sorveterias, Pet Shops, Pizzarias, Salões e Lojas",
    description:
      "Automatize suas vendas diárias, atenda pelo WhatsApp com rapidez e controle seu caixa sem complicações ou mensalidades abusivas.",
    features: [
      "Cardápio e catálogo digital interativo via WhatsApp",
      "Agendamento online inteligente para serviços e salões",
      "Controle de caixa, fluxo diário e sangria simplificado",
      "Gestão de estoque com alertas automáticos de reposição",
      "Sem cobrança de porcentagem por venda realizada",
    ],
    isFeatured: false,
    iconName: "Store",
    whatsappMessage:
      "Olá, DD Sistemas! Gostaria de conhecer as soluções para Pequenos Empreendedores (cardápio digital, agendamento e controle de caixa).",
  },
  {
    id: "condominios-residenciais",
    badge: "Solução Mais Procurada",
    title: "Condomínios Residenciais",
    targetAudience: "Síndicos, Administradoras, Portarias e Moradores",
    description:
      "O ERP mais completo e intuitivo para modernizar a gestão do seu condomínio, garantir segurança na portaria e encantar os moradores.",
    features: [
      "Controle ágil de acesso de visitantes, veículos e prestadores",
      "Gestão de encomendas com notificação push instantânea",
      "Reserva online de áreas comuns (churrasqueira, salão, academia)",
      "Mural de avisos digitais com confirmação de leitura",
      "Centralização de atas, documentos e comunicados em nuvem",
      "App leve para moradores e painel ultra veloz para a portaria",
    ],
    isFeatured: true,
    iconName: "Building2",
    whatsappMessage:
      "Olá, DD Sistemas! Gostaria de agendar uma demonstração do ERP para Condomínios Residenciais.",
  },
  {
    id: "empresas-negocios",
    title: "Empresas & Negócios Corporativos",
    targetAudience: "Indústrias, Prestadores de Serviço e Startups",
    description:
      "Presença digital de alto padrão com sites institucionais ultra velozes e sistemas web personalizados para automatizar processos internos.",
    features: [
      "Sites institucionais modernos de altíssima conversão",
      "Otimização avançada para o Google (SEO Técnico e Core Web Vitals)",
      "Sistemas sob medida e painéis administrativos privativos",
      "Integração com APIs, meios de pagamento e ERPs legados",
      "Arquitetura escalável com foco em segurança e LGPD",
    ],
    isFeatured: false,
    iconName: "Briefcase",
    whatsappMessage:
      "Olá, DD Sistemas! Quero solicitar uma proposta para site institucional ou desenvolvimento de software sob medida para minha empresa.",
  },
];

// Diferenciais da DD Sistemas
export const DIFFERENTIALS: DifferentialItem[] = [
  {
    id: "simplicidade",
    title: "Simplicidade de Uso",
    highlight: "Zero curva de aprendizado",
    description:
      "Telas limpas, intuitivas e diretas ao ponto. Seus colaboradores, porteiros ou moradores dominam a plataforma em poucos minutos, sem manuais complexos.",
    iconName: "Sparkles",
  },
  {
    id: "suporte",
    title: "Suporte Próximo e Humanizado",
    highlight: "Atendimento direto via WhatsApp",
    description:
      "Chega de abrir chamados que demoram dias. Nosso time técnico e de produto acompanha sua operação de perto, com agilidade e foco na solução.",
    iconName: "Headphones",
  },
  {
    id: "sob-medida",
    title: "Tecnologia Sob Medida",
    highlight: "Sem gambiarras ou softwares engessados",
    description:
      "Desenvolvemos e adaptamos as funcionalidades para a realidade exata da sua empresa ou condomínio. O software se molda ao seu negócio, não o contrário.",
    iconName: "Cpu",
  },
];

// Métricas de Prova Social
export const METRICS: MetricItem[] = [
  {
    value: "+50.000",
    label: "Acessos e Pedidos",
    detail: "Processados com estabilidade e velocidade em nossas plataformas.",
  },
  {
    value: "99.8%",
    label: "Satisfação dos Clientes",
    detail: "Avaliação positiva em suporte, usabilidade e entrega de valor.",
  },
  {
    value: "< 15 min",
    label: "Tempo Médio de Atendimento",
    detail: "Suporte técnico dedicado e focado na continuidade do seu negócio.",
  },
  {
    value: "100%",
    label: "Conformidade LGPD",
    detail: "Criptografia de ponta a ponta e respeito à privacidade dos dados.",
  },
];

// Depoimentos Reais / Personas
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "Carlos Eduardo Mendonça",
    role: "Síndico Profissional",
    companyOrCondo: "Residencial Jardins de Alah (168 unidades)",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    tag: "Condomínio Residencial",
    content:
      "O ERP da DD Sistemas revolucionou nossa portaria. Antes as encomendas viravam um caos e os moradores reclamavam de extravios. Hoje, a notificação cai no WhatsApp do morador no mesmo segundo. A transparência na reserva das áreas comuns eliminou qualquer atrito.",
  },
  {
    id: "2",
    name: "Juliana Albuquerque",
    role: "Proprietária",
    companyOrCondo: "Gelato & Açaí Tropical",
    avatarUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    tag: "Pequeno Empreendedor",
    content:
      "Eu gastava horas respondendo 'qual é o cardápio?' no WhatsApp. Com o catálogo interativo da DD Sistemas, o cliente monta o pedido completo com complementos e o fechamento do caixa diário ficou perfeito. O atendimento ficou 3x mais rápido nos finais de semana!",
  },
  {
    id: "3",
    name: "Marcos Vinícius Prado",
    role: "Diretor Comercial",
    companyOrCondo: "Vanguard Logística & Soluções",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    tag: "Empresa & Negócios",
    content:
      "Precisávamos de um site institucional de alto nível que passasse credibilidade para fechar contratos B2B. A DD Sistemas entregou um projeto ultra veloz, impecável no design e que já nos gerou novos leads qualificados pelo Google na primeira semana.",
  },
];

// Segmentos para o formulário de contato
export const BUSINESS_SEGMENTS = [
  { id: "pequeno-negocio", label: "Pequeno Empreendedor (Açaí, Sorveteria, Pet Shop, Loja)" },
  { id: "condominio", label: "Condomínio Residencial (Síndico ou Administradora)" },
  { id: "empresa", label: "Empresa / Corporativo (Site ou Automação)" },
  { id: "sob-medida", label: "Projeto de Software Sob Medida / Outro" },
];
