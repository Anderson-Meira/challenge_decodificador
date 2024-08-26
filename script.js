var textInput = document.querySelector("#texto");
var outInput = document.querySelector("#textoConvertido");
var resetar = outInput.innerHTML;

// Função para remover acentos e letras maiúsculas
function normalizeText(text) {
    // Remove acentos
    text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    // Converte para minúsculas
    return text.toLowerCase();
}

// Filtra o texto do input para remover letras maiúsculas e acentos
function filterInput(event) {
    let inputValue = event.target.value;
    inputValue = normalizeText(inputValue);
    event.target.value = inputValue;
}

textInput.addEventListener('input', filterInput);

function criptografar() {
    var texto = textInput.value;

    if (texto.trim() !== "") {
        var resultadoCripto = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        outInput.innerHTML = `
            <textarea readOnly id="texto2">${resultadoCripto}</textarea>
            <div class="botoes2">
                <button class="btnCopiar" onclick="copiar()">Copiar</button>
                <button class="btnLimpar" onclick="limpar()">Limpar</button>
            </div>`;
    } else {
        alert("Por favor, insira um texto para ser criptografado.");
    }
}

function descriptografar() {
    var texto = textInput.value;

    if (texto.trim() !== "") {
        var resultadoCripto = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

            
        outInput.innerHTML = `
            <textarea readOnly id="texto2">${resultadoCripto}</textarea>
            <div class="botoes2">
                <button class="btnCopiar" onclick="copiar()">Copiar</button>
                <button class="btnLimpar" onclick="limpar()">Limpar</button>
            </div>`;
    } else {
        alert("Por favor, insira um texto para ser descriptografado.");
    }
}

function copiar() {
    var copiar = document.getElementById('texto2');
    copiar.select();
    document.execCommand('copy');
    alert("Texto copiado com sucesso!");
}

function limpar() {
    outInput.innerHTML = resetar;
}
