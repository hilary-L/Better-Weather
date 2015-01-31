Package.describe({
	summary: "Forecast.io package",
	version: "0.1.0",
	name: "forecastio"
});
Package.onUse(function (api) {
	api.addFiles('forecastio.js', 'server');
	api.export('Forecastio');
});