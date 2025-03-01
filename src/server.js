//Include the express library
const express = require("express")
//Include the morgan middleware
const morgan = require("morgan")
//Include the cors middleware
const cors = require("cors")

//Create a new express application
const app = express()

//Tell express we want to use the morgan library
app.use(morgan("dev"))
//Tell express we want to use the cors library
app.use(cors())
//Tell express to parse JSON in the request body
app.use(express.json())

let count = 0

// get
app.get('/', (req , res) => {
res.status(201).json({message:'counter API'})
})

/*app.get('/counter' , (req , res) => {
    console.log(count)
    return res.status(201).json({'counter': count})
})*/


app.get("/counter", (req, res) => {
    const counter = {
      counter: count,
    };
  
    res.status(200).json(counter);
  });


  // delete
  app.delete("/counter", (req , res) => {
    count = 0
    return res.json({"counter":count})
  })

 // post increment
 app.post("/counter/increment", (req , res) => {
    count++
    return res.status(201).json({"counter":count})
 })

 //post decrement
 app.post("/counter/decrement", (req , res) => {
    count--
    return res.status(201).json({"counter":count})
 })

 //double count
 app.post("/counter/double" , (req , res) => {
    count *= 2
    return res.status(201).json({"counter":count})
 })

module.exports = app