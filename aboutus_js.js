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




