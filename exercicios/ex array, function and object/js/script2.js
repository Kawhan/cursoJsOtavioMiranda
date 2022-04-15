
function meuEscopo() {
    const form = document.querySelector('form');

    function recebeEventoForm(evento) {
        evento.preventDefault();
        
        const input_name = form.querySelector('.nome');
        const input_name_value = input_name.value;

        if (input_name_value == ""){
            alert('Campo esta vazio');
        }
        else if (input_name_value.includes('@') == false) {
            alert('Campo esta faltando o @')
        }
        else if ((input_name_value.includes('.com') == false)) {
            alert('Campo esta faltando o .com')
        }

    }

    form.addEventListener('submit', recebeEventoForm)
}

meuEscopo();
