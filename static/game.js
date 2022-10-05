function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

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

function getChallenge() {
    let username = getCookie("username");
    if (username == "") {
        alert("Please login");
        return;
    }
    window.location.assign('./realgame.html')
}