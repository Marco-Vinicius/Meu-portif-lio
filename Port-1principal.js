



// Botão de retorno ao topo 
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("botaoTopo").style.display = "block";
    } else {
        document.getElementById("botaoTopo").style.display = "none";
    }
};


/*Esta função abaixo extrai o nome section e respeita o numero que eu coloquei na frente, section 2, section 3, etc. colocando em uma ordem as seções. */
function scrollToSection(sectionNumber) {
    var sectionId = "section" + sectionNumber;
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}

//Nome Marco Vinicius, 1º da tela.
var a = document.getElementById('txtnome')
function entrarnom() {
    a.style.textShadow = '30px 20px 8px rgba(0, 0, 0, 0.1)';
    a.style.borderRadius = '50px'; // Valor pode ser ajustado conforme desejado
    a.style.fontSize = '50px';
    a.style.color = "grey";

}
function saiunom() {
    a.style.textShadow = '';
    a.style.borderRadius = '';  // sem valor ele volta ao que era antes
    a.style.fontSize = '';
    a.style.color = "";
}

var b = document.getElementById('botcad')
function entrarcad() {
    b.style.background = 'rgb(106, 157, 170)';
    b.style.boxShadow = '10px 15px 20px rgba(0, 0, 0, 0.486)';
}
function saiucad() {
    b.style.background = '';
    b.style.boxShadow = '';
}

var c = document.getElementById('hob')
function entrarhob() {
    c.style.background = 'rgb(81, 117, 170)';
    c.style.boxShadow = '10px 15px 20px rgba(0, 0, 0, 0.486)';
}
function saiuhob() {
    c.style.background = '';
    c.style.boxShadow = '';
}

var d = document.getElementById('contme')
function entrarcont() {
    d.style.background = 'brown';
    d.style.boxShadow = '10px 15px 20px rgba(0, 0, 0, 0.486)';
    d.style.transform = 'scale(1.1)'; // Aumenta o tamanho do botão em 20%
    d.style.transition = 'transform 0.2s ease'; // Adiciona uma transição suave

}
function saiucont() {
    d.style.background = '';
    d.style.boxShadow = '';
    d.style.transform = 'scale(1)'; // Retorna o botão ao tamanho original
    d.style.transition = 'transform 0.2s ease'; // Adiciona uma transição suave
}

function meuhob() {
    var amais = 12;
    var bmais = Number(window.prompt("Por favor digite a sua idade!"));

    /*
    if (bmais === null)                                           // termo usado para o botão cancelar funcionar e o usuario voltar para a tela anterior
    {
        window.location.href = 'Tela-hob.html';                   // endereço para onde o usuário irá voltar
        return;
    }
    */
    if (bmais === 0) {
        return;
    }
    while (bmais < amais) {
        window.alert(`Você possui ${bmais} anos, somente maiores de ${amais} anos podem acessar esta seção!`);
        bmais = Number(window.prompt('Por favor digite novamente a sua idade!'));

        if (bmais === 0) {
            return;
        }
    }
    document.getElementById('hob').onclick = function () {        // usado para mandar o usuário para outra tela
    }
    window.location.href = 'Tela-hob.html';                     // deixei este encaminhamento para a tela fora do while para ele ir direto para a tela, enquanto ele estava dentro do while eu tinha que clicar no botão novamente para ir para a tela.
}


//Baixar o curriculo.
function downloadcurriculo() {
    var curriculoUrl = "Fotos/Curriculo Marco - completo - Desenvolvedor.pdf";

    // Cria um link temporário
    var link = document.createElement("a");
    link.href = curriculoUrl;

    // Define o nome do arquivo
    link.download = "Curriculo-Marco Vinicius.pdf";

    // Adiciona o link ao corpo do documento
    document.body.appendChild(link);

    // Clica no link para iniciar o download
    link.click();

    // Remove o link do corpo do documento após o download
    document.body.removeChild(link);
}

//Alert do botão enviar
function mecont() {
    alert("Email enviado com sucesso!");

    // Limpa os valores dos campos de texto
    var formulario = document.getElementById("meuform");
    formulario.reset();
}