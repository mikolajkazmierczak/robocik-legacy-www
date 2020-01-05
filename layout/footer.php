<!--  </div> --><!-- .site-wrapper -->

  <script src="lib/lax.min.js"></script>
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

  <script src="dist/idanchors.js"></script>
  <script src="lib/smooth-scroll.polyfills.min.js"></script>
  <script>
    var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 500,
      speedAsDuration: true,
      offset: 75,
      updateURL: false
    });
  </script>

  <script src="dist/_global.js?v=2"></script>

  <script src="dist/header.js?v=2"></script>
  <script src="dist/menu.js?v=2"></script>

  <script src="dist/progressbar.js"></script>
  <script src="dist/team.js?v=2"></script>

  <script src="dist/newsletter.js"></script>

</body>

</html>
