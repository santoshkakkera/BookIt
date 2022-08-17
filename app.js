const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const path = require('path');
const { redirect } = require('express/lib/response');
const app = express()
var traininfo;

const register = require("./model/SignUpReg.js");
const trains = require("./model/adminschema.js");

const { default: mongoose } = require('mongoose');
const { stat } = require('fs');

app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.urlencoded({limit:'5000mb', extended: true, parameterLimit: 10000000000000}))
const database = require("./config/dbconnect");
const { geoSearch, db } = require('./model/SignUpReg.js');

database();
app.use(express.static(path.join(__dirname, './public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.get('/',(req,res)=>{
    res.render("home");
});


app.get('/trainpage', (req, res)=>{
    res.render('Train');
});


app.get('/signup',(req,res)=>{
    res.render('SignUp');
});


app.get('/login',(req,res)=>{
    res.render('Login');
});


app.get('/admin',(req,res)=>{
    res.render('adminlogin');
});

app.get('/delete',(req,res)=>{
    res.render('delete');
});

app.get('/adminpage',(req,res)=>{
    res.render('admin');
});

app.get('/payment',(req,res)=>{
    res.render('payment');
})

app.post("/register", async (req,res)=>{
    try 
    {
        const password = req.body.password;
        const confirmpassword = req.body.confirmpassword;
    
        if(password == confirmpassword)
        {
            const registeruser = await register.create({
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                email : req.body.email,
                password : password
            })

            console.log(registeruser);

            const registered = await registeruser.save();
            res.redirect("/");
        }

        else
        {
            res.redirect("/signup");
        }
    } 
    catch (error) 
    {
        res.status(400).send(error);
    }
})



app.post('/getuser', async (req,res)=>{
    
    const email = req.body.loginemail;
    const password = req.body.loginpassword;


    const users = await register.find().exec();
    
    const user = await register.findOne({email:email})

    if(user && user.password === password)
    {
        res.redirect("/");
    }

    else
    {
        res.redirect("/login");
    }
        
});


app.post('/adminlogin', async (req,res)=>{
    
    const email = req.body.username;
    const password = req.body.password;


    if(email=="santosh.k20@iiits.in" && password =="iiits@2020")
    {
        res.redirect("/adminpage");
    }

    else
    {
        res.redirect("/adminlogin");
    }
        
});


app.post('/addtodb',async(req,res)=>{

    const aryobj=[{  'price0':req.body.cost2A,
      'availability0':req.body.availability2A,
      'type0':req.body.type2A},{'price1':req.body.cost3A,
         'availability1':req.body.availability3A,
         'type1':req.body.type3A,},{'price2':req.body.costGA,
             'availability2':req.body.availabilityGA,
             'type2':req.body.typeGA,},{'price3':req.body.costRE,
                 'availability3':req.body.availabilityRE,
                 'type3':req.body.typeRE,}];
    try 
    {
         const entry = await trains.create({
             trainname : req.body.trainname,
             weekdays : req.body.weekdays,
             ac:req.body.ac,
             date_dest : req.body.date_dest,
             time_dest : req.body.time_dest,
             date_start : req.body.date_start,
             time_start : req.body.time_start,
             source : req.body.source,
             destination : req.body.destination,
             array:aryobj     
         })    
 
         const newuserdetails = await entry.save()
 
         res.redirect("/")
     
    }
    catch(error){
       res.status(400).send(error)
    }
 
});



app.post('/del',async (req,res)=>{
    try{
        console.log(req.body.trainname);
       
       await  trains.deleteOne({trainname : req.body.trainname}).exec();
       
       res.redirect("/");
        
    }

    catch(error){
        res.status(400).send(error);
    }
});



// app.get('/searchpage',(req,res)=>{
    
//     let source1 = req.query.sour;
//     let destination1 = req.query.dest;
    

//     console.log(source1,destination1);

//     res.render("Search");
    
// });



// app.get("/searchpage",(req,res)=>{
        
//     trains.find()
//      .then((result)=>{
         
//          res.render("Search",{cont:result})
//       })
//      .catch((err)=>{
//         console.log(err)
   
//     })    
// });


app.post('/searchtrains',(req,res)=>{
    // let rows=[req.body.from,req.body.to]
    //console.log(req.body.date)
    trains.find({$and:[{source:req.body.from.toLowerCase()},{destination:req.body.to.toLowerCase()},{date_start:req.body.date}]})
    .then((result)=>{
        console.log(result);
        res.render("Search",{cont:result,from:req.body.from,to:req.body.to,date:req.body.date})
    })
    .catch((err)=>{
       console.log(err)
  
   })    

    // res.render('Search',{data:rows})
    //     console.log(rows)
})

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});

