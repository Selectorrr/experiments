/**
 * Created by Selector on 24.10.15.
 */
define([
    'require',
    'angular',
    'app'
    //'routes'
], function (require, ng) {
    'use strict';

    require(['requirejs-domready!'], function (document) {
        ng.bootstrap(document, ['appApp']);
    });
});
