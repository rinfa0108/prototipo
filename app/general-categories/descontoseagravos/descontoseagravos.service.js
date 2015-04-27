/**
 * Created by richard.m.infantado on 4/8/2015.
 */

app.service('DesconstoseAgravosService',
    ['$http',  function ($http) {

    //to create unique id - for prototype use only
    var uid = 4;

    //var array to hold list of all descontos
    var descontosagravosCollection = [{id:1, empresa: "Porto Seguro", tipoDescAgra:"Desconto", tipoAplica:"Comercial", Descricao: "Desconto Técnico",percMin:"5%",percMax:"20%", Status: "Ativo", comentario: ""},
        {empresa: "Porto Seguro", id:2, tipoDescAgra:"Desconto", tipoAplica:"Comercial", Descricao: "Desconto Comercial",percMin:"5%",percMax:"20%", Status: "Ativo", comentario: ""},
        {empresa: "Porto Seguro", id:3, tipoDescAgra:"Agravo",tipoAplica:"Tarifario", Descricao: "Agravo Região",percMin:"5%",percMax:"20%", Status: "Ativo", comentario: ""}];

    //save method create a new descontos if not already exists
    //else update the existing object
    this.save = function (descontos) {
        if (descontos.id == null) {

            //if this is new descontos, add it in descontosagravos array
            descontos.id = uid++;
            descontosagravosCollection.push(descontos);
        } else {
            //for existing descontos, find this descontos using id
            //and update it.
            for (i in descontosagravosCollection) {
                if (descontosagravosCollection[i].id == descontos.id) {
                    descontosagravosCollection[i] = descontos;
                }
            }
        }

    }

    //simply search descontosagravos list for given id
    //and returns the descontos object if found
    this.get = function (id) {
        for (i in descontosagravosCollection) {
            if (descontosagravosCollection[i].id == id) {
                return descontosagravosCollection[i];
            }
        }

    }

    //iterate through descontosagravos list and delete
    //descontos if found
    this.delete = function (id) {
        for (i in descontosagravosCollection) {
            if (descontosagravosCollection[i].id == id) {
                descontosagravosCollection.splice(i, 1);
            }
        }
    }

    //simply returns the descontosagravos list
    this.list = function () {
        return descontosagravosCollection;
    }
}]);
