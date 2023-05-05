
import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";


const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use("/users",userRoutes);

app.get("/", (req,res)=> {
    console.log("TREE!");
    res.send("hello bro!");
})

var listener = app.listen(PORT, function(){
    console.log('Listening on port : http://localhost:' + listener.address().port); 
});
