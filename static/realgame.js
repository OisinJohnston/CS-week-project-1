number = Math.floor(Math.random() * 200);
Math.round(number);

console.log(number);

function checkanswer() {
    let userguess = document.getElementById("ugnumber").value;
    fetch(url = '/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    
    })

    let guesses =+ 1; 

    console.log(userguess);
    console.log(guesses);
}

