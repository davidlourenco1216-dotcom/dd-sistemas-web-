"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, MessageSquareHeart } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-24 sm:py-32 bg-navy-950/70 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-800/90 border border-brand-cyan/30 text-xs font-semibold text-brand-cyan uppercase tracking-wider mb-4"
          >
            <MessageSquareHeart className="w-3.5 h-3.5" />
            <span>Prova Social & Experiências Reais</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Quem usa a DD Sistemas,{" "}
            <span className="bg-gradient-to-r from-brand-cyan to-blue-400 bg-clip-text text-transparent">
              recomenda
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Veja como síndicos, pequenos comerciantes e diretores de empresas transformaram seus
            processos e ganharam tempo com nossas soluções.
          </motion.p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card rounded-3xl p-8 flex flex-col justify-between hover:border-brand-cyan/40 hover:-translate-y-1.5 transition-all duration-300 relative group"
            >
              <Quote className="w-10 h-10 text-brand-cyan/20 absolute top-6 right-6 transition-colors group-hover:text-brand-cyan/40" />

              <div>
                {/* Segment Tag & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-brand-blue/30 text-cyan-300 border border-brand-cyan/20">
                    {item.tag}
                  </span>

                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Depoimento em Aspas */}
                <p className="text-sm text-slate-200 leading-relaxed italic">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Autor */}
              <div className="mt-8 pt-5 border-t border-white/10 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-brand-blue/30 border border-brand-cyan/30 flex items-center justify-center font-bold text-brand-cyan">
                  {item.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">{item.name}</h4>
                  <p className="text-xs text-brand-cyan font-medium">{item.role}</p>
                  <p className="text-[11px] text-slate-400">{item.companyOrCondo}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
