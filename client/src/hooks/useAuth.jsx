const { AuthContext } = require("@/Provider/AuthProvider")
const { useContext } = require("react")

const useAuth = ()=>{
    const all = useContext(AuthContext)
    return all
}

export default useAuth;