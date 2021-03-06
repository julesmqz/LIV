$(document).ready(function() {
	$(window).scrollTop(0);

	var fixmeTop = $('.fixme').offset().top; // get initial position of the element
	var fifthTop = $('.fifth-service').offset().top - 250; // get initial position of the element
	var $animation_elements = $('.animation-element');
	var $window = $(window);

	$(window).on('resize', function() {
		fixmeTop = $('.fixme').offset().top; // get initial position of the element
		fifthTop = $('.fifth-service').offset().top - 250;
	});

	$(window).on('scroll resize', function() { // assign scroll event listener

		var currentScroll = $(window).scrollTop(); // get current position
		var currentScrollB = $(window).scrollTop(); // get current position

		if (currentScroll >= fixmeTop) { // apply position: fixed if you
			$('.fixme').css({ // scroll to that element or below it
				position: 'fixed',
				top: '0',
				left: '0'
			});
			$('.fixme').addClass('added-space');

		} else { // apply position: static
			$('.fixme').css({ // if you scroll above it
				position: 'static'
			});
			$('.fixme').removeClass('added-space');
		}

		if (currentScrollB >= fifthTop) {
			$('.fixme').css({ // scroll to that element or below it
				position: 'absolute',
				top: fifthTop
			});
			$('.btn-fixed').hide();
			$('.btn-fixed-2').show();
		} else {
			if($(window).width() > 767){
				$('.btn-fixed').show();
			}
			$('.btn-fixed-2').hide();
		}

		check_if_in_view();

	});

	// $window.scroll();

	function check_if_in_view() {
		var currentScroll = $(window).scrollTop();


		$.each($animation_elements, function() {
			var $element = $(this);
			var elTop = $element.offset().top - 500;

			//check to see if this current container is within viewport
			if (currentScroll >= elTop) {
				$element.addClass('in-view');
			} else {
				$element.removeClass('in-view');
			}
		});
	}


	// Button scroll to form
	$('[data-scroll-to-form]').click(function() {
		$('html, body').animate({
			scrollTop: $("#form").offset().top
		}, 2000);
	});

	$('[data-send-form]').click(function() {

		var q = {
			'name': $('#in-name').val(),
			'email': $('#in-email').val(),
			'phone': $('#in-phone').val(),
			'service': $('#in-service').val(),
			'query': $('#in-query').val(),
		}
		var error = false;
		for (var key in q) {
			if (q.hasOwnProperty(key)) {
				$('#in-' + key).removeClass('error');
				if (q[key] == '' || q[key] == undefined) {
					$('#in-' + key).addClass('error');
					error = true;
				}
			}
		}

		if (!error) {
			$('.layout-wait').css('display', 'block');
			$.post("send.php", q, function(data) {
				console.log(data);
				$('.layout-wait').css('display', 'none');
				$('.layout-success').css('display', 'block');

				setTimeout(function() {
					for (var key in q) {
						if (q.hasOwnProperty(key)) {
							$('#in-' + key).val('');
						}
					}
					$('.layout-success').css('display', 'none');
				}, 3000);
			});
		}

	});
});