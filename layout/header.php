<!doctype html>
<html lang="pl">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1">

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
  $rootUrl = (!empty($_SERVER['HTTPS']) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . '/RobocikOldNew/'; // <- While in production (normally there will be no folder in root)

  include 'menu.php';

  ?>
