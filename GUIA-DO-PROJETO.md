# Tati Marques Terapia da Mão — Guia do Projeto

## Direção visual

O conceito combina precisão clínica e acolhimento humano. A composição editorial, os títulos de alto contraste, os recortes arredondados e os elementos orgânicos reforçam movimento, cuidado e especialização sem recorrer ao visual genérico de clínicas.

## Paleta

- Azul marinho — `#061F3C`: confiança, profundidade e áreas institucionais.
- Azul-ciano — `#00AEE6`: ação, movimento e CTAs.
- Magenta — `#EC008C`: acento humano e pontos de atenção da identidade.
- Azul suave — `#DFF7FB`: superfícies acolhedoras e respiro visual.
- Rosa suave — `#FAE9F2`: contraste delicado nas seções editoriais.
- Verde — `#008C72`: recuperação e equilíbrio em pequenos detalhes.
- Off-white — `#F5F7F6`: base neutra e confortável.

## Tipografia

- `Manrope`: navegação, textos, formulários e informações funcionais.
- `DM Serif Display`: destaques editoriais, frases de impacto e contraste emocional.

## Motion design

- Entrada no scroll: `IntersectionObserver` com fade e slide-up.
- Hero: elementos flutuantes e selo de autoridade com movimento sutil.
- CTAs: brilho, elevação e transições de cor.
- Cards: elevação, preenchimento progressivo e rotação de ícone no hover.
- Galeria e pilares: sliders automáticos com controles manuais.
- FAQ: expansão suave por grid rows.
- Indicadores: contagem progressiva ao entrar na tela.
- Acessibilidade: todas as animações são reduzidas quando o dispositivo usa `prefers-reduced-motion`.

## Conteúdo real e itens para substituir

- Telefone utilizado: `(14) 99722-3811`, encontrado em listagens públicas. Confirme com a clínica antes da publicação definitiva.
- Endereço utilizado: Av. Getúlio Vargas, 18-46, Sala 508, Bauru/SP.
- Trajetória: empresa aberta em 2018.
- O logotipo oficial foi aplicado no cabeçalho e no rodapé.
- O vídeo oficial de apresentação da equipe foi incorporado diretamente do Instagram.
- Fotos da galeria são imagens ilustrativas e aparecem identificadas como tal no site. Substitua pelos arquivos autorizados da clínica.
- Os cartões `TM` e `LM` continuam como recurso provisório até receber as fotos profissionais individuais.
- A área de cursos não inventa uma data. Ela usa “Novidades em breve” e uma lista de interesse até que a agenda real seja informada.

## Stack

- React + Vinext/Next
- Tailwind CSS 4
- CSS customizado para direção de arte e motion
- JavaScript/React para sliders, menu, FAQ, validação e mensagem dinâmica do WhatsApp

## Arquivos principais

- `app/page.tsx`: conteúdo, componentes e interações.
- `app/globals.css`: identidade visual, layout, motion e responsividade.
- `app/layout.tsx`: SEO básico, idioma e tipografia.

## Publicação

O projeto usa o fluxo de Sites. Para outra hospedagem, mantenha as dependências do `package.json`, execute o build indicado no projeto e publique o artefato gerado.
