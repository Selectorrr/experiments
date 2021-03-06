define(['./module'], function (module) {
    'use strict';

    module.factory('notificationInterceptor', function ($q, AlertService) {
            return {
                response: function (response) {
                    var alertKey = response.headers('X-appApp-alert');
                    if (angular.isString(alertKey)) {
                        AlertService.success(alertKey, {param: response.headers('X-appApp-params')});
                    }
                    return response;
                }
            };
        });
});
