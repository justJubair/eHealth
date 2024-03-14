import axios from "axios"

export const getAllPatients = async(searchBy)=>{
    const res = await axios(`http://localhost:5000/patients?search=${searchBy}`)
    return res.data
}