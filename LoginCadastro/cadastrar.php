<?php
    session_start();
    include('conexao.php');

    $nome = mysqli_real_escape_string($conexao, trim($_POST['nome']));
    $email = mysqli_real_escape_string($conexao, trim($_POST['email']));
    $senha = mysqli_real_escape_string($conexao, trim(md5($_POST['senha'])));

    $sql = "SELECT count(*) as total FROM usuario WHERE email = '$email'";

    $result = mysqli_query($conexao, $sql);

    $row = mysqli_fetch_assoc($result);

    if($row['total'] == 1) {
        $_SESSION['usuario_existe'] = true;
        header('Location: form.php');
        exit;
    }
    
    $sql = "INSERT INTO usuario(nome, email, senha, dataCadastro) VALUES ('$nome', '$email', '$senha', NOW())";

    if($conexao->query($sql) === TRUE) {
        $_SESSION['status_cadastro'] = true;
    }

    $conexao->close();
    header('Location: form.php');
    exit;

?>