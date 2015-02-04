Meteor.methods({
	getGeoCode: function(search) {
		var geo = new GeoCoder();
		result = geo.geocode(search);
		return result;

	}
});