let ele=document.getElementById('ham')
let im=document.getElementById('clickable')
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

var id="none"
var copyText = document.querySelector(".contest-btn-white");
function change(){
  document.getElementById(id).innerHTML="SHARE";
  document.getElementById(id).style.color = 'white'
  document.getElementById(id).style.backgroundColor = '#001F54'
}
function copy(n) {
  if (n==1){
    var text="https://edcom-official.netlify.app/event_codehunt"
    id="copy1"
  }
  else if(n==2){
    var text="https://edcom-official.netlify.app/event_codeDebugging"
    id="copy2"
    
  }
  else if(n==3){
    var text="https://edcom-official.netlify.app/event_appDev"
    id="copy3"
  }
  navigator.clipboard.writeText(text)
  document.getElementById(id).innerHTML="COPIED"
  setTimeout(change,3500)
    .then(() => {
      console.log('Text copied to clipboard');
     })
    .catch((error) => {
      console.error('Error copying text: ', error);
    });
    
}

