import io from "./servidor.js";

const documentos = [
    {
        nome: "JavaScript",
        texto: "texto de javascript"
    },
    {
        nome: "Node",
        texto: "texto de node"
    },
    {
        nome: "Socket.io",
        texto: "texto de socket"
    }
];


io.on('connection', (socket) => {
    console.log('a user connected! ID:', socket.id);

    //quando o evento selecionar documento acontecer quero buscar o texto do doc e enviar de volta para o cliente
    socket.on("selecionar_documento", (nomeDocumento) => {
        socket.join(nomeDocumento);

        const documento = encontrarDocumento(nomeDocumento);

        if(documento) {
            socket.emit("texto_documento", documento.texto);
        };
    });

    socket.on("disconnect", (motivo) => {
        console.log(`Cliente "${socket.id}" desconectado!
        Motivo: ${motivo}`);
      });

    socket.on("texto_editor", ({texto, nomeDocumento}) => {

        socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
    });
});

function encontrarDocumento(nome) {
    const documento = documentos.find((documento) => {
        return documento.nome === nome;
    });

    return documento;
};