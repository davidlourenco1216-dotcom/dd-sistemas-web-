"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  MessageSquare,
  MessageCircle,
  Instagram,
  Terminal,
} from "lucide-react";
import { NAV_ITEMS, COMPANY_NAME, INSTAGRAM_URL } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerWhatsAppUrl = buildWhatsAppUrl(
    "Olá, DD Sistemas! Vim pelo site e gostaria de conversar com um especialista."
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha o menu mobile com tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Bloqueia scroll do body quando menu mobile está aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-3.5 shadow-lg shadow-navy-950/40"
            : "bg-navy-900/40 backdrop-blur-sm py-5 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#inicio"
              className="group flex items-center gap-2.5 focus:outline-none"
              aria-label="DD Sistemas - Página Inicial"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue via-brand-cyan to-cyan-300 p-[1px] flex items-center justify-center shadow-glow transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-navy-900 rounded-[11px] flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-brand-cyan transition-transform duration-300 group-hover:rotate-6" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white flex items-center">
                  DD{" "}
                  <span className="ml-1.5 bg-gradient-to-r from-brand-cyan to-blue-400 bg-clip-text text-transparent">
                    Sistemas
                  </span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold -mt-1">
                  Software & Automação
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 bg-navy-800/40 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Ações Desktop: Redes Sociais + CTA */}
            <div className="hidden md:flex items-center gap-2.5">
              {/* Ícone Instagram */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-navy-800/80 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 border border-white/10 hover:border-transparent flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 shadow-sm hover:scale-105"
                aria-label="Siga a DD Sistemas no Instagram"
                title="Instagram da DD Sistemas"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* Ícone WhatsApp */}
              <a
                href={headerWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-navy-800/80 hover:bg-brand-whatsapp border border-white/10 hover:border-transparent flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 shadow-sm hover:scale-105"
                aria-label="Fale conosco via WhatsApp"
                title="WhatsApp da DD Sistemas"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              {/* Botão Solicitar Orçamento */}
              <a
                href="#contato"
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-brand-blue to-blue-600 hover:from-blue-600 hover:to-brand-cyan transition-all duration-300 shadow-md hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 ml-1"
              >
                <span>Solicitar Orçamento</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Hamburger Button Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-cyan"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Framer Motion) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-navy-950/80 backdrop-blur-lg md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-navy-900 border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                {/* Header do Drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-cyan/20 flex items-center justify-center border border-brand-cyan/30">
                      <Terminal className="w-4 h-4 text-brand-cyan" />
                    </div>
                    <span className="font-bold text-white text-lg">DD Sistemas</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    aria-label="Fechar navegação"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Lista de Links */}
                <nav className="mt-8 flex flex-col gap-2">
                  {NAV_ITEMS.map((item, idx) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx }}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-navy-800 border border-transparent hover:border-white/10 transition-all flex items-center justify-between"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-50" />
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Botão de Contato e Redes no Rodapé do Menu */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <a
                  href="#contato"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-cyan shadow-glow hover:brightness-110 transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Solicitar Orçamento</span>
                </a>

                {/* Redes Sociais no Mobile */}
                <div className="flex items-center justify-center gap-3 pt-2">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-navy-800 border border-white/10 hover:border-brand-cyan/40 flex items-center justify-center gap-2 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-pink-400" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={headerWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-navy-800 border border-white/10 hover:border-brand-whatsapp flex items-center justify-center gap-2 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-brand-whatsapp" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <p className="text-center text-xs text-slate-400">
                  Atendimento ágil para todo o Brasil
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
