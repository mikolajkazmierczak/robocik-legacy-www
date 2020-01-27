<!--  </div> --><!-- .site-wrapper -->

  <script src="src/lib/lax.min.js"></script>
  <script>
    window.onload = function() {
      lax.setup({
        breakpoints: { small: 0, medium: 800 }
      }); // init
      const updateLax = () => {
        lax.update(window.scrollY)
        window.requestAnimationFrame(updateLax)
      };

      window.requestAnimationFrame(updateLax)
    };
    window.addEventListener("resize", function() {
      lax.updateElements();
    });
  </script>

  <script src="dist/idanchors.js?v=1"></script>
  <script src="src/lib/smooth-scroll.polyfills.min.js"></script>
  <script>
    let scroll = new SmoothScroll('a[href*="#"]', {
      speed: 500,
      speedAsDuration: true,
      offset: 75,
      updateURL: false
    });
  </script>

  <script src="src/lib/anime.min.js"></script>
  <script src="dist/wavesbg.js?v=1"></script>


  <script src="dist/_global.js?v=3"></script>

  <script src="dist/header.js?v=3"></script>
  <script src="dist/menu.js?v=3"></script>

  <script src="dist/progressbar.js?v=1"></script>
  <script src="dist/team_arrows.js?v=1"></script>
  <script src="dist/team.js?v=3"></script>

  <script src="dist/newsletter.js?v=1"></script>

</body>

</html>
