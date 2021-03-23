$( function() {

	//visual INITS

		// get LIGHT/DARK last setting
		var dispMode = localStorage.getItem('dispMode')
		console.log(dispMode);
		if (dispMode == "DARK") {
			$('html').removeClass('LIGHT');
			$('html').addClass('DARK');
		} else {
			$('html').removeClass('DARK');
			$('html').addClass('LIGHT');
		}

	$('#miner-active').hide();
	$('#miner-inactive').show();
	setTimeout(function(){
		$('#miner-active').toggle();
		$('#miner-inactive').toggle();
	}, 200);
	$('#wallet-history-table').hide();
	//set chart heights

	$('canvas.chart').each(function(i){
		var width = $(this).width;
		$(this).css("height", width * 0.9);
	});


	$('#light-dark-toggle').click(function(){
		$('html').toggleClass('LIGHT');
		$('html').toggleClass('DARK');
		if ($('html').hasClass('LIGHT')) {
			localStorage.setItem('dispMode','LIGHT');
		} else {
			localStorage.setItem('dispMode','DARK');
		}
	});

	$('#btn-payout-history').click(function(){
		$('#wallet-history-table').toggle();
	});

	// CHART.JS


	var ctx = $('#chart-last-24-hash');
	Chart.defaults.global.defaultFontFamily = '-apple-system, BlinkMacSystemFont, "Roboto", sans-serif';
	Chart.defaults.global.defaultFontWeight = "normal";
	Chart.defaults.global.defaultBackgroundColor = "rgba(0,0,0,0)";
	var myChart = new Chart(ctx, {
    type: 'line',
    data: {
			labels: [ "4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","0:00","1:00","2:00","3:00" ],
			datasets: [{
				label: 'Mh/s',
				data: [ 8.1,8.2,8.4,8.1,7.8,6.7,5.4,9.1,9.0,8.5,8.6,8.4,8.9,9.1,8.6,8.1,7.4,6.0,7.1,7.3,7.7,7.9,8.4,8.9],
				borderColor: '#2b2b2b',
				backgroundColor: 'rgba(43,43,43,0.25)'
			},
			{
				label: '4h Avg',
				data: [ 7.8833,7.8833,7.8833,7.8833,7.8833,7.8833,8.1666,8.1666,8.1666,8.1666,8.1666,8.1666,8.0166,8.0166,8.0166,8.0166,8.0166,8.0166,7.8833,7.8833,7.8833,7.8833,7.8833,7.8833],
				borderColor: '#904960',
				backgroundColor: 'rgba(0,0,0,0)'
			}
		]
    },
		options: {
			scales: {
					yAxes: [{
							ticks: {
									min: 0,
									stepSize: 0.5
							}
					}]
			}
		}
	});


} );
