<?php include 'layout/header.php'; ?>

  <div class="banner-wrapper">
    <section class="section-banner-main cols">
      <img class="section-banner-main__bg" src="<?php echo $rootUrl . 'src/img/waves_bg.svg' ?>"
           alt="Background waves">
      <div class="section-banner-main__text section__text--project col-2-7">
        <h2>Koło Naukowe</h2>
        <h1 class="h1--huge"><span>PW</span>R <span>D</span>IVING <span>C</span>REW</h1>
        <p>Koło Naukowe<br>Automatyki i Robotyki „Robocik”<br>to organizacja studencka na<br>Politechnice Wrocławskiej.</p>
        <p>Cel ‒ zabawa nauką.<br>Konsekwencją ‒ innowacja.</p>
        <p>Studencki żywioł i<br>uczelniany profesjonalizm.</p>
      </div>
      <div class="rellax section-banner-main__img col-9-6"
           data-rellax-vertical-scroll-axis="xy"
           data-rellax-horizontal-speed="2"
           data-rellax-vertical-speed="-5">
        <img src="<?php echo $rootUrl . 'src/img/rov_4_0/rov_underwater.png' ?>"
             alt="Drone scanning underwater">
      </div>
    </section>

    <section class="section-graphics cols">
      <div class="scroll-anchor" id="vision"></div>
      <div class="section-graphics__elem col-3-3">
        <img src="<?php echo $rootUrl . 'src/img/icons/graphics/vision.png' ?>"
             alt="Vision icon">
        <h2>Wizja</h2>
        <p>Rozwój indywidualny<br>poprzez współdziałanie.</p>
      </div>
      <div class="section-graphics__elem col-7-3">
        <img src="<?php echo $rootUrl . 'src/img/icons/graphics/mission.png' ?>"
             alt="Mission icon">
        <h2>Misja</h2>
        <p>Podwyższać kompetencje<br>i równocześnie bawić.</p>
      </div>
      <div class="section-graphics__elem col-11-3">
        <img src="<?php echo $rootUrl . 'src/img/icons/graphics/values.png' ?>"
             alt="Values icon">
        <h2>Wartości</h2>
        <p>Wizjonerstwo, kooperacja,<br>integracja, wiedza,<br>motywacja.</p>
      </div>
    </section>

    <div class="wave-bar">
      <img class="lax" src="<?php echo $rootUrl . 'src/img/wave.svg' ?>"
           data-lax-preset_mobile="rightToLeft-0.25"
           data-lax-preset_tablet="rightToLeft-0.5"
           alt="Wave image">
    </div>
    <script src="https://cdn.jsdelivr.net/npm/lax.js"></script>
    <script>
      window.onload = function() {
        lax.setup({
          breakpoints: { mobile: 0, tablet: 780 }
        }) // init
        const updateLax = () => {
          lax.update(window.scrollY)
          window.requestAnimationFrame(updateLax)
        }
        window.requestAnimationFrame(updateLax)
      }
    </script>
  </div>


  <section class="section-drone cols">
    <div class="scroll-anchor" id="project"></div>
    <div class="section-drone__text section__text--project col-3-6">
      <h2>Pionierski projekt:</h2>
      <h1 class="h1--huge"><span>PW</span>R <span>D</span>IVING <span>C</span>REW</h1>
      <p>Inżynieria pojazdów podwodnych to niszowa,<br>lecz bardzo istotna gałąź nauki.</p>
      <p>Nasza organizacja zajmuje się budową<br>robotów pracujących w środowisku wodnym.</p>
      <p>Konstrukcje te mogą być używane do zadań<br>eksploracyjnych, ratowniczych oraz militarnych.</p>
      <div class="section-drone__icons">
        <img src="<?php echo $rootUrl . 'src/img/icons/tech/auv_inside_1.png' ?>"
             alt="Icons of: manipulator (0.5kh weight, 360deg), even a 100m underwater, Nvidia Xavier">
        <img src="<?php echo $rootUrl . 'src/img/icons/tech/auv_inside_2.png' ?>"
             alt="Icons of: weight 37kg, hears sounds, 4 HD cameras, Xsens">
        <img src="<?php echo $rootUrl . 'src/img/icons/tech/auv_inside_3.png' ?>"
             alt="Icons of: 8 engines - 3kW each, 6 torpedes, location">
      </div>
    </div>
    <div class="section-drone__img col-9-5">
      <img src="<?php echo $rootUrl . 'src/img/rov_4_0/auv.png' ?>"
           alt="AUV 3D render">
    </div>
  </section>



  <section class="section-team cols">
    <div class="scroll-anchor" id="team"></div>

    <div class="section-team__pop col-2-13">
      <div class="cols">
        <div class="section-team__img col-3-3">
          <img src="<?php echo $rootUrl . 'src/img/icons/team/crew.png' ?>"
               alt="Crew icon">
        </div>
        <div class="section-team__text col-7-7">
          <h1>Bo najważniejsi są ludzie</h1>
          <p>Jesteśmy ambitnymi studentami, którzy nie wiedzą co znaczy niemożliwe. W naszej organizacji każdy ma ściśle określoną rolę, jednakże nie tylko dzięki strukturze osiągamy sukcesy. Siła tkwi w indywidualizmie!</p>
        </div>
      </div>

      <section class="section-graphics section-divisions cols">
        <div class="scroll-anchor" id="divisions"></div>
        <div class="section-graphics__elem col-3-2">
          <img src="<?php echo $rootUrl . 'src/img/icons/divisions/electronics_w.svg' ?>"
               alt="Electronics icon">
          <h2>Elektronika</h2>
          <p>Zajmujemy się<br>projektowaniem układów<br>scalonych ‒ zasilaczy czy<br>sterowników silników,<br>a także programowaniem<br>mikrokontrolerów.</p>
        </div>
        <div class="section-graphics__elem col-6-2">
          <img src="<?php echo $rootUrl . 'src/img/icons/divisions/software_w.svg' ?>"
               alt="Software icon">
          <h2>Software</h2>
          <p>Programiści wykorzystują<br>języki wysokiego poziomu<br>do tworzenia sztucznej<br>inteligencji, analizy obrazu,<br>transmisji danych,<br>algorytmów sterowania.</p>
        </div>
        <div class="section-graphics__elem col-9-2">
          <img src="<?php echo $rootUrl . 'src/img/icons/divisions/construction_w.svg' ?>"
               alt="Construction icon">
          <h2>Konstrukcja</h2>
          <p>Wykonujemy projekty<br>w systemach<br>SolidWorks oraz Inventor.<br>Zgłębiamy nowoczesne<br>technologie wytwarzania<br>w praktyce.</p>
        </div>
        <div class="section-graphics__elem col-12-2">
          <img src="<?php echo $rootUrl . 'src/img/icons/divisions/software_w.svg' ?>"
               alt="Marketing icon">
          <h2>Marketing</h2>
          <p>Robimy zasięgi i hajs.<br>Jesteśmy najlepsi.<br>Nie wiem co tu napisać.<br>Potem coś się wymyśli.<br>W końcu od tego jesteśmy.</p>
        </div>
      </section>
    </div>

    <div class="section-team__slider col-2-13 cols">
      <div class="section-team__arrow section-team__arrow--previous col-1-1">
        <img src="<?php echo $rootUrl . 'src/img/icons/team/previous_white.svg' ?>"
             alt="Arrow pointing left (next member)">
      </div>
      <div class="section-team__text col-3-6">
        <h5>#RobocikPeople</h5>
        <h1 class="h1--huge"></h1>
        <h3></h3>
        <h4></h4>
        <p></p>
      </div>
      <div class="section-team__img col-10-4">
        <img src=""
             alt="Crew member photo">
      </div>
      <div class="section-team__arrow section-team__arrow--next col-15-1">
        <img src="<?php echo $rootUrl . 'src/img/icons/team/next_white.svg' ?>"
             alt="Arrow pointing right (previous member)">
      </div>
    </div>
  </section>


  <section class="section-contact cols">
    <div class="scroll-anchor" id="contact"></div>

    <div class="section-contact__newsletter col-5-7">
      <h1>Newsletter</h1>
      <p>To my w skondensowanej paczce.</p>
      <p>Jeden mail miesięczenie.</p>
      <p>Bo nikt nie lubi spamu.</p>
      <form action="" method="post">
        <div>
          <input type="text" placeholder="Wpisz tu swój e-mail" name="username">
          <button name="submit"><span>Wyślij</span></button>
        </div>
        <h6>Klikając "Wyślij" wyrażam zgodę na przesyłanie na mój adres e-mail informacji o nowościach na temat organizacji pochodzących od PWr Diving Crew, ul.Łukasiewicza 7/9, bud.B-9 p.40, 50-371 Wrocław. Wiem, że w każdej chwili będę mógł wycofać zgodę.</h6>
      </form>
    </div>

    <div class="section-contact__connections col-5-8">
      <h1>Kontakt</h1>
      <div class="cols">

        <div class="col-1-7">
          <div class="section-contact__elem">
            <h4>Siedziba :</h4>
            <div class="section-contact__tile">
              <img src="<?php echo $rootUrl . 'src/img/icons/contact/location.png' ?>"
                   alt="Location icon">
              <div class="section-contact__text">
                <h5>Politechnika Wrocławska</h5>
                <p>Łukasiewicza 7/9, bud. B-9, p.40</p>
                <p>50-371 Wrocław</p>
              </div>
            </div>
          </div>
          <div class="section-contact__elem">
            <h4>E-mail :</h4>
            <div class="section-contact__tile">
              <img src="<?php echo $rootUrl . 'src/img/icons/contact/email.png' ?>"
                   alt="Email icon">
              <div class="section-contact__text">
                <a href="mailto:robocikb9@gmail.com">robocikb9@gmail.com</a>
                <a href="mailto:robocikb9marketing@gmail.com">robocikb9marketing@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-9-7">
          <div class="section-contact__elem">
            <h4>Kontakt telefoniczny :</h4>
            <div class="section-contact__tile">
              <img src="<?php echo $rootUrl . 'src/img/icons/contact/phone.png' ?>"
                   alt="Phone icon">
              <div class="section-contact__text">
                <h5>Wiceprezes ds. Organizacyjnych i Promocjii</h5>
                <p>Ola Maziarz : +48 371 046 078</p>
              </div>
            </div>
          </div>
          <div class="section-contact__elem">
            <h4>Follow us :</h4>
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
