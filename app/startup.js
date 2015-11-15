define(['knockout', 'crossroads', 'hasher', 'jquery', './router'],
		function(ko, crossroads, hasher, jquery, router) {

	ko.components.register('nav-bar', { require: 'components/nav-bar/nav-bar' });
	ko.components.register('home-page', { require: 'components/home-page/home' });
	ko.components.register('about-page', {
		template: { require: 'text!components/about-page/about.html' }
	});

	ko.applyBindings({ route: router.currentRoute });
});
