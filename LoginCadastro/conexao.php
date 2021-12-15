<?php

$host = 'localhost';
$usuario = 'root';
$senha = '';
$db = 'interdisciplinar';

$conexao = mysqli_connect($host, $usuario, $senha, $db) or die('Não foi possível conectar');
$conexao->set_charset("utf8");
