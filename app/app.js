/**
 * Created by richard.m.infantado on 4/6/2015.
 */

'use strict';

var app = angular.module('portoApp',
    ['ui.router','Routing','ngGrid'
]).run([ '$rootScope', '$state', '$stateParams',
        function ($rootScope,   $state,   $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

            console.log('state: ');
            console.log($state);
            console.log('stateParams: ');
            console.log($stateParams);
        }
]).config(['$stateProvider', '$urlRouterProvider', 'routerProvider',
        function ($stateProvider,   $urlRouterProvider, routerProvider) {

           $urlRouterProvider.otherwise('/general');

            $stateProvider.state("general", {
                url: "/general",
                templateUrl: 'views/general/general.html'

            });

            routerProvider.setCollectionUrl('assets/routeCollection.json');

        }
    ]
);



