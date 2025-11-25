const nomes = ["Yasmin","Vitor","Amanda","Giovana","vinicius","Yago"];


export function aleatorio(lista){
const posicao = Math.floor(Math.random()*lista.length);
return lista[posicao];
}

export const nome = aletorio(nomes);