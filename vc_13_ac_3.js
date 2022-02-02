let email = prompt("Enter your email", "");
 if (email.length < 3) {
     alert("Not an email"); }

    else if (email.indexOf ("@" , 0 ) >=0 ) {
         alert( "Message has been sent to the email"); }  else {
         alert("Not an email!") } ;