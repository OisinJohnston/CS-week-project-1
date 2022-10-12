//logs info from database onto the table
document.addEventListener("DOMContentLoaded", () => {
	let restable = document.getElementById("results");
	fetch(url = "/api/guesses", {
		method: 'GET'
	}).then(async function(response) {
		var resp = await response.json();
		console.log(resp)
		for (var i = 0; i<resp.length; i ++) {
			var item = resp[i]

			var row = restable.insertRow(-1);
			var namecell = row.insertCell(0);
			var guessescell = row.insertCell(1);
			var compcell = row.insertCell(2);
			namecell.innerHTML = item["user"]["name"];
			guessescell.innerHTML = item["numguesses"];
			compcell.innerHTML = item["timetaken"];

        }


    })
})



