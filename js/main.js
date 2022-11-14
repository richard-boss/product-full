var elBody = document.querySelector('body');
var elMode = document.querySelector('.nightmod');

elMode.addEventListener('click', function(){
  elBody.classList.toggle('dark');
});