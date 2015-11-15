define(['knockout', 'text!./nav-bar.html'], function(ko, template) {

	return {
		viewModel: function viewModel(params) {
				var self = this;

				// pass through the 'route' parameter to the view
				self.route = params.route;
			},
		template: template
	};

});
