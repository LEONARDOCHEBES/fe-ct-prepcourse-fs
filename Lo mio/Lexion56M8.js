let returnUsr = function(){
    return 'msj1';
};

let rtrnSld = function(){
    return 'holaaa';

};

let saludar =function (callbac1, callbac2){
    return callbac1() + '' + callbac2();
};

let resultado = saludar(returnUsr,rtrnSld);

console.log(resultado);
