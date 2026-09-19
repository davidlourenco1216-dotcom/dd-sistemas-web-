"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Cookie, X } from "lucide-react";

interface CookieConsentProps {
  onOpenPrivacyPolicy: () => void;
}

export default function CookieConsent({ onOpenPrivacyPolicy }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("dd_sistemas_cookie_consent");
      if (!consent) {
        // Exibe o banner após 1 segundo para uma entrada suave
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // Falha silenciosa de localStorage
    }
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem("dd_sistemas_cookie_consent", "accepted");
    } catch {}
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    try {
      localStorage.setItem("dd_sistemas_cookie_consent", "essential_only");
    } catch {}
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50"
          role="dialog"
          aria-live="polite"
          aria-label="Consentimento de Cookies e Privacidade LGPD"
        >
          <div className="glass-card-featured rounded-2xl p-5 border border-brand-cyan/30 shadow-2xl backdrop-blur-xl">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                  <Cookie className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Privacidade & LGPD</span>
                  <ShieldCheck className="w-4 h-4 text-brand-cyan" />
                </h4>
              </div>
              <button
                onClick={handleAcceptEssential}
                className="text-slate-400 hover:text-white p-1 rounded-md"
                aria-label="Fechar banner de cookies"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="mt-3 text-xs text-slate-300 leading-relaxed">
              Utilizamos cookies e tecnologias similares para melhorar sua experiência de navegação,
              garantir a segurança e analisar nosso tráfego, em total conformidade com a{" "}
              <strong className="text-white font-semibold">LGPD (Lei nº 13.709/2018)</strong>. Você
              pode revisar nossa{" "}
              <button
                type="button"
                onClick={onOpenPrivacyPolicy}
                className="text-brand-cyan underline hover:text-cyan-300 font-medium"
              >
                Política de Privacidade
              </button>
              .
            </p>

            <div className="mt-4 flex flex-col sm:flex-row items-center gap-2">
              <button
                onClick={handleAcceptAll}
                className="w-full sm:w-auto flex-1 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:brightness-110 shadow-glow transition-all"
              >
                Aceitar Todos
              </button>
              <button
                onClick={handleAcceptEssential}
                className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-navy-800/80 hover:bg-navy-700/80 border border-white/10 transition-all"
              >
                Apenas Essenciais
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
