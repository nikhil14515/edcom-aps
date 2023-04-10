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
var copyText = document.querySelector(".tut-btn");
function change(){
  document.getElementById(id).innerHTML="Share";
  document.getElementById(id).style.color = '#001F54'
  document.getElementById(id).style.backgroundColor = 'white'
}
function copy(n) {
  if (n==1){
    var text="https://edcom-official.netlify.app/tutorials/tut_ind_1.html"
    id="tut-btn-1"
  }
  else if(n==2){
    var text="https://edcom-official.netlify.app/tutorials/tut_ind_2.html"
    id="tut-btn-2"
  }
  else if(n==3){
    var text="https://edcom-official.netlify.app/tutorials/tut_ind_3.html"
    id="tut-btn-3"
  }
  else if(n==4){
    var text="https://edcom-official.netlify.app/tutorials/tut_ind_4.html"
    id="tut-btn-4"
  }
  else if(n==5){
    var text="https://edcom-official.netlify.app/tutorials/tut_ind_5.html"
    id="tut-btn-5"
  }
  else if(n==6){
    var text="https://edcom-official.netlify.app/tutorials/tut_ind_6.html"
    id="tut-btn-6"
  }
  else if(n==7){
    var text="https://edcom-official.netlify.app/tutorials/tut_ind_7.html"
    id="tut-btn-7"
  }
  else if(n==8){
    var text="https://edcom-official.netlify.app/tutorials/tut_ind_8.html"
    id="tut-btn-8"
  }
  else if(n==9){
    var text="https://edcom-official.netlify.app/tutorials/tut_ind_9.html"
    id="tut-btn-9"
  }
  else if(n==10){
    var text="https://edcom-official.netlify.app/tutorials/tut_ind_10.html"
    id="tut-btn-10"
  }
  else if(n==11){
    var text="https://edcom-official.netlify.app/tutorials/tut_ind_11.html"
    id="tut-btn-11"
  }
  else if(n==12){
    var text="https://edcom-official.netlify.app/tutorials/tut_ind_12.html"
    id="tut-btn-12"
  }
  else if(n==13){
    var text="https://edcom-official.netlify.app/tutorials/tut_ind_13.html"
    id="tut-btn-13"
  }
  else if(n==14){
    var text="https://edcom-official.netlify.app/tutorials/tut_ind_14.html"
    id="tut-btn-14"
  }
  else if(n==15){
    var text="https://edcom-official.netlify.app/tutorials/tut_ind_15.html"
    id="tut-btn-15"
  }
  else if(n==16){
    var text="https://edcom-official.netlify.app/tutorials/tut_ind_16.html"
    id="tut-btn-16"
  }
  else if(n==17){
    var text="https://edcom-official.netlify.app/tutorials/tut_ind_17.html"
    id="tut-btn-17"
  }
  else if(n==18){
    var text="https://edcom-official.netlify.app/tutorials/tut_ind_18.html"
    id="tut-btn-18"
  }
  else if(n==19){
    var text="https://edcom-official.netlify.app/tutorials/tut_ind_19.html"
    id="tut-btn-19"
  }
  else if(n==20){
    var text="https://edcom-official.netlify.app/tutorials/tut_ind_20.html"
    id="tut-btn-20"
  }
  navigator.clipboard.writeText(text)
  document.getElementById(id).innerHTML="Copied"
  setTimeout(change,3500)
    .then(() => {
      console.log('Text copied to clipboard');
     })
    .catch((error) => {
      console.error('Error copying text: ', error);
    });
    
}