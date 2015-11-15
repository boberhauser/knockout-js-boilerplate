define(['knockout', 'crossroads', 'hasher'], function(ko, crossroads, hasher) {
	var Router = function(config) {
		var self = this;
		self.currentRoute = ko.observable();
		ko.utils.arrayForEach(config.routes, function(route) {
			crossroads.addRoute(route.url, function(requestParams) {
				self.currentRoute(ko.utils.extend(requestParams, route.params));
			});
		});

		// Activate crossroads
		crossroads.normalizeFn = crossroads.NORM_AS_OBJECT;
		hasher.initialized.add(function(hash) { crossroads.parse(hash); });
		hasher.changed.add(function(hash) { crossroads.parse(hash); });
		hasher.init();

	};

	return new Router({
		routes: [
			{ url: '',           params: { page: 'home-page' } },
			{ url: 'about',      params: { page: 'about-page' } }
		]
	});
});
