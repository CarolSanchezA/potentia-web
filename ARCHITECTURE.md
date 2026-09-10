# Arquitetura do potentia-web

Site institucional da Potentia. React + TypeScript + Vite + Tailwind, sem backend próprio.

O objetivo desta organização é simples: **o conteúdo do negócio não mora dentro de componentes de tela.**

## As três camadas

```
src/
├─ domain/           O QUE o negócio é. TypeScript puro.
├─ infrastructure/   DE ONDE o dado vem e COMO agimos no mundo externo.
└─ ui/               COMO isso aparece na tela. React + Tailwind.
```

### Regra de dependência

O sentido das setas é **sempre para dentro**:

```
ui  ──►  infrastructure  ──►  domain
```

- `domain/` não importa nada. Nem React, nem Tailwind, nem infraestrutura.
- `infrastructure/` importa `domain/`.
- `ui/` pode importar as duas.

Se você precisar importar `ui/` dentro de `domain/`, o código está na camada errada.

### `domain/`

Os conceitos do negócio e as regras que não dependem de tela nenhuma.

| Arquivo | O que guarda |
|---|---|
| `professional/Professional.ts` | Um profissional da equipe, e `getInitials()` |
| `clinic/Clinic.ts` | Razão social, CNPJ, endereço e e-mail |
| `faq/FaqEntry.ts` | Uma pergunta frequente |
| `testimonial/Testimonial.ts` | Um depoimento de paciente |
| `triage/TriageStep.ts` | Um passo do fluxo de triagem |

**Linguagem Ubíqua:** o código usa as palavras do negócio. Usamos `Professional`, nunca `Doctor` — a equipe não tem médicos, e tratá-los como tal seria incorreto clínica e legalmente.

### `infrastructure/`

| Arquivo | O que faz |
|---|---|
| `content/*.ts` | O conteúdo real do site (equipe, FAQ, depoimentos, passos) |
| `triage/whatsAppChannel.ts` | Fonte **única** do número e da mensagem de triagem |

Hoje o conteúdo é uma lista estática compilada no bundle. Se um dia vier de um CMS ou API, **só esta camada muda** — a UI consome os tipos de `domain/`, não a origem do dado.

### `ui/`

| Pasta | O que vai lá |
|---|---|
| `features/` | Seções da página, uma pasta por assunto (`team/`, `faq/`, …) |
| `layout/` | A casca do site: Navbar, Footer, FloatingWhatsApp |
| `components/` | Peças reutilizáveis sem assunto próprio: Modal, Bubble, Reveal |
| `pages/` | Páginas |
| `routes/` | O mapa de rotas |
| `hooks/` | Comportamento reutilizável (ex.: `useEscapeKey`) |

## Onde eu ponho...

| Você quer... | Mexa em |
|---|---|
| Trocar o número do WhatsApp | `infrastructure/triage/whatsAppChannel.ts` — **só ali** |
| Adicionar/editar um profissional | `infrastructure/content/professionals.ts` |
| Adicionar uma pergunta ao FAQ | `infrastructure/content/faqEntries.ts` |
| Adicionar um depoimento | `infrastructure/content/testimonials.ts` (leia a nota de LGPD) |
| Mudar CNPJ ou endereço | `domain/clinic/Clinic.ts` — atualiza os dois documentos legais de uma vez |
| Criar uma página nova | Um arquivo em `ui/pages/` e um `<Route>` em `ui/routes/AppRoutes.tsx` |
| Mudar o visual de uma seção | O componente correspondente em `ui/features/` |

## Cuidados

**Tailwind só escaneia `.html`, `.jsx` e `.tsx`** (veja `tailwind.config.js`). Incluir `.ts` fazia o Tailwind gerar classes por falso positivo — o `.filter(...)` de um método de domínio virava a classe CSS `.filter`. Se algum dia você escrever classes dentro de um `.ts`, elas não serão geradas.

**Os depoimentos são dados sensíveis.** São relatos reais de saúde, de pessoas identificadas. Publicação depende de consentimento (LGPD, arts. 7º e 11). Não adicione, edite ou reatribua um depoimento sem autorização registrada.

**As rotas legais são filhas de `/` de propósito.** `/termos-de-uso` renderiza a home **e** o documento como overlay por cima, não uma página separada. Quem mantém isso é o `<Outlet />` em `HomePage.tsx`.

## Relação com o backend

O `potentia-whatsapp-bridge` (NestJS, repositório separado) é a ponte entre a Meta Cloud API e o Typebot. Ele conduz a conversa de triagem.

**Os dois projetos não se comunicam por HTTP.** Este site apenas abre um link `wa.me`. O único acoplamento entre eles é o número de telefone — por isso ele tem uma fonte única aqui. Trocar o número exige trocar também a configuração da Meta no bridge.

Os repositórios são separados de propósito: não há código compartilhado, os deploys são independentes e os ciclos de vida não coincidem. Vale reunir num monorepo no dia em que existir um contrato compartilhado de verdade — por exemplo, um formulário no site que chame o bridge e exija o mesmo tipo dos dois lados.

## Comandos

```bash
npm run dev      # desenvolvimento
npm run build    # tsc -b && vite build
npm run lint     # eslint
```

O CI valida o build em todo pull request para a `main` (`.github/workflows/ci.yml`).
