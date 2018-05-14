 $(function(){
			var $container = $('#container'),
				filters = {};

			$container.isotope({
			  itemSelector : '.name-image',
			 /* masonry: {
				columnWidth: 0
			  }*/
			   resizable: false, // disable normal resizing
			  // set columnWidth to a percentage of container width
			  masonry: { columnWidth: $container.width()/6}
			});

			// filter buttons
			$('.prot a').click(function(){
			  var $this = $(this);
			  // don't proceed if already selected
			  if ( $this.hasClass('selected') ) {
				return;
			  }
			  
			  var $optionSet = $this.parents('.option-set');
			  // change selected class
			  $optionSet.find('.selected').removeClass('selected');
			  $this.addClass('selected');
			  
			  // store filter value in object
			  // i.e. filters.color = 'red'
			  var group = $optionSet.attr('data-filter-group');
			  filters[ group ] = $this.attr('data-filter-value');
			  // convert object into array
			  var isoFilters = [];
			  for ( var prop in filters ) {
				isoFilters.push( filters[ prop ] )
			  }
			  var selector = isoFilters.join('');
			  $container.isotope({ filter: selector });

			  return false;
			});

		
		  
		      var hashTagActive = "";
				$("a.scroll ").click(function (event) {
					if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
						event.preventDefault();
						//calculate destination place
						var dest = 0;
						if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
							dest = $(document).height() - $(window).height();
						} else {
							dest = $(this.hash).offset().top-52;
						}
						//go to destination
						$('html,body').animate({
							scrollTop: dest
						}, 2000, 'swing');
						hashTagActive = this.hash;
					}
				});
				  });
				  
			jQuery(document).ready(function($) {
				$('.bxslider').bxSlider({
					onSliderLoad: function(){
						$(".quotes").css("visibility", "visible");
					}
				});
			});
			
			var maxHeight = 0;

			$("div.boxes").each(function(){
			   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
			});

			$("div.boxes").height(maxHeight);