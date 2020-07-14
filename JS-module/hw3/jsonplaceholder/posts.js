fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        let wrap = document.createElement('div');
        wrap.id = 'wrap';
        for (const post of json) {
            let postDiv = document.createElement('div');
            for (const key in post) {
                let keysDiv = document.createElement('div');
                keysDiv.innerText = `${post[key]}`
                postDiv.appendChild(keysDiv);

            }
                wrap.appendChild(postDiv);
        }
        document.body.appendChild(wrap)



    })