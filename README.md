# 🐾 Patinhas na Nuvem

> Plataforma premium de conexão entre ONGs de proteção animal e adotantes responsáveis.

[![Vercel Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://projeto-2026-ashen.vercel.app/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

**Patinhas na Nuvem** é uma solução moderna e intuitiva para gerenciar o fluxo de adoção de animais. O sistema visa transformar a experiência de encontrar um novo melhor amigo, oferecendo uma interface fluida, rápida e visualmente impactante.

🔗 **Demo Online:** [projeto-2026-ashen.vercel.app](https://projeto-2026-ashen.vercel.app/)

---

## � Preview

Aqui estão alguns vislumbres da interface premium do projeto:

````carousel
![Desktop Home](/docs/screenshots/home.png)
<!-- slide -->
![Pet Details](/docs/screenshots/pet_details.png)
<!-- slide -->
![Adopt Gallery](/docs/screenshots/gallery.png)
````

*(Screenshots em breve na pasta `/docs/screenshots`)*

---

## ✨ Funcionalidades Atuais

- [x] **Galeria de Pets Interativa**: Listagem com filtros inteligentes por espécie, idade e porte.
- [x] **Busca em Tempo Real**: Filtro instantâneo por nome, raça ou localização.
- [x] **Fluxo de Adoção Multi-step**: Modal organizado para triagem de interessantes.
- [x] **Integração Backend (Formspree)**: Recebimento de solicitações de adoção e voluntariado diretamente por e-mail.
- [x] **Design Responsivo & Premium**: Estética moderna com glassmorphism, gradientes suaves e micro-animações.
- [x] **Sistema de Doações**: Interface dedicada para suporte financeiro à ONG.

---

## 🛠️ Tecnologias Utilizadas

- **Core**: [React.js](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Estilização**: Vanilla CSS (Design Systems & Tokens)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Roteamento**: [React Router Dom](https://reactrouter.com/)
- **Backend de Formulários**: [Formspree](https://formspree.io/)

---

## 🚀 Como Executar Localmente

### Pré-requisitos

- Node.js (v18+)
- npm ou yarn

### Passo a Passo

1. Clone o repositório:

   ```bash
   git clone https://github.com/LuisGustavoCassioli/PROJETO-2026.git
   ```

2. Entre na pasta:

   ```bash
   cd PROJETO-2026
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

---

## 🗺️ Roadmap de Evolução

O projeto está em constante evolução. Confira o que vem por aí:

### Versão 1.1 - Persistência & Auth (Próxima)

- [ ] Integração com **Supabase** para banco de dados real (substituindo Mock data).
- [ ] Sistema de Autenticação (Login para adotantes e painel para ONGs).

### Versão 1.2 - Painel Administrativo

- [ ] Dashboard para a ONG gerenciar pets (CRUD de animais).
- [ ] Gerenciamento de status de adoção (Pendente, Aprovado, Concluído).

### Versão 2.0 - Ecossistema Completo

- [ ] App Mobile (React Native) para adotantes.
- [ ] Sistema de Chat interno para comunicação com o abrigo.
- [ ] API Própria para parceiros.

---

## 📂 Estrutura de Documentação Sugerida

Para manter o projeto escalável, recomendamos a seguinte estrutura em `/docs`:

- `architecture.md`: Guia de padrões de código e estrutura de pastas.
- `contributing.md`: Regras para quem deseja colaborar com o código.
- `design_system.md`: Definição de cores, fontes e tokens visuais.

---

## 📋 Tags Recomendadas (Topics)

`react`, `vite`, `formspree`, `animal-adoption`, `glassmorphism`, `premium-ui`, `frontend`, `ngo-system`.

---

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

---
Desenvolvido com ❤️ para ajudar os animais.
