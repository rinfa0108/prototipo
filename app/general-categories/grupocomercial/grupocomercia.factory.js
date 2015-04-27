/**
 * Created by richard.m.infantado on 4/10/2015.
 */

'use strict';

app.factory('Ramos', function() {
    var typesHash = [ {
        id :1,
        name : 'lemon',
        price : 100,
        unit : 2.5
    }, {
        id : 2,
        name : 'meat',
        price : 200,
        unit : 3.3
    } ];

    var localId = 3;

    var service = {
        addTable : addTable,
        getData : getData
    };

    return service;

    function addTable(name) {
        typesHash.push({id:localId++, name:name, price:100,unit:1});
    }
    function getData() {
        return typesHash;
    }
});