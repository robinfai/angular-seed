'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ngRoute',
    'ngAria',
    'ngAnimate',
    'ngMaterial',
    'ngMdIcons',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);

app.controller('AppController', function ($scope, $mdSidenav) {
    $scope.isSideNavOpen = true;
    $scope.toggleMenu = function(){
        $scope.toggleLeft = $mdSidenav('left').toggle();
    };
    $scope.menu = [
        {
            title: 'view1',
            link: '#/view1'
        },
        {
            title: 'view2',
            link: '#/view2'
        }
    ];

});