// main.js
var app = angular.module('myApp', ['ngGrid']);
app.controller('MyCtrl', function($scope) {
	
	$scope.filterOptions = {
		filterText: ''
	};
    $scope.myData = [{ID: 1, empresa:"Porto Seguro", Descricao: "Patrimonial", Status: "Ativo", comentario: ""},
                     {ID: 2, empresa:"Porto Seguro", Descricao: "Responsabilidade Civil", Status: "Ativo", comentario: ""},
                     {ID: 3, empresa:"Porto Seguro", Descricao: "Agronegócio", Status: "Ativo", comentario: ""}];
					 
	$scope.myRamo = [{ID: 1, grupo: "Patrimonial", Descricao: "Compreensivo Condomínio", Status: "Ativo", comentario: ""},
                     {ID: 2, grupo: "Patrimonial", Descricao: "Residencial Patrimoniais", Status: "Ativo", comentario: ""},
                     {ID: 3, grupo: "Patrimonial", Descricao: "Compreensivo Empresarial", Status: "Ativo", comentario: ""}];
					 
	$scope.myModalidade = 	[{ID: 1, grupo: "Patrimonial", ramo: "Residencial Patrimoniais", idSusep: "872348723", Descricao: "Residência Habitual ", Status: "Ativo", comentario: ""},
							 {ID: 2, grupo: "Patrimonial", ramo: "Residencial Patrimoniais", idSusep: "872348723", Descricao: "Acordos Especiais", Status: "Ativo", comentario: ""},
							 {ID: 3, grupo: "Patrimonial", ramo: "Residencial Patrimoniais", idSusep: "872348723", Descricao: "Veraneio", Status: "Ativo", comentario: ""}];
							 
	$scope.myBeneficio = [{ID: 1, Descricao: "Estacionamento", Status: "Ativo", comentario: ""},
                     {ID: 2, Descricao: "PetShop", Status: "Ativo", comentario: ""},
                     {ID: 3, Descricao: "Locadora de Auto", Status: "Ativo", comentario: ""}];
					 
	$scope.myImpressao = [{ID: 1, Descricao: "Orçamento", Status: "Ativo", comentario: ""},
                     {ID: 2, Descricao: "Certificado", Status: "Ativo", comentario: ""},
                     {ID: 3, Descricao: "Apólice", Status: "Ativo", comentario: ""}];
					 
	$scope.myDescAgra = [{ID: 1, tipoDescAgra:"Desconto", tipoAplica:"Obrigatório", Descricao: "Desconto Técnico",percMin:"5%",percMax:"20%", Status: "Ativo", comentario: ""},
                     {ID: 2, tipoDescAgra:"Desconto", tipoAplica:"Obrigatório", Descricao: "Desconto Comercial",percMin:"5%",percMax:"20%", Status: "Ativo", comentario: ""},
                     {ID: 3, tipoDescAgra:"Agravo",tipoAplica:"Obrigatório", Descricao: "Agravo Região",percMin:"5%",percMax:"20%", Status: "Ativo", comentario: ""}];

    $scope.gridOptions = { 
        data: 'myData',
		showFilter: true,
		filterOptions: $scope.filterOptions,
        showGroupPanel: true,
		columnDefs: [{field:'Descricao', displayName:'Descrição Curta'}, 
					{field:'Descricao', displayName:'Descrição Longa'}, 
					{field:'Status', displayName:'Situação'}]
    };
	
	$scope.gridRamo = { 
        data: 'myRamo',
		showFilter: true,
		filterOptions: $scope.filterOptions,
        showGroupPanel: true,
		columnDefs: [{field:'ID', displayName:'Id Ramo'}, 
					{field:'grupo', displayName:'Grupo Comercial'}, 
					{field:'Descricao', displayName:'Descrição Curta'}, 
					{field:'Descricao', displayName:'Descrição Longa'}, 
					{field:'Status', displayName:'Situação'}, 
					{field:'comentarios', displayName:'Comentários'}]
    };
	
	$scope.gridModalidade = { 
        data: 'myModalidade',
		showFilter: true,
		filterOptions: $scope.filterOptions,
        showGroupPanel: true,
		columnDefs: [{field:'ID', displayName:'Empresa'}, 
					{field:'grupo', displayName:'Grupo Comercial'}, 
					{field:'ramo', displayName:'Código do Ramo'},
					{field:'ramo', displayName:'Código do Modalidade'},					
					{field:'Descricao', displayName:'Descrição (Curta)'}, 
					{field:'Descricao', displayName:'Descrição (Longa)'}, 
					{field:'Status', displayName:'situação'}]
    };
	
	$scope.gridBeneficio = { 
        data: 'myBeneficio',
		showFilter: true,
		filterOptions: $scope.filterOptions,
        showGroupPanel: true,
		columnDefs: [{field:'ID', displayName:'Empresa'}, 
					{field:'Descricao', displayName:'Descrição (Curta)'}, 
					{field:'Descricao', displayName:'Descrição (Longa)'}, 
					{field:'Status', displayName:'Situação'}]
    };
	
	$scope.gridImpressao = {
        data: 'myImpressao',
		showFilter: true,
		filterOptions: $scope.filterOptions,
		showGroupPanel: true,
		columnDefs: [{field:'ID', displayName:'Empresa'}, 
					{field:'Descricao', displayName:'Tipo Formulário'}, 
					{field:'Descricao', displayName:'Descrição (Curta)'}, 
					{field:'Descricao', displayName:'Descrição (Longa)'}, 
					{field:'Status', displayName:'Situação'}]
    };
	
	$scope.gridDescAgra = {
        data: 'myDescAgra',
		showFilter: true,
		filterOptions: $scope.filterOptions,
        showGroupPanel: true,
		columnDefs: [{field:'ID', displayName:'Empresa'},
					{field:'ID', displayName:'Código Desc/Agravo'},		
					{field:'Descricao', displayName:'Descrição (Curta)'}, 
					{field:'Descricao', displayName:'Descrição (Longa)'}, 
					{field:'tipoDescAgra', displayName:'Tipo Desconto/Agravo'}, 
					{field:'tipoAplica', displayName:'Cálculo Desconto/Agravo'},
					{field:'percMin', displayName:'Percentual Minimo'},
					{field:'percMax', displayName:'Percentual Máximo'},					
					{field:'Status', displayName:'Situação'}]
    };

});