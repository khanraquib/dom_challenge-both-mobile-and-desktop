function myFun() {
    var first = document.getElementById("first_name").value;
    var last = document.getElementById("last_name").value;
    var mail = document.getElementById("email").value;
    var pass = document.getElementById("passwor").value;
    if (first == "") {
        document.getElementById("message").innerHTML = "First name cannot be empty ";
        return false;
    }
   
    if (last == "") {
        document.getElementById("message1").innerHTML = "Last name cannot be empty ";
        return false;
    }

    if (mail == "") {
        document.getElementById("message4").innerHTML = "Looks like this is not an email ";
        return false;
    }
 
    if (pass == "") {
        document.getElementById("message3").innerHTML = "Password cannot be empty ";
        return false;
    }
}

