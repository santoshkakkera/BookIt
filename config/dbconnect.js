const mongoose = require("mongoose")

const database = async() =>{
    try {
      const connect =  mongoose.connect('mongodb+srv://project:project@mycluster.ld28n.mongodb.net/dbname?retryWrites=true&w=majority',{useNewUrlParser:true},(error,result)=>{
            if(error) throw error
            console.log("Connection SuccessFul");
        });
        
    } catch (error) {
        console.log(error.message);
        console.log("connection was broken down");
        process.exit();
    }
}

module.exports = database;