import express from 'express';
import router from './routes/characters.js';

const PORT = 3001 || process.env.PORT;
const server = express();

server.use(express.json());

server.use("/getcharacter", router)


server.listen(PORT, ()=>{
    console.log(`puerto iniciado en: ${PORT}`)
})