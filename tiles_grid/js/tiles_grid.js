/**
 * @file
 * tiles grid js.
 */

(function ($, Drupal) {
  'use strict';

   /**
   * Tiles grid layout.
   */
  Drupal.behaviors.tilesGrid = {
    attach: function (context, settings) {
    	// $(window).on('load', function(){
    		//Init isotope 
				var grid = $('.tiles-grid-wrap').isotope({
				  itemSelector: '.tile-grid-item',
				  layoutMode: 'masonry',
				  masonry: {
				    columnWidth: 100
				  },
				  cellsByRow: {
				    columnWidth: 200,
				    rowHeight: 200
				  },
				  masonryHorizontal: {
				    rowHeight: 100
				  },
				  cellsByColumn: {
				    columnWidth: 200,
				    rowHeight: 200
				  }
				});

				var filter = $('.tiles-grid-filters');
				filter.on('click', 'span', context,function(e) {
				  filter.find('.is-checked').removeClass('is-checked');

				  var item = $(e.currentTarget);
				  item.addClass('is-checked');

				  var filter_value = '.'+item.attr('data-drupal-filter');
				  grid.isotope({ filter: filter_value });
				});
    	// });
    }
  };

})(jQuery, Drupal);
