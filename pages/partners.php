<div class="partners">
  <h1 class="h1--huge" data-lang="partners_title"></h1>
  <p data-lang="partners_subtitle"></p>

  <?php

  $rootUrl = $_POST['rootUrl'];

  function partners_logo($file, $webisteUrl) {
    global $rootUrl;
    echo '
      <a href="'.$webisteUrl.'">
        <img src="'.$rootUrl.'src/img/partners/'.$file.'">
      </a>
    ';
  }
  ?>

  <hr>
  <div class="partners__logos">
    <?php
    partners_logo('1_1__electronic_components.svg',
      'https://www.tme.eu/en/');
    partners_logo('1_2__pwr.png',
      'https://pwr.edu.pl/');
    partners_logo('1_3__cnc_kramet.png',
      'http://cnckramet.pl/index.php/en/');
    ?>
    <div class="partners__logos__br"></div>
    <?php
    partners_logo('1_4__dps.svg',
      'https://www.dps-software.pl/');
    partners_logo('1_5__lapp.svg',
      'https://www.lappgroup.com/');
    partners_logo('1_6__w4.png',
      'http://weka.pwr.edu.pl/');
    ?>
    <div class="partners__logos__br"></div>
    <?php
    partners_logo('1_7__basler.svg',
      'https://www.baslerweb.com/en/');
    partners_logo('1_8__gralmarine.png',
      'https://www.gralmarine.com/');
    ?>
  </div>

  <hr>
  <div class="partners__logos">
    <?php
    partners_logo('2_2__husarion.png',
      'http://husarion.com/');
    partners_logo('2_3__teledyne_technologies.png',
      'http://www.teledyne.com/');
    partners_logo('2_4__wobit.png',
      'http://www.wobit.com.pl/');
    partners_logo('2_5__zkz.png',
      'http://zkz.net.pl/pl/');
    partners_logo('2_6__zaopatrzenie24.png',
      'http://zaopatrzenie24.pl/');
    partners_logo('2_7__manus.png',
      'https://manus.pl/');
    partners_logo('2_9__machina.png',
      'http://www.machina-cnc.pl/');
    partners_logo('2_10__helukabel.png',
      'https://helukabel.pl/');
    partners_logo('2_11__ppg.png',
      'https://www.ppg.com/');
    partners_logo('2_12__botland.png',
      'https://botland.com.pl/pl/');
    partners_logo('2_13__weber.png',
      'https://www.pl.weber/');
    partners_logo('2_15__3dl_tech.png',
      'https://3dl.tech/?gclid=Cj0KCQjwla7nBRDxARIsADll0kBAhTgXjWrWz0gx5sdrwB-lYfhsQaaM1CFK2e36iqRGlKbInZi4tEwaArkZEALw_wcB');
    partners_logo('2_16__poxico.png',
      'https://www.poxico.pl/');
    partners_logo('2_17__wimarol.png',
      'https://www.wimarol.pl/');
    partners_logo('2_18__yato.png',
      'https://toya24.pl/');
    partners_logo('2_20__alu_kwas.png',
      'http://sklep.alukwas.pl/');
    partners_logo('2_21__igus.png',
      'https://www.igus.pl/');
    partners_logo('2_22__zapech.png',
      'http://zapech.com/');
    partners_logo('2_23__ebmia.png',
      'https://www.ebmia.pl/');
    partners_logo('2_24__3d_connexion.png',
      'https://www.3dconnexion.pl/');
    partners_logo('2_25__2b3d.png',
      'https://2b3d.pl/');
    ?>
  </div>
  <script>

  </script>
</div>
