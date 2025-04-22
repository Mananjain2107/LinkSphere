import { Server } from "socket.io";
//the below function will initializes socket.io and attaches it to the given HTTP server
const connectToSocket=(server)=>{
    const io=new Server(server);
    return io;
}

export default connectToSocket;

