<menu>
  <ul class="menu__list">
    <?php

    function menu_item($page, $title) {
      global $rootUrl;
      echo
        '<li class="menu__item">
            <a href="'.$page.'">'.$title.'</a>
         </li>';
    }

    menu_item("#vision", "Wizja");
    menu_item("#project", "Projekt");
    menu_item("#divisions", "Działy");
    menu_item("#team", "Załoga");
    menu_item("#contact", "Kontakt");
    menu_item($rootUrl . 'pages/sponsors.php', "Partnerzy");

    ?>
  </ul>
  <div id="lang">
    <div id="pl"><img src="<?php echo $rootUrl . 'src/img/icons/pl.svg' ?>"></div>
    <div id="en"><img src="<?php echo $rootUrl . 'src/img/icons/en.svg' ?>"></div>
  </div>
</menu>
