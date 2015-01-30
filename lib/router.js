Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function() {
	this.route('forecastList', {path: '/'});
});