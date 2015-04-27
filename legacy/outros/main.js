// main.js
var app = angular.module('myApp', ['ngGrid']);
app.controller('MyCtrl', function($scope) {
    $scope.myData = [{ID: 1, Descricao: "Patrimonial", Status: "Ativo"},
                     {ID: 2, Descricao: "Responsabilidade Civil", Status: "Ativo"},
                     {ID: 3, Descricao: "Agronegócio", Status: "Ativo"}];
    $scope.gridOptions = { 
        data: 'myData',
        showGroupPanel: true,
		columnDefs: [{field:'ID', displayName:'Id Grupo'}, {field:'Descricao', displayName:'Descrição'}, {field:'Status', displayName:'Status'}]
    };
});