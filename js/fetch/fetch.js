const url = 'https://reqres.in/api/users';

// fetch(url)
//     .then((resp) => resp.json())
//     .then((respObj) => {
//         console.log(respObj.data[0].last_name)
//         console.log(respObj.page)
//     })


    const url2 = "https://www.wikipedia.org/"

    fetch(url2)
        .then(resp =>resp.text())
        .then((h)=>{
            console.log("pasa por aqui" + h)
            // document.open();
            // document.write(html);
            // document.close();
        })
