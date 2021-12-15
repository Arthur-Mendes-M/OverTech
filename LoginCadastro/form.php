<?php
session_start();
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,400;1,700&display=swap" rel="stylesheet">
    <!-- Favivon preferencia: light -->
    <link rel="shortcut icon" href="FaviconsDark/android-chrome-512x512.png" type="image/x-icon" media="(prefers-color-scheme: light)">
    <link rel="apple-touch-icon" sizes="180x180" href="FaviconsDark/apple-touch-icon.png" media="(prefers-color-scheme: light)">
    <link rel="icon" type="image/png" sizes="32x32" href="FaviconsDark/favicon-32x32.png" media="(prefers-color-scheme: light)">
    <link rel="icon" type="image/png" sizes="16x16" href="FaviconsDark/favicon-16x16.png" media="(prefers-color-scheme: light)">
    <link rel="manifest" href="FaviconsDark/site.webmanifest" media="(prefers-color-scheme: light)">

    <!-- Favivon preferencia: dark -->
    <link rel="shortcut icon" href="FaviconsLight/android-chrome-512x512.png" type="image/x-icon" media="(prefers-color-scheme: dark)">
    <link rel="apple-touch-icon" sizes="180x180" href="FaviconsLight/apple-touch-icon.png" media="(prefers-color-scheme: dark)">
    <link rel="icon" type="image/png" sizes="32x32" href="FaviconsLight/favicon-32x32.png" media="(prefers-color-scheme: dark)">
    <link rel="icon" type="image/png" sizes="16x16" href="FaviconsLight/favicon-16x16.png" media="(prefers-color-scheme: dark)">
    <link rel="manifest" href="FaviconsLight/site.webmanifest" media="(prefers-color-scheme: dark)">

    <!-- Favivon -->

    <script defer src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc" crossorigin="anonymous"></script>

    <title>Login e Cadastro | OverTech</title>

</head>

