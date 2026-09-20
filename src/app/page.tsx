"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import CondoEcosystem from "@/components/CondoEcosystem";
import Differentials from "@/components/Differentials";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieConsent from "@/components/CookieConsent";
import LegalModal, { LegalDocType } from "@/components/LegalModal";

export default function HomePage() {
  const [legalModalType, setLegalModalType] = useState<LegalDocType>(null);

  const handleOpenLegal = (type: "privacidade" | "termos") => {
    setLegalModalType(type);
  };

  const handleCloseLegal = () => {
    setLegalModalType(null);
  };

  return (
    <div className="relative min-h-screen bg-navy-900 text-slate-100 flex flex-col selection:bg-brand-cyan/25 selection:text-brand-cyan">
      {/* Barra de Navegação Fixa com Glassmorphism */}
      <Navbar />

      {/* Conteúdo Principal */}
      <main className="flex-grow">
        {/* Seção Hero com efeito WOW & Visualização Interativa */}
        <Hero />

        {/* Seção Geral de Soluções */}
        <Solutions />

        {/* Ecossistema Especializado de Condomínios Residenciais (ERP + DD Estoque + ManutenPro) */}
        <CondoEcosystem />

        {/* Diferenciais Competitivos e Métricas de Impacto */}
        <Differentials />

        {/* Prova Social e Depoimentos */}
        <Testimonials />

        {/* Formulário de Contato Inteligente e WhatsApp */}
        <ContactForm />
      </main>

      {/* Rodapé Moderno SaaS com LGPD & Copyright 2026 */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />

      {/* Banner de Consentimento LGPD com persistência em localStorage */}
      <CookieConsent onOpenPrivacyPolicy={() => handleOpenLegal("privacidade")} />

      {/* Modal Rápido de Documentos Legais (Privacidade e Termos) */}
      <LegalModal type={legalModalType} onClose={handleCloseLegal} />
    </div>
  );
}
