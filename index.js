import { createServer } from 'http'
import { Server } from 'socket.io'

const socket = createServer()
export const io = new Server(socket, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
})

io.on('connection', (socket) => {
    console.log('Novo usuário conectado!');
    socket.on('disconnect', () => {
        console.log('Usuário desconectado!');
    })
});

socket.listen(process.env.PORT || 4000)