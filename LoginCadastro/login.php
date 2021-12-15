<?php
session_start();
include('conexao.php');

if (empty($_POST['email']) || empty($_POST['senha'])) {
    header('Location: form.php');
    exit();
}

$email = mysqli_real_escape_string($conexao, $_POST['email']);
$senha = mysqli_real_escape_string($conexao, $_POST['senha']);

$query = "SELECT nome FROM usuario WHERE email = '{$email}' and senha = md5('{$senha}') ";

$result = mysqli_query($conexao, $query);

$row = mysqli_num_rows($result);

if ($row == 1) {
    $nome = mysqli_fetch_assoc($result);
    $_SESSION['nome'] = $nome['nome'];
    header('Location: ../index.html?' . $_SESSION['nome']);
    exit();
} else {
    $_SESSION['nao_autenticado'] = true;
    header('Location: form.php');
    exit();
}
