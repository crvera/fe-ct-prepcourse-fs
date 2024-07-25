function foo (objeto){
    var nuevoobjeto ={};
    for (var clave in objeto){
        nuevoobjeto [objeto [clave]]=clave;
    }
    return nuevoobjeto;
}
var resultado = foo ({nombre: "Fulano", apellido: "Rodriguez"});
//console.log (resultado);
// Resultado es: ({ Fulano: 'nombre', Rodriguez: 'apellido' })