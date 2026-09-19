# DD Sistemas — Website Institucional & Vendas (Next.js + TypeScript + Tailwind CSS)

Website institucional e de alta conversão desenvolvido para a **DD Sistemas**, projetado com estética SaaS moderna (inspirado em Stripe, Linear e Vercel), animações fluidas com Framer Motion, e conformidade completa com a LGPD.

---

## 🚀 Stack Tecnológica

- **Framework:** Next.js 14+ (App Router)
- **Linguagem:** TypeScript (strict mode)
- **Estilização:** Tailwind CSS (tema customizado dark navy, glassmorphism, glows radiais)
- **Animações:** Framer Motion (microinterações, drawer mobile, cards e modais)
- **Ícones:** Lucide React
- **Efeitos de Conversão:** Canvas Confetti na submissão de orçamentos

---

## 🎨 Paleta de Cores e Identidade Visual

| Token / Cor | Hex | Aplicação |
|---|---|---|
| Fundo Navy Profundo | `#0a192f` / `#050c18` | Base dark mode e contraste elegante |
| Fundo Superfície / Card | `#112240` / Glass | Cards translúcidos e painéis |
| Azul Corporativo | `#0056b3` | Acentos primários, botões secundários |
| Azul Ciano Neon | `#00d2ff` | Destaques de tipografia, bordas brilhantes, glows |
| Verde WhatsApp | `#25d366` | CTAs diretos de conversão e botão flutuante |

---

## 📂 Arquitetura Modular dos Componentes

```
dd-sistemas-app/
├── src/
│   ├── app/
│   │   ├── globals.css         # Reset, scrollbar estilizada, classes glassmorphism
│   │   ├── layout.tsx          # Root layout com SEO, OpenGraph e favicon inline
│   │   ├── page.tsx            # Página inicial consolidando todas as seções
│   │   ├── privacidade/page.tsx # Página dedicada de Política de Privacidade (LGPD)
│   │   └── termos/page.tsx     # Página dedicada de Termos de Uso
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky glassmorphism com animação de menu mobile
│   │   ├── Hero.tsx            # Efeito WOW, seletor interativo de abas e badges flutuantes
│   │   ├── Solutions.tsx       # 3 cards interativos (Pequenos Negócios, Condomínios e Empresas)
│   │   ├── Differentials.tsx   # 3 pilares fundamentais + métricas de impacto
│   │   ├── Testimonials.tsx    # Prova social de síndico, comerciante e diretor B2B
│   │   ├── ContactForm.tsx     # Form com máscara de telefone, validação e gerador WhatsApp
│   │   ├── CookieConsent.tsx   # Banner de cookies LGPD com persistência em localStorage
│   │   ├── LegalModal.tsx      # Modal em tempo real para leitura de privacidade e termos
│   │   ├── FloatingWhatsApp.tsx# Botão flutuante com anéis de pulso e tooltip
│   │   └── Footer.tsx          # Rodapé completo com copyright © 2026
│   ├── lib/
│   │   ├── constants.ts        # Dados estáticos, telefone WhatsApp, links e métricas
│   │   └── utils.ts            # Utilitários de classes (cn), máscaras e link WhatsApp
│   └── types/
│       └── index.ts            # Interfaces e tipagens TypeScript
├── tailwind.config.ts          # Configuração de temas, cores, gradientes e sombras
├── tsconfig.json               # Configurações do compilador TypeScript
└── package.json
```

---

## ⚙️ Configuração do WhatsApp

Para definir o número oficial de WhatsApp que receberá os leads de todas as seções e formulários, basta editar o arquivo:

👉 **`src/lib/constants.ts`**

```typescript
export const WHATSAPP_NUMBER = "5585999999999"; // Substitua por DDI + DDD + Número (apenas dígitos)
export const WHATSAPP_DISPLAY = "(85) 99999-9999"; // Formato visual exibido no site
export const COMPANY_EMAIL = "contato@ddsistemas.com.br";
```

---

## 💻 Como Rodar o Projeto Localmente

1. Entre no diretório do projeto:
   ```bash
   cd dd-sistemas-app
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   Acesse em `http://localhost:3000`.

4. Para build de produção:
   ```bash
   npm run build
   npm run start
   ```

---

## 🚢 Como Fazer Deploy

- **Vercel:** Basta conectar o repositório Git. O Next.js é detectado e configurado automaticamente com zero configuração adicional.
- **Netlify / VPS / Docker:** Suporta build padrão Next.js standalone ou contêiner Node.js 18+.
