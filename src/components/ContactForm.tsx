"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Send,
  MessageCircle,
  Building,
  User,
  Phone,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { BUSINESS_SEGMENTS, WHATSAPP_NUMBER, WHATSAPP_DISPLAY, COMPANY_EMAIL } from "@/lib/constants";
import { formatPhoneNumber, cleanDigits, buildWhatsAppUrl } from "@/lib/utils";

interface FormState {
  name: string;
  segment: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  segment?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    segment: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData((prev) => ({ ...prev, phone: formatted }));
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 3) {
      newErrors.name = "Por favor, digite seu nome completo (ao menos 3 letras).";
    }

    if (!formData.segment) {
      newErrors.segment = "Selecione o segmento do seu negócio.";
    }

    const digits = cleanDigits(formData.phone);
    if (digits.length < 10) {
      newErrors.phone = "Digite um telefone com DDD válido (ex: 85 99999-9999).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Efeito de confete moderno
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00d2ff", "#25d366", "#0056b3", "#ffffff"],
      });
    } catch {
      // Ignora se canvas-confetti não carregar
    }

    const segmentLabel =
      BUSINESS_SEGMENTS.find((s) => s.id === formData.segment)?.label || formData.segment;

    // Monta a mensagem estruturada e elegante para o WhatsApp
    const messageLines = [
      "👋 *Novo Contato pelo Site DD Sistemas*",
      "",
      `👤 *Nome:* ${formData.name.trim()}`,
      `🏢 *Segmento:* ${segmentLabel}`,
      `📱 *Telefone/WhatsApp:* ${formData.phone.trim()}`,
      formData.message.trim() ? `💬 *Mensagem/Necessidade:* ${formData.message.trim()}` : null,
      "",
      "👉 Gostaria de solicitar um orçamento e saber mais sobre as soluções!",
    ].filter(Boolean);

    const fullMessage = messageLines.join("\n");
    const waUrl = buildWhatsAppUrl(fullMessage, WHATSAPP_NUMBER);

    setSubmittedUrl(waUrl);
    setIsSubmitting(false);

    // Abre o WhatsApp imediatamente em nova aba
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="contato" className="relative py-24 sm:py-32 bg-navy-950 overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-brand-blue/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coluna da Esquerda: Chamada de Conversão & Informações de Contato */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-800/90 border border-brand-cyan/30 text-xs font-semibold text-brand-cyan uppercase tracking-wider mb-4"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Atendimento Direto & Rápido</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
            >
              Pronto para modernizar seu negócio ou{" "}
              <span className="bg-gradient-to-r from-brand-cyan to-blue-400 bg-clip-text text-transparent">
                condomínio?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed"
            >
              Preencha o formulário ao lado ou fale diretamente com a nossa equipe pelo WhatsApp.
              Respondemos em minutos e apresentamos uma proposta sob medida para sua necessidade.
            </motion.p>

            {/* Benefícios Rápidos */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-sm text-slate-200">Demonstração ao vivo e sem compromisso</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-sm text-slate-200">Proposta comercial transparente e rápida</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-sm text-slate-200">Seus dados protegidos de acordo com a LGPD</span>
              </div>
            </div>

            {/* Canal Direto de WhatsApp */}
            <div className="mt-10 p-5 rounded-2xl bg-navy-900/90 border border-white/10">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                Prefere conversar direto?
              </div>
              <div className="flex items-center justify-between gap-4 mt-2">
                <div>
                  <div className="text-base font-bold text-white">{WHATSAPP_DISPLAY}</div>
                  <div className="text-xs text-brand-cyan">{COMPANY_EMAIL}</div>
                </div>
                <a
                  href={buildWhatsAppUrl("Olá, DD Sistemas! Gostaria de falar diretamente com um consultor.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-brand-whatsapp hover:bg-brand-whatsappHover text-white text-xs font-bold flex items-center gap-2 shadow-glow-wa transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Coluna da Direita: Formulário Interativo com Validação */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card-featured rounded-3xl p-6 sm:p-10 shadow-2xl relative"
            >
              <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                Solicite uma Proposta Personalizada
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                Informe os detalhes do seu projeto para gerarmos um atendimento prioritário.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Nome */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-2">
                    Seu Nome Completo <span className="text-brand-cyan">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: Carlos Eduardo ou Juliana Silva"
                      className={`w-full pl-11 pr-4 py-3 rounded-xl bg-navy-900 border text-white text-sm placeholder-slate-500 transition-colors focus:ring-2 focus:ring-brand-cyan focus:outline-none ${
                        errors.name ? "border-rose-500/80 bg-rose-950/20" : "border-white/10 hover:border-white/20"
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <div className="flex items-center gap-1.5 mt-1.5 text-xs text-rose-400 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Segmento */}
                <div>
                  <label htmlFor="segment" className="block text-xs font-semibold text-slate-300 mb-2">
                    Segmento do seu Negócio <span className="text-brand-cyan">*</span>
                  </label>
                  <div className="relative">
                    <Building className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="segment"
                      name="segment"
                      value={formData.segment}
                      onChange={handleChange}
                      className={`w-full pl-11 pr-8 py-3 rounded-xl bg-navy-900 border text-white text-sm transition-colors focus:ring-2 focus:ring-brand-cyan focus:outline-none appearance-none cursor-pointer ${
                        errors.segment ? "border-rose-500/80 bg-rose-950/20" : "border-white/10 hover:border-white/20"
                      }`}
                    >
                      <option value="" disabled className="bg-navy-900 text-slate-400">
                        Selecione o seu segmento...
                      </option>
                      {BUSINESS_SEGMENTS.map((s) => (
                        <option key={s.id} value={s.id} className="bg-navy-900 text-white">
                          {s.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                      ▼
                    </div>
                  </div>
                  {errors.segment && (
                    <div className="flex items-center gap-1.5 mt-1.5 text-xs text-rose-400 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.segment}</span>
                    </div>
                  )}
                </div>

                {/* WhatsApp */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 mb-2">
                    WhatsApp com DDD <span className="text-brand-cyan">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      placeholder="(85) 99999-9999"
                      maxLength={15}
                      className={`w-full pl-11 pr-4 py-3 rounded-xl bg-navy-900 border text-white text-sm placeholder-slate-500 transition-colors focus:ring-2 focus:ring-brand-cyan focus:outline-none ${
                        errors.phone ? "border-rose-500/80 bg-rose-950/20" : "border-white/10 hover:border-white/20"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <div className="flex items-center gap-1.5 mt-1.5 text-xs text-rose-400 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </div>
                  )}
                </div>

                {/* Mensagem / Detalhes */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-2">
                    Conte um pouco sobre sua necessidade (Opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ex: Gostaria de saber valores para condomínio de 80 apartamentos ou preciso de cardápio digital para sorveteria..."
                    className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-white/10 hover:border-white/20 text-white text-sm placeholder-slate-500 transition-colors focus:ring-2 focus:ring-brand-cyan focus:outline-none resize-none"
                  />
                </div>

                {/* Botão de Envio com Confete & Redirecionamento WhatsApp */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-base text-white bg-brand-whatsapp hover:bg-brand-whatsappHover shadow-glow-wa transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar e Abrir no WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  🔒 Seus dados não serão compartilhados com terceiros. Cumprimos a LGPD.
                </p>
              </form>

              {/* Feedback pós envio com link de emergência */}
              <AnimatePresence>
                {submittedUrl && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm"
                  >
                    <div className="flex items-center gap-2 font-bold text-emerald-300">
                      <CheckCircle2 className="w-5 h-5 text-brand-whatsapp" />
                      <span>Mensagem formatada com sucesso!</span>
                    </div>
                    <p className="mt-1 text-slate-300 text-xs">
                      Se o seu navegador bloqueou a abertura automática do WhatsApp, clique no botão
                      abaixo para iniciar a conversa agora mesmo:
                    </p>
                    <a
                      href={submittedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-whatsapp text-white font-bold text-xs hover:bg-brand-whatsappHover shadow-md transition-colors"
                    >
                      <span>Abrir conversa no WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