<body>

    <header>
        <h1 class="logo"><a href="../index.html">OverTech</a></h1>

        <nav id="menu">
            <div id="changeTheme">
                <input type="checkbox" id="theme">
                <label for="theme" id="boxLabelTheme">
                    <i class="far fa-moon" id="iconThemeMoon"></i>
                    <i class="far fa-sun" id="iconThemeSun"></i>
                </label>
            </div>
        </nav>
    </header>

    <div class="elementosComposicao">
        <svg class="lineBottom">
            <line x1="0" y1="0" x2="90%" stroke="url(#paint0_linear)"></line>
            <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="100%" y2="497.325" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#06FF88"></stop>
                    <stop offset="0.385529" stop-color="#5201FF" stop-opacity="0.87"></stop>
                    <stop offset="0.715007" stop-color="#11F1FF" stop-opacity="0.74"></stop>
                </linearGradient>
            </defs>
        </svg>

        <svg class="lineLeft1">
            <line x1="0" y1="100%" x2="0" stroke="url(#paint0_linear)"></line>
            <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="100%" y2="497.325" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#06FF88"></stop>
                    <stop offset="0.385529" stop-color="#5201FF" stop-opacity="0.87"></stop>
                    <stop offset="0.715007" stop-color="#11F1FF" stop-opacity="0.74"></stop>
                </linearGradient>
            </defs>
        </svg>

        <svg class="lineLeft2">
            <line x1="0" y1="100%" x2="0" stroke="url(#paint0_linear)"></line>
            <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="100%" y2="497.325" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#06FF88"></stop>
                    <stop offset="0.385529" stop-color="#5201FF" stop-opacity="0.87"></stop>
                    <stop offset="0.715007" stop-color="#11F1FF" stop-opacity="0.74"></stop>
                </linearGradient>
            </defs>
        </svg>

        <svg class="lineTop">
            <line x1="0" y1="0" x2="100%" stroke="url(#paint0_linear)"></line>
            <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="100%" y2="497.325" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#06FF88"></stop>
                    <stop offset="0.385529" stop-color="#5201FF" stop-opacity="0.87"></stop>
                    <stop offset="0.715007" stop-color="#11F1FF" stop-opacity="0.74"></stop>
                </linearGradient>
            </defs>
        </svg>

        <svg class="lineRight1">
            <line x1="0" y1="100%" x2="0" stroke="url(#paint0_linear)"></line>
            <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="100%" y2="497.325" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#06FF88"></stop>
                    <stop offset="0.385529" stop-color="#5201FF" stop-opacity="0.87"></stop>
                    <stop offset="0.715007" stop-color="#11F1FF" stop-opacity="0.74"></stop>
                </linearGradient>
            </defs>
        </svg>

        <svg class="lineRight2">
            <line x1="0" y1="100%" x2="0" stroke="url(#paint0_linear)"></line>
            <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="100%" y2="497.325" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#06FF88"></stop>
                    <stop offset="0.385529" stop-color="#5201FF" stop-opacity="0.87"></stop>
                    <stop offset="0.715007" stop-color="#11F1FF" stop-opacity="0.74"></stop>
                </linearGradient>
            </defs>
        </svg>
    </div>

    <div class="container">
        <div class="conteudo primeiroConteudo">
            <div class="primeiraColuna">
                <h2 class="titulo tituloPrimario">Bem vindo(a) de volta!</h2>
                <button id="signin" class="btn btnPrimario">Logar</button>
            </div>


            <div class="segundaColuna">

                <!-- phpCadastro -->

                <?php
                if (isset($_SESSION['status_cadastro'])) :
                ?>

                    <div id="cadastroSucesso">
                        <p>Cadastrado com sucesso!</p>
                        <p>Faça login!</p>
                    </div>
                <?php
                    unset($_SESSION['status_cadastro']);
                endif;
                ?>

                <?php
                if (isset($_SESSION['usuario_existe'])) :
                ?>

                    <div id="cadastroExiste">

                        <p>Email já existe! Informe outro e tente novamente.</p>

                    </div>
                <?php
                    unset($_SESSION['usuario_existe']);
                endif;
                ?>

                <!-- Fim phpCadastro -->


                <h2 class="titulo tituloSecundario">Crie sua conta!</h2>
                <form method="POST" action="cadastrar.php" class="form">
                    <input class="nome" type="text" name="nome" id="nome" required placeholder="Nome" autofocus maxlength="40">

                    <input class="email" type="email" name="email" id="email" required placeholder="Email" autofocus maxlength="40">

                    <input class="senha" type="password" name="senha" id="senha" required placeholder="Senha" autofocus minlength="6" maxlength="16">

                    <div id="termos">
                        <h3>Ao cadastrar, você concorda com nossos <a href="#">Termos de uso</a> e <br> </h3>

                        <h3 class="politicaPrivacidade">a <a href="#">Política de privacidade</a> .</h3>

                    </div>

                    <button type="submit" class="btn btnSecundario">cadastrar</button>
                </form>
            </div>
        </div>

        <div class="conteudo segundoConteudo">
            <div class="primeiraColuna">
                <h2 class="titulo tituloPrimario">Bem vindo(a)!</h2>
                <button id="signup" class="btn btnPrimario">Cadastrar</button>
            </div>

            <div class="segundaColuna">

                <!-- phpLogin -->

                <?php
                if (isset($_SESSION['nao_autenticado'])) :
                ?>
                    <div id="erroLogin">

                        <p>ERRO: Email ou senha inválidos.</p>

                    </div>
                <?php
                endif;
                unset($_SESSION['nao_autenticado']);
                ?>

                <!-- Fim phpLogin -->

                <h2 class="titulo tituloSecundario">Faça login!</h2>
                <form class="form" method="POST" action="login.php">

                    <input class="email" type="email" name="email" id="email" required placeholder="Email" autofocus maxlength="40">

                    <input class="senha" type="password" name="senha" id="senha" required placeholder="Senha" autofocus minlength="6" maxlength="16">

                    <a class="esqueciSenha" href="#">Esqueci minha senha</a> <br>

                    <button type="submit" class="btn btnSecundario">Logar</button>
                </form>
            </div>
        </div>
    </div>
    <script src="js/app.js"></script>
</body>

</html>