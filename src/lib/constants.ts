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
export const WHATSAPP_NUMBER = "5585999999999";
export const WHATSAPP_DISPLAY = "(85) 99999-9999";
export const COMPANY_EMAIL = "contato@ddsistemas.com.br";
export const COMPANY_NAME = "DD Sistemas";
export const COPYRIGHT_TEXT = "© 2026 DD Sistemas. Todos os direitos reservados.";

// Itens de Navegação
export const NAV_ITEMS: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Condomínios 360°", href: "#condominios" },
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
    badge: "Ecossistema Completo",
    title: "Condomínios Residenciais",
    targetAudience: "Síndicos, Administradoras, Portarias e Moradores",
    description:
      "Suíte integrada de aplicativos: ERP de Portaria & Acessos, App DD Estoque (Almoxarifado) e App ManutenPro (Manutenções & O.S.).",
    features: [
      "ERP Central: Controle de acessos, encomendas e reservas online",
      "App DD Estoque: Almoxarifado, insumos e alerta de estoque mínimo",
      "App ManutenPro: Preventivas, cronograma de elevadores/bombas e O.S. com foto",
      "Mural de avisos digitais com confirmação de leitura pelo morador",
      "Centralização de atas, documentos e comunicados em nuvem",
      "Painel administrativo em tempo real para o síndico e conselho",
    ],
    isFeatured: true,
    iconName: "Building2",
    whatsappMessage:
      "Olá, DD Sistemas! Gostaria de uma demonstração completa do Ecossistema para Condomínios (ERP + DD Estoque + ManutenPro).",
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

// ECOSSISTEMA ESPECÍFICO DE CONDOMÍNIOS RESIDENCIAIS (ERP + DD Estoque + ManutenPro)
export const CONDO_ECOSYSTEM: CondoAppItem[] = [
  {
    id: "erp-condominio-core",
    isMainCore: true,
    badge: "Plataforma Central",
    name: "ERP DD Condomínios",
    category: "Gestão, Portaria & Moradores",
    description:
      "A espinha dorsal da gestão condominial. Centraliza segurança de portaria, encomendas no WhatsApp, reservas de áreas e comunicação com moradores.",
    features: [
      "Controle ágil de acesso de visitantes, veículos e prestadores",
      "Gestão de encomendas com notificação push instantânea no WhatsApp",
      "Reserva online de áreas comuns (churrasqueira, salão, academia)",
      "Mural de avisos digital com confirmação de leitura pelos moradores",
      "Armazenamento em nuvem de atas, convenções e prestação de contas",
      "App mobile intuitivo para moradores e painel veloz para porteiros",
    ],
    iconName: "Building2",
    whatsappMessage:
      "Olá, DD Sistemas! Gostaria de agendar uma demonstração do ERP DD Condomínios.",
  },
  {
    id: "dd-estoque",
    badge: "Aplicativo Especializado",
    name: "App DD Estoque",
    category: "Almoxarifado & Insumos",
    description:
      "Controle total dos suprimentos e materiais do condomínio. Acabe com sumiços, desperdícios e compras emergenciais com preços elevados.",
    features: [
      "Controle rigoroso de almoxarifado (materiais de limpeza, ferramentas, lâmpadas, elétricos)",
      "Registro de entrada e saída com identificação de quem retirou cada item",
      "Alerta automático de estoque mínimo para reposição antes do produto faltar",
      "Relatórios de consumo periódicos por área, bloco e centro de custo",
      "Histórico de compras e controle de validade de insumos",
    ],
    iconName: "Boxes",
    whatsappMessage:
      "Olá, DD Sistemas! Gostaria de conhecer e contratar o aplicativo DD Estoque para o almoxarifado do condomínio.",
  },
  {
    id: "manutenpro",
    badge: "Aplicativo Especializado",
    name: "App ManutenPro",
    category: "Manutenção & Infraestrutura",
    description:
      "Gestão inteligente de manutenções preventivas e corretivas de todos os equipamentos do condomínio, evitando paradas e prejuízos inesperados.",
    features: [
      "Cronograma automatizado de manutenções (elevadores, bombas, geradores, portões, piscinas)",
      "Abertura rápida de Ordens de Serviço (O.S.) com anexo de fotos direto pelo celular",
      "Histórico técnico completo de manutenções e peças substituídas",
      "Alertas de vencimento de contratos de manutenção e vistorias obrigatórias",
      "Relatórios de desempenho e conformidade para assembleias e auditorias",
    ],
    iconName: "Wrench",
    whatsappMessage:
      "Olá, DD Sistemas! Gostaria de conhecer e contratar o aplicativo ManutenPro para manutenção e O.S. do condomínio.",
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
      "A combinação do ERP com o DD Estoque e o ManutenPro mudou o patamar do nosso condomínio. A portaria não tem mais filas de encomendas, os insumos de limpeza são controlados na vírgula e as manutenções das bombas e geradores agora têm O.S. com foto. Os moradores elogiam e a prestação de contas ficou 100% transparente.",
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
  { id: "condominio-ecossistema", label: "Condomínio Residencial (ERP + DD Estoque + ManutenPro)" },
  { id: "dd-estoque-avulso", label: "App DD Estoque (Almoxarifado de Condomínio)" },
  { id: "manutenpro-avulso", label: "App ManutenPro (Manutenção Preventiva & O.S.)" },
  { id: "pequeno-negocio", label: "Pequeno Empreendedor (Açaí, Sorveteria, Pet Shop, Loja)" },
  { id: "empresa", label: "Empresa / Corporativo (Site ou Automação)" },
  { id: "sob-medida", label: "Projeto de Software Sob Medida / Outro" },
];
