define(['./module'], function (module) {
    'use strict';
    module.factory('LogsService', function ($resource) {
        return $resource('api/logs', {}, {
            'findAll': {method: 'GET', isArray: true},
            'changeLevel': {method: 'PUT'}
        });
    });
});
