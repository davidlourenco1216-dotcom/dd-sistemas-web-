"use client";

import React from "react";
import { Terminal, MessageCircle, Mail, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";
import {
  NAV_ITEMS,
  SOLUTIONS,
  WHATSAPP_DISPLAY,
  COMPANY_EMAIL,
  COPYRIGHT_TEXT,
  WHATSAPP_NUMBER,
} from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/utils";

interface FooterProps {
  onOpenLegal: (type: "privacidade" | "termos") => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  const defaultWhatsAppUrl = buildWhatsAppUrl(
    "Olá, DD Sistemas! Gostaria de mais informações sobre suas soluções de software."
  );

  return (
    <footer className="relative bg-navy-950 border-t border-white/10 text-slate-400 text-sm overflow-hidden">
      {/* Background glow sutil */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-brand-cyan/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Coluna 1 & 2: Identidade da Marca & Missão */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#inicio" className="flex items-center gap-2.5 inline-block group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan p-[1px] flex items-center justify-center shadow-glow">
                <div className="w-full h-full bg-navy-900 rounded-[11px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-brand-cyan" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                DD{" "}
                <span className="bg-gradient-to-r from-brand-cyan to-blue-400 bg-clip-text text-transparent">
                  Sistemas
                </span>
              </span>
            </a>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Empresa brasileira de tecnologia focada em criar softwares inteligentes, ERPs para
              condomínios e plataformas sob medida que reduzem custos e aumentam as vendas.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-navy-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-whatsapp hover:border-brand-whatsapp transition-colors"
                aria-label="Abrir WhatsApp da DD Sistemas"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="w-10 h-10 rounded-xl bg-navy-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-brand-blue hover:border-brand-cyan transition-colors"
                aria-label="Enviar e-mail para DD Sistemas"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Coluna 3: Navegação Rápida */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-slate-300 hover:text-brand-cyan transition-colors flex items-center gap-1 group text-xs sm:text-sm"
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Soluções */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Soluções
            </h4>
            <ul className="space-y-2.5">
              {SOLUTIONS.map((sol) => (
                <li key={sol.id}>
                  <a
                    href="#solucoes"
                    className="text-slate-300 hover:text-brand-cyan transition-colors text-xs sm:text-sm block"
                  >
                    {sol.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 5: Contato & LGPD */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Atendimento & Legal
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-center gap-2 text-slate-300">
                <MessageCircle className="w-4 h-4 text-brand-whatsapp shrink-0" />
                <a
                  href={defaultWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-whatsapp transition-colors"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="hover:text-brand-cyan transition-colors break-all"
                >
                  {COMPANY_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Brasil • Atendimento Nacional</span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-white/5 space-y-2">
              <button
                type="button"
                onClick={() => onOpenLegal("privacidade")}
                className="text-xs text-slate-400 hover:text-brand-cyan flex items-center gap-1.5 transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Política de Privacidade & LGPD</span>
              </button>
              <button
                type="button"
                onClick={() => onOpenLegal("termos")}
                className="text-xs text-slate-400 hover:text-brand-cyan flex items-center gap-1.5 transition-colors"
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>Termos de Uso</span>
              </button>
            </div>
          </div>
        </div>

        {/* Linha Final de Copyright */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{COPYRIGHT_TEXT}</p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegal("privacidade")}
              className="hover:text-slate-200 transition-colors"
            >
              Privacidade
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal("termos")}
              className="hover:text-slate-200 transition-colors"
            >
              Termos
            </button>
            <span>•</span>
            <span className="text-brand-cyan font-medium">Design de Alta Performance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
