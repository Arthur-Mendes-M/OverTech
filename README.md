# OverTech

Este foi o resultado da proposta de um site que falasse sobre o tema: Sistemas Embarcados, IoT(internet of things) e IoT na medicina.
Tal proposta foi dada pelo professor coordenador do interdisciplinar da minha sala no 2º ano do ensino médio, realizada pela ETEC em que estudo.

>⚠️ Por tanto, este projeto foi desenvolvido para fins acadêmicos em que participei. <br/>
>⚠️ A empresa citada por diversas vezes neste documento se trata de uma empresa fictícia criada para fins de representação usados no projeto.
<br/>

>🌐 Lembrando, esse projeto está <strong>hospedado</strong> na plataforma <i>InfinityFree</i>. <br/>
>🎉 Caso queira ver e testar, sinta-se avontade para acessa-lo por <a href="http://overtech.epizy.com/" target="_blank">AQUI</a>.

## Proposta

Nós desenvolvemos este site com a ideia semelhante a de um blog de notícias, porém nele juntamos representações visuais de notícias e artigos fictícios (a não ser o primeiro artigo - Sistemas Embarcados), criando uma interface que o usuario possa navegar para a experiência se assemelhar aida mais a de um produto real. <br/><br/>
Tendo como ideia central a junção de um canal de notícias e um blog de artigos, onde o usuario possa navegar e ter acesso a tudo que se é disponibilizado, além de poder fazer seu cadastro e login, com possibilidade de receber benefícios conforme formos atualizando nosso site.

## Integrantes 

🤵 Arthur Mendes (Eu) - Resonsável pela codificação das páginas (Landing, SE e erroNotFound) incluindo seus arquivos complementares (imagens, estilos...).<br/>
🤵 <a href="https://github.com/CaioRezende14" target="_blank">Caio Rezende</a> - Responsável por todo conteúdo textual de todas as páginas.<br/>
🤵 <a href="https://github.com/L27gabriel" target="_blank">Gabriel Lima</a> - Responsável pela codificação das páginas (cadastrar, form, login, logout e conexão) incluindo seus arquivos complementares (imagens, estilos...).<br/>


## Funcionalidades

### Todas as páginas contam com

<ul>
  <li><a href="#preloader">Preloader animado (pré-carregamento) [*Padrão*]</a></li>
  
  <li>
    Header (Cabeçalho) com Logo [*Padrão*]<br>
    🚨🚨Linkagens mudam conforme a página e este modelo não se aplica a página sobre a empresa
    <ul>
      <li>Fixo ao topo</li>
      <li>Reativo (ao clicar no menu é aberto a barra de navegação)</li>
      <li>
        <a href="#showMenu">Ao abri-lo:</a>
        <ul>
          <li>Cada seção de notícias organizada por categoria</li>
          <li>Links para saber mais sobre a empresa e seus desenvoledores</li>
          <li>Botão switch para trocar o tema do site de dark para light</li>
          <li>Botão que leva para a página de login e cadastro (caso esteja cadastrado e logado ele é substituído por um icone e o nome do usuario)</li>
          <li>Opção de fechamento do menu de forma animada</li>
        </ul>  
      </li>
    </ul>
  </li>
  
  <li><a href="#footer">Footer (Rodapé) [*Padrão*]</a></li>
</ul>

<br/>

### <a href="#landing">Landin page (Página inicial | de pouso)</a>

<ul>
  <li>
    <a href="#">Card para cada notícia</a>
    <ul>
      <li>Categorizado</li>
      <li>Intitulado [Para ler o título por completo basta posicionar o mouse sobre ele]</li>
      <li>
        🚨✋ Ao clicar em qualquer notícia/artigo que não seja a primeira (Sistemas embarcados), você será levado até nossa página de erro.<br/><br/>
        ❓ <i>Optamos por esse modelo pois, como tínhamos que desenvolver apenas uma página com os temas (Sistemas embarcados, IoT e IoT na medicina) criamos os demais cardes para representar visualmente notícias que teriam caso tivessem sido desenvolvidas.</i>
      </li>
    </ul>
  </li>
</ul>

<br/>

### <a href="#SE">Página de Sistemas Embarcados (SE)</a>

