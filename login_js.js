
let ele=document.getElementById('ham')
let im=document.getElementById('clickable')
var usersname="COORDINATOR"
var master_control=0

if (master_control!=0){
  window.location.replace("index.html");
}
function visible(){
  if (ele.style.display=='none'){
    ele.style.display='inline'
    im.src='icons/close-icon.png'
  }
  else{
    ele.style.display='none'
      im.src='icons/menu-icon.png'
  }
}

var firebaseConfig = {
  apiKey: "AIzaSyC7cgDY-pf7sFAWnoFcZ2KjSxmASIvc7w4",
  authDomain: "ed-contests.firebaseapp.com",
  projectId: "ed-contests",
  storageBucket: "ed-contests.appspot.com",
  messagingSenderId: "261132206803",
  appId: "1:261132206803:web:c21988e69ae3543e410a26"
};
firebase.initializeApp(firebaseConfig);

function signIn() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value
  console.log(email,password)
  document.write()
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      if (master_control==0){
        window.location.replace("posts_create_html.html");
        master_control=1;
      }
    })
    .catch((error) => {        
        if(error.code=="auth/user-not-found"){
          alert("User not registered");
          window.location.replace("login_html.html");
        }
        else if(error.code=="auth/wrond-password"){
          alert("User not registered");
          window.location.replace("login_html.html");
        }
        else{
          alert("Error occured while login! Try again later or contact the admin.")
          window.location.replace("login_html.html");
        }
    });
}

function pwdReset(){
  var email = document.getElementById('email').value;
  document.write()
  firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    alert("Password reset mail has been sent successfully!")
    window.location.replace("login_html.html");

  })
  .catch((error) => {
    if(error.code=="auth/user-not-found"){
      if (confirm("Enter email address is not registered! Press OK to create an account, Press CANCEL to reenter.")) {
        window.location.replace("signin_html.html");
      } else {
        window.location.replace("forgot_password_html.html");
      }
    }
    else{
      alert("Error occured while login! Try again later or contact the admin.")
      window.location.replace("forgot_password_html.html");
    }
  });
}

function signOut(){
  firebase.auth().signOut().then(() => {
    usersname="COORDINATOR"
    master_control=0;
    history.pushState(null, null, document.URL);
  window.addEventListener('popstate', function () {
  history.pushState(null, null, document.URL);
});
    window.location.replace("index.html");
    history.replaceState(null,'')
  }).catch((error) => {
    console.log(error.code)
    console.log(error.message)
  });
}


