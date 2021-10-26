document.getElementById('fetch-user-btn').addEventListener('click', fetchUserData);
document.getElementById('fetch-userDetail-btn').addEventListener('click', fetchUserDetailData);

function fetchUserData(){
    fetch('https://reqres.in/api/users?page=2')
        .then(res => res.json())
        .then(res => {
            let result = '';
            res.data.forEach(user => {
                result += `
                        <tr>
                            <th scope="row">${user.id}</th>
                            <td><img src="${user.avatar}"></td>
                            <td>${user.email}</td>
                            <td>${user.first_name}</td>
                            <td>${user.last_name}</td>
                        </tr>
                `;
            });
            //console.log(result);
            document.getElementById("response").innerHTML = result;

        });
}
function fetchUserDetailData(){
    fetch('https://reqres.in/api/users/2')
        .then(res => res.json())
        .then(res => {
            let result = '';
    
                result += `
                        <tr>
                            <th scope="row">${res.data.id}</th>
                            <td><img src="${res.data.avatar}"></td>
                            <td>${res.data.email}</td>
                            <td>${res.data.first_name}</td>
                            <td>${res.data.last_name}</td>
                        </tr>
                `;

            //console.log(result);
            document.getElementById("response").innerHTML = result;

        });
}

