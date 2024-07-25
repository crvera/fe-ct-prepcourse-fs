var arreglo = [{id: 1}, {id: 2}, {id: 3}];
var resultado = arreglo.find (function (obj){
    return obj.id===2
    //console.log (obj.id===2)
});

//creamos un arreglo con tres elementos, despues guardamos en una variable resultado la busqueda de 
// obj.id===2, esto nos retorna como resultado de la busqueda igual a (true), porque lo encuentra
// en el arreglo donde hace la busqueda.