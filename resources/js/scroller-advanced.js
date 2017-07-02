$(document).ready(function() {
	// Animation here
	TweenLite.set($('body'), {
		visibility: "visible"
	})

	// Array of elements to animate in order
	var elements = [
		$('.animate-main-image'),
		$('.animate-principal-text'),
		$('.animate-services-title'),
		$('.animate-services-subtitle'),
		$('.animate-first-service-one'),
		$('.animate-first-service-two'),
		$('.animate-second-service-one'),
		$('.animate-second-service-two'),
		$('.animate-third-service-one'),
		$('.animate-third-service-two'),
		$('.animate-fourth-service-one'),
		$('.animate-fourth-service-two'),
		$('.animate-fifth-service-one'),
		$('.animate-fifth-service-two'),
		$('.animate-button-contact'),
		$('.animate-we-love-img'),
		$('.animate-we-love-title'),
		$('.animate-we-love-subtitle'),
		$('.animate-whyus-title'),
		$('.animate-whyus-subtitle'),
		$('.animate-option-1'),
		$('.animate-option-2'),
		$('.animate-option-3'),
		$('.animate-option-4'),
		$('.animate-opinions'),
		$('.animate-contact-title'),
		$('.animate-contact-subtitle'),
		$('.animate-input-1'),
		$('.animate-input-2'),
		$('.animate-input-3'),
		$('.animate-input-4'),
		$('.animate-input-5'),
		$('.animate-input-6'),
		$('.animate-final-left'),
		$('.animate-final-middle'),
		$('.animate-final-right'),
	];

	//instantiate a TimelineLite    
	const tl = new TimelineLite();

	//home page
	tl.to(elements[0], 0.7, {
		left: 700,
		opacity: 0
	});
	tl.to(elements[1], 0.7, {
		left: -700,
		opacity: 0
	}, '-=0.7');

	// our services

	// title
	tl.to(elements[2], 0.7, {
		left: 0,
		opacity: 1
	});

	tl.to(elements[3], 0.7, {
		left: 0,
		opacity: 1
	}, '-=0.7');

	//first service
	tl.to(elements[4], 0.7, {
		top: 0,
		opacity: 1
	});

	tl.to(elements[5], 0.7, {
		left: 0,
		opacity: 1
	}, '-=0.7');

	tl.to(elements[4], 0.7, {
		top: 1000,
		opacity: 0
	}, '+=1');

	tl.to(elements[5], 0.7, {
		left: -1000,
		opacity: 0
	}, '-=0.7');

	//second service
	tl.to(elements[6], 0.7, {
		top: 0,
		opacity: 1
	});

	tl.to(elements[7], 0.7, {
		left: 0,
		opacity: 1
	}, '-=0.7');

	tl.to(elements[6], 0.7, {
		top: 1000,
		opacity: 0
	}, '+=1');

	tl.to(elements[7], 0.7, {
		left: -1000,
		opacity: 0
	}, '-=0.7');

	//third service
	tl.to(elements[8], 0.7, {
		top: 0,
		opacity: 1
	});

	tl.to(elements[9], 0.7, {
		left: 0,
		opacity: 1
	}, '-=0.7');

	tl.to(elements[8], 0.7, {
		top: 1000,
		opacity: 0
	}, '+=1');

	tl.to(elements[9], 0.7, {
		left: -1000,
		opacity: 0
	}, '-=0.7');

	//fourth service
	tl.to(elements[10], 0.7, {
		top: 0,
		opacity: 1
	});

	tl.to(elements[11], 0.7, {
		left: 0,
		opacity: 1
	}, '-=0.7');

	tl.to(elements[10], 0.7, {
		top: 1000,
		opacity: 0
	}, '+=1');

	tl.to(elements[11], 0.7, {
		left: -1000,
		opacity: 0
	}, '-=0.7');

	//fifth service
	tl.to(elements[12], 0.7, {
		top: 0,
		opacity: 1
	});

	tl.to(elements[13], 0.7, {
		left: 0,
		opacity: 1
	}, '-=0.7');

	tl.to(elements[12], 0.7, {
		top: 1000,
		opacity: 0
	}, '+=1');

	tl.to(elements[13], 0.7, {
		left: -1000,
		opacity: 0
	}, '-=0.7');

	// disappear our services title and buttons button contact

	tl.to(elements[2], 0.7, {
		left: 1000,
		opacity: 0
	});

	tl.to(elements[3], 0.7, {
		left: -1000,
		opacity: 0
	}, '-=0.7');

	tl.to(elements[14], 0.7, {
		opacity: 0
	}, '-=0.7');

	// appear and dissapear we love
	tl.to(elements[15], 0.7, {
		opacity: 1,
		top: 0
	});

	tl.to(elements[16], 0.7, {
		opacity: 0.98,
		left: 0
	},'-=0.7');

	tl.to(elements[17], 0.7, {
		opacity: 0.82,
		left: 0
	},'-=0.7');

	tl.to(elements[15], 0.7, {
		opacity: 0,
		top: 1000
	},'+=1');

	tl.to(elements[16], 0.7, {
		opacity: 0,
		left: 1000
	},'-=0.7');

	tl.to(elements[17], 0.7, {
		opacity: 0,
		left: -1000
	},'-=0.7');

	/* Why us */

	// title
	tl.to(elements[18], 0.7, {
		left: 0,
		opacity: 1
	});

	tl.to(elements[19], 0.7, {
		left: 0,
		opacity: 1
	}, '-=0.7');

	// options, first 2 and 3, then 1 and 4
	tl.to(elements[21], 0.7, {
		left: 0,
		opacity: 1
	});

	tl.to(elements[22], 0.7, {
		left: 0,
		opacity: 1
	}, '-=0.7');

	tl.to(elements[14], 0.7, {
		opacity: 1
	}, '-=0.7');

	tl.to(elements[20], 0.7, {
		left: 0,
		opacity: 1
	});

	tl.to(elements[23], 0.7, {
		left: 0,
		opacity: 1
	}, '-=0.7');

	// dissapear title and buttons

	tl.to(elements[21], 0.7, {
		left: 1000,
		opacity: 0
	},'+=2');

	tl.to(elements[22], 0.7, {
		left: -1000,
		opacity: 0
	}, '-=0.7');

	tl.to(elements[20], 0.7, {
		left: 1000,
		opacity: 0
	});

	tl.to(elements[23], 0.7, {
		left: -1000,
		opacity: 0
	}, '-=0.7');

	tl.to(elements[18], 0.7, {
		left: 1000,
		opacity: 0
	});

	tl.to(elements[19], 0.7, {
		left: -1000,
		opacity: 0
	}, '-=0.7');

	tl.to(elements[14], 0.7, {
		opacity: 0,
		bottom:-1000
	}, '-=0.7');

	// opninions carrousel
	tl.to(elements[24], 0.7, {
		top: 0,
		opacity: 1
	});

	tl.to(elements[24], 0.7, {
		top: 1000,
		opacity: 0
	},'+=1');

	/* Contact us */

	// title
	tl.to(elements[25], 0.7, {
		left: 0,
		opacity: 1
	});

	tl.to(elements[26], 0.7, {
		left: 0,
		opacity: 1
	}, '-=0.7');

	tl.to(elements[27], 0.7, {
		left: 0,
		opacity: 1
	});

	tl.to(elements[28], 0.7, {
		left: 0,
		opacity: 1
	}, '-=0.7');

	tl.to(elements[29], 0.7, {
		left: 0,
		opacity: 1
	}, '-=0.7');

	tl.to(elements[30], 0.7, {
		left: 0,
		opacity: 1
	}, '-=0.7');

	tl.to(elements[31], 0.7, {
		left: 0,
		opacity: 1
	}, '-=0.7');

	tl.to(elements[32], 0.7, {
		bottom: 0,
		opacity: 1
	});


	// dissapear form and title

	tl.to(elements[32], 0.7, {
		bottom: -1000,
		opacity: 0
	},'+=2');

	tl.to(elements[27], 0.7, {
		left: -1000,
		opacity: 0
	}, '-=0.7');

	tl.to(elements[28], 0.7, {
		left: 1000,
		opacity: 0
	}, '-=0.7');

	tl.to(elements[29], 0.7, {
		left: -1000,
		opacity: 0
	}, '-=0.7');

	tl.to(elements[30], 0.7, {
		left: 1000,
		opacity: 0
	}, '-=0.7');

	tl.to(elements[31], 0.7, {
		left: -1000,
		opacity: 0
	}, '-=0.7');

	tl.to(elements[25], 0.7, {
		left: 1000,
		opacity: 0
	});

	tl.to(elements[26], 0.7, {
		left: -1000,
		opacity: 0
	}, '-=0.7');

	/* Final section */

	tl.to(elements[33], 0.7, {
		left: 0,
		opacity: 1
	});

	tl.to(elements[34], 0.7, {
		top: 0,
		opacity: 1
	}, '-=0.7');

	tl.to(elements[35], 0.7, {
		left: 0,
		opacity: 1
	}, '-=0.7');

	//tl.seek(25);

	tl.pause();

	// if inner width is tablet go to the very end of the anim
	// if( window.innerWidth < 991 ){
	// 	tl.seek(100,false);
	// }

	window.addEventListener('scroll', shouldWeAnimate);

	// mouse scrolling controls animation
	$(window).on('scroll, touchstart, touchend, touchmove, mousewheel', shouldWeAnimate);

	function shouldWeAnimate() {
		let yPos = event.deltaY;

		if (yPos > 5 && window.innerWidth > 991) {
			console.log('Animation is playing');
			tl.play();
		} else if (yPos < -5 && window.innerWidth > 991) {
			console.log('Animation is backwards');
			tl.reverse();
		} else {
			console.log('Animation is gonna pause');
			tl.pause();
		}
	}

	/* FORM SEND */
	$('[data-send-form]').click(function() {
		tl.pause();
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