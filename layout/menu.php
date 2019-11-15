<menu>
  <div class="logo">
    <img src="<?php echo $rootUrl . 'src/img/logo_white.svg' ?>">
    <h1>PWr Diving Crew</h1>
  </div>
  <ul>
    <?php

    function menu_item($page, $title) {
      global $rootUrl;
      $full_url = $rootUrl."pages/".$page.".php";
      echo
        '<li>
            <a href="'.$full_url.'">'.$title.'</a>
         </li>';
    }

    menu_item("404", "Wizja");
    menu_item("404", "Projekty");
    menu_item("404", "PWr Diving Crew");
    menu_item("404", "Załoga");
    menu_item("404", "Dziedziny");
    menu_item("404", "Kontakt");
    menu_item("404", "Partnerzy");

    ?>
    <li id="pl"><img src="<?php echo $rootUrl . 'src/img/pl.svg' ?>"></li>
    <li id="en"><img src="<?php echo $rootUrl . 'src/img/en.svg' ?>"></li>
  </ul>
</menu>
