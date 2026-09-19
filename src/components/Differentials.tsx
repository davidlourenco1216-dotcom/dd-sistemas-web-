"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Headphones,
  Cpu,
  CheckCircle2,
  Lock,
  Clock,
  ThumbsUp,
  BarChart3,
} from "lucide-react";
import { DIFFERENTIALS, METRICS } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-7 h-7 text-brand-cyan" />,
  Headphones: <Headphones className="w-7 h-7 text-brand-cyan" />,
  Cpu: <Cpu className="w-7 h-7 text-brand-cyan" />,
};

const metricIconMap: Record<number, React.ReactNode> = {
  0: <BarChart3 className="w-5 h-5 text-brand-cyan" />,
  1: <ThumbsUp className="w-5 h-5 text-brand-cyan" />,
  2: <Clock className="w-5 h-5 text-brand-cyan" />,
  3: <Lock className="w-5 h-5 text-brand-cyan" />,
};

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative py-24 sm:py-32 bg-navy-900 overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-brand-blue/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-800/90 border border-brand-cyan/30 text-xs font-semibold text-brand-cyan uppercase tracking-wider mb-4"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Por que escolher a DD Sistemas</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            O que nos torna o parceiro ideal de{" "}
            <span className="bg-gradient-to-r from-brand-cyan to-blue-400 bg-clip-text text-transparent">
              tecnologia
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Não vendemos apenas código ou sistemas genéricos. Entregamos soluções práticas que
            funcionam no mundo real, com apoio constante ao seu lado.
          </motion.p>
        </div>

        {/* 3 Pilares Principais */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {DIFFERENTIALS.map((diff, index) => (
            <motion.div
              key={diff.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative rounded-3xl p-8 bg-gradient-to-b from-navy-800/80 to-navy-900/90 border border-white/10 hover:border-brand-cyan/50 hover:shadow-glow transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-navy-950/80 border border-brand-cyan/30 flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 transition-transform">
                  {iconMap[diff.iconName]}
                </div>

                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-brand-cyan/15 text-brand-cyan mb-3">
                  {diff.highlight}
                </span>

                <h3 className="text-xl font-bold text-white tracking-tight">{diff.title}</h3>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed">{diff.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-brand-cyan font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Padrão de excelência DD Sistemas</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Faixa de Métricas e Números de Impacto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-navy-850 via-navy-800 to-navy-850 border border-brand-cyan/20 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {METRICS.map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  {metricIconMap[idx]}
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    {metric.label}
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  <span className="bg-gradient-to-r from-white via-slate-100 to-brand-cyan bg-clip-text text-transparent">
                    {metric.value}
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-400 leading-normal">{metric.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
