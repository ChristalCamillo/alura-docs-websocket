import io from "./servidor.js";


io.on('connection', (socket) => {
    console.log('a user connected! ID:', socket.id);


    socket.on("texto_editor", (texto) => {
        console.log(texto);
    })
});