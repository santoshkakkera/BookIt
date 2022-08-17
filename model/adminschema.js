const mongoose=require('mongoose')

const trainschema = new mongoose.Schema({
    trainname:{
        type:String,
        required:true,
        unique:true
    },
    ac:{
        type:String,
        //required:true
    },
    weekdays:{
        type:String,
        required:true
    },
 
    date_dest:{
        type:String,
        required:true
    },
    time_dest:{
        type:String,
        required:true
    },
    date_start:{
        type:String,
        required:true
    },
    time_start:{
        type:String,
        required:true
    },
    source:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    // typetier:{
    //     type:String,
    //     required:true
    // },
    // available:{
    //     type:String,
    //     required:true
    // },
    
    // cost:{
    //     type:String,
    //     required:true
    // },
    array:{
        type:Array,
        // default:"NA"
        
    }
},{timestamps:true})

const trains = mongoose.model('colnames',trainschema)
module.exports = trains;
