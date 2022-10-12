//checks your username
function checkusername() {
    let username = document.getElementById("usernameinp").value;
    fetch(url = '/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": username
        })
    }).then((response) => {
        if (response.status == 201) {
            document.cookie = "username=" + username;
            alert("Now logged in as " + username);
        } else if (response.status == 409) {
            alert("That username is already taken")
        }
    })
}
//brings you to the real game but also cheaks if u put your username in the cheackusername box
function getChallenge() {
    let username = getCookie("username");
    if (username == "") {
        alert("Please login");
        return;
    }
    window.location.assign('./realgame.html')
}
