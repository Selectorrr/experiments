require.config({
    shim: {
        angular: {
            exports: 'angular'
        },
        jquery: {
            exports: 'jQuery'
        },
        react: {
            exports: 'React'
        },
        'angular-cache-buster': {
            deps: [
                'angular'
            ]
        },
        'angular-aria': {
            deps: [
                'angular'
            ]
        },
        'angular-cookies': {
            deps: [
                'angular'
            ]
        },
        'angular-bootstrap': {
            deps: [
                'angular'
            ]
        },
        'angular-local-storage': {
            deps: [
                'angular'
            ]
        },
        'angular-resource': {
            deps: [
                'angular'
            ]
        },
        'angular-sanitize': {
            deps: [
                'angular'
            ]
        },
        'angular-ui-router': {
            deps: [
                'angular'
            ]
        },
        bootstrap: {
            deps: [
                'jquery'
            ]
        },
        'ng-file-upload': {
            deps: [
                'angular'
            ]
        },
        ngInfiniteScroll: {
            deps: [
                'angular'
            ]
        }
    },
    paths: {
        'angular-cache-buster': '../../bower_components/angular-cache-buster/angular-cache-buster',
        'requirejs-domready': '../../bower_components/requirejs-domready/domReady',
        'stomp-websocket': '../../bower_components/stomp-websocket/lib/stomp.min',
        'angular-bootstrap': '../../bower_components/angular-bootstrap/ui-bootstrap-tpls',
        'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
        bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
        requirejs: '../../bower_components/requirejs/require',
        json3: '../../bower_components/json3/lib/json3',
        jquery: '../../bower_components/jquery/dist/jquery',
        'sockjs-client': '../../bower_components/sockjs-client/dist/sockjs',
        'angular-resource': '../../bower_components/angular-resource/angular-resource',
        'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
        'angular-ui-router': '../../bower_components/angular-ui-router/release/angular-ui-router',
        'ng-file-upload': '../../bower_components/ng-file-upload/ng-file-upload',
        'angular-local-storage': '../../bower_components/angular-local-storage/dist/angular-local-storage',
        angular: '../../bower_components/angular/angular',
        'angular-cookies': '../../bower_components/angular-cookies/angular-cookies',
        'angular-aria': '../../bower_components/angular-aria/angular-aria',
        ngInfiniteScroll: '../../bower_components/ngInfiniteScroll/build/ng-infinite-scroll',
        'angular-scenario': '../../bower_components/angular-scenario/angular-scenario',
        modernizr: '../../bower_components/modernizr/modernizr',
        'material-ui': '../../bower_components/material-ui/lib',
        ngReact: '../../bower_components/ngReact/ngReact',
        react: '../../bower_components/react/react'
    },
    packages: [],
    deps: [
        '../../scripts/app/bootstrap'
    ]
});
