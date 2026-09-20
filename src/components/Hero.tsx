"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Building2,
  ShoppingBag,
  Globe2,
  Package,
  Bell,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"condo" | "delivery" | "corp">("condo");

  const defaultHeroWhatsApp = buildWhatsAppUrl(
    "Olá, DD Sistemas! Gostaria de conversar com um especialista sobre soluções de software para meu negócio."
  );

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-navy-900 flex flex-col justify-center"
    >
      {/* Background Radial Glow & Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-brand-cyan/20 via-brand-blue/20 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Content: Headline & Subtitle */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-800/80 border border-brand-cyan/30 text-xs sm:text-sm text-slate-300 backdrop-blur-md mb-6 shadow-glow"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-cyan animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="font-medium text-white">Tecnologia Sob Medida & Alta Performance</span>
          </motion.div>

          {/* Título de Alto Impacto */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]"
          >
            Soluções inteligentes em software para{" "}
            <span className="bg-gradient-to-r from-brand-cyan via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              transformar e automatizar
            </span>{" "}
            o seu negócio.
          </motion.h1>

          {/* Subtítulo com Destaques */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
          >
            Desenvolvemos{" "}
            <strong className="text-white font-semibold">Sites Institucionais</strong> modernos,{" "}
            <strong className="text-brand-cyan font-semibold">ERPs para Condomínios</strong> e{" "}
            <strong className="text-white font-semibold">Sistemas sob medida</strong> para pequenos
            empreendedores e empresas acelerarem a produtividade.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Botão WhatsApp */}
            <a
              href={defaultHeroWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-brand-whatsapp hover:bg-brand-whatsappHover shadow-glow-wa transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
              </span>
              <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>Falar no WhatsApp</span>
            </a>

            {/* Botão Ver Soluções */}
            <a
              href="#solucoes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-slate-200 bg-navy-800/80 hover:bg-navy-700/80 hover:text-white border border-white/10 hover:border-brand-cyan/40 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Ver Soluções</span>
              <ArrowRight className="w-4 h-4 text-brand-cyan transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Micro Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
              <span>Implantação rápida e sem atrito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
              <span>Suporte humano via WhatsApp</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-cyan" />
              <span>100% em Nuvem & Conformidade LGPD</span>
            </div>
          </motion.div>
        </div>

        {/* WOW Showcase: Painel Interativo SaaS com Abas & Badges Flutuantes */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 max-w-5xl mx-auto relative"
        >
          {/* Card Flutuante 1 (Esquerda) */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="hidden lg:flex items-center gap-3.5 absolute -top-6 -left-10 z-20 px-4 py-3 rounded-2xl bg-navy-800/90 border border-brand-cyan/40 shadow-glow backdrop-blur-xl"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                <span>Encomenda Notificada</span>
                <span className="w-2 h-2 rounded-full bg-brand-whatsapp animate-pulse" />
              </div>
              <p className="text-[11px] text-slate-400">Morador Apto 402 avisado no WhatsApp</p>
            </div>
          </motion.div>

          {/* Card Flutuante 2 (Direita) */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
            className="hidden lg:flex items-center gap-3.5 absolute -bottom-6 -right-10 z-20 px-4 py-3 rounded-2xl bg-navy-800/90 border border-brand-whatsapp/40 shadow-glow-wa backdrop-blur-xl"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-whatsapp/20 flex items-center justify-center text-brand-whatsapp">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">+3x Velocidade no Atendimento</div>
              <p className="text-[11px] text-slate-400">Cardápio digital & agendamento 24h</p>
            </div>
          </motion.div>

          {/* Moldura da Interface Principal (Mockup SaaS) */}
          <div className="rounded-2xl border border-white/10 bg-navy-950/70 shadow-2xl backdrop-blur-2xl overflow-hidden">
            {/* Header da Janela com Controles & Abas */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-3.5 bg-navy-900/90 border-b border-white/10">
              {/* Pontinhos do Mac / Window */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs text-slate-400 font-mono hidden sm:inline">
                  dd-sistemas-platform.v2
                </span>
              </div>

              {/* Seletor de Abas Interativo */}
              <div className="flex items-center gap-1 bg-navy-950/60 p-1 rounded-xl border border-white/5 w-full sm:w-auto overflow-x-auto">
                <button
                  onClick={() => setActiveTab("condo")}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTab === "condo"
                      ? "bg-brand-blue text-white shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>ERP Condomínio</span>
                </button>
                <button
                  onClick={() => setActiveTab("delivery")}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTab === "delivery"
                      ? "bg-brand-blue text-white shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>PDV & Negócios</span>
                </button>
                <button
                  onClick={() => setActiveTab("corp")}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTab === "corp"
                      ? "bg-brand-blue text-white shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Globe2 className="w-3.5 h-3.5" />
                  <span>Sites & SEO</span>
                </button>
              </div>
            </div>

            {/* Corpo da Demonstração Conforme a Aba Selecionada */}
            <div className="p-5 sm:p-7 bg-gradient-to-b from-navy-900/60 to-navy-950/80 min-h-[300px]">
              {activeTab === "condo" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in duration-300">
                  {/* Bloco 1: Encomendas & Avisos */}
                  <div className="p-4 rounded-xl bg-navy-900/80 border border-brand-cyan/30 shadow-glow flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                        <Bell className="w-3.5 h-3.5 text-brand-cyan" />
                        ERP Encomendas & Avisos
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-cyan/20 text-brand-cyan font-bold">
                        WhatsApp Ativo
                      </span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="p-2 rounded-lg bg-navy-800/80 flex items-center justify-between">
                        <span className="text-slate-200">Apto 304 • Encomenda Mercado Livre</span>
                        <span className="text-emerald-400 font-medium">Notificado ✓</span>
                      </div>
                      <div className="p-2 rounded-lg bg-navy-800/80 flex items-center justify-between">
                        <span className="text-slate-200">Mural • Aviso Manutenção Preventiva</span>
                        <span className="text-brand-cyan font-medium">Disparado</span>
                      </div>
                    </div>
                    <div className="mt-3 text-[11px] text-slate-400">
                      Notificações instantâneas no WhatsApp
                    </div>
                  </div>

                  {/* Bloco 2: App DD Estoque */}
                  <div className="p-4 rounded-xl bg-navy-900/80 border border-white/10 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                        <Package className="w-3.5 h-3.5 text-cyan-300" />
                        App DD Estoque
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold">
                        Almoxarifado
                      </span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="p-2 rounded-lg bg-navy-800/80 flex items-center justify-between">
                        <span className="text-slate-200">Lâmpadas LED 12W</span>
                        <span className="text-amber-400 font-medium">Estoque Mínimo (5 un)</span>
                      </div>
                      <div className="p-2 rounded-lg bg-navy-800/80 flex items-center justify-between">
                        <span className="text-slate-200">Desinfetante Hospitalar</span>
                        <span className="text-emerald-400 font-medium">Abastecido (18 L)</span>
                      </div>
                    </div>
                    <div className="mt-3 text-[11px] text-slate-400">
                      Entrada e saída com controle de consumo
                    </div>
                  </div>

                  {/* Bloco 3: App ManutenPro */}
                  <div className="p-4 rounded-xl bg-navy-900/80 border border-white/10 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-brand-cyan" />
                        App ManutenPro
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-semibold">
                        O.S. & Preventivas
                      </span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="p-2 rounded-lg bg-navy-800/80 flex items-center justify-between">
                        <span className="text-slate-200">Bomba D&apos;água 02</span>
                        <span className="text-emerald-400 font-medium">Preventiva OK ✓</span>
                      </div>
                      <div className="p-2 rounded-lg bg-navy-800/80 flex items-center justify-between">
                        <span className="text-slate-200">Elevador Social Bloco B</span>
                        <span className="text-brand-cyan font-medium">O.S. com Foto</span>
                      </div>
                    </div>
                    <div className="mt-3 text-[11px] text-slate-400">
                      Histórico técnico e cronograma em dia
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "delivery" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in duration-300">
                  <div className="p-4 rounded-xl bg-navy-900/80 border border-white/5">
                    <span className="text-xs font-semibold text-slate-300">Cardápio Virtual</span>
                    <div className="text-2xl font-bold text-white mt-2">R$ 3.840,00</div>
                    <p className="text-xs text-slate-400">Faturamento direto via WhatsApp hoje</p>
                    <div className="mt-4 text-xs text-emerald-400">0% de taxas por transação</div>
                  </div>
                  <div className="p-4 rounded-xl bg-navy-900/80 border border-brand-cyan/30">
                    <span className="text-xs font-semibold text-white">Agendamentos Online</span>
                    <div className="text-2xl font-bold text-brand-cyan mt-2">38 Clientes</div>
                    <p className="text-xs text-slate-400">Salões & Pet Shops com agenda cheia</p>
                    <div className="mt-4 text-xs text-slate-300">Lembretes automáticos por SMS/WhatsApp</div>
                  </div>
                  <div className="p-4 rounded-xl bg-navy-900/80 border border-white/5">
                    <span className="text-xs font-semibold text-slate-300">Controle de Estoque</span>
                    <div className="text-2xl font-bold text-emerald-400 mt-2">100% Alinhado</div>
                    <p className="text-xs text-slate-400">Alerta de reposição antes do produto faltar</p>
                    <div className="mt-4 text-xs text-slate-400">Açaí, embalagens e bebidas sob controle</div>
                  </div>
                </div>
              )}

              {activeTab === "corp" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in duration-300">
                  <div className="p-4 rounded-xl bg-navy-900/80 border border-white/5">
                    <span className="text-xs font-semibold text-slate-300">Google Core Web Vitals</span>
                    <div className="text-3xl font-extrabold text-emerald-400 mt-2">Score 100</div>
                    <p className="text-xs text-slate-400">Velocidade extrema e pontuação máxima no PageSpeed</p>
                    <div className="mt-4 text-xs text-brand-cyan">SEO Técnico configurado</div>
                  </div>
                  <div className="p-4 rounded-xl bg-navy-900/80 border border-brand-cyan/30">
                    <span className="text-xs font-semibold text-white">Conversão de Leads B2B</span>
                    <div className="text-2xl font-bold text-brand-cyan mt-2">+240% Contatos</div>
                    <p className="text-xs text-slate-400">Arquitetura orientada para vendas e credibilidade</p>
                    <div className="mt-4 text-xs text-slate-300">Formulários com integração direta</div>
                  </div>
                  <div className="p-4 rounded-xl bg-navy-900/80 border border-white/5">
                    <span className="text-xs font-semibold text-slate-300">Software Sob Medida</span>
                    <div className="text-2xl font-bold text-white mt-2">100% Custom</div>
                    <p className="text-xs text-slate-400">Painéis de controle, dashboards e automação interna</p>
                    <div className="mt-4 text-xs text-emerald-400">Pronto para escalar</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
