Meteor.methods({
	getGeoCode: function(search) {
		console.log("TEST")
		var geo = new GeoCoder();
		result = geo.geocode(search);
		return result;

	}
});