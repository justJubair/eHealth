import axios from "axios"

export const getAllPatients = async()=>{
    const res = await axios("http://localhost:5000/patients")
    return res.data
}