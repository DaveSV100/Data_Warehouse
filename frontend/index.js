const user = document.querySelector("#inputUser");
const password = document.querySelector("#inputPassword");
const btn = document.querySelector("#submitBtn");
password.autocomplete = "off";

btn.addEventListener("click", () => {
    fetch( "http://127.0.0.1:3000/login", {
        method: "post",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify( {
            "username": user.value,
            "password": password.value,
        } )
    }).then(response => 
        
        response.text().then(data => {
    
        //Save in local storage
        let token = "Bearer " + data;
    
        fetch("http://127.0.0.1:3000/home", {
            method: "get",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
                "Authorization": token
            }
        }).then(response => response.json().then(json => console.log(json)));
    }))
});
