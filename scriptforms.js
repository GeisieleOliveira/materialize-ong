
$('#phone').mask('(00) 00000-0000');
$('#date').mask('00/00/0000');
$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.slider').slider();
    $('.collapsible').collapsible();
});

document.getElementById('meuFormulario').addEventListener('submit', function(event){
event.preventDefault();

const form = event.target;
const formData = new FormData(form);

fetch(form.action,{
    method:'POST',
    body:formData,
}).then(response => response.ok)
    .then(success => {
    if(success){
        alert('Obrigada! Seus dados foram enviados com sucesso.');//
        form.reset();
    }
    else{
        alert('Houve um erro ao enviar o dados do Formulário. Por favor, tente novamente!');
    }
    }).catch(error => {
        console.error('Erro:', error);
        alert('Houve um erro ao enviar o dados do Formulário. Por favor, tente novamente!');

        });
    });

    //código para os icones finais dos emblemas
document.addEventListener('DOMContentLoaded', function(){
    var headers = document.querySelectorAll('.collapsible-header');
    headers.forEach(function(header){
        header.addEventListener('click', function(){
            var icon = this.querySelector('.material-icons:last-child');
            if(icon.textContent === 'keyboard_arrow_right'){
                icon.textContent = 'keyboard_arrow_down';
            }
            else{
                icon.textContent = 'keyboard_arrow_right';
            }
        })
    })
})
