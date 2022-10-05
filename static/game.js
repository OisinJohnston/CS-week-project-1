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