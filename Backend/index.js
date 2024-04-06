const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const multer = require('multer')
const UserModel =require("./models/Users")
const InfoModel =require("./models/info")

const RegModel = require("./models/regdoctor")
const Checkbox = require("./models/saveCheckbox")
const FeedbackModel = require("./models/feedback")
const RegschoolModel = require("./models/regschool")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/users", { useNewUrlParser: true, useUnifiedTopology: true });

app.post("/login",(req, res) =>{
    const {phone, password}= req.body;
    UserModel.findOne({phone: phone})
    .then(user => {
        if(user){
            if(user.password === password){
            res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record eisted")
        }
    })
})

app.post('/register',(req, res) =>{
    UserModel.create(req.body)
    .then(useers => res.json(useers))
    .catch(err => res.json(err))

})

app.listen(3001,() =>{
    console.log("Server is running")
})

app.post('/info',(req, res) =>{
    InfoModel.create(req.body)
    .then(infoo => res.json(infoo))
    .catch(err => res.json(err))

})

app.listen(3002,() =>{
    console.log("Server is running")
})

app.post('/regdoctor',(req, res) =>{
    Doctor.create(req.body)
    .then(regdoctors => res.json(regdoctors))
    .catch(err => res.json(err))

})

app.listen(3003,() =>{
    console.log("Server is running")
})

app.post('/saveCheckbox',(req, res) =>{
    Checkbox.create(req.body)
    .then( checkboxes=> res.json(checkboxes))
    .catch(err => res.json(err))

})

  
  app.listen(3000, () => {
    console.log(`Server is running on port `);
  });

  app.post('/regschool',(req, res) =>{
    RegschoolModel.create(req.body)
    .then( regschools => res.json(regschools))
    .catch(err => res.json(err))

})

  app.listen(3004, () => {
    console.log(`Server is running on port `);
  });

  app.post('/feedback',(req, res) =>{
    FeedbackModel.create(req.body)
    .then( feedback=> res.json(feedback))
    .catch(err => res.json(err))

})

  app.listen(3005, () => {
    console.log(`Server is running on port `);
  });
  
  
  app.get('/regdoctors/:city', async (req, res) => {
    const city = req.params.city;
    try {
      const doctors = await Doctor.find({ city });
      res.json(doctors);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Start the server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });