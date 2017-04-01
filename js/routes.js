var rutas = angular.module('rutas',["ngRoute"])
rutas.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'plantilla/contenido.html',
		controller: 'Ctrlcontacto'
	})
	.when('/editar/:idContacto', {
		templateUrl: 'plantilla/editar.html',
		controller: 'Ctrlcontacto'
	})
}]);