function sumarNumero(numero,cb) {
  setTimeout(function() {
      cb(numero + 1)
  }, 800);
}

var result = sumarNumero(5, function(resultado){
     console.log("resultado en call back", resultado)
});
console.log(result);
