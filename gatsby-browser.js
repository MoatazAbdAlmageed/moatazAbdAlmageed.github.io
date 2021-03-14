import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery.easing/jquery.easing.min.js';
import { wrapPageElement as wrap } from './src/woot-wapper';

const $ = require('jquery');

export const onInitialClientRender = () => {
  $(document).ready(function() {
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (
        window.location.pathname.replace(/^\//, '') ===
          this.pathname.replace(/^\//, '') &&
        window.location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            'easeInOutExpo'
          );
          return false;
        }
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#sideNav',
    });
  });
};

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  );
  if (answer === true) {
    window.location.reload();
  }
};
export const wrapPageElement = wrap;
