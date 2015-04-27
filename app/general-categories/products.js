/**
 * Created by richard.m.infantado on 4/8/2015.
 */

'use strict';

app.controller('ProductsCtrl' ,function (router) {

    console.log('init products ctrl');

    var category = this;

    this.processSave = function() {
        console.log(category.group.inputDescricao);
    }

    this.reload = function() {
        router.setUpRoutes();
    };
});





