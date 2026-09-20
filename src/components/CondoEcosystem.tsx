"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Boxes,
  Wrench,
  CheckCircle,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Layers,
  Sparkles,
} from "lucide-react";
import { CONDO_ECOSYSTEM } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Boxes: <Boxes className="w-8 h-8 text-brand-cyan" />,
  Wrench: <Wrench className="w-8 h-8 text-brand-cyan" />,
};

export default function CondoEcosystem() {
  return (
    <section
      id="condominios"
      className="relative py-24 sm:py-32 bg-navy-900 border-t border-b border-white/5 overflow-hidden"
    >
      {/* Luz ambiente azulada */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-brand-blue/20 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-20 right-0 w-[450px] h-[450px] bg-brand-cyan/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/90 border border-brand-cyan/40 text-xs font-semibold text-brand-cyan uppercase tracking-wider mb-4 shadow-glow"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Aplicativos Especializados para Condomínios</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Controle de Insumos e Manutenção para{" "}
            <span className="bg-gradient-to-r from-brand-cyan via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Condomínios Residenciais
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Dois aplicativos objetivos e poderosos projetados para resolver as duas maiores dores
            da rotina predial: o almoxarifado de insumos com o <strong>DD Estoque</strong> e a gestão de
            manutenções preventivas com o <strong>ManutenPro</strong>.
          </motion.p>
        </div>

        {/* Grid dos 2 Cards em Destaque Especial (DD Estoque + ManutenPro) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {CONDO_ECOSYSTEM.map((app, index) => {
            const waLink = buildWhatsAppUrl(app.whatsappMessage);

            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 glass-card-featured border-brand-cyan/50 shadow-2xl shadow-brand-cyan/15 hover:border-brand-cyan hover:-translate-y-2"
              >
                {/* Badge Superior */}
                <div className="absolute -top-3.5 left-8">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-brand-cyan to-cyan-300 text-navy-950 shadow-glow">
                    <Sparkles className="w-3 h-3" />
                    <span>{app.badge}</span>
                  </span>
                </div>

                <div>
                  {/* Ícone & Categoria */}
                  <div className="flex items-center justify-between gap-4 mt-2 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-brand-cyan/20 border border-brand-cyan/40 shadow-glow flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      {iconMap[app.iconName]}
                    </div>

                    <span className="text-xs font-semibold text-slate-300 bg-navy-950/80 px-3.5 py-1.5 rounded-xl border border-white/10">
                      {app.category}
                    </span>
                  </div>

                  {/* Nome do Aplicativo */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {app.name}
                  </h3>

                  <p className="mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed">
                    {app.description}
                  </p>

                  <div className="my-6 border-t border-white/10" />

                  {/* Lista de Recursos Principais */}
                  <div className="space-y-3.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
                      Recursos e Benefícios:
                    </span>
                    <ul className="space-y-2.5">
                      {app.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                          <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Ações & Conversão */}
                <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm bg-brand-whatsapp hover:bg-brand-whatsappHover text-white shadow-glow-wa transition-all duration-300 hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Solicitar Demonstração do {app.name}</span>
                  </a>

                  <a
                    href="#contato"
                    className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-medium text-slate-400 hover:text-brand-cyan transition-colors py-1"
                  >
                    <span>Ou preencha nosso formulário de contato</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Faixa Inferior de Flexibilidade */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-navy-850 via-navy-800 to-navy-850 border border-brand-cyan/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-cyan/20 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Contratação Avulsa ou Combo Completo
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Você pode contratar o <strong>DD Estoque</strong> e o <strong>ManutenPro</strong> juntos
                ou apenas o aplicativo específico que seu condomínio mais necessita no momento.
              </p>
            </div>
          </div>

          <a
            href={buildWhatsAppUrl(
              "Olá, DD Sistemas! Gostaria de consultar valores para os aplicativos de condomínio (DD Estoque e ManutenPro)."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-whatsapp hover:bg-brand-whatsappHover shadow-glow-wa transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar Valores no WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
