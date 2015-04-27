app.service('GrupoCommercialService', function ($http) {


	var myGrupoData = [{empresa: "Porto Seguro",descricao: "Patrimonial", descricaoCompleta: "Patrimonial", status: "Ativo"},
                 {empresa: "Porto Seguro",descricao: "Responsabilidade Civil", descricaoCompleta: "Responsabilidade Civil", status: "Ativo"},
                 {empresa: "Porto Seguro",descricao: "Agronegócio", descricaoCompleta: "Agronegócio", status: "Ativo"}];
               
    //simply returns the myGrupoData list
    this.list = function () {
        return myGrupoData;
    }

    var uidr =  1;
    var ramosData  = [{id:1, empresa: "Porto Seguro"},
        {empresa: "Porto Seguro", id:2},
        {empresa: "Porto Seguro", id:3}];



    this.saveRamos = function (ramos) {
            ramos.id = uidr++;
            ramosData.push(ramos);
            console.log(ramosData);
    }

    this.delRamos = function (id) {
        for (i in ramosData) {
            if (ramosData[i].id == id) {
                ramosData.splice(i, 1);
            }
        }
    }

    this.listRamos = function(){
        return ramosData;
    }


});