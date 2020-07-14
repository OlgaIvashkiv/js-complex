fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        let wrap = document.createElement('div');
        wrap.id = 'wrap';
            for (const user of json) {
                let userDiv = document.createElement('div');
                for (const key in user) {
                    let contentDiv = document.createElement('div');
                    contentDiv.innerText = `${JSON.stringify(user[key])}`;
                    userDiv.appendChild(contentDiv);
                }

                    wrap.appendChild(userDiv);
            }
                    document.body.appendChild(wrap);
    }
    )
                // userDiv.innerHTML = `${user.id} <br> Name: ${user.name} <br>
                // username: ${user.username} <br>
                // email: ${user.email} <br> Address:${user.address.street}
                // ${user.address.suite}  ${user.address.city} ${user.address.zipcode} ${user.address.geo.lat}
                // ${user.address.geo.lng}`
