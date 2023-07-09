$(function(){
	var app = {
		theHeight: $(window).height(),
		theWidth: $(window).width(),
		mainController: new ScrollMagic.Controller({
			globalSceneOptions:{
				triggerHook: 'onLeave'
			}
		}),
		sceneArray: [],
		userInfo:{},
		timeline: null,

		setScenes: function(){
			// intro number counter
			var introScene = new ScrollMagic.Scene({
				offset: 0,
				duration: this.theHeight*.5
			})
			.setTween(TweenMax.fromTo($('#intro'),1,{'left': '0'},{'left':-Math.abs(this.theWidth*2)}))
			.addTo(this.mainController);
			this.sceneArray.push(introScene);

			var ugcIntroScene = new ScrollMagic.Scene({
				offset: 0,
				duration: this.theHeight*.5
			})
			.setTween(TweenMax.fromTo($('#ugc'),1,{'left': this.theWidth*2},{'left': '0'}))
			.addTo(this.mainController);
			this.sceneArray.push(ugcIntroScene);

			var ugcOutroScene = new ScrollMagic.Scene({
				offset: this.theHeight,
				duration: this.theHeight*.5
			})
			.setTween(TweenMax.to($('#ugc'),1, {'left':-Math.abs(this.theWidth*2)}))
			.on('progress', function(e){
				if($('#timeline').is(':visible') && e.scrollDirection == "REVERSE")$('#timeline').fadeOut(200);
			})
			.on('end', function(e){
				if(!$('#timeline').is(':visible') && e.scrollDirection == "FORWARD")$('#timeline').fadeIn(200);
			})
			.addTo(this.mainController);
			this.sceneArray.push(ugcOutroScene);

			// ------------- TWENTIES ------------- //
			this.createScene(this.theHeight, TweenMax.fromTo($('#inner-wrapper .person'),1,{'left': this.theWidth*2},{'left': '0'}));

			this.createScene(this.theHeight*1.5, TweenMax.fromTo($('#sec-20 .clock'),1,{'top': -Math.abs(this.theHeight)},{'top': '10%'}));
			this.createScene(this.theHeight*1.5, TweenMax.fromTo($('#sec-20 .shoebox'),1,{'left': -Math.abs(this.theWidth)},{'left': '5%'}));
			this.createScene(this.theHeight*1.5, TweenMax.fromTo($('#sec-20 .desk'),1,{'bottom': -Math.abs(this.theHeight)},{'bottom': '18%'}));
			this.createScene(this.theHeight*1.5, TweenMax.fromTo($('#sec-20 .paper'),1,{'right': -Math.abs(this.theWidth)},{'right': '10%'}));
			this.createScene(this.theHeight*1.5, TweenMax.fromTo($('#sec-20 .poster'),1,{'top': -Math.abs(this.theHeight)},{'top': '20%'}));

			this.createScene(this.theHeight*2.5, TweenMax.to($('#sec-20 .clock'),1,{'top': -Math.abs(this.theHeight)}));
			this.createScene(this.theHeight*3.5, TweenMax.to($('#sec-20 .shoebox'),1,{'left': -Math.abs(this.theWidth)}));
			this.createScene(this.theHeight*3.5, TweenMax.to($('#sec-20 .desk'),1,{'bottom': -Math.abs(this.theHeight)}));
			this.createScene(this.theHeight*2.5, TweenMax.to($('#sec-20 .paper'),1,{'right': -Math.abs(this.theWidth)}));
			this.createScene(this.theHeight*4.5, TweenMax.to($('#sec-20 .poster'),1,{'top': -Math.abs(this.theHeight)}));

			// ------------- THIRTIES ------------- //
			this.createScene(this.theHeight*4, TweenMax.fromTo($('#inner-wrapper .person .thirties'),1,{'opacity': '0'},{'opacity': '1'}));
			this.createScene(this.theHeight*4, TweenMax.fromTo($('#inner-wrapper .person .twenties'),1,{'opacity': '1'},{'opacity': '0'}));

			this.createScene(this.theHeight*2.5, TweenMax.fromTo($('#sec-30 .clock'),1,{'top': -Math.abs(this.theHeight)},{'top': '10%'}));
			this.createScene(this.theHeight*4.5, TweenMax.fromTo($('#sec-30 .crutches'),1,{'left': -Math.abs(this.theWidth)},{'left': '7%'}));
			this.createScene(this.theHeight*3.5, TweenMax.fromTo($('#sec-30 .desk'),1,{'bottom': -Math.abs(this.theHeight)},{'bottom': '18%'}));
			this.createScene(this.theHeight*2.5, TweenMax.fromTo($('#sec-30 .paper'),1,{'right': -Math.abs(this.theWidth)},{'right': '10%'}));
			this.createScene(this.theHeight*4.5, TweenMax.fromTo($('#sec-30 .photo'),1,{'top': -Math.abs(this.theHeight)},{'top': '20%'}));
			this.createScene(this.theHeight*3.5, TweenMax.fromTo($('#sec-30 .bookshelf'),1,{'right': -Math.abs(this.theWidth)},{'right': '20%'}));

			this.createScene(this.theHeight*5.5, TweenMax.to($('#sec-30 .clock'),1,{'top': -Math.abs(this.theHeight)}));
			this.createScene(this.theHeight*7.5, TweenMax.to($('#sec-30 .crutches'),1,{'left': -Math.abs(this.theWidth)}));
			this.createScene(this.theHeight*5.5, TweenMax.to($('#sec-30 .desk'),1,{'bottom': -Math.abs(this.theHeight)}));
			this.createScene(this.theHeight*6.5, TweenMax.to($('#sec-30 .paper'),1,{'right': -Math.abs(this.theWidth)}));
			this.createScene(this.theHeight*6.5, TweenMax.to($('#sec-30 .photo'),1,{'top': -Math.abs(this.theHeight)}));
			this.createScene(this.theHeight*7.5, TweenMax.to($('#sec-30 .bookshelf'),1,{'right': -Math.abs(this.theWidth)}));

			// ------------- THIRTIES ------------- //
			this.createScene(this.theHeight*7, TweenMax.fromTo($('#inner-wrapper .person .fourties'),1,{'opacity': '0'},{'opacity': '1'}));
			this.createScene(this.theHeight*7, TweenMax.to($('#inner-wrapper .person .thirties'),1,{'opacity': '0'}));

			this.createScene(this.theHeight*5.5, TweenMax.fromTo($('#sec-40 .clock'),1,{'top': -Math.abs(this.theHeight)},{'top': '14%'}));
			this.createScene(this.theHeight*6.5, TweenMax.fromTo($('#sec-40 .golf'),1,{'bottom': -Math.abs(this.theHeight)},{'bottom': '0%'}));
			this.createScene(this.theHeight*5.5, TweenMax.fromTo($('#sec-40 .desk'),1,{'left': -Math.abs(this.theWidth)},{'left': '9%'}));
			this.createScene(this.theHeight*6.5, TweenMax.fromTo($('#sec-40 .photo'),1,{'top': -Math.abs(this.theHeight)},{'top': '20%'}));
			this.createScene(this.theHeight*7.5, TweenMax.fromTo($('#sec-40 .safe'),1,{'right': -Math.abs(this.theWidth)},{'right': '10%'}));
			this.createScene(this.theHeight*7.5, TweenMax.fromTo($('#sec-40 .bear'),1,{'bottom': -Math.abs(this.theWidth)},{'bottom': '11%'}));

			// this.createScene(this.theHeight*8.5, TweenMax.to($('#sec-40 .clock'),1,{'top': -Math.abs(this.theHeight)}));
			// this.createScene(this.theHeight*8.5, TweenMax.to($('#sec-40 .golf'),1,{'bottom': -Math.abs(this.theHeight)}));
			// this.createScene(this.theHeight*8.5, TweenMax.to($('#sec-40 .desk'),1,{'left': -Math.abs(this.theWidth)}));
			// this.createScene(this.theHeight*8.5, TweenMax.to($('#sec-40 .photo'),1,{'top': -Math.abs(this.theHeight)}));
			// this.createScene(this.theHeight*8.5, TweenMax.to($('#sec-40 .safe'),1,{'right': -Math.abs(this.theWidth)}));
			// this.createScene(this.theHeight*8.5, TweenMax.to($('#sec-40 .bear'),1,{'bottom': -Math.abs(this.theWidth)}));
			//
			// this.createScene(this.theHeight*8.5, TweenMax.to($('#inner-wrapper .person'),1,{'left': -Math.abs(this.theWidth*2)}));

			// fade out timeline, slide in outro
			this.createScene(this.theHeight*8.5, TweenMax.fromTo($('#shade'),1,{'opacity': '0', 'z-index':'1'},{'opacity': '.4', 'z-index':'7'}));
			var outroScene = new ScrollMagic.Scene({
				offset: this.theHeight*8.5,
				duration: this.theHeight*.5
			})
			.setTween(TweenMax.fromTo($('#outro'),1,{'top': '-3000px'},{'top': '0'}))
			.addTo(this.mainController);
			this.sceneArray.push(outroScene);
		},

		createScene: function(theOffset, theTween){
			var scene = new ScrollMagic.Scene({
				offset: theOffset,
				duration: this.theHeight*.5
			})
			.setTween(theTween)
			.addTo(this.mainController);
			this.sceneArray.push(scene);
		},

		clearScenes: function(){
			for (var i=0; i<this.sceneArray.length; i++) {
				this.sceneArray[i].destroy(true);
			}
			this.sceneArray = [];
		},

		Timeline: function(element, that){
			this.element = element;
			this.that = that;

			var activeHeight = that.theHeight*6;
			var timer = null;
			var pressed = false;

			element.find('.track').on('mousedown', function(e){ pressed = true; timeJump(e, true); });
			element.find('.track').on('mousemove', function(e){ timeJump(e, false); });
			$('body').on('mouseup', function(e){ pressed = false; });

			this.update = function(){
				activeHeight = that.theHeight*6;
				var currScroll = $(window).scrollTop()-(that.theHeight*2);
				var currPosition = (currScroll/activeHeight)*100;
				$('#timeline .inner-track').width((currPosition)+'%');
			};

			for (var i=0;i<5;i++){
				var start = 3;
				var currNum = (that.theHeight*(start+i))-(that.theHeight*2);
				var pos = (currNum/activeHeight)*100;
				$('#timeline .track .dot').eq(i).css('left', pos+'%');
			};

			var timeJump = function(e, animate){
				if(pressed){
					var percent = (activeHeight/element.find('.track').width())*e.offsetX;
					var newScroll = (that.theHeight*2)+percent;
					if (animate) $('body').stop().animate({'scrollTop':newScroll})
						else $('body').scrollTop(newScroll);
				}
			};

			return this;
		},

		formatNumber: function(number, digits, decimalPlaces, withCommas){
		    var number = number.toString();
		    var simpleNumber = '';

		    // Strips out the dollar sign and commas.
		    for (var i = 0; i < number.length; ++i)
		    {
		        if ("0123456789.".indexOf(number.charAt(i)) >= 0)
		            simpleNumber += number.charAt(i);
		    }

		    number = parseFloat(simpleNumber);

		    if (isNaN(number))      number     = 0;
		    if (withCommas == null) withCommas = false;
		    if (digits     == 0)    digits     = 1;

		    var integerPart = (decimalPlaces > 0 ? Math.floor(number) : Math.round(number));
		    var string      = "";

		    for (var i = 0; i < digits || integerPart > 0; ++i)
		    {
		        // Insert a comma every three digits.
		        if (withCommas && string.match(/^\d\d\d/))
		            string = "," + string;

		        string      = (integerPart % 10) + string;
		        integerPart = Math.floor(integerPart / 10);
		    }

		    if (decimalPlaces > 0)
		    {
		        number -= Math.floor(number);
		        number *= Math.pow(10, decimalPlaces);

		        string += "." + formatNumber(number, decimalPlaces, 0);
		    }

		    return string;
		},

		buildPop: function(){
			var startingIncome = this.formatNumber($('#ugc #income').val(), 0, 0, false);
			var startingExpense = this.formatNumber($('#ugc #expense').val(), 0, 0, false);

			// 20s
			$('#pop-cont .popup[data-decade="20"][data-type="retirement"] .equation .income').html('$'+this.formatNumber(startingIncome,0,0,true));
			$('#pop-cont .popup[data-decade="20"][data-type="retirement"] .equation .answer').html('$'+this.formatNumber(startingIncome*0.03, 0, 0, true));
			$('#pop-cont .popup[data-decade="20"][data-type="emergency"] .equation .income').html('$'+this.formatNumber(startingIncome/12,0,0,true));
			$('#pop-cont .popup[data-decade="20"][data-type="emergency"] .equation .answer').html('$'+this.formatNumber(startingIncome/2, 0, 0, true));
			$('#pop-cont .popup[data-decade="20"][data-type="real-estate"] .equation .income').html('$'+this.formatNumber(startingIncome,0,0,true));
			$('#pop-cont .popup[data-decade="20"][data-type="real-estate"] .equation .answer').html('$'+this.formatNumber(startingIncome*0.30, 0, 0, true));

			// 30s
			$('#pop-cont .popup[data-decade="30"][data-type="retirement"] .equation .income').html('$'+this.formatNumber(startingIncome,0,0,true));
			$('#pop-cont .popup[data-decade="30"][data-type="retirement"] .equation .answer').html('$'+this.formatNumber(startingIncome*0.15, 0, 0, true));
			$('#pop-cont .popup[data-decade="30"][data-type="emergency"] .equation .expense').html('$'+this.formatNumber(startingExpense,0,0,true));
			$('#pop-cont .popup[data-decade="30"][data-type="emergency"] .equation .answer').html('$'+this.formatNumber(startingExpense*6, 0, 0, true));
			$('#pop-cont .popup[data-decade="30"][data-type="real-estate"] .equation .income').html('$'+this.formatNumber(startingIncome,0,0,true));
			$('#pop-cont .popup[data-decade="30"][data-type="real-estate"] .equation .answer').html('$'+this.formatNumber(startingIncome*0.28, 0, 0, true));

			// 40s
			$('#pop-cont .popup[data-decade="40"][data-type="retirement"] .equation .income').html('$'+this.formatNumber(startingIncome,0,0,true));
			$('#pop-cont .popup[data-decade="40"][data-type="retirement"] .equation .answer').html('$'+this.formatNumber(startingIncome*0.20, 0, 0, true));
			$('#pop-cont .popup[data-decade="40"][data-type="real-estate"] .equation .income').html('$'+this.formatNumber(startingIncome,0,0,true));
			$('#pop-cont .popup[data-decade="40"][data-type="real-estate"] .equation .answer').html('$'+this.formatNumber(startingIncome*0.28, 0, 0, true));
			$('#pop-cont .popup[data-decade="40"][data-type="emergency"] .equation .expense').html('$'+this.formatNumber(startingExpense,0,0,true));
			$('#pop-cont .popup[data-decade="40"][data-type="emergency"] .equation .answer').html('$'+this.formatNumber(startingExpense*9, 0, 0, true));
		},

		init: function(){
			var that = this;
			var averages = false;
			var useDefaults = true;

			$('#intro .btn').on('click', function(){
				$('body').animate({'scrollTop': that.theHeight},600);
			});

			$('#outro li').on('click', function(e){
				var type = $(e.currentTarget).attr('data-type');
				$('#outro .outro-cont li').removeClass('active');
				$('#outro .outro-cont li[data-type="'+type+'"]').addClass('active');
				$('#outro .outro-cont > div p').removeClass('active');
				$('#outro .outro-cont p.'+type).addClass('active');
			});

			$('#mobile-main ul li').on('click', function(e){
				var type = $(e.currentTarget).attr('data-type');
				$('#mobile-main .copy-cont').scrollTop(0);
				$('#mobile-main ul li').removeClass('active');
				$('#mobile-main ul li[data-type="'+type+'"]').addClass('active');
				$('#mobile-main .copy-cont div').removeClass('active');
				$('#mobile-main .copy-cont div[data-type="'+type+'"]').addClass('active');
			});

			$('#outro .restart').on('click', function(e){
				e.preventDefault();
				$('body').scrollTop(0);
			});

			$('#inner-wrapper .tag').on('mouseenter', function(e){
				var decade = $(e.currentTarget).attr('data-decade');
				var type = $(e.currentTarget).attr('data-type');
				var pop = $('#pop-cont .popup[data-decade="'+decade+'"][data-type="'+type+'"]');

				$('.tag').removeClass('active');
				$(e.currentTarget).addClass('active');
				$('.popup:visible').hide();
				$('#pop-cont').css({'top':'100%'});
				$('#pop-cont').animate({'top':'0'});
				pop.fadeIn();
			});

			$('#inner-wrapper .tag').on('mouseleave', function(e){
					$('.tag').removeClass('active');
					$('.popup:visible').fadeOut();
					$('#pop-cont').animate({'top':'100%'});
			});

			$('body').on('click', function(e){
				if(!$(e.target).hasClass('tag')){
					$('.tag').removeClass('active');
					$('.popup:visible').fadeOut();
					$('#pop-cont').animate({'top':'100%'});
				}
			});

			$('#ugc .btn').on('click', function(){
				$('body').height(10*that.theHeight);
				if(useDefaults){
					averages = true;
					fillAverages();
					$('#ugc #age').val('Not Specified');
					$('#ugc #check').attr('checked', true);
					setTimeout(function(){
						$('body').animate({'scrollTop': that.theHeight*2},600);
					},700)
				}else{
					var timelineHeight = (6*that.theHeight);
					var timelineInterval = timelineHeight/30;
					var year = $('#ugc #age').val()-20;
					if ($('#ugc #age').val()>50) $('body').animate({'scrollTop':(2*that.theHeight)+(30*timelineInterval)})
						else $('body').animate({'scrollTop':(2*that.theHeight)+(year*timelineInterval)});
				}
				that.buildPop();
			});
			$('#ugc #age').on('keyup', function(e){
				$(e.currentTarget).val(that.formatNumber($(e.currentTarget).val(), 0, 0, false));
				if(averages)fillAverages();
				useDefaults = false;
			});
			$('#ugc .currency').on('keyup', function(e){
				if(averages){
					$('#ugc #check').attr('checked', false);
					averages = false;
				}
				var value = $(e.currentTarget).val();
				$(e.currentTarget).val('$'+that.formatNumber(value, 0, 0, true));
				useDefaults = false;
			});
			$('#ugc #check').on('click', function(){
				var checked = ($('#ugc #check').is(':checked'))? true: false;
				averages = checked;
				if(checked)fillAverages();
				useDefaults = false;
			});

			function fillAverages(){
				if($('#ugc #age').val() >= 30 && $('#ugc #age').val() < 40){
					$('#ugc #income').val('$60,568');
					$('#ugc #expense').val('$2,523');
				}else if($('#ugc #age').val() >= 40){
					$('#ugc #income').val('$68,862');
					$('#ugc #expense').val('$2,869');
				}else{
					$('#ugc #income').val('$44,424');
					$('#ugc #expense').val('$1,851');
				}
			};

			$(window).on('resize', function(){ that.resize(); });
			$(window).on('load', function(){ that.loaded(); });
		},

		loaded: function(){
			var that = this;

			if(this.screenRatio() < 1.20 || this.theHeight < 430){
				$('.mobile-show').css('display', 'block');
				$('body').css('overflow', 'hidden');
			}else{
				this.setScenes();
			}

			this.keepRatio($('#inner-wrapper'));

			$('body').height(2*this.theHeight);

			// init timeline
			this.timeline = new this.Timeline($('#timeline'), that);
			$(window).on('scroll', function(){
				$('.tag').removeClass('active');
				$('.popup:visible').hide();
				that.timeline.update();
			});

			$('#load-wrapper').fadeOut();
		},

		screenRatio: function(){
			return (this.theWidth/this.theHeight);
		},

		keepRatio: function(element) {
		  var scaled = element;
		  var ratio = 4/3;
		  var w = scaled.outerWidth();
		  var h = scaled.outerHeight();

		  scaled.width(ratio*h);
		},

		resize: function(){
			this.theHeight = $(window).height();
			this.theWidth = $(window).width();

			if(this.screenRatio() < 1.20 || this.theHeight < 430){
				$('.mobile-show').css('display', 'block');
				$('body').css('overflow', 'hidden');
			}else{
				$('.mobile-show').css('display', 'none');
				$('body').css('overflow', 'auto');
				$('body').height(10*this.theHeight);
				this.timeline.update();
				this.clearScenes();
				this.setScenes();
			}

			this.keepRatio($('#inner-wrapper'));
		}
	};

	app.init();
});
