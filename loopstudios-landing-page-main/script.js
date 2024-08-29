function visible(element) {
  const answer = element.nextElementSibling;
  answer.classList.toggle('hide');
}
function show(){
  const modal=document.getElementById('accordionModal');
  modal.style.display='block';
  // const accordin = document.querySelector('.accordion');
  // accordin.style.display = 'block';
}
function hide(){
  const modal=document.getElementById('accordionModal');
  modal.style.display='none';
}
window.onclick = function(event) {
  const modal = document.getElementById('accordionModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}



