"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, FileText, Lock, Mail } from "lucide-react";
import { COMPANY_EMAIL } from "@/lib/constants";

export type LegalDocType = "privacidade" | "termos" | null;

interface LegalModalProps {
  type: LegalDocType;
  onClose: () => void;
}

export default function LegalModal({ type, onClose }: LegalModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (type) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-navy-950/80 backdrop-blur-md"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.4 }}
          className="relative w-full max-w-2xl max-h-[85vh] bg-navy-900 border border-brand-cyan/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 bg-navy-950/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                {type === "privacidade" ? (
                  <ShieldCheck className="w-5 h-5" />
                ) : (
                  <FileText className="w-5 h-5" />
                )}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {type === "privacidade"
                    ? "Política de Privacidade & LGPD"
                    : "Termos de Uso do Serviço"}
                </h3>
                <p className="text-xs text-slate-400">DD Sistemas • Atualizado em 2026</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Fechar janela"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Conteúdo com Scroll */}
          <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-slate-300 leading-relaxed">
            {type === "privacidade" ? (
              <>
                <div className="p-3.5 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs flex items-center gap-2">
                  <Lock className="w-4 h-4 shrink-0" />
                  <span>
                    Em total conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº
                    13.709/2018).
                  </span>
                </div>

                <section>
                  <h4 className="font-bold text-white text-sm mb-1.5">1. Quem Somos e Nosso Compromisso</h4>
                  <p>
                    A <strong>DD Sistemas</strong> é uma empresa especializada em desenvolvimento de
                    softwares, aplicativos para condomínios (DD Estoque e ManutenPro), sistemas para
                    pequenos negócios e plataformas institucionais. Respeitamos a sua privacidade e
                    garantimos a máxima transparência sobre o tratamento de qualquer dado fornecido em
                    nossos canais.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-white text-sm mb-1.5">2. Dados Pessoais Coletados</h4>
                  <p>
                    Coletamos apenas os dados estritamente necessários para contato comercial e
                    prestação dos nossos serviços, tais como:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
                    <li>Nome completo para identificação no atendimento;</li>
                    <li>Número de telefone / WhatsApp para envio de propostas e suporte;</li>
                    <li>Segmento de atuação e mensagem para personalizar o atendimento;</li>
                    <li>Cookies técnicos essenciais para segurança e preferência de navegação.</li>
                  </ul>
                </section>

                <section>
                  <h4 className="font-bold text-white text-sm mb-1.5">3. Finalidade e Segurança</h4>
                  <p>
                    Seus dados jamais serão vendidos, alugados ou compartilhados com terceiros para
                    fins de marketing. Todas as comunicações via WhatsApp ou sistemas próprios utilizam
                    criptografia em trânsito e repouso, respeitando os princípios de necessidade e
                    segurança da LGPD.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-white text-sm mb-1.5">4. Seus Direitos como Titular</h4>
                  <p>
                    Você tem o direito de solicitar a confirmação, o acesso, a correção ou a exclusão
                    definitiva dos seus dados pessoais armazenados por nós a qualquer momento.
                  </p>
                </section>

                <section className="pt-3 border-t border-white/10">
                  <h4 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brand-cyan" />
                    Canal do Encarregado de Dados (DPO)
                  </h4>
                  <p>
                    Para exercer seus direitos de privacidade, entre em contato pelo e-mail oficial:{" "}
                    <a
                      href={`mailto:${COMPANY_EMAIL}`}
                      className="text-brand-cyan underline hover:text-cyan-300"
                    >
                      {COMPANY_EMAIL}
                    </a>
                  </p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h4 className="font-bold text-white text-sm mb-1.5">1. Aceitação dos Termos</h4>
                  <p>
                    Ao acessar o site da <strong>DD Sistemas</strong> ou solicitar demonstrações de
                    nossos softwares, você concorda expressamente em cumprir estes Termos de Uso e
                    todas as leis e regulamentos aplicáveis.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-white text-sm mb-1.5">2. Propriedade Intelectual</h4>
                  <p>
                    Todo o conteúdo deste site, incluindo logotipos, marcas, layout, códigos, módulos de
                    software e textos, são de propriedade exclusiva da DD Sistemas e estão protegidos
                    pela legislação de direitos autorais e propriedade intelectual.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-white text-sm mb-1.5">3. Uso Adequado das Soluções</h4>
                  <p>
                    O usuário se compromete a não utilizar o site ou qualquer plataforma vinculada
                    para práticas ilícitas, engenharia reversa, tentativas de invasão ou disseminação
                    de conteúdos maliciosos.
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-white text-sm mb-1.5">4. Propostas Comerciais e Prazos</h4>
                  <p>
                    As informações fornecidas nos orçamentos são personalizadas para cada projeto e
                    detalhadas em contratos de prestação de serviços com SLA (Acordo de Nível de
                    Serviço) garantido.
                  </p>
                </section>

                <section className="pt-3 border-t border-white/10">
                  <p className="text-slate-400">
                    Dúvidas sobre nossos termos contratuais podem ser encaminhadas diretamente ao nosso
                    e-mail:{" "}
                    <a
                      href={`mailto:${COMPANY_EMAIL}`}
                      className="text-brand-cyan underline hover:text-cyan-300"
                    >
                      {COMPANY_EMAIL}
                    </a>
                  </p>
                </section>
              </>
            )}
          </div>

          {/* Footer do Modal */}
          <div className="p-4 sm:p-5 border-t border-white/10 bg-navy-950/60 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-cyan text-white font-semibold text-xs sm:text-sm transition-colors shadow-md"
            >
              Compreendi e Fechar
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
