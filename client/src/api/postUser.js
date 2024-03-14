import axios from "axios"

export const postUser = async(user)=>{
    const res = await axios.post("http://localhost:5000/users", user)
    return res.data
}