<ul>
  <li>
    <a href="#embed">Conteúdo em vídeo</a>
    <ul>
      <li>É possivel ao entrar na página, ver um embed do vídeo na tela, com a opção de ver um vídeo sobre o respectivo conteúdo, caso não queira ler todo texto contido no respectivo artigo/notícia.</li><br/>
      🚨✋ Ao abrir a respectiva página nos dispositivos mobile (móveis) não é possivel ver esta opção, pois o mesmo foi deslocada para a parte inferior da imagem inicial (banner), contída na página.<br/><br/>
      <li>Após ver o vídeo, ou caso deseje não ve-lo, é possivel fechar o embed clicando no 'X' que se encontra no canto superior direito da tela. Feito isso é possivel ter acesso normalmente a página.</li>
    </ul>
  </li>
  </br>
  
  <li>
    <a href="#conteudoTextual">Conteúdo textual</a><br/>
    Após optar pelo conteúdo em vídeo ou não, é apresentado o restante da página ao usuario. <br/>
    Nela temos em suma:
    <ul>
          <li>Título ao centro e no topo da página</li>
          <li><a href="#lists">Conteúdo textual, com imagens e listas retráteis</a></li>
          <li>
            Icones para ver ou ouvir o conteúdo, como alternativa ao conteúdo escrito </br>
            🚨✋ Lembrando que estes mesmos icones no mobile, se encontram na parte inferior da imagem inicial da página.
          </li>
    </ul>
  </li>
</ul>

### <a href="#overtech">Página sobre a empresa</a>

<ul>
  <li>
    <a href="#menuOvertech">Header (Cabeçalho) com logo</a>
    <ul>
      <li>Links para navegação interna</li>
      <li>
        Link para realizar o login <br/><br/>
        🚨✋ Caso você já esteja logado o link se torna 'logout' e caso você clique você será direcionado para a página principal deslogado.
      </li><br/>
      <li>Botão switch para alteração do tema</li>
    </ul>
  </li>
  
  <li>Botão para cadastro no topo da página</li>
  <i>Caso você já esteja cadastrado E logado, este botão não irá aparecer.</i>
  
  <li>Breve história da empresa</li>
  
  <li>Manual do usuário em Português e Inglês para download</li>
  
  <li><a href="#cardsOvertech">Cards</a> para cada PARTICIPANTE DA APRESENTAÇÃO e desenvolvimento do trabalho escolar que envolveu este projeto. Com seus nomes, funções no projeto e redes sociais.</li>
</ul>

<br/>

## Galeria

### Preloader animado (pré-carregamento)

<div id="preloader" align="center">

  <img src="ReadmeMedias/preloaderDark.gif" alt="Animação do pré-loader" width="60%"/>
  <p align="left"><i>Esse preloader é o mesmo em todas as páginas, a não ser que você altere o tema do site (no menu da página) e em seguida recarrege ou mude a página.</i></p>
  <p><strong>Fazendo isso, ao recarregar ou mudar a página, o preloader é carregado da seguinte forma:</strong></p>
  <br>
  <img src="ReadmeMedias/preloaderLight.gif" alt ="Animação do pré-loader no tema light" width="60%"/>
  
</div>

### Landin Page (Página inicial | de pouso)

>Landing Page
<div id="landing" align="center" display="inline_block">
  <img src="ReadmeMedias/LandingDesktopDark.png" alt="Print da página inicial no desktop" width="60%">
  <img src="ReadmeMedias/LandingDesktopLight.png" alt="Print da página inicial no desktop modo light" width="60%">
  <div display="inline_block">
    <img src="ReadmeMedias/LandingMobileDark.png" alt="Print da página inicial no mobile"  width="200em">
    <img src="ReadmeMedias/LandingMobileLight.png" alt="Print da página inicial no moblie modo light" width="200em">
  </div>
</div><br/>

>Menu
<div id="showMenu" align="center" display="inline_block">
  <img src="ReadmeMedias/menuLandingDesktopDark.png" alt="Print do menu aberto na página inicial no desktop" width="60%">
  <img src="ReadmeMedias/menuLandingDesktopLight.png" alt="Print do menu aberto na página inicial no desktop modo light" width="60%">
  
  <div display="inline_block">
     <img src="ReadmeMedias/menuLandingMobileDark.png" alt="Print do menu aberto na página inicial no mobile" width="200em">
     <img src="ReadmeMedias/menuLandingMobileLight.png" alt="Print do menu aberto na página inicial no moblie modo light" width="200em">
  </div>
</div><br/>

