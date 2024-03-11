


var b = document.getElementById('menupri')
function menuent() {
    b.style.background = 'rgb(106, 157, 170)';
    b.style.boxShadow = '10px 15px 20px rgba(0, 0, 0, 0.486)';
}
function menufor() {
    b.style.background = '';
    b.style.boxShadow = '';
}


// aqui temos duas coisas, as verificações após eu clicar no botão verificar e
// as regras  quando o usuário estiver escrevendo os dados, Ex: primeira letra maiuscula, somente numeros, etc.

function veriid() {            // esta função é do botão verificar.
    var datual = new Date()
    var anotual = datual.getFullYear() //fullyear pega os 4 digitos do ano atual
    var usuano = window.document.getElementById('anonasc'); // aqui criei um formulário, id da caixa de texto que se coloca o ano
    var resdt = window.document.getElementById('res');
    var primno = window.document.getElementById('cadnom1').value;  // aqui eu trouxe o valor do primeiro nome para usar nesta função, fiz isto para já aparecer todas as informações do formulario no resdt la em baixo. Porém para usar esta informação eu tive que criar uma variavel aqui dentro para usar o valor laaa em baixo.
    var primse = window.document.getElementById('cadnom2').value;      // mesma coisa que o de cima
    var selec = document.getElementById('corusu');                      // esta caso é diferente, estamos falando de trazer a seleção que foi realizada no select no botão option. para disso eu trouxe a opção select corusu e criei uma variavel. continua embaixo.
    var opcor = selec.options[selec.selectedIndex].text;                // aqui eu usei esta opção para trazer a opção que foi selecionada dentro do select e joguei na variavel opcor para tambem usar la embaixo na apresentação
    var mail = window.document.getElementById('cadem').value;

    var pegma = document.getElementById("cadem").value;
    var codm = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (usuano.value.length == 0 || Number(usuano.value) > anotual)        //Verificação do ano. puxei o 'txtano' para o 'fano' e usei o valor do 'fano' para o 'if' - fano.value.length - usa-se isto para falar se o cara não digitou um valor de ano acima do 2024(ano atual), ou seja igual a 0
    {
        window.alert('Ano de nascimento não digitado ou digitado inválido!')
    }
    else if (!codm.test(pegma))                                            //Verificação do email.  
    {
        window.alert("Email inserido inválido!")
    }
    else if (opcor === "")                                              // Verificação da cor, usei o opcor que é um elemento aqui do js que puxou a opção do option que o usuario selecionou no formulario, se ele selecionou uma opção igual a 0, o alert aparece.
    {
        window.alert("Cor não selecionada!")
    }
    else if (cadnom1.value === "")                                            // Verificação do primeiro nome
    {
        window.alert('Primeiro nome não inserido!')
    }
    else if (cadnom2.value === "")                                            // Verificação do segundo nome
    {
        window.alert('Segundo nome não inserido')
    }

    else {
        var fsex = document.getElementsByName('sexnam') // Ele irá reconhecer os botões radio button '0' como masculino e '1' como feminino
        var idade = anotual - Number(usuano.value)
        // res.innerHTML = `Idade calculada: ${idade}`  - teste ao lado  res é onde vai aparecer o resultado
        var genero = ''  // criei uma variavel genero vazia para verificar a opção colocada no radio button abaixo
        var img = document.createElement('img')    // Aqui eu estou colocando a imagem direto no JS, mas da para colocar imagem direto pelo HTMl
        img.setAttribute('id', 'foto') // aqui eu criei um id para foto, depois vou colocar a condição nos ifs abaixo

        if (fsex[0].checked)  // peguei o radsex(nome dos 2 radio), transformei em fsex acima, gerei duas opções 0 e 1.
        {
            genero = 'Homem'    // se for 0, a variavel genero vai apresentar 'Homem'
            if (idade >= 0 && idade < 10)     // usei a idade ali em cima para fazer as condições
            {
                //Criança homem 
                img.setAttribute('src', 'Fotos/bebehomem.png')
            }
            else if (idade >= 10 && idade < 21) {
                //Jovem 
                img.setAttribute('src', 'Fotos/jovemhomem.png')
            }
            else if (idade >= 21 && idade < 50) {
                //Adulto homem
                img.setAttribute('src', 'Fotos/homemadulto.png')
            }
            else if (idade >= 50 && idade < 100) {
                //Idoso homem
                img.setAttribute('src', 'Fotos/idoso.png')
            }
            else if (idade >= 100) {
                //Highlander
                img.setAttribute('src', 'Fotos/High.png')
            }

        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10)     // usei a idade ali em cima para fazer as condições
            {
                //Criança mulher
                img.setAttribute('src', 'Fotos/bebemulher.png')
            }
            else if (idade >= 10 && idade < 21) {
                //Jovem mulher
                img.setAttribute('src', 'Fotos/jovemmulher.png')
            }
            else if (idade >= 21 && idade < 50) {
                //Adulto mulher
                img.setAttribute('src', 'Fotos/mulheradulta.png')
            }
            else if (idade >= 50 && idade < 100) {
                //Idoso mulher
                img.setAttribute('src', 'Fotos/idosa.png') // depois de colocar a foto precisa colocar um res. apendice child la em baixo.
            }
            else if (idade >= 100) {
                //Highlander
                img.setAttribute('src', 'Fotos/High.png')
            }
        }

        resdt.style.textAlign = 'center'     // usar o CSS no java script usa esta forma
        resdt.innerHTML = ` Seu nome é ${primno} ${primse}. Você é ${genero}. Tem ${idade} anos de idade.</p> <p>Sua cor predileta é ${opcor}. <p>Seu email é ${mail}.</p>` // esta parte não esta dentro do 'if' ou 'else if'
        resdt.style.textAlign = 'center'
        resdt.appendChild(img)   // aqui eu falei para o Js adicionar um elemento img na tela


    }

}
