document.addEventListener('click', function(event) {
    // Verifica se l'elemento cliccato è un'area non desiderata (ad es. un accordion o il suo contenuto)
    var isAccordion = event.target.closest('.accordion-item');
    var isAccordionContent = event.target.closest('.accordion-item-content');

    if (!isAccordion && !isAccordionContent) {
        // Chiudi tutti gli accordion
        var accordions = document.querySelectorAll('.accordion-item');
        accordions.forEach(function(acc) {
            acc.classList.remove('active');
            acc.querySelector('.accordion-item-content').style.display = 'none';
            acc.querySelector('.arrow').textContent = '▼';
        });
    }
});

function toggleAccordion(header) {
    var content = header.nextElementSibling;
    var arrow = header.querySelector('.arrow');

    // Chiudi tutti gli accordion tranne quello cliccato
    var accordions = document.querySelectorAll('.accordion-item');
    accordions.forEach(function(acc) {
        if (acc !== header.parentElement) {
            acc.classList.remove('active');
            acc.querySelector('.accordion-item-content').style.display = 'none';
            acc.querySelector('.arrow').textContent = '▼';
        }
    });

    // Apri o chiudi l'accordion corrente
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    arrow.textContent = content.style.display === 'block' ? '▲' : '▼';
}