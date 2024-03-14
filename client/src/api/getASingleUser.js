import axios from "axios"

export const getASingleUser = async(email)=>{
    const res = await axios(`http://localhost:5000/users?email=${email}`)
    return res.data;
}