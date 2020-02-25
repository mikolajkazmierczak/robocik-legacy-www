<menu>

  <?php
    function menu_item($page, $datalang, $title) {
      echo
        '<li class="menu__item">
            <a data-scroll data-lang="'.$datalang.'" href="'.$page.'">'.$title.'</a>
         </li>';
    }
  ?>

  <ul class="menu__list">
    <?php
      menu_item("#vision",     "menu_vision",     "Wizja");
      menu_item("#project",    "menu_project",    "Projekt");
      menu_item("#team",       "menu_team",       "Załoga");
      menu_item("#newsletter", "menu_newsletter", "Newsletter");
      menu_item("#contact",    "menu_contact",    "Kontakt");
    ?>
    <li class="menu__item">
      <a data-popup data-lang="menu_partners" href="<?php echo $rootUrl . 'pages/partners.php' ?>">Partnerzy</a>
    </li>
  </ul>

  <div id="lang">
    <div id="pl"> <img src="<?php echo $rootUrl . 'src/img/icons/menu/pl.svg' ?>"></div>
    <div id="eng"><img src="<?php echo $rootUrl . 'src/img/icons/menu/eng.svg' ?>"></div>
  </div>

</menu>
