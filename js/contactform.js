function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://zxvl7870si.execute-api.us-east-2.amazonaws.com/prod/universalses";

    var name = document.getElementById("name-1105").value;
    var phone = document.getElementById("phone-1105").value;
    var email = document.getElementById("email-1105").value;
    var bedrooms = document.getElementById("bedrooms-1105").value;
    var pets = document.getElementById("pets-1105").value;
    var locations = document.getElementById("locations-1105").value;
    var times = document.getElementById("times-1105").value;
    var message = document.getElementById("message-1105").value;
    var recaptchaResponse = document.getElementById('recaptcha-response').value;

    if (name=="" || phone=="" || email=="" || bedrooms=="" || pets=="" || locations=="" || times=="" || message=="") {
        alert("Please fill all required fields");
        return false;
    }

    var data = {
        name : name,
        phone : phone,
        email : email,
        bedrooms : bedrooms,
        pets : pets,
        locations : locations,
        times : times,
        message : message,
        receiver : "cafferty99@gmail.com",
        recaptchaResponse : recaptchaResponse
    };

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", URL);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify(data));
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4) {
            var response = JSON.parse(xmlhttp.responseText);
            if (xmlhttp.status === 200 ) {
                console.log('successful');
                document.getElementById("cs-form-1105").innerHTML = "<h1>Thank you for your message/feedback<br>our team will get back to you soon!</h1>";
            } else {
                console.log('failed');
            }
        }
    }

    document.getElementById('cs-form-1105').reset();
}
