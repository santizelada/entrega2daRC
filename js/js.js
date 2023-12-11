const cards = document.querySelectorAll('.card');

cards.forEach(card => { card.addEventListener('click', () => {
     window.location.href = 'otra-pagina.html'; }); 
    });


    $(function () {
     $('[data-toggle="tooltip"]').tooltip();
   });