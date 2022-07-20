const btn = document.getElementById("submitBtn");
const email = document.getElementById("email-input");
const password = document.getElementById("password-input");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("You're welcome");
    console.log({
        "email": email.value,
        "password": password.value
    });
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

        fetch ("http://localhost:3000/home",{
            method: 'get',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }).then(response => response.json().then(json => console.log("this is the respose of the frontend "+ json)));
    }))
});

