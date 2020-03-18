<?php include 'layout/header.php'; ?>

  <div class="banner-wrapper">
    <section class="section-banner-main cols">
      <img class="section-banner-main__logo" src="<?php echo $rootUrl . 'src/img/logo_white.svg' ?>">
      <div class="section-banner-main__wavesbg">
        <img src="<?php echo $rootUrl . 'src/img/wavesbg/1.svg' ?>">
        <img src="<?php echo $rootUrl . 'src/img/wavesbg/2.svg' ?>">
        <img src="<?php echo $rootUrl . 'src/img/wavesbg/3.svg' ?>">
        <img src="<?php echo $rootUrl . 'src/img/wavesbg/4.svg' ?>">
        <img src="<?php echo $rootUrl . 'src/img/wavesbg/5.svg' ?>">
        <img src="<?php echo $rootUrl . 'src/img/wavesbg/6.svg' ?>">
        <img src="<?php echo $rootUrl . 'src/img/wavesbg/7.svg' ?>">
        <img src="<?php echo $rootUrl . 'src/img/wavesbg/8.svg' ?>">
        <img src="<?php echo $rootUrl . 'src/img/wavesbg/9.svg' ?>">
        <img src="<?php echo $rootUrl . 'src/img/wavesbg/10.svg' ?>">
        <img src="<?php echo $rootUrl . 'src/img/wavesbg/11.svg' ?>">
        <img src="<?php echo $rootUrl . 'src/img/wavesbg/12.svg' ?>">
        <img src="<?php echo $rootUrl . 'src/img/wavesbg/13.svg' ?>">
      </div>
      <div class="section-banner-main__text section__text--project col-2-7">
        <h2 data-lang="banner_subtitle"></h2>
        <h1 class="h1--huge" data-lang="banner_title"></h1>
        <p data-lang="banner_p_1"></p>
        <p data-lang="banner_p_2"></p>
      </div>
      <div class="lax section-banner-main__img col-9-6"
           data-lax-translate-y_small="0 0, vh 200 | speed=0.75"
           data-lax-translate-x_small="0 0, vh -250 | speed=0.75"
           data-lax-translate-y_medium="0 0, vh 600 | speed=0.5"
           data-lax-translate-x_medium="0 0, vh -500 | speed=0.5">
        <img src="<?php echo $rootUrl . 'src/img/rov_4_0/rov_underwater.png' ?>"
             alt="Drone scanning underwater">
      </div>
    </section>

    <section id="vision" class="section-graphics cols">
      <div class="section-graphics__elem col-3-3">
        <img src="<?php echo $rootUrl . 'src/img/icons/graphics/vision.png' ?>"
             alt="Vision icon">
        <h2 data-lang="vision_vision"></h2>
        <p data-lang="vision_vision_p"></p>
      </div>
      <div class="section-graphics__elem col-7-3">
        <img src="<?php echo $rootUrl . 'src/img/icons/graphics/mission.png' ?>"
             alt="Mission icon">
        <h2 data-lang="vision_mission"></h2>
        <p data-lang="vision_mission_p"></p>
      </div>
      <div class="section-graphics__elem col-11-3">
        <img src="<?php echo $rootUrl . 'src/img/icons/graphics/values.png' ?>"
             alt="Values icon">
        <h2 data-lang="vision_values"></h2>
        <p data-lang="vision_values_p"></p>
      </div>
    </section>

    <div class="wave-bar">
      <img class="lax" src="<?php echo $rootUrl . 'src/img/wave.svg?v=1' ?>"
           data-lax-preset_small="rightToLeft-0.25"
           data-lax-preset_medium="rightToLeft-0.5"
           alt="Wave image">
    </div>
  </div>


  <section id="project" class="section-drone cols">
    <div class="section-drone__text section__text--project col-3-6">
      <img src="">
      <h2 data-lang="project_subtitle"></h2>
      <h1 class="h1--huge" data-lang="project_title"></h1>
      <p data-lang="project_p_1"></p>
      <p data-lang="project_p_2"></p>
      <p data-lang="project_p_3"></p>
    </div>
    <div class="section-drone__img col-9-5">
      <img src="<?php echo $rootUrl . 'src/img/rov_4_0/auv.jpg' ?>"
           alt="AUV 3D render">
    </div>
    <div class="section-drone__icons col-3-11">
      <img src="<?php echo $rootUrl . 'src/img/icons/auv_inside/1_depth.svg' ?>"
           alt="InsideAUV: Even 100m underwater">
      <img src="<?php echo $rootUrl . 'src/img/icons/auv_inside/2_axes.svg' ?>"
           alt="InsideAUV: 6 axes of movement">
      <img src="<?php echo $rootUrl . 'src/img/icons/auv_inside/3_load.svg' ?>"
           alt="InsideAUV: Even 0.5kg of load">
      <img src="<?php echo $rootUrl . 'src/img/icons/auv_inside/4_weight.svg' ?>"
           alt="InsideAUV: 37kg of weight">
      <img src="<?php echo $rootUrl . 'src/img/icons/auv_inside/5_cameras.svg' ?>"
           alt="InsideAUV: Four HD cameras">
      <img src="<?php echo $rootUrl . 'src/img/icons/auv_inside/6_sound.svg' ?>"
           alt="InsideAUV: Sound recognition">
      <img src="<?php echo $rootUrl . 'src/img/icons/auv_inside/7_engine.svg' ?>"
           alt="InsideAUV: Eight engines 3kW each">
      <img src="<?php echo $rootUrl . 'src/img/icons/auv_inside/8_radar.svg' ?>"
           alt="InsideAUV: Radar">
      <img src="<?php echo $rootUrl . 'src/img/icons/auv_inside/9_nvidia.svg' ?>"
           alt="InsideAUV: Nvidia Xavier">
      <img src="<?php echo $rootUrl . 'src/img/icons/auv_inside/10_torpedes.svg' ?>"
           alt="InsideAUV: Six torpedes">
      <img src="<?php echo $rootUrl . 'src/img/icons/auv_inside/11_xsens.svg' ?>"
           alt="InsideAUV: Xsens">
    </div>
  </section>



  <section id="team" class="section-team cols">
    <div class="section-team__pop col-2-13">
      <div class="cols">
        <div class="section-team__img col-3-3">
          <img src="<?php echo $rootUrl . 'src/img/icons/team/crew.png' ?>"
               alt="Crew icon">
        </div>
        <div class="section-team__text col-7-7">
          <h1 data-lang="team_title"></h1>
          <p data-lang="team_p"></p>
        </div>
      </div>

      <section class="section-graphics section-divisions cols">
        <div class="section-graphics__elem col-3-2">
          <img src="<?php echo $rootUrl . 'src/img/icons/divisions/electronics.svg' ?>"
               alt="Electronics icon">
          <h2 data-lang="team_divisions_electronics"></h2>
          <p data-lang="team_divisions_electronics_p"></p>
        </div>
        <div class="section-graphics__elem col-6-2">
          <img src="<?php echo $rootUrl . 'src/img/icons/divisions/software.svg' ?>"
               alt="Software icon">
          <h2 data-lang="team_divisions_software"></h2>
          <p data-lang="team_divisions_software_p"></p>
        </div>
        <div class="section-graphics__elem col-9-2">
          <img src="<?php echo $rootUrl . 'src/img/icons/divisions/construction.svg' ?>"
               alt="Construction icon">
          <h2 data-lang="team_divisions_construction"></h2>
          <p data-lang="team_divisions_construction_p"></p>
        </div>
        <div class="section-graphics__elem col-12-2">
          <img src="<?php echo $rootUrl . 'src/img/icons/divisions/marketing.svg' ?>"
               alt="Marketing icon">
          <h2 data-lang="team_divisions_marketing"></h2>
          <p data-lang="team_divisions_marketing_p"></p>
        </div>
      </section>
    </div>

    <div class="section-team__slider col-2-13 cols">
      <div class="slider__arrow slider__arrow--previous col-1-1">
        <img src="<?php echo $rootUrl . 'src/img/icons/team/previous.svg' ?>"
             alt="Arrow pointing left (next member)">
      </div>
      <div class="slider__info col-3-6">
        <div class="slider__tag">
          <div class="slider__progress-bar col-1-15"></div>
          <h4>#RobocikPeople</h4>
        </div>
        <h1 class="slider__el slider__name h1--huge"></h1>
        <h3 class="slider__el slider__role"></h3>
        <h4 class="slider__el slider__contact"></h4>
        <p  class="slider__el slider__text"></p>
      </div>
      <div class="slider__photo col-10-4"
           alt="Crew member photo">
        <div class="loader"><div></div><div></div></div>
      </div>
      <div class="slider__arrow slider__arrow--next col-15-1">
        <img src="<?php echo $rootUrl . 'src/img/icons/team/next.svg' ?>"
             alt="Arrow pointing right (previous member)">
      </div>
    </div>
  </section>


  <section class="section-contact cols">
    <div id="newsletter" class="section-contact__newsletter col-5-7">
      <h1 data-lang="newsletter_title"></h1>
      <p data-lang="newsletter_p_1"></p>
      <p data-lang="newsletter_p_2"></p>
      <p data-lang="newsletter_p_3"></p>
