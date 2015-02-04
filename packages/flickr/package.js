Package.describe({
	summary: "Flickr package",
	version: "0.1.0",
	name: "flickr"
});

Package.onUse(function (api) {
	api.addFiles('flickr.js', 'server');
	api.export('Flickr');
});