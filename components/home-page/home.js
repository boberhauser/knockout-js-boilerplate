define(['knockout', 'text!./home.html'], function(ko, homeTemplate) {

	return {
		viewModel: function viewModel(params) {
				var self = this;
				self.message = ko.observable("Welcome");
				self.doSomething = function() {
					self.message("Clicked");
				};
			},
		template: homeTemplate
	};

});
