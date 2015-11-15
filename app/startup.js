define(['knockout', 'crossroads', 'hasher', 'jquery', './router'],
		function(ko, crossroads, hasher, jquery, router) {

	// components
	ko.components.register('nav-bar', { require: 'components/nav-bar/nav-bar' });

	// pages
	ko.components.register('home-page', { require: 'pages/home-page/home' });
	ko.components.register('about-page', {
		template: { require: 'text!components/pages/about-page/about.html' }
	});

	ko.applyBindings({ route: router.currentRoute });
});
