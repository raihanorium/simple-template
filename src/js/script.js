var app = angular.module('app', ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");

	$stateProvider
	.state('home', {url: "/", templateUrl: "partials/home.html"})
	.state('projects', {url: "/projects", templateUrl: "partials/projects.html"})
	.state('services', {url: "/services", templateUrl: "partials/services.html"})
	.state('about', {url: "/about", templateUrl: "partials/about.html"})
	.state('contact', {url: "/contact", templateUrl: "partials/contact.html"});
});

app.run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state,   $stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);