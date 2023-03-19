$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});

function showLights(callback)
{
	$('#bulb_yellow').addClass('bulb-glow-yellow');
	$('#bulb_red').addClass('bulb-glow-red');
	$('#bulb_blue').addClass('bulb-glow-blue');
	$('#bulb_green').addClass('bulb-glow-green');
	$('#bulb_pink').addClass('bulb-glow-pink');
	$('#bulb_orange').addClass('bulb-glow-orange');
	$('body').addClass('peach');

	callback.call(null);
	// setTimeout(callback, 8000);
	// $(elem).fadeOut('slow').delay(5000).promise().done(function(){
	// 	$('#play').fadeIn('slow');
	// });
}

function lightGlow(callback)
{
	$('#bulb_yellow').addClass('bulb-glow-yellow-after');
	$('#bulb_red').addClass('bulb-glow-red-after');
	$('#bulb_blue').addClass('bulb-glow-blue-after');
	$('#bulb_green').addClass('bulb-glow-green-after');
	$('#bulb_pink').addClass('bulb-glow-pink-after');
	$('#bulb_orange').addClass('bulb-glow-orange-after');
	$('body').css('backgroud-color','#FFF');
	$('body').addClass('peach-after');

	callback.call(null);
	// setTimeout(callback, 3000);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


window.images= [
	'1Te8GREDa2EQo8zW6_QScEweOYqDVOCCM',
	'1Tcwif3Jn2pqeFh7ohLJsXixjGI6LQKRA',
	'1TcelqUOpFCZr3XJzPEa4_iWmiSJb_k7B',
	'1TYafDFEOdpj9D6l51j2EckQ3yCyP33TK',
	'1TYRKSC1uslgFcuBGWOvIsoEv5OIiR4O9',
	'1TlDoIqZ-UTPOp3w-EplUxv-NdhbaEYn9',
	'1U1HNL1lhAMx-JDQnASjPTJfMF_2G3nn_',
	'1TqzIIQB3RWhxkuKegRvPt_w9n6UMJaM-',
	'1UeCulv6Hl-6bJ57LrtPsHoHjSDePM9er',
	'1UJTSunzfZy17u_iKL87r_lIRQi0rc0P6',
	'1UPT-Qi8qTg1361Xm_vv-z3423O3tpmAi',
	'1UleVG1-D9E1enm8vJnNKtAuaIjVZSFyG',
	'19mgxwGaA0dR88cPxMIb-BHluStyCADMp',
	'1woF_wxzU_PrfDl5xK4qhVOE0p3YQrHU4',
	'1F2i_dbcQ-AWBr-5edbYefU86SCFe4BW8',
	'18qU_KqITWelcn6pJNXrU5eeYOxlMhPkW',
	'1xnEz19H3fSpUou0cjFxmlc4-_dTcueK1',
	'1m9s9Pqp2Y4nL1O1OcgV1evtzkbps7fj0',
	'1-6VcJaejHnbDVZPQ9Sg1kbs6UPA9DXUF'
];

var songs =  [
	"audio/las-mananitas-vicente-fernandez.mp3",
	"audio/las-mananitas-mexicanas.mp3",
	"audio/happy-birthday-con-mariachi.mp3",
	"audio/feliz-cumpleanos-mariachi-azteca.mp3",
	"audio/en-tu-dia-mariachi-tecalitlan.mp3",
	"audio/cumpleanos.mp3",
	"audio/en-tu-dia.mp3",
	"audio/brindo-por-tu-cumpleanos.mp3",
	"audio/banda-machos-las-mananitas.mp3"
];

function playSong(songs, idx)
{
	idx = idx%songs.length;

	var song = new Audio(songs[idx]);

	song.play();

	song.addEventListener("canplaythrough", (event) => {
	  song.play();
	});

	song.addEventListener('ended', function (event) {
		playSong(songs, idx + 1)
	});
}

function shuffleArray(array) {
	shuffled = array.slice();

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }

	return shuffled;
}

function imageShow(element, images, index) {
	if (index >= images.length) {
			images = shuffleArray(window.images);
			index = 0;
	}

	var currImg = element.src;

	var newImg = 'https://drive.google.com/uc?export=view&id=' + images[index];

	element.src = newImg;

	setTimeout(function() {
		$(element).fadeIn('slow', function() {

			setTimeout(function() {
				$(element).fadeOut('slow', function() {
					imageShow(element, images, index+1);
				});
			}, 5000);
		});
	}, 1500);
}

$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});



	$('#gift-box').click(function() {

		playSong(songs, 0);
		$(this).removeClass('wobble');
		$(this).fadeOut('slow', function() {
			showLights(function() {
				setTimeout(function() {
					lightGlow(
						function() {
							setTimeout(function() {
								createBalloons(30);
								setTimeout(function() {
									$('.birthday-banner').addClass('birthday-banner-come');
									setTimeout(function() {
										imageShow(document.getElementById('image-show-1'), shuffleArray(window.images), 0);
										imageShow(document.getElementById('image-show-2'), shuffleArray(window.images), 0);
										imageShow(document.getElementById('image-show-3'), shuffleArray(window.images), 0);
										$('.cake').fadeIn('slow');

										setTimeout(function() {
											$('.fuego').fadeIn('slow');
										}, 4000);
									}, 6000);
								}, 6000);
							}, 3000);
					});
				}, 8000);
			});
		});
});

	$('#play').click(function(){

    //     $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		// $('#bulb_red').addClass('bulb-glow-red-after');
		// $('#bulb_blue').addClass('bulb-glow-blue-after');
		// $('#bulb_green').addClass('bulb-glow-green-after');
		// $('#bulb_pink').addClass('bulb-glow-pink-after');
		// $('#bulb_orange').addClass('bulb-glow-orange-after');
		// $('body').css('backgroud-color','#FFF');
		// $('body').addClass('peach-after');
		// $(this).fadeOut('slow').delay(6000).promise().done(function(){
		// 	$('#bannar_coming').fadeIn('slow');
		// });
	});

	// $('#bannar_coming').click(function(){
	// 	$('.bannar').addClass('bannar-come');
	// 	$(this).fadeOut('slow').delay(6000).promise().done(function(){
	// 		$('#balloons_flying').fadeIn('slow');
	// 	});
	// });

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	function flyingBalloons(callback)
	{
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();

		callback.call(null);
	}

	$('#balloons_flying').click(function(){


		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});


	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});

	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});

		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
				});

			}
			else{
				msgLoop(i);
			}

		});
			// body...
		}

		msgLoop(0);

	});
});
