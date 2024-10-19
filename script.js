const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function (){
        const atual = document.querySelector('.ativo');
        const ppasso = 'passo-' + this.getAttribute('data-proximo');
        
        atual.classList.remove('ativo');
        document.getElementById(ppasso).classList.add('ativo');
    })
})