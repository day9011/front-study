/**
 * Created by dinghanyu on 4/25/16.
 */
(function (angular) {
'use strict';
var routeApp = angular.module('routeApp',['ngRoute'])
    .controller('pageTabCtl', function () {
    })
    .controller('pageCtl', function ($scope, $routeParams) {
        $scope.id = $routeParams.id;
    });
routeApp.config(function ($routeProvider) {
    $routeProvider
        .when('/page/:id', {
            templateUrl: '/program/study/angular-router/page.html',
            controller: 'pageCtl'
        })
        .when('/pageTab',{
            templateUrl: '/program/study/angular-router/pageTab.html',
            controller: 'pageTabCtl'
        })
        .otherwise({
            redirectTo: '/pageTab'
        });
});
})(window.angular);