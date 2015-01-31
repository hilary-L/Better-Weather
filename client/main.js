Meteor.subscribe('forecasts');

if (Meteor.isClient) {
	Meteor.startup(function() {
		GoogleMaps.load();
	});
}