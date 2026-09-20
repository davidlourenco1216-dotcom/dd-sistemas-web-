"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Rocket,
  ShoppingBag,
  Smartphone,
  Search,
  Gauge,
  MessageCircle,
  FileCheck,
  CheckCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";

const webSolutions = [
  {
    id: "institucional",
    badge: "Autoridade & Marca",
    title: "Sites Institucionais Corporativos",
    subtitle: "Para indústrias, empresas e prestadores de serviço",
    description:
      "Apresente sua empresa com máxima credibilidade. Um site profissional, seguro e institucional que transmite autoridade para fechar negócios de alto valor.",
    features: [
      "Páginas institucionais completas (Sobre, Serviços, Diferenciais e Contato)",
      "Design exclusivo alinhado à identidade visual da sua marca",
      "Integração com WhatsApp, e-mail comercial e redes sociais",
      "Certificado de segurança SSL gratuito e domínio próprio",
      "Pronto para compartilhar em propostas comerciais e cartões digitais",
    ],
    icon: Globe,
    accent: "from-blue-600 to-brand-cyan",
  },
  {
    id: "landing-page",
    badge: "Alta Conversão",
    title: "Landing Pages para Campanhas e Vendas",
    subtitle: "Focadas em anúncios no Google Ads e Meta Ads",
    description:
      "Páginas estratégicas e ultra velozes projetadas com copywriting persuasivo para converter cliques de campanhas pagas em leads e conversas no WhatsApp.",
    features: [
      "Estrutura orientada 100% para conversão de vendas",
      "Tempo de carregamento ultrarrápido (menos de 1 segundo)",
      "Botões estratégicos de chamada para ação (CTAs) em pontos-chave",
      "Integração com Pixel do Facebook, Google Analytics e tags de conversão",
      "Ideal para lançamentos de produtos, serviços e ofertas especiais",
    ],
    icon: Rocket,
    accent: "from-brand-cyan to-cyan-300",
    isFeatured: true,
  },
  {
    id: "catalogo",
    badge: "Vendas Diretas",
    title: "Catálogos Digitais de Produtos e Serviços",
    subtitle: "Para comércios, distribuidores e salões",
    description:
      "Mostre seus produtos, preços e portfólio de forma interativa, visual e sem complicação. O cliente escolhe os itens e envia o pedido direto para seu WhatsApp.",
    features: [
      "Organização de produtos por categorias e fotos em alta definição",
      "Simulador de pedidos que cai diretamente no WhatsApp da loja",
      "Sem cobrança de porcentagens ou taxas por vendas realizadas",
      "Fácil atualização de preços e novos produtos",
      "Perfeito para açaíterias, sorveterias, pet shops, pizzarias e lojas",
    ],
    icon: ShoppingBag,
    accent: "from-brand-blue to-blue-500",
  },
];

const webDifferentials = [
  {
    title: "Design Responsivo e Moderno",
    description:
      "Adaptado perfeitamente para telemóveis, tablets e computadores, garantindo navegação impecável em qualquer ecrã.",
    icon: Smartphone,
  },
  {
    title: "Otimização para o Google (SEO Nativo)",
    description:
      "Código semântico e estruturado para busca local, ajudando novos clientes a encontrarem sua empresa no topo das pesquisas.",
    icon: Search,
  },
  {
    title: "Alta Velocidade de Carregamento",
    description:
      "Desenvolvido com tecnologia de ponta (Next.js) para notas máximas no Google PageSpeed e carregamento instantâneo.",
    icon: Gauge,
  },
  {
    title: "Botões de Contacto Rápido",
    description:
      "Integração nativa com WhatsApp e Instagram para que o visitante tire dúvidas e peça orçamentos em 1 clique.",
    icon: MessageCircle,
  },
  {
    title: "Formulários de Orçamento Otimizados",
    description:
      "Campos inteligentes e validação em tempo real para captar contatos qualificados sem burocracia ou perda de leads.",
    icon: FileCheck,
  },
];

