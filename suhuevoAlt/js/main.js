jQuery(document).ready(function($){
var Expand = (function() {
  var tile = $('.strips__strip');
  var tileIndex = $('.indexStrip');
  var tileBenefits = $('.benefitsStrip');
  var tileUs = $('.UsStrip');
  var tileLink = $('.strips__strip > .strip__content');
  var tileText = tileLink.find('.strip__inner-text .full');
  var stripClose = $('.strip__close');

  var expanded  = false;

  var open = function() {

    var tile = $(this).parent();

      if (!expanded) {
        tile.addClass('strips__strip--expanded');
        tileBenefits.addClass('strips__strip--expandedBenefits');
        tileIndex.addClass('strips__strip--expandedIndex');
        tileUs.addClass('strips__strip--expandedUs');

        tileLink.removeClass('background-image');

        tileLink.addClass('background-colors');
        tileText.addClass('full-container');

        // add delay to inner text
        tileText.css('transition', 'all .5s .3s cubic-bezier(0.23, 1, 0.32, 1)');
        stripClose.addClass('strip__close--show');
        stripClose.css('transition', 'all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)');
        expanded = true;
      }
    };

  var close = function() {
    if (expanded) {
      tile.removeClass('strips__strip--expanded');
      tileIndex.removeClass('strips__strip--expandedIndex');
      tileBenefits.removeClass('strips__strip--expandedBenefits');
      tileUs.removeClass('strips__strip--expandedUs');

      tileLink.removeClass('background-colors');
      tileLink.addClass('background-image');
      tileText.removeClass('full-container');

      // remove delay from inner text
      tileText.css('transition', 'all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)');
      stripClose.removeClass('strip__close--show');
      stripClose.css('transition', 'all 0.2s 0s cubic-bezier(0.23, 1, 0.32, 1)')
      expanded = false;
    }
  }

    var bindActions = function() {
      tileLink.on('click', open);
      stripClose.on('click', close);
    };

    var init = function() {
      bindActions();
    };

    return {
      init: init
    };

  }());

Expand.init();


});
