/**
 * Created by richard.m.infantado on 4/10/2015.
 */

'use strict';

app.controller('GeneralBeneficioCtrl' ,['$scope', 'router', 'GeneralBeneficioService',
    function ($scope, router, GeneralBeneficioService ) {

    var generalBeneficio = this;
    

    this.processSave = function() {
        console.log(generalBeneficio.beneficio);
    }

    generalBeneficio.beneficioList = GeneralBeneficioService.list();

    console.log(this.beneficioList);

    this.gridBeneficio = { 
        data: 'generalBeneficioCtrl.beneficioList',
        showFilter: true,
        showColumnMenu: true,
        multiSelect: false,
        filterOptions: $scope.filterOptions,
        showGroupPanel: true,
        columnDefs: [{field:'benBusiness', displayName:'Empresa'}, 
                    {field:'shortDesc', displayName:'Descrição resumida'}, 
                    {field:'fullDesc', displayName:'Descrição completa'}, 
                    {field:'status', displayName:'Situação'}]
    };

    this.reload = function() {
        router.setUpRoutes();
    }
}]);