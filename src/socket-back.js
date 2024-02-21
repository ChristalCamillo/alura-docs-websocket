import { encontrarDocumento } from "./documentosDb.js";
import io from "./servidor.js";

io.on('connection', (socket) => {
    console.log('a user connected! ID:', socket.id);

socket.on("selecionar_documento", async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);

    const documento = await encontrarDocumento(nomeDocumento);

    console.log(documento);

    if (documento) {
        devolverTexto(documento.texto);
    }
});

    socket.on("disconnect", (motivo) => {
        console.log(`Cliente "${socket.id}" desconectado!
        Motivo: ${motivo}`);
      });

    socket.on("texto_editor", async ({texto, nomeDocumento}) => {

        const documento = await encontrarDocumentoento(nomeDocumento);

        console.log(documento);

        if(documento){
            documento.texto = texto;
            socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
        }
    });
});