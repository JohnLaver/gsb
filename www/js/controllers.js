angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
  // Form data for the login modal
 $scope.visite='toto';
})

.controller('visitesCtrl', function($scope) {
  $scope.visites = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('visiteCtrl', function($scope, $stateParams) {


$scope.toto = toto;
});

function conversion()   // declaration de la fonction avec un argument
{
   toto ='ahahahaha'
}
