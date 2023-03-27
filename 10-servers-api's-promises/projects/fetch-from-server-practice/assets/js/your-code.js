export function getAllDogs() {
    // Your code here
    const url = '/dogs';
    const header = { 'Content-Type': 'html/text' };
    let body

    const options = {
        method: "GET",
        headers: header,
        body: body
    }

    return fetch(url, options)
}

export function getDogNumberTwo() {
    // Your code here
    const url = '/dogs/2';
    const header = { 'Content-Type': 'html/text' };
    let body

    const options = {
        method: "GET",
        headers: header,
        body: body
    }

    return fetch(url, options)
}



export function postNewDog() {
    // Your code here
    const url = '/dogs';
    const header = { 'Content-Type': 'html/text' };
    const body = new URLSearchParams({
        name: "Lilu",
        age: 12
    });
    const options = {
        method: "POST",
        headers: header,
        body: body
    }

    return fetch(url, options)
}

export function postNewDogV2(name, age) {
    // Your code here
    const url = '/dogs';
    const header = { 'Content-Type': 'html/text' };
    const body = new URLSearchParams({
        name,
        age
    });
    const options = {
        method: "POST",
        headers: header,
        body: body
    }

    return fetch(url, options)
}

export function deleteDog(id) {
    // Your code here
    const url = '/dogs';
    const header = { 'Content-Type': 'ckyut5wau0000jyv5bsrud90y' };
    const body = new URLSearchParams({
        id
    });
    const options = {
        method: "DELETE",
        headers: header,
        body: body
    }

    return fetch(url, options)
}
