const tabuleiro = ['branco', 'branco', 'branco', '', 'preto', 'preto', 'preto'];

export function getSelecionado(){
    return selecionado;
}

export function getTabuleiro(){
    return [...tabuleiro];
}

let selecionado = null;

export function seleciona(posicao){
    if(selecionado === null){
        selecionado = posicao;
    }
        else{
            if(selecionado === posicao){
                selecionado = null;
            }
            else{
            mover(selecionado, posicao);
            selecionado = null;
            }
        }
}

function mover(origem, destino){
    console.log(`Movendo de ${origem} para ${destino}`)
    if(tabuleiro[origem] === "") return;
    if(tabuleiro[destino] !== "") return;
    if(Math.abs(destino - origem) === 1){
        tabuleiro[destino] = tabuleiro[origem];
        tabuleiro[origem] = "";
    }
    if(Math.abs(destino-origem)===2&&tabuleiro[origem+1]!== "") {
            tabuleiro[destino] = tabuleiro[origem];
            tabuleiro[origem] = "";
        }
    if(Math.abs(destino-origem)=== -2 && tabuleiro[origem-1]!== "") {
            tabuleiro[destino] = tabuleiro[origem];
            tabuleiro[origem] = "";    
        }
}