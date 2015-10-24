define(['./module'], function (module) {
    'use strict';
    module.config(function ($stateProvider) {
        $stateProvider
            .state('admin', {
                abstract: true,
                parent: 'site'
            });
    });
});
