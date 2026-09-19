-- ============================================================
-- DD SISTEMAS — SCRIPT SQL PARA SUPABASE (TABELA DE LEADS)
-- ============================================================
-- Execute este script no "SQL Editor" do seu painel do Supabase.

-- 1. Cria a tabela de leads / contatos do site
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    name TEXT NOT NULL,
    segment TEXT NOT NULL,
    phone TEXT NOT NULL,
    message TEXT,
    status TEXT NOT NULL DEFAULT 'novo' -- 'novo', 'em_atendimento', 'fechado', 'perdido'
);

-- 2. Habilita Row Level Security (RLS) para proteger a tabela
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- 3. Cria política para permitir que o formulário público do site insira novos leads
CREATE POLICY "Permitir insercao anonima de leads"
    ON public.leads
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- 4. Cria política para que apenas usuários autenticados (administradores) possam visualizar e gerenciar os leads
CREATE POLICY "Apenas admin pode ler leads"
    ON public.leads
    FOR SELECT
    TO authenticated
    USING (true);

-- 5. Cria índice por data de criação para consultas rápidas
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);
