# Portfólio – Manoel Victor

Portfólio profissional em **Next.js 15** (App Router) + **TypeScript** para desenvolvedor Full Stack.

## Stack

| Tecnologia | Uso |
|------------|-----|
| **Next.js 15** | App Router, SSR, API Routes |
| **TypeScript** | Tipagem estática |
| **Tailwind CSS** | Estilos |
| **Framer Motion** | Animações |
| **React Hook Form** + **Zod** | Formulário de contato com validação |
| **Resend** | Envio de e-mails no formulário |
| **Lucide React** | Ícones |

## Como rodar

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build
npm run build

# Produção
npm start
```

Acesse [http://localhost:3000](http://localhost:3000) no desenvolvimento.

## Estrutura do projeto

```
src/
├── app/
│   ├── api/contact/     # API de envio de e-mail (Resend)
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── sitemap.ts
├── components/
│   ├── layout/          # Header, Footer, ThemeProvider, SpaceBackground
│   ├── sections/        # Hero, About, Projects, Certificates, Contact
│   └── ui/              # SectionHeader, ImageLightbox
├── data/                # Dados editáveis
│   ├── about.ts
│   ├── certificates.ts
│   ├── experience.ts
│   ├── projects.ts
│   └── techStack.ts
├── lib/
│   ├── constants/       # site, navigation, animations
│   ├── types/
│   ├── utils/           # cn(), contactRateLimit
│   └── validations/     # contact.ts (Zod)
└── styles/
```

## Configuração

### Dados pessoais
Edite `src/lib/constants/site.ts`:
- Nome, email, título, descrição
- URL do site, GitHub, LinkedIn
- Caminho do CV

### Projetos
`src/data/projects.ts` — lista de projetos em destaque.

### Experiência profissional
`src/data/experience.ts` — histórico de trabalho.

### Tech stack
`src/data/techStack.ts` — categorias e tecnologias.

### Sobre mim
`src/data/about.ts` — texto de apresentação e destaques.

### Certificados
`src/data/certificates.ts` — adicione certificados com título, emissor, data e imagem/PDF.

Imagens e PDFs em `public/certificados/` (suporta `.png`, `.jpg`, `.pdf`).

## CV (currículo)

1. Coloque o PDF em `public/cv/manoel_victor_curriculo.pdf`.
2. Ou ajuste o caminho em `src/lib/constants/site.ts` (`cvUrl`).

## Foto de perfil

Arquivo: `public/minhafoto.png`. Troque o arquivo ou altere o caminho em `HeroSection.tsx`.

## Formulário de contato

O formulário usa **Resend** para enviar e-mails.

1. Crie uma conta em [resend.com](https://resend.com).
2. Obtenha sua API key em [resend.com/api-keys](https://resend.com/api-keys).
3. Copie `.env.example` para `.env.local` e preencha:

```env
RESEND_API_KEY=re_sua_chave_aqui
RESEND_TO_EMAIL=seu-email@exemplo.com
RESEND_FROM_EMAIL=Portfolio <onboarding@resend.dev>
```

- **Teste (sandbox)**: use `onboarding@resend.dev` — e-mails só chegam no e-mail da sua conta Resend.
- **Produção**: adicione e verifique seu domínio no Resend e use `Nome <contato@seudominio.com>` em `RESEND_FROM_EMAIL`.

**Rate limiting**: no máximo 3 envios por hora (armazenado em `localStorage`).

## Deploy (Vercel)

1. Conecte o repositório à [Vercel](https://vercel.com).
2. Configure as variáveis de ambiente em **Settings → Environment Variables**.
3. Deixe o comando de build padrão (`npm run build`).
4. Opcional: configure domínio em **Settings → Domains**.

## Scripts

| Comando   | Descrição           |
|----------|----------------------|
| `npm run dev`   | Servidor de desenvolvimento |
| `npm run build` | Build de produção    |
| `npm start`     | Servidor de produção |
| `npm run lint`  | ESLint               |

## Licença

Uso pessoal / portfólio.
