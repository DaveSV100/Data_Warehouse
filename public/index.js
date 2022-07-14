const user_name = document.querySelector("#inputUser");
const user_password = document.querySelector("#inputPassword");
const btn = document.querySelector("#submitBtn");
const form = document.getElementsByTagName("form");
user_password.autocomplete = "off";

const form_email = "myname";
const form_password = "mypassword";
// btn.addEventListener("click", () => {
//     console.log("clicked");
//     // fetch( "http://127.0.0.1:3000/login", {
//     //     method: "post",
//     //     headers: {
//     //         "Accept": "application/json, text/plain, */*",
//     //         "Content-Type": "application/json"
//     //     },
//     //     body: JSON.stringify( {
//     //         "username": user.value,
//     //         "password": password.value,
//     //     } )
//     // }).then(response => console.log(response))

//     fetch( "http://127.0.0.1:3000/login", {
//         method: "post",
//         headers: {
//             "Accept": "application/json, text/plain, */*",
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify( {
//             "name": form_email,
//             "password": form_password,
//         } )
//     }).then(response => response.text().then(data => {
    
//         //Save in local storage
//         let token = "Bearer " + data;
    
//         fetch("http://127.0.0.1:3000/home", {
//             method: "get",
//             headers: {
//                 "Accept": "application/json, text/plain, */*",
//                 "Content-Type": "application/json",
//                 "Authorization": token
//             }
//         }).then(response => response.json().then(json => console.log(json)));
//     }))
// });