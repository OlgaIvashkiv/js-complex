fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(comments => {
                let wrap = document.createElement('div');
                wrap.id = 'wrap';
                let newArray = [];
                wrap.innerText = newArray;
                for (const post of posts) {
                    let postDiv = document.createElement('div');
                    post.comments = [];
                    postDiv.innerText = `${post.userId}  ${post.id}  ${post.title}  ${post.body}  ${post.comments}`
                    // for (const key in post) {
                    //     let keyDiv = document.createElement('div');
                    //     keyDiv.innerText = `${post[key]}`;

                        for (const comment of comments) {
                            let commentDiv = document.createElement('div');
                            // for (const commentKey in comment) {
                            //     let commentKeyDiv = document.createElement('div');
                                if (post.id === comment.postId){
                                    post.comments.push(comment);

                                }
                            commentDiv.innerText = `${comment.postId}  ${comment.id}  ${comment.name}  ${comment.email}  ${comment.body}`
                                // commentKeyDiv.innerText = `${comment[commentKey]}`;
                                // commentDiv.appendChild(commentKeyDiv);
                            wrap.appendChild(commentDiv);


                    }
                    newArray.push(post);

                    wrap.appendChild(postDiv);
                }


            document.body.appendChild(wrap);
        })
    })