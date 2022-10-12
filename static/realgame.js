function rng(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

var number = rng(1, 200);
var guesses = 0;
var hints = 0;
var startTime = Math.floor(Date.now() / 1000)


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


function getHint() {
    hints++;
    function genAlert(testnum, guessesleft) {
        return (number>testnum ? "The number is": "The number isn't")+" greater than " + testnum + "\n you have " + guessesleft + " hints left"
    }
    switch(hints) {
        case 1:
            alert(genAlert(100, 2))
            break;
        case 2:
            if (number > 100) {
                alert(genAlert(150, 1))
            } else {
                alert(genAlert(50, 1))
            }
            break;
        case 3:
            if (number>100) {
                if (number > 150) {
                    alert(genAlert(175, 0))
                } else {
                    alert(genAlert(125, 0))
                }
            } else {
                if (number > 50) {
                    alert(genAlert(75, 0))
                } else {
                    alert(genAlert(25, 0))
                }
            }
            break;
        default:
            alert("You have no hints remaining :( ")
    }

}



