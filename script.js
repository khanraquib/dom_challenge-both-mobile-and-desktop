function myFun() {
    var first = document.getElementById("first_name").value;
    var last = document.getElementById("last_name").value;
    var mail = document.getElementById("email").value;
    var pass = document.getElementById("passwor").value;
   
   
        if (first == "") {
        document.getElementById("message").innerHTML = "First name cannot be empty ";
        document.getElementById("first_name").style.border = "1px  solid red";
        return false;
    }
    else  {
            document.getElementById("message").innerHTML = " ";
            document.getElementById("first_name").style.border = "1px  solid green";
           
    }
   
    if (last == "") {
        document.getElementById("message1").innerHTML = "Last name cannot be empty ";
        document.getElementById("last_name").style.border = "1px solid red";
        return false;
    }
    else  {
        document.getElementById("message1").innerHTML = " ";
        document.getElementById("last_name").style.border = "1px  solid green";
    }

    if (mail == "") {
        document.getElementById("message4").innerHTML = "Looks like this is not an email ";
        document.getElementById("email").style.border = "1px solid red";
        return false;
    }
    else  {
        document.getElementById("message4").innerHTML = " ";
        document.getElementById("email").style.border = "1px  solid green";
    }
    if (pass == "") {
        document.getElementById("message3").innerHTML = "Password cannot be empty ";
        document.getElementById("passwor").style.border = "1px solid red";
        return false;
    }

    else  {
        document.getElementById("message3").innerHTML = " ";
        document.getElementById("passwor").style.border = "1px  solid green";
    }
}

