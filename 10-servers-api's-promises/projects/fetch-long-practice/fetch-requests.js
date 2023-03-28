/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/


/* ============================== Phase 1 ============================== */

// Your code here
fetch("/products", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
        name: "Carribean Delight Coffee",
        description: "Made by Manatee Coffee",
        price: 11.99,
        category: "grocery"
    })
});



/* ============================== Phase 2 ============================== */

// Your code here
fetch("/products", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
        name: "Carribean Delight Coffee",
        description: "Made by Manatee Coffee",
        price: 11.99,
        category: "grocery"
    })
}).then(response => {
    console.log(response.status);
    console.log(response.headers.get('Content-Type'));
    console.log('reponse URL = ' + res.url)
})




/* ============================== Phase 3 ============================== */

// Your code here

fetch("/products", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
        name: "Carribean Delight Coffee",
        description: "Made by Manatee Coffee",
        price: 11.99,
        category: "grocery"
    })
}).then(response => {
    console.log(response.status);
    console.log(response.headers.get('Content-Type'));
    console.log('reponse URL = ' + res.url)
})
