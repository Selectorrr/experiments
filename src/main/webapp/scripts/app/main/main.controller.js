define(['./module'], function (module) {
    'use strict';
    module.controller('MainController', function ($scope, Principal) {
        Principal.identity().then(function (account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;

            $scope.person = {fname: 'Clark', lname: 'Kent'};
        });
    });
});
