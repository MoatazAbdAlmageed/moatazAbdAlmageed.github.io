import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min.js';
const $ = require('jquery');

export const onInitialClientRender = () => {
  $(document).ready(function() {
    $('.navbar-collapse a').click(function(e) {
      $('.navbar-collapse').collapse('toggle');
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
