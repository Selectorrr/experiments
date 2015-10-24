define(['./module'], function (module) {
    'use strict';
    module.config(function ($stateProvider) {
        $stateProvider
            .state('account', {
                abstract: true,
                parent: 'site'
            });
    });
});
