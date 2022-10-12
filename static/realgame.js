//Range of minimum to maximum numbers
function rng(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

var number = rng(1, 200);
var guesses = 0;
var hints = 0;
var startTime = Math.floor(Date.now() / 1000)

//logs your info to the database
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
//Checks if your answer is correct
function checkanwser() {
    let guess = document.getElementById("ugnumber").value;
    guesses++;

    if (guess == number) {
        alert("Correct Answer!");
    	submit();
	    return
    } else if (guess > number){
        alert("Your guess is greater than the number")
    } else{
        alert("Your guess is smaller than the number")
    }


}

// It shows whether you number is closer to  200 or 1
function getHint() {
    hints++;
    if (number > lastguess){
        alert("the number is between " + lastguess + "and 201")
    }else {
        alert("the number is between " + lastguess + "and 0")
    }

}


