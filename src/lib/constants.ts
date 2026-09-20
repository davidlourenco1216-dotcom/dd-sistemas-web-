import {
  NavItem,
  SolutionItem,
  CondoAppItem,
  DifferentialItem,
  TestimonialItem,
  MetricItem,
} from "@/types";

// ==========================================
// CONFIGURAÇÃO GERAL DA EMPRESA
// ==========================================
export const WHATSAPP_NUMBER = "5585992002559";
export const WHATSAPP_DISPLAY = "(85) 99200-2559";
export const INSTAGRAM_URL =
  "https://www.instagram.com/dd.sistemas1622?stkn=ZGRiNXYwaG1lNzFh";
export const INSTAGRAM_HANDLE = "@dd.sistemas1622";
export const COMPANY_EMAIL = "ddsistemas0312@gmail.com";
export const COMPANY_NAME = "DD Sistemas";
export const COPYRIGHT_TEXT = "© 2026 DD Sistemas. Todos os direitos reservados.";

// Itens de Navegação
export const NAV_ITEMS: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Apps Condomínio", href: "#condominios" },
  { label: "Criação de Sites", href: "#sites" },
  { label: "Sobre o Fundador", href: "#fundador" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

// Seção Geral de Soluções
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
    badge: "Soluções Especializadas",
    title: "Condomínios Residenciais",
    targetAudience: "Síndicos, Administradoras e Conselhos Condominiais",
    description:
      "Aplicativos específicos focados nas duas maiores dores da gestão predial: o App DD Estoque (almoxarifado) e o App DD ManutenPro (manutenções).",
    features: [
      "App DD Estoque: Almoxarifado, controle de insumos e alerta de estoque mínimo",
      "App DD ManutenPro: Preventivas, cronograma de elevadores/bombas e O.S. com foto",
      "Controle rigoroso de materiais de limpeza, ferramentas e lâmpadas",
      "Cronograma preventivo de equipamentos e infraestrutura predial",
      "Relatórios de consumo e históricos técnicos para prestação de contas",
      "Redução drástica de desperdícios e compras emergenciais caras",
    ],
    isFeatured: true,
    iconName: "Building2",
    whatsappMessage:
      "Olá, DD Sistemas! Gostaria de uma demonstração dos aplicativos para condomínios (DD Estoque e DD ManutenPro).",
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
      "Integração com APIs, meios de pagamento e sistemas legados",
      "Arquitetura escalável com foco em segurança e LGPD",
    ],
    isFeatured: false,
    iconName: "Briefcase",
    whatsappMessage:
      "Olá, DD Sistemas! Quero solicitar uma proposta para site institucional ou desenvolvimento de software sob medida para minha empresa.",
  },
];

// APLICATIVOS ESPECÍFICOS DE CONDOMÍNIOS RESIDENCIAIS (DD Estoque + DD ManutenPro)
export const CONDO_ECOSYSTEM: CondoAppItem[] = [
  {
    id: "dd-estoque",
    isMainCore: true,
    badge: "Almoxarifado & Insumos",
    name: "App DD Estoque",
    category: "Gestão de Materiais do Condomínio",
    description:
      "Focado no controle rigoroso de almoxarifado e insumos do condomínio. Acabe com o sumiço de materiais de limpeza, ferramentas, lâmpadas e suprimentos.",
    features: [
      "Controle de almoxarifado e insumos (materiais de limpeza, ferramentas, lâmpadas, elétricos)",
      "Controle de entrada e saída com registro do responsável pela retirada",
      "Alerta automático de estoque mínimo para reposição antes do insumo acabar",
      "Relatórios detalhados de consumo por área, bloco e centro de custo",
      "Histórico de compras e redução comprovada de desperdícios",
    ],
    iconName: "Boxes",
    whatsappMessage:
      "Olá, DD Sistemas! Gostaria de agendar uma demonstração do aplicativo DD Estoque para o almoxarifado do meu condomínio.",
  },
  {
    id: "manutenpro",
    isMainCore: false,
    badge: "Manutenção & Infraestrutura",
    name: "App DD ManutenPro",
    category: "Engenharia & Preventivas Prediais",
    description:
      "Focado na gestão de manutenções preventivas e corretivas de equipamentos e infraestrutura. Garanta a segurança do condomínio sem paradas inesperadas.",
    features: [
      "Cronograma de manutenções preventivas (elevadores, bombas, geradores, portões, piscinas)",
      "Abertura de Ordens de Serviço (O.S.) com anexo de fotos direto pelo celular",
      "Histórico técnico completo de manutenções realizadas e peças substituídas",
      "Alertas de vistorias obrigatórias e contratos de manutenção predial",
      "Relatórios técnicos de conformidade para assembleias e conselho fiscal",
    ],
    iconName: "Wrench",
    whatsappMessage:
      "Olá, DD Sistemas! Gostaria de agendar uma demonstração do aplicativo DD ManutenPro para manutenção e O.S. do meu condomínio.",
  },
];

// Diferenciais da DD Sistemas
export const DIFFERENTIALS: DifferentialItem[] = [
  {
    id: "simplicidade",
    title: "Simplicidade de Uso",
    highlight: "Zero curva de aprendizado",
    description:
      "Telas limpas, intuitivas e diretas ao ponto. Seus colaboradores, zeladores ou encarregados dominam a plataforma em poucos minutos, sem manuais complexos.",
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
    label: "Operações e Pedidos",
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
      "A implementação dos aplicativos DD Estoque e DD ManutenPro mudou o patamar do nosso condomínio. Os insumos de limpeza, lâmpadas e ferramentas são controlados na vírgula e as manutenções das bombas, elevadores e geradores agora têm O.S. com foto. A economia gerada foi imediata e a prestação de contas ficou 100% transparente.",
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
  { id: "criacao-sites", label: "Criação de Site Institucional ou Landing Page" },
  { id: "ambos-apps-condominio", label: "Condomínio Residencial (DD Estoque + DD ManutenPro)" },
  { id: "dd-estoque-avulso", label: "App DD Estoque (Almoxarifado & Insumos)" },
  { id: "manutenpro-avulso", label: "App DD ManutenPro (Manutenção Preventiva & O.S.)" },
  { id: "pequeno-negocio", label: "Pequeno Empreendedor (Cardápio Digital, PDV, Comércio)" },
  { id: "empresa-sistema", label: "Empresa / Corporativo (Software Sob Medida ou Automação)" },
];