>Notícias
<div id="cards" align="center" display="inline_block">
  <img src="ReadmeMedias/noticiasDesktopDark.png" alt="Print dos cards de notícia da página inicial no desktop" width="60%">
  <img src="ReadmeMedias/noticiasDesktopLight.png" alt="Print dos cards de notícia da página inicial no desktop modo light" width="60%">

  <div display="inline_block">
      <img src="ReadmeMedias/noticiasMobileDark.png" alt="Print dos cards de notícia da página inicial no mobile" width="200em">
      <img src="ReadmeMedias/noticiasMobileLight.png" alt="Print dos cards de notícia da página inicial no moblie modo light" width="200em">
  </div>
</div><br/>

>Footer (rodapé) padrão
<div id="footer" align="center" display="inline_block">
  <img src="ReadmeMedias/footerDesktopDark.png" alt="Print do rodapé da página inicial no desktop" width="60%">
  <img src="ReadmeMedias/footerDesktopLight.png" alt="Print do rodapé da página inicial no desktop modo light" width="60%">
  
  <div display="inline_block">
      <img src="ReadmeMedias/footerMobileDark.png" alt="Print do rodapé da página inicial no mobile" width="200em">
      <img src="ReadmeMedias/footerMobileLight.png" alt="Print do rodapé da página inicial no moblie modo light" width="200em">
  </div>
</div>

<br/>
<br/>

### Sistemas Embarcados (Página correspondente a uma notícia/artigo criado)

>Conteúdo alternativo (em vídeo)
<div id="embed" align="center" display="inline_block">
  <img src="ReadmeMedias/embedSEDesktopDark.png" alt="Print do embed do conteúdo em vídeo na página SE no desktop" width="60%">
  <img src="ReadmeMedias/embedSEDesktopLight.png" alt="Print do embed do conteúdo em vídeo na página SE no desktop modo light" width="60%">
  
  <div display="inline_block">
    <img src="ReadmeMedias/embedSEMobile.png" alt="Print do embed do conteúdo em vídeo na página SE no mobile" width="200em">
  </div>
</div><br/>

>Página de sistemas embarcados
<div id="SE" align="center" display="inline_block" >
  <img src="ReadmeMedias/SEDesktopDark.png" alt="Print da página SE no desktop" width="60%">
  <img src="ReadmeMedias/SEDesktopLight.png" alt="Print da página SE no desktop modo light" width="60%">
</div><br/>

>Conteúdo textual
<div id="conteudoTextual" align="center" display="inline_block">
  <img src="ReadmeMedias/SETextoDesktopDark.png" alt="Print do conteúdo textual na página SE no desktop" width="60%">
  <img src="ReadmeMedias/SETextoDesktopLight.png" alt="Print do conteúdo textual na página SE no desktop modo light" width="60%">
  </div>
</div>

### Página sobre a empresa

>Banner
<div id="overtech" align="center" display="inline_block">
  <img src="ReadmeMedias/bannerOvertechDesktopDark.png" alt="Print do embed do conteúdo em vídeo na página SE no desktop" width="60%">
  <img src="ReadmeMedias/bannerOvertechDesktopLight.png" alt="Print do embed do conteúdo em vídeo na página SE no desktop modo light" width="60%">
  
  <div display="inline_block">
      <img src="ReadmeMedias/bannerOvertechMobileDark.png" alt="Print do embed do conteúdo em vídeo na página SE no mobile" width="200em">
      <img src="ReadmeMedias/bannerOvertechMobileLight.png" alt="Print do embed do conteúdo em vídeo na página SE no moblie modo light" width="200em">
  </div>
</div><br/>

>Menu mobile
<div id="menuOvertech" align="center" display="inline_block">
  <img src="ReadmeMedias/menuOvertechMobileDark.jpeg" alt="Print do menu aberto na página sobre a empresa no mobile" width="200em">
  <img src="ReadmeMedias/menuOvertechMobileLight.jpeg" alt="Print do menu aberto na página sobre a empresa no moblie modo light" width="200em">
</div><br/>

>Cards
<div id="cardsOvertech" align="center" display="inline_block">
  <img src="ReadmeMedias/cardsOvertechDesktopDark.png" alt="Print dos cards dos integrantes na página sobre a empresa no desktop" width="60%">
  <img src="ReadmeMedias/cardsOvertechDesktopLight.png" alt="Print dos cards dos integrantes na página sobre a empresa no desktop modo light" width="60%">
  
  <div display="inline_block">
      <img src="ReadmeMedias/cardsOvertechMobileDark.png" alt="Print dos cards dos integrantes na página sobre a empresa no mobile" width="200em">
      <img src="ReadmeMedias/cardsOvertechMobileLight.png" alt="Print dos cards dos integrantes na página sobre a empresa no moblie modo light" width="200em">
  </div>
</div>
