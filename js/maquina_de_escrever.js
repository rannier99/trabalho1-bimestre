        $(document).ready(function () {

        // Maquina de escrever
        function tipoEscreva(elemento) {
            const textoArray = elemento.innerHTML.split('');
            elemento.innerHTML = '';
            textoArray.forEach((valorLetra, index) => {
                console.log(valorLetra);
                setTimeout(function() {
                    elemento.innerHTML += valorLetra;
                }, 75 * index);
            });
            console.log(textoArray);
        }
        //const titulo = document.querySelector('.h1_generico');
        //tipoEscreva(titulo);
        //console.log(titulo);
        tipoEscreva(window.document.querySelector(".box_inovacao .inovacao01"));
        tipoEscreva(document.querySelector(".box_inovacao .inovacao02"));   
        
        tipoEscreva(document.querySelector(".box_inovacao .inovacao03"));    
        tipoEscreva(document.querySelector(".box_inovacao .inovacao04"));    
        tipoEscreva(document.querySelector(".p_frase"));     
    });