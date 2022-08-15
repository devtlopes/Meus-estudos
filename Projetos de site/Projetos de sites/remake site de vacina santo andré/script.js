let inputs = document.getElementsByTagName('input');

function consultar(){
    if(inputs.value == ""){
        alert('digite seu cpf para consultar sua situação');
    }else{
        alert('você já tomou a vacina, aguarde o tempo de espera informado e volte a consultar');
    }
}