fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(comments => {
        let wrap = document.createElement('div');
        wrap.id = 'wrap';
        for (const comment of comments) {
            let commentDiv = document.createElement('div');
            for (const key in comment) {
                let keyDiv = document.createElement('div');
                keyDiv.innerText = `${comment[key]}`
                commentDiv.appendChild(keyDiv);
            }
            wrap.appendChild(commentDiv);
        }
        document.body.appendChild(wrap);
    })