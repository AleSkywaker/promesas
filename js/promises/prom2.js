function sumarLento(numero) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(numero + 1);
    }, 800);
  });
}
let sumarRapido = numero => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(numero + 1), 300);
  });
};
sumarLento(20).then(console.log)
sumarRapido(2).then(console.log)