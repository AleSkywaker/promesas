const url = 'https://reqres.in/api/users';

// fetch(url)
//     .then((resp) => resp.json())
//     .then((respObj) => {
//         console.log(respObj.data[0].last_name)
//         console.log(respObj.page)
//     })


    const url2 = "https://www.wikipedia.org/"

    fetch(url2)
        .then(resp =>resp.json())
        .then(html=>{
            console.log(html)
            // document.open();
            // document.write(html);
            // document.close();
        })
