/**
 * Created by richard.m.infantado on 4/8/2015.
 */

'use strict';


app.controller('ProdGroupCtrl' ,['$scope', 'router', 'GrupoCommercialService', function ($scope, router, GrupoCommercialService ) {

    var prodgroup = this;

    this.processSave = function() {
        console.log(prodgroup.group);
    }

    prodgroup.myGrupoCommercial = GrupoCommercialService.list();

    //console.log(prodgroup.myGrupoCommercial);

    this.gridGrupoComercial = {
        data: "prodGroupCtrl.myGrupoCommercial",
        showFilter: true,
        filterOptions: this.filterOptions,
        showColumnMenu: true,
        showGroupPanel: true,
        selectedItems: this.mySelections,
        multiSelect: false,
        columnDefs: [{field:'empresa', displayName:'Empresa'},            
            {field:'descricao', displayName:'Descrição resumida'},
            {field:'descricaoCompleta', displayName:'Descrição completa'},
            {field:'status', displayName:'Situação'}]
    };




    prodgroup.group = [];
    prodgroup.group.ramos = [];
    prodgroup.group.ramos = GrupoCommercialService.listRamos();

    console.log(prodgroup.group);

    prodgroup.ramosProcessAdd = function() {
        GrupoCommercialService.saveRamos(prodgroup.group.ramos);
    }

    prodgroup.delRamos = function() {
        GrupoCommercialService.delRamos(id);
    }

    this.reload = function() {
        router.setUpRoutes();
    }
}]);