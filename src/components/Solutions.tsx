"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Store,
  Building2,
  Briefcase,
  CheckCircle,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SOLUTIONS } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Store: <Store className="w-6 h-6" />,
  Building2: <Building2 className="w-7 h-7" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
};

export default function Solutions() {
  return (
    <section id="solucoes" className="relative py-24 sm:py-32 bg-navy-950/90 overflow-hidden">
      {/* Luz ambiente de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-800/90 border border-brand-cyan/30 text-xs font-semibold text-brand-cyan uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nossas Soluções Especializadas</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Software criado para resolver a{" "}
            <span className="bg-gradient-to-r from-brand-cyan to-blue-400 bg-clip-text text-transparent">
              dor real
            </span>{" "}
            da sua operação.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Seja para acelerar pedidos no balcão, gerenciar um condomínio com 300 famílias ou colocar
            sua empresa no topo do Google: temos a tecnologia certa para você.
          </motion.p>
        </div>

        {/* Grid de Cards de Soluções */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SOLUTIONS.map((solution, index) => {
            const isFeatured = solution.isFeatured;
            const waLink = buildWhatsAppUrl(solution.whatsappMessage);

            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`group relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? "glass-card-featured lg:-translate-y-4 shadow-2xl shadow-brand-cyan/15 ring-1 ring-brand-cyan/50"
                    : "glass-card hover:border-white/20 hover:-translate-y-2"
                }`}
              >
                {/* Destaque "Mais Procurado" no card central */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold text-navy-950 bg-gradient-to-r from-brand-cyan to-cyan-300 shadow-glow uppercase tracking-wider">
                      ★ {solution.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Ícone & Público-alvo */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
                        isFeatured
                          ? "bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 shadow-glow"
                          : "bg-navy-800 text-slate-300 border border-white/10"
                      }`}
                    >
                      {iconMap[solution.iconName] || <Building2 className="w-6 h-6" />}
                    </div>

                    <span className="text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-lg bg-navy-800/80 text-slate-400 border border-white/5">
                      {index === 0
                        ? "Varejo & Serviços"
                        : index === 1
                        ? "Gestão Residencial"
                        : "B2B & Corporativo"}
                    </span>
                  </div>

                  {/* Título & Público-alvo */}
                  <h3 className="text-2xl font-bold text-white tracking-tight">{solution.title}</h3>
                  <p className="mt-1.5 text-xs font-semibold text-brand-cyan">
                    {solution.targetAudience}
                  </p>

                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Divisória sutil */}
                  <div className="my-6 border-t border-white/10" />

                  {/* Checklist de Recursos */}
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      O que está incluso:
                    </span>
                    <ul className="space-y-2.5">
                      {solution.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                          <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Ações / Botões de Conversão */}
                <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                      isFeatured
                        ? "bg-brand-whatsapp hover:bg-brand-whatsappHover text-white shadow-glow-wa hover:scale-[1.02]"
                        : "bg-navy-800 hover:bg-navy-700 text-white border border-white/10 hover:border-brand-cyan/40"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Quero Esta Solução no WhatsApp</span>
                  </a>

                  <a
                    href="#contato"
                    className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-medium text-slate-400 hover:text-brand-cyan transition-colors py-1"
                  >
                    <span>Ou preencha o formulário detalhado</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
