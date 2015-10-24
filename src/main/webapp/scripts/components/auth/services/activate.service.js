define(['../module'], function (module) {
    'use strict';

    module.factory('Activate', function ($resource) {
        return $resource('api/activate', {}, {
            'get': {method: 'GET', params: {}, isArray: false}
        });
    });
});


