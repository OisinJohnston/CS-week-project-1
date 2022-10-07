function rng(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

let number = rng(1, 200);
let guesses = 0;
let guessed = false;

function submit() {
    fetch(url='/api/guesses', {
        'method': 'POST',
	'headers': {
		'Content-Type': 'application/json'
	},
	'body': JSON.stringify({
		"name": getCookie("username"),
		"numguesses": guesses,
		"completed": guessed
	}) 
    }).then((resp) => {
	    window.location.assign("./results.html") 
    })
}

function checkanwser() {
    var guess = document.getElementById("ugnumber").value; 
    guesses += 1;
    if (guess == number) {
	guessed = true;
        alert("Correct Answer!");
	submit();
	return
    }
    alert("Wrong Answer!");
}


