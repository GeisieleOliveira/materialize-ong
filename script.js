$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.slider').slider();
    $(".dropdown-trigger").dropdown();
    $('.carousel').carousel();
  });

  const url = 'index.html';
  const link = document.querySelectorAll('.link-home');
  
  function openInNewTab(url){
    const win = window.open(url, '_self');
    win.focus();
  }
  link.addEventListener('click', () => {
    openInNewTab(url);
  })

  const url2 = 'servicos.html';
  const link2 = document.querySelectorAll('.link-servicos');

  function openInNewTab2(url2){
    const win2 = window.open(url2, '_self');
    win2.focus();
  }
  link2.addEventListener('click', () => {
    openInNewTab2(url2);
  });

  function redirecionar(){
      window.location.href = "quemSomos.html";
  }
