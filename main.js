
function final(status) {
    if (status == 'przegrales') {
        document.getElementById("winstatus").innerHTML = 'przegrałeś!'
    } else if (status == 'wygrales') {
        document.getElementById("winstatus").innerHTML = 'wygrałeś!'
    } else if (status == 'remis') {
        document.getElementById("winstatus").innerHTML = 'remis!'
    }

    setTimeout(function () { document.location.reload() }, 3000)
}
function myFunction(x) {
    if (random == 0) {
        random = 'papier'
        document.getElementById("przeciwnik").src = "papier.png"
    }
    else if (random == 1) {
        random = 'kamien'
        document.getElementById("przeciwnik").src = "kamien.png"
    }
    else if (random == 2) {
        random = 'nozyce'
        document.getElementById("przeciwnik").src = "nozyce.png"
    }
    console.log(random)

    let status;
    console.log(x)
    if (random == x) {
        status = 'remis'
    }
    if ((random == 'kamien' && x == 'papier') || (random == 'papier' && x == 'nozyce') || (random == 'nozyce' && x == 'kamien')) {
        status = 'wygrales'
    }
    if ((random == 'kamien' && x == 'nozyce') || (random == 'papier' && x == 'kamien') || (random == 'nozyce' && x == 'papier')) {
        status = 'przegrales'
    }
    final(status)
}

let random = Math.floor(Math.random() * 3);
console.log(random)
