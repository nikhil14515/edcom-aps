let ele=document.getElementById('ham')
let im=document.getElementById('clickable')

let faq=document.querySelector('.FAQ-details')
let arrow=document.querySelector('.FAQ-arrow')
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
function FAQvisible(){
    if (faq.getAttribute('style')=='display: none;'){
        faq.setAttribute('style','display: inline;')
        arrow.setAttribute('src','icons/up_arrow.png')
    }
    else{
      faq.setAttribute('style','display: none;')
      arrow.setAttribute('src','icons/down_arrow.png')
    }
  }

function org(){
  window.location.src = "login_html.html"
}