export default function WebDevelopment() {
  const whatsappUrl = buildWhatsAppUrl(
    "Olá, DD Sistemas! Gostaria de solicitar um orçamento para criação de site institucional ou landing page para minha empresa."
  );

  return (
    <section
      id="sites"
      className="relative py-24 sm:py-32 bg-navy-950/80 border-t border-b border-white/5 overflow-hidden"
    >
      {/* Luz ambiente de fundo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-brand-cyan/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-brand-blue/15 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/90 border border-brand-cyan/40 text-xs font-semibold text-brand-cyan uppercase tracking-wider mb-4 shadow-glow"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Presença Digital de Alta Performance</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Criação de Sites Institucionais e{" "}
            <span className="bg-gradient-to-r from-brand-cyan via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Landing Pages
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Marque presença no Google com um site moderno, rápido e focado em atrair novos clientes
            para a sua empresa.
          </motion.p>
        </div>

        {/* 3 Tipos de Soluções Web Oferecidas (Cards Visuais) */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {webSolutions.map((sol, index) => {
            const Icon = sol.icon;
            const isFeatured = sol.isFeatured;

            return (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`group relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? "glass-card-featured border-brand-cyan/60 shadow-2xl shadow-brand-cyan/20 lg:-translate-y-3 ring-1 ring-brand-cyan/40"
                    : "glass-card border-white/10 hover:border-brand-cyan/40 hover:-translate-y-2"
                }`}
              >
                {/* Badge Superior */}
                <div className="absolute -top-3.5 left-8">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      isFeatured
                        ? "bg-gradient-to-r from-brand-cyan to-cyan-300 text-navy-950 shadow-glow"
                        : "bg-navy-800 text-brand-cyan border border-brand-cyan/30"
                    }`}
                  >
                    <Zap className="w-3 h-3" />
                    <span>{sol.badge}</span>
                  </span>
                </div>

                <div>
                  {/* Ícone */}
                  <div className="w-14 h-14 rounded-2xl bg-brand-cyan/15 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan mt-2 mb-6 group-hover:scale-105 transition-transform shadow-glow">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight">{sol.title}</h3>
                  <p className="mt-1 text-xs font-semibold text-brand-cyan">{sol.subtitle}</p>

                  <p className="mt-3.5 text-sm text-slate-300 leading-relaxed">{sol.description}</p>

                  <div className="my-6 border-t border-white/10" />

                  {/* Checklist de Recursos */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      O que está incluído:
                    </span>
                    <ul className="space-y-2.5">
                      {sol.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                          <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA do Card */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                      isFeatured
                        ? "bg-brand-whatsapp hover:bg-brand-whatsappHover text-white shadow-glow-wa hover:scale-[1.02]"
                        : "bg-navy-800 hover:bg-navy-700 text-white border border-white/10 hover:border-brand-cyan/40"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Quero Este Modelo no WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 5 Tópicos de Diferenciais do Serviço (Grelha Moderna) */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Por que os sites desenvolvidos pela DD Sistemas geram mais resultados?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Não entregamos apenas código. Desenvolvemos ferramentas de vendas com tecnologia de ponta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {webDifferentials.map((diff, dIdx) => {
              const DiffIcon = diff.icon;
              return (
                <motion.div
                  key={dIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: dIdx * 0.1 }}
                  className="p-5 rounded-2xl bg-navy-900/90 border border-white/10 hover:border-brand-cyan/40 transition-all flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand-cyan/15 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan mb-3">
                      <DiffIcon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white leading-tight">{diff.title}</h4>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">{diff.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Banner de Chamada para Ação Principal (CTA) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-navy-850 via-navy-800 to-navy-850 border border-brand-cyan/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left relative overflow-hidden"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-cyan uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Projetos 100% Personalizados</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Pronto para colocar sua empresa no topo do Google?
            </h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              Fale diretamente com o desenvolvedor, tire suas dúvidas e receba um orçamento sob medida
              com prazo de entrega rápido e suporte dedicado.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-brand-whatsapp hover:bg-brand-whatsappHover shadow-glow-wa transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Solicitar Orçamento para o Meu Site</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