<!--      --><?php //include 'layout/mailchimp_signup_form.php'; ?>
    </div>

    <div id="contact" class="section-contact__connections col-5-8">
      <h1 data-lang="contact_title">Kontakt</h1>
      <div class="cols">

        <div class="col-1-7">
          <div class="section-contact__elem">
            <h4 data-lang="contact_location">Siedziba :</h4>
            <div class="section-contact__tile">
              <img src="<?php echo $rootUrl . 'src/img/icons/contact/location.png' ?>"
                   alt="Location icon">
              <div class="section-contact__text">
                <h5 data-lang="contact_location_subtitle">Politechnika Wrocławska</h5>
                <p data-lang="contact_location_p_1">Łukasiewicza 7/9, bud. B-9, p.40</p>
                <p data-lang="contact_location_p_2">50-371 Wrocław</p>
              </div>
            </div>
          </div>
          <div class="section-contact__elem">
            <h4 data-lang="contact_email">E-mail :</h4>
            <div class="section-contact__tile">
              <img src="<?php echo $rootUrl . 'src/img/icons/contact/email.png' ?>"
                   alt="Email icon">
              <div class="section-contact__text">
                <p><a href="mailto:robocikb9@gmail.com" data-lang="contact_email_a_1">robocikb9@gmail.com</a></p>
                <p><a href="mailto:robocikb9marketing@gmail.com" data-lang="contact_email_a_2">robocikb9marketing@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-9-7">
          <div class="section-contact__elem">
            <h4 data-lang="contact_phone">Kontakt telefoniczny :</h4>
            <div class="section-contact__tile">
              <img src="<?php echo $rootUrl . 'src/img/icons/contact/phone.png' ?>"
                   alt="Phone icon">
              <div class="section-contact__text">
                <h5 data-lang="contact_phone_subtitle">Wiceprezes ds. Organizacyjnych i Promocjii</h5>
                <p data-lang="contact_phone_p">Ola Maziarz : +48 371 046 078</p>
              </div>
            </div>
          </div>
          <div class="section-contact__elem">
            <h4 data-lang="contact_sm">Znajdź nas na :</h4>
            <div class="section-contact__tile">
              <a href="https://zw.linkedin.com/company/ko%C5%82o-naukowe-automatyki-i-robotyki-robocik" target="_blank">
                <img src="<?php echo $rootUrl . 'src/img/icons/contact/linkedin.png' ?>"
                     alt="LinkedIn icon">
              </a>
              <a href="https://www.facebook.com/knrobocik/" target="_blank">
                <img src="<?php echo $rootUrl . 'src/img/icons/contact/facebook.png' ?>"
                     alt="Facebook icon">
              </a>
              <a href="https://www.instagram.com/robocikpwr/?hl=en" target="_blank">
                <img src="<?php echo $rootUrl . 'src/img/icons/contact/instagram.png' ?>"
                     alt="Instagram icon">
              </a>
              <a href="https://www.youtube.com/channel/UCWaBdSXJdCexMjQ0nd5RBdw" target="_blank">
                <img src="<?php echo $rootUrl . 'src/img/icons/contact/youtube.svg' ?>"
                     alt="Youtube icon">
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <?php include 'layout/copyright.php'; ?>

<?php include 'layout/footer.php'; ?>
