define(['./module'], function (module) {
    'use strict';
    module.config(function ($stateProvider) {
        $stateProvider
            .state('entity', {
                abstract: true,
                parent: 'site'
            });
    });
});
