import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, Lock, Mail } from "lucide-react";
import { COMPANY_EMAIL } from "@/lib/constants";

export const metadata = {
  title: "Política de Privacidade & LGPD | DD Sistemas",
  description: "Entenda como a DD Sistemas trata seus dados em total conformidade com a LGPD.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-navy-900 text-slate-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-brand-cyan hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para a página inicial</span>
        </Link>

        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                Política de Privacidade & LGPD
              </h1>
              <p className="text-xs text-slate-400">DD Sistemas • Atualizado em 2026</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan text-sm flex items-center gap-3 mb-8">
            <Lock className="w-5 h-5 shrink-0" />
            <span>
              Este documento foi elaborado em total conformidade com a Lei Geral de Proteção de Dados
              (LGPD - Lei nº 13.709/2018).
            </span>
          </div>

          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-300">
            <section>
              <h2 className="text-lg font-bold text-white mb-2">1. Quem Somos</h2>
              <p>
                A <strong>DD Sistemas</strong> é uma empresa focada em inovação e engenharia de
                software, fornecendo soluções para condomínios residenciais, micro e pequenos
                empreendedores e empresas que buscam modernização digital.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">2. Coleta de Dados e Finalidade</h2>
              <p>
                Coletamos apenas dados estritamente necessários para a prestação de serviços e
                comunicação comercial solicitada pelo próprio usuário (como nome, telefone de
                WhatsApp, segmento e mensagem). Esses dados são utilizados exclusivamente para:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-slate-400">
                <li>Elaboração e envio de propostas comerciais personalizadas;</li>
                <li>Agendamento de demonstrações e suporte técnico;</li>
                <li>Garantia da segurança técnica e prevenção contra fraudes nos sistemas.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">3. Não Compartilhamento de Dados</h2>
              <p>
                A DD Sistemas não comercializa, não aluga e não repassa informações de usuários a
                terceiros para fins publicitários ou mercadológicos.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">4. Segurança da Informação</h2>
              <p>
                Adotamos práticas modernas de segurança da informação, como criptografia em trânsito
                (HTTPS/TLS), autenticação segura e monitoramento constante de integridade de dados.
              </p>
            </section>

            <section className="pt-6 border-t border-white/10">
              <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Mail className="w-5 h-5 text-brand-cyan" />
                Contato do Encarregado de Dados (DPO)
              </h2>
              <p>
                Para solicitar exclusão, alteração ou confirmação dos seus dados, entre em contato
                direto através do e-mail:{" "}
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="text-brand-cyan underline font-medium"
                >
                  {COMPANY_EMAIL}
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
