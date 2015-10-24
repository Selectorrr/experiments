define(['../module'], function (module) {
    'use strict';

    module.factory('Password', function ($resource) {
        return $resource('api/account/change_password', {}, {});
    });

    module.factory('PasswordResetInit', function ($resource) {
            return $resource('api/account/reset_password/init', {}, {})
        });

    module.factory('PasswordResetFinish', function ($resource) {
            return $resource('api/account/reset_password/finish', {}, {})
        });
});
