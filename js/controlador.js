var controladores = angular.module("controladores", ["LocalStorageModule"]);

controladores.controller("Ctrlcontacto", function($scope, localStorageService, $location, $routeParams){


	$scope.regex = '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$';
	

	if (localStorageService.get("contactos")) {
		$scope.contacto = localStorageService.get("contactos");
	}else{
		$scope.contacto = [];
	};

	$scope.$watchCollection('contacto', function(newValue, oldValue){
		localStorageService.set("contactos", $scope.contacto);
	});

	$scope.nuevoContacto = {};


	$scope.agregarContacto = function(){	
		$scope.nuevoContacto.nombre = $scope.dato.nombre;
		$scope.nuevoContacto.apellido= $scope.dato.apellido;
		$scope.nuevoContacto.lugarTrabajo = $scope.dato.lugarTrabajo;
		$scope.nuevoContacto.telefonoCasa=$scope.dato.telefonoCasa;
		$scope.nuevoContacto.movil=$scope.dato.movil;
		$scope.nuevoContacto.direccion=$scope.dato.direccion;
		$scope.nuevoContacto.email=$scope.dato.email;
		$scope.contacto.push($scope.nuevoContacto);
		$scope.nuevoContacto={};
	};

	$scope.irEdtContacto = function(id){
		$location.path("/editar/"+id);
	};

	$scope.elmContacto = function(id){
		$scope.contacto.splice(id, 1);
	};

	$scope.unContacto  = $scope.contacto[$routeParams.idContacto];

	$scope.edtContacto = function(){
		$scope.nuevoContacto.nombre = $scope.unContacto.nombre;
		$scope.nuevoContacto.apellido= $scope.unContacto.apellido;
		$scope.nuevoContacto.lugarTrabajo = $scope.unContacto.lugarTrabajo;
		$scope.nuevoContacto.telefonoCasa=$scope.unContacto.telefonoCasa;
		$scope.nuevoContacto.movil=$scope.unContacto.movil;
		$scope.nuevoContacto.direccion=$scope.unContacto.direccion;
		$scope.nuevoContacto.email=$scope.unContacto.email;

		$scope.contacto[$routeParams.idContacto] = $scope.nuevoContacto;
		$scope.nuevoContacto = {};

		$location.path("/");
	};
	
});