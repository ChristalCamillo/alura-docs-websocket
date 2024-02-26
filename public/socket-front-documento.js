import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function selecionarDocumento(nome) {
    socket.emit("selecionar_documento", nome, (texto) => {
        atualizaTextoEditor(texto);
    });
};

socket.on("disconnect", (motivo) => {
    console.log(`Servidor desconectado!
    Motivo: ${motivo}`);
  });

function emitirTextoEditor(dadosNomeTexto) {
    socket.emit("texto_editor", dadosNomeTexto);
};

socket.on("texto_editor_clientes", (texto) => {
    atualizaTextoEditor(texto);
});

function emitirExcluirDocumento(nome) {
    socket.emit("excluir_documento", nome);
  };

export {emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento};