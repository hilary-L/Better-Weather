Template.precip.rendered = function() {
		this.autorun(function() {
		var data = Router.current().data();
		var precipHourArray = data.fData.precipHour;
		var precipDayArray = data.fData.precipDay;
		var d3Draw = function(precipArray) {
			console.log(precipArray);
			console.log(precipArray.length);

			var svg = d3.select('.precip-box').append('svg');
			var w = 400;
			var h = 200;
			var padding = 40;
			var xScale = d3.scale.linear().domain([0, precipArray.length]).range([padding, w-padding]);
            var yScale = d3.scale.linear().domain([-0.1, 1]).range([h - padding, padding]);
            var xAxis = d3.svg.axis().scale(xScale).orient("bottom").ticks(5);
            var yAxis = d3.svg.axis().scale(yScale).orient("left").ticks(5);
            var lineFunction = d3.svg.line()
            	.x(function(d, i) {return xScale(i);})
            	.y(function(d) {return yScale(d.precipProbability);})
            	.interpolate("basis");

            svg.attr("width", w);
            svg.attr("height", h);

            svg.append("path").attr("d", lineFunction(precipArray)).attr("stroke", "white").attr("stroke-width", 2).attr("fill", "none");
            svg.append("g").attr("class", "axis").attr("transform", "translate(0," + (h - padding) + ")").call(xAxis);
            svg.append("g").attr("class", "axis").attr("transform", "translate(" + padding + ",0)").call(yAxis);
		};

		$('svg').remove();
		d3Draw(precipHourArray);
		$('svg').after('</br>');
		d3Draw(precipDayArray);
		var currentTime = moment();
		console.log(currentTime);

	});
	};