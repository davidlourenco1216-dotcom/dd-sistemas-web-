"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Instagram,
  UserCheck,
  Code2,
  CheckCircle2,
  Sparkles,
  Terminal,
  ExternalLink,
} from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";
import { INSTAGRAM_URL } from "@/lib/constants";

export default function AboutFounder() {
  const [imageError, setImageError] = useState(false);

  const directWhatsAppUrl = buildWhatsAppUrl(
    "Olá, David! Li sua apresentação no site da DD Sistemas e gostaria de conversar diretamente com você sobre um projeto."
  );

  return (
    <section
      id="fundador"
      className="relative py-24 sm:py-32 bg-navy-950 overflow-hidden border-t border-b border-white/5"
    >
      {/* Glow de fundo */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-brand-blue/15 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-brand-cyan/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Coluna da Esquerda: Foto do Fundador com Borda Estilizada em Azul */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              {/* Moldura externa com gradiente e glow azul */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-brand-blue via-brand-cyan to-blue-400 opacity-70 blur-lg group-hover:opacity-100 transition duration-500 animate-pulse-subtle" />

              {/* Card da Foto */}
              <div className="relative rounded-3xl overflow-hidden bg-navy-900 border-2 border-brand-cyan/40 shadow-2xl">
                {!imageError ? (
                  // Imagem elegante de desenvolvedor com fallback
                  <div className="relative aspect-[4/5] w-full bg-gradient-to-b from-navy-800 to-navy-950 flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85"
                      alt="David Matos Lima - Fundador da DD Sistemas"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-center filter brightness-95 contrast-105 hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradiente escuro na base para legibilidade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
                  </div>
                ) : (
                  // Fallback estilizado caso a imagem externa não carregue
                  <div className="aspect-[4/5] w-full bg-gradient-to-br from-navy-850 via-navy-900 to-navy-950 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-24 h-24 rounded-3xl bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan mb-4 shadow-glow">
                      <Terminal className="w-12 h-12" />
                    </div>
                    <span className="text-xl font-bold text-white">David Matos Lima</span>
                    <span className="text-xs text-brand-cyan mt-1">
                      Fundador &amp; Desenvolvedor Principal
                    </span>
                  </div>
                )}

                {/* Badge Inferior sobre a foto */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-navy-900/90 border border-white/10 backdrop-blur-md shadow-lg flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">David Matos Lima</h4>
                    <p className="text-[11px] text-brand-cyan font-medium">
                      Fundador &amp; Desenvolvedor
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Disponível</span>
                  </div>
                </div>
              </div>

              {/* Mini Card Flutuante */}
              <div className="hidden sm:flex items-center gap-2.5 absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-navy-850 border border-brand-cyan/30 text-xs text-white shadow-glow backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>Contato direto com quem desenvolve</span>
              </div>
            </div>
          </motion.div>

          {/* Coluna da Direita: Texto de Apresentação e Botão de Ação */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Tag / Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-800/90 border border-brand-cyan/40 text-xs font-semibold text-brand-cyan uppercase tracking-wider mb-4 self-start shadow-glow">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sobre o Fundador</span>
            </div>

            {/* Subtítulo: Fundador & Desenvolvedor Principal */}
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-cyan mb-2 block">
              Fundador &amp; Desenvolvedor Principal
            </span>

            {/* Título: Tecnologia com atendimento humano e direto */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Tecnologia com{" "}
              <span className="bg-gradient-to-r from-brand-cyan via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                atendimento humano
              </span>{" "}
              e direto
            </h2>

            {/* Texto de Apresentação */}
            <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              <p>
                Olá, me chamo <strong>David Matos Lima</strong>. Criei a <strong>DD Sistemas</strong>{" "}
                com a missão de transformar o dia a dia de empresas, condomínios e pequenos
                empreendedores por meio de softwares práticos, seguros e eficientes.
              </p>
              <p>
                Acredito que uma boa solução tecnológica não precisa ser complicada: ela deve
                automatizar processos, economizar tempo e facilitar a sua gestão.
              </p>
              <p className="text-slate-200">
                Aqui na DD Sistemas, você não fala com robôs ou atendimentos impessoais — tem contato
                direto com quem desenvolve, entende o seu negócio e garante um suporte próximo e
                dedicado.
              </p>
            </div>

            {/* 2 Destaques com Ícones */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-navy-900/90 border border-white/10 hover:border-brand-cyan/40 transition-colors flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-brand-cyan/20 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Suporte Próximo e Sem Burocracia</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Atendimento ágil direto no WhatsApp</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-navy-900/90 border border-white/10 hover:border-brand-cyan/40 transition-colors flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-brand-blue/30 border border-brand-cyan/30 flex items-center justify-center text-cyan-300 shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Sistemas Sob Medida para o Seu Negócio</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Adaptado à sua rotina real</p>
                </div>
              </div>
            </div>

            {/* Botões de Ação e Redes Sociais */}
            <div className="mt-8 pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Botão Conversar via WhatsApp */}
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-whatsapp hover:bg-brand-whatsappHover shadow-glow-wa transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Conversar via WhatsApp</span>
              </a>

              {/* Botão Siga no Instagram */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 shadow-md hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Instagram className="w-5 h-5" />
                <span>Siga no Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
