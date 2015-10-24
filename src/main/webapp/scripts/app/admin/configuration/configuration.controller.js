define(['../module'], function (module) {
    'use strict';
    module.controller('ConfigurationController', function ($scope, ConfigurationService) {
        ConfigurationService.get().then(function(configuration) {
            $scope.configuration = configuration;
        });
    });
    });
