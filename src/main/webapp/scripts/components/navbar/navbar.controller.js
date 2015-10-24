define(['./module'], function (module) {
    'use strict';
    module.controller('NavbarController', function ($scope, $location, $state, Auth, Principal) {
        $scope.isAuthenticated = Principal.isAuthenticated;
        $scope.$state = $state;
        $scope.inProduction = false

        $scope.logout = function () {
            Auth.logout();
            $state.go('home');
        };
    });
});
