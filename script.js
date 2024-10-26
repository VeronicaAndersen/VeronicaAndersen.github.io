/*Här är js validering för mail*/

function validateMail(id)
{
  var mailinput = document.getElementById(id);
  if(mailinput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
    document.getElementById(id+"Feedback").style.display ="none";
    document.getElementById(id).style.borderColor = "#cae7e3 ";

  }else{
    document.getElementById(id+"Feedback").innerHTML = "*Incorrect email address.";
    document.getElementById(id).style.borderColor = "red";
    document.getElementById(id+"Feedback").style.display ="block";
  }
}

function validate(id)
{
  var nameinput = document.getElementById(id);
  if(nameinput.value.match(/^[a-zåäöA-ZÅÄÖ\s]*$/)){
    document.getElementById(id+"Feedback").style.display ="none";
    document.getElementById(id).style.borderColor = "#cae7e3 ";

  }else{
    document.getElementById(id+"Feedback").innerHTML = "*Only characters allowed. [a-ö]";
    document.getElementById(id).style.borderColor = "red";
    document.getElementById(id+"Feedback").style.display ="block";
  }
}

/* Validering på lösenord som kräver minst 8 tecken som är minst en versal / gemen och innehåller minst en siffra */
function validatePwd(id) {
    var pwd = document.getElementById(id);
    if (pwd.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)){
        document.getElementById(id+"Feedback").style.display ="none";
    document.getElementById(id).style.borderColor = "#000";
        
    } else {
        document.getElementById(id+"Feedback").innerHTML = "*Only characters allowed. [a-z]";
    document.getElementById(id).style.borderColor = "red";
    document.getElementById(id+"Feedback").style.display ="block";
    }
}

function menuOpen() {
  document.getElementById("openMenu").style.display ="none";
  document.getElementById("closeMenu").style.display ="block";
}
function menuClose() {
  document.getElementById("openMenu").style.display ="block";
  document.getElementById("closeMenu").style.display ="none";
  document.getElementById("meny").style.right="-300px";
}

var id = null;
      function slideIn() {
          var elem = document.getElementById("meny");
          var pos = -200;
          clearInterval(id);
          id = setInterval(frame, 2);
          function frame() {
              if (pos == 0) {
                  clearInterval(id);
              } else {
                  pos++;
                  elem.style.right = pos + 'px';
              }
          }
      }