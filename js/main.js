function onSignIn(googleUser) {
    console.log('ISSO MESMPO');
    const profile = googleUser.getBasicProfile();
    const authResponse = googleUser.getAuthResponse();
    const informationsToRetrieve = {
        "id": profile.getId(),
        "name": profile.getName(),
        "email": profile.getEmail(),
        "imageUrl": profile.getImageUrl(),
        "accessToken": authResponse.access_token,
        "id_token": authResponse.id_token,
        "expiresIn": authResponse.expires_in,
        "tokenType": authResponse.token_type,
    }

    if (document.getElementById("authenticated-area").style.display == "none") {
        document.getElementById("unauthenticated-area").style.display = "none";
        document.getElementById("authenticated-area").style.display = "block";
    }

    document.getElementById("authenticated-area").innerHTML = `
        <div class="notification is-success">
            User successfuly signed in!
        </div>
    `;
    Object.entries(informationsToRetrieve).forEach(function(info){
        let key = info[0];
        let value = info[1];

        let html = `<div class="snippet mb-5"><div class="snippet-header">${key}</div><code>${value}</code></div>`;
        document.getElementById("authenticated-area").innerHTML += html;
    });
}
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        document.getElementById("authenticated-area").style.display = "none";
        document.getElementById("authenticated-area").innerHTML = "";

        document.getElementById("unauthenticated-area").innerHTML = `
            <div class="notification is-warning">
                Click on the button to sign in!
            </div>
        `;

        document.getElementById("unauthenticated-area").style.display = "block";
    });
}