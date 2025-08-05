function executarPush() {
  const array = ['🍎', '🍌'];
  array.push("🍇")// Adiciona no final do array
  const resultado = array
  document.getElementById('resultado-push').textContent = resultado;
}

function executarPop() {
  const array = ['🍎', '🍌', '🍇'];
  array.pop();// Remove o ultimo elemento do array
  const resultado = array;
  document.getElementById('resultado-pop').textContent = resultado;
}

function executarShift() {
  const array = ['🍎', '🍌', '🍇'];
  array.shift();//Remove o primeiro elemento
  const resultado = array;
  document.getElementById('resultado-shift').textContent = resultado;
}

function executarUnshift() {
  const array = ['🍌', '🍇'];
  array.unshift("🍓");//Adiciona o item no começo
  const resultado = array;
  document.getElementById('resultado-unshift').textContent = resultado;
}

function executarIncludes() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.includes("🥝");//Veririfica se invlue o elemento
  document.getElementById('resultado-includes').textContent = resultado;
}

function executarReverse() {
  const array = ['🍎', '🍌', '🍇'];
  array.reverse();// reverte o array
  const resultado = array;
  document.getElementById('resultado-reverse').textContent = resultado;
}

function executarSort() {
  const array = [3, 1, 4, 2, 11];
  const array2 = ["Brasil", "Argentina", "Noruega", "Italia"];
  array.sort(function(a,b) {return a+b});//Organiza em orddem crescente
  array2.sort().reverse();//Organiza em ordem decrescente (b-a)
  const resultado = array;
  document.getElementById('resultado-sort').textContent = resultado;
  const resultado2 = array2;
  document.getElementById('resultado-sort2').textContent = resultado2;
}

function executarSlice() {
  const array = ['🍎', '🍌', '🍇', '🍓'];
  const resultado = array.slice(1,3);//Corta fora do indice 1 até o indice 3
  document.getElementById('resultado-slice').textContent = resultado;
}

function executarSplice() {
  const array = ['🍎', '🍌', '🍇'];
  array.splice(2,1,"outra fruta");//Corta de uma posição inicial e exclui x casas adiante, e depois permite adicionar outro item
  const resultado = array;
  document.getElementById('resultado-splice').textContent = resultado;
}


function executarIndexOf() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.indexOf("🍇");//Identifica o indice no array
  document.getElementById('resultado-indexof').textContent = resultado;
}

function executarJoin() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.join("-");//junta itens
  document.getElementById('resultado-join').textContent = resultado;
}

/* Loops de array */

function executarForEach() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.forEach((pegaItem,index) => {//Igual ao For
    console.log(`O item ${index +1 } é o ${pegaItem}`)});
  document.getElementById('resultado-foreach').textContent = resultado;
}

function executarMap() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.map((item) => `${item}✅`);// cria uma copia do array e percorre um for dentro dele e inclui oqe for adicionado
  document.getElementById('resultado-map').textContent = resultado;
}

 function executarMapHTML() {
    const dispositivos = ['🎮', '🕹️', '💻'];
    const resultado = array.map((item) => `<h1>Item em promoção</h1>
      <spam>${item}</spam>`);
    document.getElementById('resultado-map-html').innerHTML = resultado.join('<br>');
  }

function executarFilter() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.filter((item) => item === "🍎" );//filta o item e cria um array somente com os filtrados
  document.getElementById('resultado-filter').textContent = resultado;
}

function executarFind() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.find((item) => item === "🍇");//Valida se tem o item procurado ou não
  document.getElementById('resultado-find').textContent = resultado;
}

function executarFindIndex() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.findIndex((item) => item ("🍇"));
  document.getElementById('resultado-findIndex').textContent = resultado;
}

function executarReduce() {
  const array = [1, 2, 3, 4];
  const resultado = array.reduce((total,valorAtual) => total + valorAtual);// soma tudo como um sistema de carrinho
  document.getElementById('resultado-reduce').textContent = resultado;
}

function executarEvery() {
  const array = [10, 20, 30, 40];
  const resultado = array.every(());
  document.getElementById('resultado-every').textContent = resultado;
}

function executarSome() {
  const array = ['🍎', '🍌', '🥝'];
  const resultado = 'Resultado da operação some';
  document.getElementById('resultado-some').textContent = resultado;
}

/* Encadeamento */

function executarEncadeamento() {
  const jogos = ['Zelda', 'Mario', 'Elden Ring', 'Fortnite', 'Minecraft'];
  const resultado = 'Resultado da operação encadeada';
  document.getElementById("resultado-encadeamento").textContent = resultado.join(', ') || 'Nenhum jogo encontrado';
}


