const url = 'https://reqres.in/api/users';
const userUrl = 'https://reqres.in/api/users/1';
//Peticion GET

fetch(url).then((resp) => resp.json()).then((respObj) => {
	// console.log(respObj.data[0].last_name);
	// console.log(respObj.page);
});

//Peticion POST
const usuario = {
	nombre: 'Alex',
	edad: '32'
};
fetch(url, {
	method: 'POST',
	body: JSON.stringify(usuario),
	headers: {
		'Content-Type': 'application/json'
	}
})
	.then((resp) => resp.json())
	// .then(console.log)
	.catch((error) => console.log(error));

//introducir imagen con fetch
let ima = document.getElementById('id33');
fetch('../../imagen.jpg').then((resp) => resp.blob()).then((imagen) => {
	// console.log(imagen);
	var imgPath = URL.createObjectURL(imagen);
	ima.src = imgPath;
});
const usuarioInsert = document.getElementById('id34');
//clone
/*******
 fetch(userUrl).then((resp) => resp.json()).then((usuario) => {
     var userPath = usuario.data.avatar;
     usuarioInsert.src = userPath;
     console.log('Usuario :: ', usuario.data);
 });
 ************/

//clone 2
/*************
 fetch(userUrl).then((resp) => {
     resp.clone().json().then((user) => {
         console.log("ddis",user);
     });
     resp.json().then((user) => {
         console.log("ddis",user);
     });
 });
 *********** */
//manejo de errores

fetch(userUrl)
	.then((resp) => {
		if (resp.ok) {
			return resp.json();
		} else {
			console.log('No existe el usuario');
			throw new Error('No existe el usuario 2000');
		}
	})
	.then(console.log)
	.catch((error) => {
		console.log(error);
	});

// const url2 = "https://www.wikipedia.org/"

// fetch(url2)
//     .then(resp =>resp.text())
//     .then((h)=>{
//         console.log("pasa por aqui" + h)
//         document.open();
//         document.write(html);
//         document.close();
//     })

//Leer html

fetch('no-encontrado.html')
	.then((resp) => {
		if (resp.ok) {
			return resp.text();
		} else {
			throw new Error('Me cachis jajaja');
		}
	})
	.then((datos) => {
		var meterDatos = document.getElementById('prueba');
		meterDatos.innerHTML = datos;
	})
	.catch((error) => {
		console.log('Error :: ', error);
	});
