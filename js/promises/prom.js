function sumarUno(numero) {
  var promesa = new Promise(function(resolve, reject) {

    if(numero >= 18){
        reject('El numero es muy alto')
    }

    setTimeout(function() {
      resolve(numero + 1);
    }, 800);
  });
  return promesa;
}

sumarUno(17)
  .then(sumarUno)
  .then(sumarUno)
  .then(result => {
    console.log("ultimo result", result);
  }).catch(error=>{
      console.log("Algo ha ido mal ::", error)
  })
