
document.addEventListener('DOMContentLoaded', function () {

  var btnDetails = document.querySelector('#btn-details');
  
  setTimeout(function() {
    document.querySelector('#preloader').classList.remove('active');
  }, 400);

  if (btnDetails != null) {
    btnDetails.addEventListener('click', function() {
      const elm = document.querySelector('#collapseOne');
      const elmBtn = document.querySelector('#btn-details');
      
      const sw = elm.classList[1] == 'collapse' ? true : false;
  
      if (sw == true) {
        elm.classList.remove('collapse');
        elm.classList.add('collapsed');
        elmBtn.classList.toggle('less');
        elmBtn.innerHTML = 'Less about me';
      } else if (sw == false) {
        elm.classList.remove('collapsed');
        elm.classList.add('collapse');
        elmBtn.classList.toggle('less');
        elmBtn.innerHTML = 'More about me';
      } 
  
    })
  
  }
});
