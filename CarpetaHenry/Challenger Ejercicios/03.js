function foo (objeto){
    let my_var =0;
    for (let key in objeto){
        my_var = my_var + objeto [key];
    }
    //console.log (my_var);
    return my_var;

}
let resultado = foo ({a:3, b:7, c:1});
//console.log (resultado);
// El resultado es (11)