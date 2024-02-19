import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function selecionarDocumento(nome) {
    socket.emit("selecionar_documento", nome);
};

socket.on("disconnect", (motivo) => {
    console.log(`Servidor desconectado!
    Motivo: ${motivo}`);
  });

function emitirTextoEditor(dadosNomeTexto) {
    socket.emit("texto_editor", dadosNomeTexto);
};

socket.on("texto_documento", (texto) => {
    atualizaTextoEditor(texto);
})

socket.on("texto_editor_clientes", (texto) => {
    atualizaTextoEditor(texto);
});

export {emitirTextoEditor, selecionarDocumento};