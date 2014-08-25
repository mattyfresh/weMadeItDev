



var mattDanApp = angular.module('mattDanApp', []);

mattDanApp.controller('firstController', function($scope) {


	$scope.persons = {
		"dan" : {'fruit':'people',
				'afraid' : 'Carl',
				'color' : 'red'},
		"matt" : {'fruit':'cats',
				'afraid' : 'fatPeople',
				'color' : 'blue'},

	};
});

	mattDanApp.controller('secondController', function($scope) {

			$scope.persons = {
			"dan" : {'car':'celica',
					'afraid' : 'Carl',
					'color' : 'limegreen',
					'src' : 'http://dantintle.com'},
			"matt" : {'car':'mustang',
					'afraid' : 'fatPeople',
					'color' : 'salmon',
					'src' : 'http://flyingcolorsmusic.com'},

			};

	});	



