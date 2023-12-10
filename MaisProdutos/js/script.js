var listaProdutos = [[0,'Pizza','pizza.jpg','A pizza da pizzaria é especial! Estamos te esperando...',false,'3,44'],
[1,'Massa','massa.jpg','A massa da pizzaria é especial! Estamos te esperando...',false,'5,55'],
[2,'Pizza do Pizzaiolo','pizza2.jpg','A pizza do pizzaiolo é especial! Estamos te esperando...',false,'6,00'],
[3,'Pizza Queridinha','pizza3.jpg','A pizza queridinha é especial! Estamos te esperando...',false,'10,52'],
[4,'Pizza Maravilhosa','pizza4.jpg','A pizza maravilhosa é especial! Estamos te esperando...',false,'0,85'],
[5,'Pizza Marguerita','pizza5.jpg','A pizza marguerita é especial! Estamos te esperando...',false,'0,85'],
[6,'Pizza Fornalha','pizza6.jpg','Pizza saida do forno é especial! Estamos te esperando...',false,'4,23'],
[6,'Pizza Canadense','pizza8.jpg','A pizza canadense é especial! Estamos te esperando...',false,'4,23'],
[7,'Pizza Di Sicilia','pizza7.jpg','A pizza Siciliana é especial! Estamos te esperando...',false,'3,00']]

var carrinho = [];

window.onload = function(){
    montarCardProdutos();
}


function montarCardProdutos(){
    
    document.getElementById("divProdutos").innerHTML = "";

    for (var i = 0;i<listaProdutos.length;i++){        
        var conteudo = "";        
        conteudo += '<div class="card">';
        conteudo += `<img src="img/${listaProdutos[i][2]}" class="photo">`;
        conteudo += '<div class="legenda">';
        conteudo += `<h2>${listaProdutos[i][1]}</h2>`;
        conteudo += listaProdutos[i][3];
        if(listaProdutos[i][4] == false){
            conteudo += '</div>';
            conteudo += `<button onclick="comprar(${listaProdutos[i][0]})">Comprar</button>`;
            conteudo += '</div>';
        }
        else{
            conteudo += '</div>';
            conteudo += `<button class="comprado">Comprado</button>`;
            conteudo += '</div>';

        }

       
        document.getElementById("divProdutos").innerHTML += conteudo;
    } 
}

function comprar(id){

    listaProdutos[id][4] = true;

    carrinho.push(listaProdutos[id]);

    window.localStorage.setItem("carrinho",JSON.stringify(carrinho));

    montarCardProdutos();
}


