require("dotenv").config()
const express = require("express")
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require("cors")
const app = express()
const port = process.env.PORT || 5000


// middlewares
app.use(cors())
app.use(express.json())






// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.dbURL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const usersCollection = client.db("eHealthDB").collection("users")

    // POST; a user
    app.post("/users", async(req,res)=>{
        const user = req?.body;
        const today = new Date()
        const currentDate = today.toLocaleDateString()
        
        user.createdAt=currentDate
       
        const result = await usersCollection.insertOne(user)
        res.send(result)
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get("/", (req,res)=>{
    res.send("eHealth server is working")
})

app.listen(port, ()=>{
    console.log(`eHealth server is running on port ${port}`)
})