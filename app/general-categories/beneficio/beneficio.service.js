/**
 * Created by richard.m.infantado on 4/10/2015.
 */

'use strict';

app.service('GeneralBeneficioService', function ($http) {


	var myBeneficio = [{benBusiness: "Porto Seguro", shortDesc: "Estacionamento", fullDesc: "Estacionamento", status: "Ativo"},
                          {benBusiness: "Porto Seguro", shortDesc: "PetShop", fullDesc: "PetShop", status: "Ativo"},
                          {benBusiness: "Porto Seguro", shortDesc: "Locadora de Auto", fullDesc: "Locadora de Auto", status: "Ativo"}];
               
    //simply returns the myBeneficio list
    this.list = function () {
        return myBeneficio;
    }
});