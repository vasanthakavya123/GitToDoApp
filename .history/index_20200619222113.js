const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

//models
const TodoTask = require("./models/TodoTask"); 

 app.use("/static",express.static("public"));

 app.use(express.urlencoded({extended:true}));

 

    const mongoose = require("mongoose");
//connection to db
mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    app.listen(3000, () => console.log("Server Up and running"));
console.log("Connected to db!");
});



app.set("view engine", "ejs");

app.get('/',(req, res) => {
    res.render('todo.ejs');
    });

    app.post('/',(req,res)=>
    {console.log(req.body);

    });