let ele = document.getElementById("ham");
let im = document.getElementById("clickable");

function visible() {
  if (ele.style.display == "none") {
    ele.style.display = "inline";
    im.src = "icons/close-icon.png";
  } else {
    ele.style.display = "none";
    im.src = "icons/menu-icon.png";
  }
}
function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var subject = document.forms["myForm"]["subject"].value;
  var message = document.form["myForm"]["message"].value;

  if (name == "") {
    alert("First Name must be filled out");
    return false;
  }
  if (email == "") {
    alert("Email must be filled out");
    return false;
  }
  if (subject == "") {
    alert("Subject must be filled out");
    return false;
  }
  if (message == "") {
    alert("Message must be filled out");
    return false;
  }
}
