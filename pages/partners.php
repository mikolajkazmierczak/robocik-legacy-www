<div class="partners">
  <h1 class="h1--huge" data-lang="partners_title"></h1>
  <p data-lang="partners_subtitle"></p>

  <?php

  $rootUrl = $_POST['rootUrl'];

  function partners_logo($file) {
    global $rootUrl;
    echo '<img src="'.$rootUrl.'src/img/partners/'.$file.'">';
  }
  ?>

  <hr>
  <div class="partners__logos">
    <?php
    partners_logo('1_5__cnc_kramet.png');
    ?>
  </div>

  <hr>
  <div class="partners__logos">
    <?php
    partners_logo('2_2__husarion.png');
    partners_logo('2_3__teledyne_technologies.png');
    partners_logo('2_4__wobit.png');
    partners_logo('2_5__zkz.png');
    partners_logo('2_6__zaopatrzenie24.png');
    partners_logo('2_7__manus.png');
    partners_logo('2_9__machina.png');
    partners_logo('2_10__helukabel.png');
    partners_logo('2_11__ppg.png');
    partners_logo('2_12__botland.png');
    partners_logo('2_13__weber.png');
    partners_logo('2_15__3dl_tech.png');
    partners_logo('2_16__poxico.png');
    partners_logo('2_17__wimarol.png');
    partners_logo('2_18__yato.png');
    partners_logo('2_20__alu_kwas.png');
    partners_logo('2_21__igus.png');
    partners_logo('2_22__zapech.png');
    partners_logo('2_23__ebmia.png');
    partners_logo('2_24__3d_connexcion.png');
    partners_logo('2_25__2b3d.png');
    ?>
  </div>
  <script>

  </script>
</div>
