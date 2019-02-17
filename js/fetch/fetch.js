const url = 'https://reqres.in/api/users';

// fetch(url)
//     .then((resp) => resp.json())
//     .then((respObj) => {
//         console.log(respObj.data[0].last_name)
//         console.log(respObj.page)
//     })


    fetch('https://www.meneame.net/')
        .then(resp =>resp.json())
        .then(html=>{
            console.log(html)
            // document.open();
            // document.write(html);
            // document.close();
        })
