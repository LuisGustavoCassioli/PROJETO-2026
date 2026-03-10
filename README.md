# 🐾 Patinhas na Nuvem

> Projeto Acadêmico - Disciplina de Desenvolvimento Web 2026/1

## 📌 Sobre o Projeto

**Patinhas na Nuvem** é um ecossistema digital que atua como ponte entre Organizações Não Governamentais (ONGs) de proteção animal e possíveis adotantes. A plataforma automatiza o processo de triagem e interesse, garantindo que a comunicação entre abrigos e a comunidade seja fluida, profissional e eficiente.

### ❓ Problema Real

Muitas ONGs de pequeno e médio porte sofrem com a falta de visibilidade de seus animais e com processos de adoção manuais via redes sociais, que geram perda de informações e sobrecarga de trabalho. O **Patinhas na Nuvem** resolve isso centralizando a galeria de animais e automatizando a coleta de dados de interessados.

### 👥 Público Alvo

- **ONGs de Proteção Animal**: Que buscam profissionalizar sua vitrine de adoção.
- **Projetos de Extensão/Culturais**: Focados na causa animal.
- **Adotantes Responsáveis**: Pessoas que buscam um novo pet de forma segura e organizada.

---

## 👥 Integrantes do Grupo

| Nome | Matrícula | GitHub |
| :--- | :--- | :--- |
| Eduardo Freitas de Castro | Matrícula | @user |
| LUIS GUSTAVO CASSIOLI RODRIGUES | 3023204201 | @LuisGustavoCassioli |
| Samuel De Lucas Silva | Matrícula | @user |

---

## ✨ Funcionalidades do Sistema

- **Galeria Inteligente**: Filtros por espécie, porte e idade.
- **Busca Global**: Localização rápida por nome ou raça.
- **Formulário de Triagem**: Fluxo interativo para captação de dados de adoção.
- **Sistema de Voluntariado**: Inscrição de novos colaboradores para a ONG.
- **Portal de Doações**: Interface para arrecadação de recursos.
- **Integração de Notificações**: Envio automatizado de propostas via e-mail (Formspree).

---

## 🏗️ Arquitetura do Projeto

O sistema foi desenvolvido utilizando uma arquitetura baseada em **Componentes Reutilizáveis** com React. A comunicação com o "mundo exterior" é feita através de uma camada de serviços dedicada.

- **Frontend**: Single Page Application (SPA) para alta performance.
- **Services Layer**: Abstração da lógica de dados (Mock Data evoluindo para Supabase).
- **Communication Layer**: Integração via API com Formspree.

---

## 🚀 Deploy na Cloud

O sistema está hospedado e disponível para acesso público através da plataforma **Vercel**, garantindo Continuous Deployment (CD) a cada atualização no repositório oficial.

🔗 **Link do Sistema:** [projeto-2026-ashen.vercel.app](https://projeto-2026-ashen.vercel.app/)
🔗 **Repositório GitHub:** [PROJETO-2026](https://github.com/LuisGustavoCassioli/PROJETO-2026)

---

## 🎥 Vídeo de Apresentação

### 📺 Link da Apresentação

O vídeo deve conter no mínimo 5 minutos.

- [Assista no YouTube](https://youtube.com/...)

---

## 📁 Estrutura de Pastas

```text
/
├── docs/               # Documentação técnica e screenshots
├── public/             # Recursos estáticos públicos
└── src/
    ├── components/     # Componentes de UI (Navbar, Modals, Cards)
    ├── pages/          # Views principais (Home, Adopt, Contact)
    ├── services/       # Lógica de integração e dados (Mock API)
    ├── assets/         # CSS e Imagens compiláveis
    └── main.jsx        # Ponto de entrada do React
```

---

## 🛠️ Tecnologias Utilizadas

- **React.js** (v18+)
- **Vite** (Build Tool)
- **Vanilla CSS** (Design System)
- **Lucide React** (Ícones)
- **Vercel** (Hospedagem)

---

## 🗺️ Roadmap Acadêmico

- **Fase 1 (Concluída)**: MVP com Mock Data e Integração Formspree.
- **Fase 2 (Próxima)**: Integração com **Supabase** para banco de dados real.
- **Fase 3**: Dashboard administrativo para a ONG.

---

## 📄 Licença

Distribuído sob a licença MIT.

---
*Este projeto faz parte da avaliação da disciplina 2026/1.*
