const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', function () {
  document.body.classList.toggle('dark');

  let bodyStyle = document.body.className;
  
  if(bodyStyle === 'dark'){
    localStorage.setItem('mode' , 'dark');
  }else{
    localStorage.setItem('mode' , 'light');
  }
  
});

window.onload = function(){
  let localMode = localStorage.getItem('mode');
  if( localMode === 'dark'){
    document.body.classList.add('dark');
  }
}





