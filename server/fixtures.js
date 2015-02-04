if (Forecasts.find().count() === 0) {
	Forecasts.insert({
		location: 'New York',
		temperature: '35',
		outlook: 'Rainy',
		day1: {
			temperature: 0,
		},
		day2: {
			temperature: 0,
		},
		day3: {
			temperature: 0,
		}
	});
}