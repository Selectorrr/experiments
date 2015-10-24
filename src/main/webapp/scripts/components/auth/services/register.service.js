define(['../module'], function (module) {
    'use strict';

    module.factory('Register', function ($resource) {
        return $resource('api/register', {}, {});
    });
});


