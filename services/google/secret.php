<?php
session_start();
require 'vendor/autoload.php'
?>

<!DOCTYPE HTML>
<body> <?= dump($_SESSION) ?>
</body>
