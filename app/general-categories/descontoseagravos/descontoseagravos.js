/**
 * Created by richard.m.infantado on 4/8/2015.
 */

'use strict';

app.controller('DescontosCtrl' ,['$scope','router','DesconstoseAgravosService',
    function ($scope, router, DesconstoseAgravosService ) {

    console.log('DescontosCtrl reporting');

    var proddescontos = this;

    proddescontos.processSave = function () {
        console.log(proddescontos.descontos);
        DesconstoseAgravosService.save(proddescontos.descontos);

    }

    proddescontos.delete = function (id) {
        console.log('delete '+id);
        DesconstoseAgravosService.delete(id);
        if (proddescontos.descontos.id == id) proddescontos.descontos = {};
    }

    proddescontos.myDescAgra = DesconstoseAgravosService.list();

    this.gridDescAgra = {
        data: "descontosCtrl.myDescAgra",
        showFilter: true,
        filterOptions: this.filterOptions,
        showColumnMenu: true,
        showGroupPanel: true,
        columnDefs: [{field:'empresa', displayName:'Empresa'},
            {field:'id', displayName:'Código Desc/Agravo'},
            {field:'Descricao', displayName:'Descrição resumida'},
            {field:'Descricao', displayName:'Descrição completa'},
            {field:'tipoDescAgra', displayName:'Tipo Desconto/Agravo'},
            {field:'tipoAplica', displayName:'Cálculo Desconto/Agravo'},
            {field:'percMin', displayName:'Percentual Minimo'},
            {field:'percMax', displayName:'Percentual Máximo'},
            {field:'Status', displayName:'Situação'}]
    };


    this.reload = function() {
        router.setUpRoutes();
    };
}]);