# Alura Challenge Next.js
> Blog para encontrar conteúdos sobre tecnologia.

## Sumário
- [Tecnologias & Arquitetura](#tecnologias--arquitetura)
- [Pré-requisitos](#pré-requisitos)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Como Rodar (sem Docker)](#como-rodar-sem-docker)
- [Como Rodar com Docker](#como-rodar-com-docker)
- [Banco de Dados & Migrações](#banco-de-dados--migrações)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Scripts Disponíveis](#scripts-disponíveis)
- [API](#api)
- [Integrações Externas](#integrações-externas)
- [CI/CD](#cicd)
- [Padrões de Código / Contribuição](#padrões-de-código--contribuição)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)
- [Roadmap](#roadmap)
- [Licença](#licença)
- [Autor & Contato](#autor--contato)

## Tecnologias & Arquitetura
- **Next.js 15** — Estrutura principal com App Router, páginas server-side e rota API para proxy dos posts.
- **React 19** — Composição declarativa de componentes e interação fluida na UI.
- **TypeScript 5** — Tipagem estática garante segurança em dados de posts, categorias e paginação.
- **Tailwind CSS 4** — Estilização funcional responsiva e suporte a modo escuro.
- **@tanstack/react-query 5** — Cache e sincronização de requisições client-side com placeholders e paginação.
- **Axios** — Cliente HTTP configurado com base URL externa para a API de posts.
- **Nuqs** — Sincronização de estado de filtros e paginação com a query string.
- **Lucide React** — Ícones vetoriais leves para navegação e menu mobile.
- **ESLint (config Next)** — Padronização de código alinhada ao ecossistema Next.js.

## Pré-requisitos
N/A

## Configuração do Ambiente
1. Verifique se há um arquivo `.env.example`. No momento: N/A. Crie manualmente o `.env.local` na raiz do projeto.
2. Copie o template abaixo para `.env.local` e ajuste os valores conforme o ambiente seguro:
   ```bash
   NEXT_PUBLIC_API_URL=https://example.com/api
   ```
3. Garanta que `.env.local` esteja listado no `.gitignore`. Nunca faça commit de credenciais reais.

## Como Rodar (sem Docker)
1. Instale dependências:
   ```bash
   npm install
   ```
2. Inicie a API ou serviço externo configurado em `NEXT_PUBLIC_API_URL` (se aplicável).
3. Rode o modo desenvolvimento:
   ```bash
   npm run dev
   ```
4. Outros comandos úteis:
   - Build de produção: `npm run build`
   - Servir build: `npm run start`
   - Lint: `npm run lint`

## Como Rodar com Docker
N/A

## Banco de Dados & Migrações
N/A

## Estrutura de Pastas
```
alura-challenge-nextjs/
├── public/
│   ├── hero.svg
│   ├── hero-line.svg
│   └── logo.svg
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── posts/route.ts
│   │   ├── blog/[slug]/
│   │   │   ├── error.tsx
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   └── page.tsx
│   ├── hooks/usePosts.ts
│   ├── lib/httpClient.ts
│   ├── providers/index.tsx
│   ├── services/
│   │   ├── get-post-by-id.ts
│   │   ├── get-post-by-tag.ts
│   │   └── get-posts.ts
│   ├── types/posts.ts
│   └── ui/components/
│       ├── hero.tsx
│       ├── home-filter.tsx
│       ├── layout/
│       │   ├── footer.tsx
│       │   └── header.tsx
│       ├── menu-mobile.tsx
│       ├── pagination.tsx
│       ├── post-card-skeleton.tsx
│       ├── post-card.tsx
│       └── post-related.tsx
├── package.json
├── package-lock.json
└── ...
```

| Pasta | Descrição |
| --- | --- |
| `src/app` | Páginas do Next.js (App Router) e estilos globais. |
| `src/app/api/posts` | Rota serverless que faz proxy para a API externa de posts. |
| `src/app/blog/[slug]` | Página dinâmica de detalhes, metadata e loading states. |
| `src/hooks` | Hooks customizados (ex.: paginação e filtros com React Query). |
| `src/lib` | Utilitários compartilhados como o cliente HTTP configurado. |
| `src/providers` | Providers globais (React Query, DevTools, adapters). |
| `src/services` | Camada de acesso a dados externos (posts, tags, categorias). |
| `src/types` | Tipagens compartilhadas para posts, meta e paginação. |
| `src/ui/components` | Componentes visuais reutilizáveis, layout e interações. |
| `public` | Assets estáticos servidos pelo Next.js. |

## Scripts Disponíveis
| Script | Descrição | Comando |
| --- | --- | --- |
| `dev` | Modo desenvolvimento com Turbopack. | `npm run dev` |
| `build` | Build otimizada de produção. | `npm run build` |
| `start` | Servidor Next.js após o build. | `npm run start` |
| `lint` | Análise estática via ESLint. | `npm run lint` |

## API
| Método | Rota | Descrição | Body | Response |
| --- | --- | --- | --- | --- |
| GET | `/api/posts` | Proxy para `NEXT_PUBLIC_API_URL/posts/category/:category` com paginação (`limit`, `page`). | N/A | JSON compatível com `PostsResponse` (posts, pagination, meta). |

## Integrações Externas
- **API de posts** — Base configurada via `NEXT_PUBLIC_API_URL`. Defina a URL que expõe os endpoints `/posts/category/:category`, `/posts/id/:id` e `/posts/tags/:tag`. Documentação: N/A.

## CI/CD
N/A

## Padrões de Código / Contribuição
- **Linting**: execute `npm run lint` antes de abrir PRs.
- **Formatação**: utilize as classes utilitárias do Tailwind e mantenha tipagem explícita quando necessário.
- **Commits**: convenção não definida (N/A); adote mensagens descritivas e coerentes.
- **Fluxo de contribuição**: abra issues ou PRs descrevendo contexto e passos de teste; guidelines formais N/A.

## Troubleshooting
- **Variável `NEXT_PUBLIC_API_URL` ausente**: confirme o `.env.local` e reinicie `npm run dev`.
- **Resposta vazia na listagem de posts**: verifique se a categoria utilizada existe na API externa.
- **Erro CORS ao chamar `/api/posts`**: habilite o domínio local na API referenciada em `NEXT_PUBLIC_API_URL`.
- **`npm run build` falha com erros de tipo**: rode `npm run lint` para identificar importações ou tipagens incorretas, corrigindo antes do build.
- **Porta 3000 já utilizada**: inicialize com `PORT=3001 npm run dev` (macOS/Linux) ou `set PORT=3001 && npm run dev` (Windows).
- **HTTP 500 ao abrir post detalhado**: confirme que `/posts/id/:id` retorna dados válidos; se necessário, limpe caches da API externa.
- **Paginação não avança**: limpe os parâmetros da URL (`category`, `page`) e tente novamente para forçar nova consulta.

## FAQ
- **Como alterar a categoria inicial da home?** Edite o valor passado em `getPosts({ category: "devops" })` em `src/app/page.tsx`.
- **Onde ficam os componentes compartilhados?** Em `src/ui/components`, separados por tipo (layout, cards, filtros).
- **É possível usar outro cliente HTTP?** Sim; substitua `axios` nas camadas `lib` e `services`, mantendo as tipagens de resposta.
- **Como ativar o modo escuro?** Tailwind já aplica classes condicionais `dark`; ajuste o tema global conforme necessidade do produto.
- **Posso remover o React Query Devtools em produção?** Sim; personalize `src/providers/index.tsx` para habilitar apenas em desenvolvimento.
- **Como adicionar um novo endpoint proxy?** Crie uma nova rota em `src/app/api`, reutilizando `httpClient` para manter o cabeçalho base.

## Roadmap
N/A

## Licença
N/A

## Autor & Contato
N/A
