function rng(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

let lastguess = 1
var number = rng(1, 200);
var guesses = 0;
var hints = 0;
var startTime = Math.floor(Date.now() / 1000)

//submits data to database
function submit() {
    fetch(url='/api/guesses', {
        'method': 'POST',
	    'headers': {
		    'Content-Type': 'application/json'

        },

        'body': JSON.stringify({
    	    "name": getCookie("username"),
    		"numguesses": guesses,
	        "timetaken": Math.floor(Date.now() / 1000) - startTime
        })

    }).then((resp) => {
	    window.location.assign("./results.html")

    })

}
//Range of minimum to maximum numbers
function checkanwser() {
    lastguess = document.getElementById("ugnumber").value;
    guesses++;

    if (lastguess == number) {
        alert("Correct Answer!");
    	submit();
	    return
    } else if (lastguess > number){
        alert("Your guess is greater than the number")
    } else{
        alert("Your guess is smaller than the number")
    }


}

//calculates hint for user
function getHint() {
    hints++;
    if (number > lastguess){
        alert("the number is between " + lastguess + " and 200")
    }else {
        alert("the number is between " + lastguess + " and 1")
    }

}



