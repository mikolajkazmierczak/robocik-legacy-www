<!doctype html>
<html lang="pl">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="height=device-height, width=device-width,
                      initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">

  <title>KN Robocik</title>
  <meta name="description"
        content="Strona internetowa Koła Naukowego Automatyki i Robotyki Robocik działającego na Politechnice Wrocławskiej">
  <meta name="keywords"
        content="koło naukowe robocik, kn robocik, pwr diving crew, politechnika wrocławska, pwr, robot, roboty, robotyka, automatyka, ekologia, ekologiczne, nauka, naukowe, innowacja, innowacyjne">

  <link rel="stylesheet" href="style.css">
</head>

<body>
  <?php

  $rootUrl = (!empty($_SERVER['HTTPS']) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . '/'; // Copy the absolute url from the browser
//  $rootUrl = (!empty($_SERVER['HTTPS']) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . '/mikolaj/'; // For reedkalisz.pl/mikolaj
  $rootUrl = (!empty($_SERVER['HTTPS']) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . '/RobocikOldNew/'; // While in production

  ?>

  <script> const rootUrl = '<?php echo $rootUrl ?>'; // Making the $rootUrl available in JS </script>

  <header>
    <div class="logo">
      <a class="logo__link" href="<?php echo $rootUrl ?>">
        <img class="logo__icon" src="<?php echo $rootUrl . 'src/img/logo_white.svg' ?>">
        <h1 class="logo__title">Robocik</h1>
      </a>
    </div>
    <div class="menu-button">
      <img class="menu-button__icon menu-button__icon--open menu-button__icon--active" src="<?php echo $rootUrl . 'src/img/menu/menu.svg' ?>">
      <img class="menu-button__icon menu-button__icon--close" src="<?php echo $rootUrl . 'src/img/menu/close.svg' ?>">
    </div>
    <?php include 'menu.php'; ?>
  </header>

<!--  <div class="site-wrapper">-->
