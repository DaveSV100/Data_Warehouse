const btn = document.getElementById("submitBtn");
const email = document.getElementById("email-input");
const password = document.getElementById("password-input");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
        method: "post",
        headers: {
            "Accept": "application/json, text/plan, */*",
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "email": email.value,
            "password": password.value
        })
    }).then(response => response.text().then(tex => {
        let token = "Bearer " + tex;
        console.log(token);
        //Save token into local storage
        // let user_data = {
        //     id: id,
        //     name: username,
        //     token: token,
        // }
        // if(localStorage.getItem('user_data') == null) {
        //     localStorage.setItem('user_data', '[]');
        // }
        // window.location.href("/home")
        fetch ("http://localhost:3000/home", {
            method: 'get',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }).then(response => response.json().then(res => console.log("this is the respose of the frontend: "+ res)));
    }))
});