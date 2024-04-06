import express from "express";
import cors from "cors";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import app from "./fire.js";
const server = express();

server.use(cors());
server.use(express.json());

const auth = getAuth(app);
const provider=new GoogleAuthProvider();



server.post('/signUp', (req, res) => {
    const { email, password } = req.body;
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            res.status(200).send({ status: 200, message: "User created successfully" });
        })
        .catch(err => {
            res.status(400).send({ status: 400, message: err.message });
        });
});

server.post('/login', (req, res) => {
    const { email, password } = req.body;
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            res.status(200).send({ status: 200, message: "Login successful" });
        })
        .catch(err => {
            res.status(400).send({ status: 400, message: err.message });
        });
});
server.post('/data',async(req,res)=>{
    
})




server.listen(3000, () => console.log("Server started on port 3000"));
