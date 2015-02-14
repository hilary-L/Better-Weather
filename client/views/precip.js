Template.precip.rendered = function() {
		this.autorun(function() {
		var data = Router.current().data();
		
		var precipHourArray = data.fData.precipHour;
		var precipDayArray = data.fData.precipDay;

		var d3Draw = function(precipArray) {

			if (precipArray.length === 49) {
				precipArray = $.map(precipArray, function(n, i) {
					if (i <= 13) {
						return n;
					}
				});
			}
			else {
				precipArray = $.map(precipArray, function(n, i) {
					if (i == 1 || i % 10 == 0) {
						return n;
					}
				});
			}

			var svg = d3.select('.precip-box').append('svg');
			var w = 425;
			var h = 200;
			var paddingW = 55;
			var paddingH = 20;
			var xScale = d3.scale.linear().domain([0, precipArray.length]).range([paddingW, w-paddingW]);
            var yScale = d3.scale.linear().domain([-0.1, 1]).range([h - paddingH, paddingH]);

            if (precipArray.length === 8) {
            	var xAxis = d3.svg.axis().scale(xScale).orient("bottom").ticks(7).tickFormat(function(d, i) { 
            				return moment().add(i * 10, 'minutes').format('h:mm');	
            		});
            }
            else {
            	var xAxis = d3.svg.axis().scale(xScale).orient("bottom").ticks(8).tickFormat(function(d, i) {
            		return moment().add(i, 'hours').format('h a');
            	});
            }

            var yAxis = d3.svg.axis().scale(yScale).orient("left").ticks(5).tickFormat(d3.format("%"));
            var lineFunction = d3.svg.line()
            	.x(function(d, i) {return xScale(i);})
            	.y(function(d) {return yScale(d.precipProbability);})
            	.interpolate("basis");

            svg.attr("width", w + 25);
            svg.attr("height", h);

            svg.append("path").attr("d", lineFunction(precipArray)).attr("stroke", "white").attr("stroke-width", 2).attr("fill", "none");
            svg.append("g").attr("class", "axis").attr("transform", "translate(0," + (h - paddingH) + ")").call(xAxis);
            svg.append("g").attr("class", "axis").attr("transform", "translate(" + paddingW + ",0)").call(yAxis);
		};


		$('svg').remove();
		$('br').remove();

		d3Draw(precipHourArray);
		$('svg').after('</br>');
		d3Draw(precipDayArray);

	});
	};