import React from "react";
import Link from "next/link";
import { FileText, ArrowLeft, Mail } from "lucide-react";
import { COMPANY_EMAIL } from "@/lib/constants";

export const metadata = {
  title: "Termos de Uso | DD Sistemas",
  description: "Termos e condições de uso dos serviços e plataformas da DD Sistemas.",
};

export default function TermsPage() {
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
            <div className="w-12 h-12 rounded-2xl bg-brand-blue/30 flex items-center justify-center text-brand-cyan">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Termos de Uso</h1>
              <p className="text-xs text-slate-400">DD Sistemas • Atualizado em 2026</p>
            </div>
          </div>

          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-300">
            <section>
              <h2 className="text-lg font-bold text-white mb-2">1. Aceitação e Objeto</h2>
              <p>
                Estes Termos regulam o acesso e a utilização dos serviços, websites e aplicações
                fornecidos pela <strong>DD Sistemas</strong>. Ao navegar ou solicitar serviços, você
                concorda integralmente com as disposições aqui presentes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">2. Propriedade Intelectual</h2>
              <p>
                Todos os códigos-fonte desenvolvidos, marcas, interfaces gráficas, bancos de dados e
                materiais autorais pertencem exclusivamente à DD Sistemas ou aos seus respectivos
                licenciantes. É proibida qualquer reprodução, engenharia reversa ou comercialização
                não autorizada.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">3. Disponibilidade e Suporte</h2>
              <p>
                Buscamos manter disponibilidade ininterrupta (uptime) das aplicações hospedadas e
                fornecemos canais dedicados para suporte técnico e resolução de incidentes conforme os
                contratos específicos firmados com cada cliente.
              </p>
            </section>

            <section className="pt-6 border-t border-white/10">
              <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Mail className="w-5 h-5 text-brand-cyan" />
                Dúvidas Jurídicas e Contratuais
              </h2>
              <p>
                Questões contratuais adicionais podem ser encaminhadas diretamente ao nosso e-mail:{" "}
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
