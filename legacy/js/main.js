// main.js
var app = angular.module('myApp', ['ngGrid']);
app.controller('MyCtrl', function($scope) {
	
	$scope.filterOptions = {
		filterText: ''
	};
    $scope.myData = [{Empresa: "Porto Seguro",Descricao: "Patrimonial", Status: "Ativo"},
                     {Empresa: "Porto Seguro",Descricao: "Responsabilidade Civil", Status: "Ativo"},
                     {Empresa: "Porto Seguro",Descricao: "Agronegócio", Status: "Ativo"}];

    $scope.gridOptions = { 
        data: 'myData',
		showFilter: true,
		filterOptions: $scope.filterOptions,
        showColumnMenu: true,
        showGroupPanel: true,
		columnDefs: [{field:'Empresa', displayName:'Empresa'},
					{field:'Descricao', displayName:'Descrição resumida'}, 
					{field:'Descricao', displayName:'Descrição completa'}, 
					{field:'Status', displayName:'Situação'}]
    };
	
	$scope.myDescAgra = [{empresa: "Porto Seguro", ID:1, tipoDescAgra:"Desconto", tipoAplica:"Comercial", Descricao: "Desconto Técnico",percMin:"5%",percMax:"20%", Status: "Ativo", comentario: ""},
                         {empresa: "Porto Seguro", ID:2, tipoDescAgra:"Desconto", tipoAplica:"Comercial", Descricao: "Desconto Comercial",percMin:"5%",percMax:"20%", Status: "Ativo", comentario: ""},
                         {empresa: "Porto Seguro", ID:3, tipoDescAgra:"Agravo",tipoAplica:"Tarifario", Descricao: "Agravo Região",percMin:"5%",percMax:"20%", Status: "Ativo", comentario: ""}];
	
	$scope.gridDescAgra = {
        data: 'myDescAgra',
		showFilter: true,
		filterOptions: $scope.filterOptions,
        showColumnMenu: true,
        showGroupPanel: true,
		columnDefs: [{field:'empresa', displayName:'Empresa'},
					{field:'ID', displayName:'Código Desc/Agravo'},		
					{field:'Descricao', displayName:'Descrição resumida'}, 
					{field:'Descricao', displayName:'Descrição completa'}, 
					{field:'tipoDescAgra', displayName:'Tipo Desconto/Agravo'}, 
					{field:'tipoAplica', displayName:'Cálculo Desconto/Agravo'},
					{field:'percMin', displayName:'Percentual Minimo'},
					{field:'percMax', displayName:'Percentual Máximo'},					
					{field:'Status', displayName:'Situação'}]
    };
	
	$scope.myBeneficio = [{empresa: "Porto Seguro", Descricao: "Estacionamento", Status: "Ativo"},
                          {empresa: "Porto Seguro", Descricao: "PetShop", Status: "Ativo"},
                          {empresa: "Porto Seguro", Descricao: "Locadora de Auto", Status: "Ativo"}];
					 
	$scope.gridBeneficio = { 
        data: 'myBeneficio',
		showFilter: true,
        showColumnMenu: true,
		filterOptions: $scope.filterOptions,
        showGroupPanel: true,
		columnDefs: [{field:'empresa', displayName:'Empresa'}, 
					{field:'Descricao', displayName:'Descrição resumida'}, 
					{field:'Descricao', displayName:'Descrição completa'}, 
					{field:'Status', displayName:'Situação'}]
    };
	
	$scope.myImpressao = [{empresa: "Porto Seguro",func:"O",Descricao: "Orçamento", Status: "Ativo"},
                          {empresa: "Porto Seguro",func:"P",Descricao: "Proposta", Status: "Ativo"},
                          {empresa: "Porto Seguro",func:"E",Descricao: "Emissão", Status: "Ativo"}];
						  
	$scope.gridImpressao = {
        data: 'myImpressao',
		showFilter: true,
        showColumnMenu: true,
		filterOptions: $scope.filterOptions,
		showGroupPanel: true,
		columnDefs: [{field:'empresa', displayName:'Empresa'}, 
					{field:'Descricao', displayName:'Descrição resumida'}, 
					{field:'Descricao', displayName:'Descrição completa'}, 
					{field:'func', displayName:'Funcionalidade'}, 
					{field:'Status', displayName:'Situação'}]
    };
	
	$scope.myModalidade = 	[{empresa: "Porto Seguro", grupo: "Patrimonial", ramo: 114, cMod:1, Descricao: "Residência Habitual ", Status: "Ativo"},
							 {empresa: "Porto Seguro", grupo: "Patrimonial", ramo: 118, cMod:2, Descricao: "Acordos Especiais", Status: "Ativo"},
							 {empresa: "Porto Seguro", grupo: "Patrimonial", ramo: 118, cMod:3, Descricao: "Veraneio", Status: "Ativo"}];
							 
	$scope.gridModalidade = { 
        data: 'myModalidade',
		showFilter: true,
        showColumnMenu: true,
		filterOptions: $scope.filterOptions,
        showGroupPanel: true,
		columnDefs: [{field:'empresa', displayName:'Empresa'}, 
					{field:'grupo', displayName:'Grupo Comercial'}, 
					{field:'ramo', displayName:'Código do Ramo'},
					{field:'cMod', displayName:'Código do Modalidade'},					
					{field:'Descricao', displayName:'Descrição resumida'}, 
					{field:'Descricao', displayName:'Descrição completa'}, 
					{field:'Status', displayName:'situação'}]
	};
	
	$scope.myRamo = [{empresa: "Porto Seguro", grupo: "Patrimonial",cSusep:2789364782, ramo: 114, Descricao: "Compreensivo Condomínio", Status: "Ativo"},
                     {empresa: "Porto Seguro", grupo: "Patrimonial",cSusep:2789364782, ramo: 118, Descricao: "Residencial Patrimoniais", Status: "Ativo"},
                     {empresa: "Porto Seguro", grupo: "Patrimonial",cSusep:2789364782, ramo: 118, Descricao: "Compreensivo Empresarial", Status: "Ativo"}];
					 
	$scope.gridRamo = { 
        data: 'myRamo',
		showFilter: true,
        showColumnMenu: true,
        enableColumnReordering: true,
		filterOptions: $scope.filterOptions,
        showGroupPanel: true,
		columnDefs:  [{field:'empresa', displayName:'Empresa'}, 					
					  {field:'grupo', displayName:'Grupo Comercial'}, 
					  {field:'ramo', displayName:'Código Ramo'},
					  {field:'Descricao', displayName:'Descrição resumida'}, 
					  {field:'Descricao', displayName:'Descrição completa'}, 
					  {field:'cSusep', displayName:'Código SUSEP Principal'}, 
					  {field:'Status', displayName:'Situação'}]
	};
					 
	$scope.gridRamo2 = { 
        data: 'myRamo',
		showFilter: true,
        showColumnMenu: true,
		filterOptions: $scope.filterOptions,
        showGroupPanel: true,
		columnDefs:  [{field:'empresa', displayName:'Empresa'},
					  {field:'ramo', displayName:'Código Ramo'},
					  {field:'Descricao', displayName:'Descrição resumida'}, 
					  {field:'Descricao', displayName:'Descrição completa'}, 
					  {field:'cSusep', displayName:'Código SUSEP Secundário'}, 
					  {field:'Status', displayName:'Situação'}]

    };
	
	$scope.myVersaoProd = [{empresa: "Porto Seguro", grupo: "Patrimoniais", ramo: 114, modalidade: 0, descricao: "Patrimonial Residencial Habitual", versao: 3, inicio: "01/01/2015", fim: ""},
                           {empresa: "Porto Seguro", grupo: "Patrimoniais", ramo: 114, modalidade: 0, descricao: "Patrimonial Residencial Habitual", versao: 2, inicio: "01/01/2014", fim: "31/12/2014"},
                           {empresa: "Porto Seguro", grupo: "Patrimoniais", ramo: 114, modalidade: 0, descricao: "Patrimonial Residencial Habitual", versao: 1, inicio: "01/01/2013", fim: "31/12/2013"}];
						  
	$scope.gridVersaoProd = {
        data: 'myVersaoProd',
		showFilter: true,
        showColumnMenu: true,
		filterOptions: $scope.filterOptions,
		showGroupPanel: true,
		columnDefs: [{field:'empresa', displayName:'Empresa'},
					 {field:'grupo', displayName:'Grupo Comercial'},
					 {field:'ramo', displayName:'Ramo'},
					 {field:'modalidade', displayName:'Modalidade'},
					 {field:'descricao', displayName:'Descrição resumida'},
					 {field:'versao', displayName:'Numero da Versão'},
					 {field:'inicio', displayName:'Vigência Inicio'},
					 {field:'fim', displayName:'Vigência Fim'}]
	};
	
	$scope.myVersaoOferta = [{grupo: "Patrimoniais", ramo: 114, modalidade: 0, descricaoProduto: "Patrimonial Residencial Habitual", descricao: "Premium", versao: 3, inicio: "01/01/2015", fim: ""},
                             {grupo: "Patrimoniais", ramo: 114, modalidade: 0, descricaoProduto: "Patrimonial Residencial Habitual", descricao: "Premium", versao: 2, inicio: "01/01/2014", fim: "31/12/2014"},
                             {grupo: "Patrimoniais", ramo: 114, modalidade: 0, descricaoProduto: "Patrimonial Residencial Habitual", descricao: "Premium", versao: 1, inicio: "01/01/2013", fim: "31/12/2013"}];
						  
	$scope.gridVersaoOferta = {
        data: 'myVersaoOferta',
		showFilter: true,
        showColumnMenu: true,
		filterOptions: $scope.filterOptions,
		showGroupPanel: true,
		columnDefs: [{field:'grupo', displayName:'Grupo Comercial'},
					 {field:'ramo', displayName:'Ramo'},
					 {field:'modalidade', displayName:'Modalidade'},
					 {field:'descricaoProduto', displayName:'Descrição resumida do Produto Comercial'},
					 {field:'descricao', displayName:'Descrição resumida da Oferta'},
					 {field:'versao', displayName:'Numero da Versão'},
					 {field:'inicio', displayName:'Vigência Inicio'},
					 {field:'fim', displayName:'Vigência Fim'}]
	};

});