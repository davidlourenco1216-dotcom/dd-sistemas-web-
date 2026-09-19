"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";
import { WHATSAPP_DISPLAY } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = buildWhatsAppUrl(
    "Olá, DD Sistemas! Estou no site e gostaria de tirar uma dúvida sobre os softwares."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip com animação */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="mb-3 mr-1 relative hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-navy-900 border border-brand-whatsapp/40 text-white text-xs shadow-2xl backdrop-blur-xl"
          >
            <span className="w-2 h-2 rounded-full bg-brand-whatsapp animate-pulse" />
            <span>Fale com a gente no WhatsApp</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white ml-1 p-0.5"
              aria-label="Ocultar balão"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            {/* Triângulo indicador do balão */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-navy-900 border-r border-b border-brand-whatsapp/40 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão Flutuante */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Abrir conversa no WhatsApp da DD Sistemas"
        className="relative group w-14 h-14 rounded-full bg-brand-whatsapp hover:bg-brand-whatsappHover flex items-center justify-center text-white shadow-glow-wa transition-colors"
      >
        {/* Anéis de Pulso */}
        <span className="absolute -inset-1 rounded-full bg-brand-whatsapp opacity-40 group-hover:opacity-75 animate-ping pointer-events-none" />
        <span className="absolute -inset-2 rounded-full border border-brand-whatsapp/60 animate-pulse pointer-events-none" />

        {/* Ícone */}
        <MessageCircle className="w-7 h-7 relative z-10 transition-transform group-hover:scale-110" />

        {/* Dot verde de "Online agora" */}
        <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-emerald-400 border-2 border-navy-950 flex items-center justify-center z-20">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
        </span>
      </motion.a>
    </div>
  );
}
