require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const multer = require("multer");
const app = express();

const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

app.use("/files", express.static("files"));

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.dbURL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "./files");
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
      },
    });

    const upload = multer({ storage: storage });

    // collections
    const usersCollection = client.db("eHealthDB").collection("users");
    const patientCollection = client.db("eHealthDB").collection("patients");

    // POST; a user
    app.post("/users", async (req, res) => {
      const user = req?.body;
     
      const today = new Date();
      const currentDate = today.toLocaleDateString();
      user.createdAt = currentDate;
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

    // GET; a single user with email query
    app.get("/users", async (req, res) => {
      let query = {};
      if (req?.query?.email) {
        query = { email: req?.query?.email };
      }
      const result = await usersCollection.findOne(query);
      res.send(result);
    });

    // POST; a new patient
    app.post("/patients", upload.single("prescription"), async (req, res) => {
      const patient = req?.body;
      const prescription = req?.file?.filename;
      const today = new Date();
      const currentDate = today.toLocaleDateString();
      try {
        const result = await patientCollection.insertOne( {
          name: patient?.name,
          age: patient?.age,
          weight: patient?.weight,
          gender: patient?.gender,
          diagnosis: patient?.diagnosis,
          bloodPressure: patient?.bloodPressure,
          prescription: prescription,
          createdAt: currentDate,
        });
        res.send(result); 
      } catch (err) {
        console.log(err);
      }
    });

    // UPDATE; a patient
    app.patch("/patients/:id", async(req,res)=>{
      const id = req?.params?.id;
      const patient = req?.body;
     
      const filter = {_id: new ObjectId(id)}
      const updatedPatient = {
        $set: {
          name: patient?.name,
          age: patient?.age,
          weight: patient?.weight,
          gender: patient?.gender,
          diagnosis: patient?.diagnosis,
          bloodPressure: patient?.bloodPressure
        }
      }
      const result = await patientCollection.updateOne(filter, updatedPatient)
      res.send(result)
    })

    // DELETE; a patient
    app.delete("/patients/:id", async(req,res)=>{
      const id = req?.params?.id;
      const query = {_id: new ObjectId(id)}
      const result = await patientCollection.deleteOne(query);
      res.send(result)
    })

    // Search and Sort patients
    app.get("/patients", async(req,res)=>{
      let query = {}
      
      if(req?.query?.search){
        query = {
          name: {$regex: req?.query?.search, $options: "i"}
        }
      }
     
      const cursor = patientCollection.find(query);
      const result = await cursor.toArray()
      res.send(result)
    })

    

    

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("eHealth server is working");
});

app.listen(port, () => {
  console.log(`eHealth server is running on port ${port}`);
});
