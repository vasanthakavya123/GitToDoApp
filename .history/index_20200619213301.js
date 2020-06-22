const express = require("express");
const app = express();

const dotenv = require("dotenv");
const monogoose =require("monogoose");
dotenv.config();

//models
const TodoTask = require("./models/TodoTask"); 

 app.use("/static",express.static("public"));

 app.use(express.urlencoded({extended:true}));

 app.set("view engine", "ejs");

 



app.get('/',(req, res) => {
    res.render('todo.ejs');
    });

    app.post('/',(req,res)=>
    {console.log(req.body);

    });

    const mongoose = require("mongoose");
//connection to db
mongoose.set("useFindAndModify", false);
mongoose.connect(mongodb+srv://diogop:vasanthakavya123@Hruthika123-1ylat.mongodb.net/test?retryWrites=true, { useNewUrlParser: true }, () => {
console.log("Connected to db!");
}); 

app.listen(3000, () => console.log("Server Up and running"));
