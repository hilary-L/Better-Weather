Flickr = {};

Flickr.getPhotos = function(city) {

	var apiKey = Meteor.settings.flickr.toString();
	console.log(apiKey);

	var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search';

	var tags = city + "," + " skyline";

	var flickrResponse = Meteor.http.get(
		url,
		{
			timeout: 5000,
			params: {
						format: "json",
						api_key: apiKey,
						tags: tags,
						media: "photos",
						nojsoncallback: 1,
						sort: "interestingness-desc"
					}

		}
	);
	if(flickrResponse.statusCode === 200)
		return flickrResponse;
	else
		console.log(flickrResponse.statusCode);
		console.log(flickrResponse);

}

Meteor.methods({
	'getFlickrPhotos': function(longitude, latitude) {
		return Flickr.getPhotos(longitude, latitude);
	}
});

Meteor.methods({
	'pickPhoto': function(photos) {
		var href = "";
		var num = Math.floor(Math.random() * 50);

		var selectedPhoto = photos.photos.photo[num];
		console.log(num);
		console.log(selectedPhoto);

		href = "http://farm" + selectedPhoto.farm + ".staticflickr.com/" + selectedPhoto.server + "/" + selectedPhoto.id + "_" + selectedPhoto.secret + "_" + "b.jpg";
		console.log(href);

		return href;
	}
})