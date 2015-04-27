/**
 * Created by richard.m.infantado on 4/8/2015.
 */

/***
angular.module('portoApp.products.service', [

]).service();


// A RESTful factory for retrieving data
    .factory('myData', ['$http', 'utils', function ($http, utils) {
        var path = 'assets/mydata.json'; //url web service
        var products = $http.get(path).then(function (resp) {
            return resp.data;
        });

        var factory = {};
        factory.all = function () {
            return products;
        };
        factory.get = function (id) {
            return products.then(function(){
                return utils.findById(products, id);
            })
        };
        return factory;
    }]);

     **/