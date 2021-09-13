// Pegar os campos do formulario
function validacao(){

    let nome = document.getElementById("i_nome");
    let sobrenome = document.getElementById("i_sobrenome");
    let data = document.getElementById("i_data");
    let senha = document.getElementById("i_senha");
    let con_senha = document.getElementById("i_conf_senha");

    let sty_1 = "2px solid red";
    let sty_2 = "1px solid gray";

    input_style(nome, sty_1, sty_2);
    input_style(sobrenome, sty_1, sty_2);
    input_style(data, sty_1, sty_2);
    input_style(senha, sty_1, sty_2);
    input_style(con_senha, sty_1, sty_2);

}

// Verificar se foi preenchido e mudar o estilo 
function input_style(input, style_1, style_2){

    // Quando o input não for validado
    if(!input.checkValidity()){
        input.style.border = style_1;
        return input.style.border;
    }

    // Quando o input for validado
    if(input.checkValidity()){
        input.style.border = style_2;
        return input.style.border;
    }

}