import { jwtDecode } from "jwt-decode"
export const getToken = () => {
    const userToken = sessionStorage.getItem("userToken")
    try {
        const decoded = jwtDecode(userToken)
        console.log(decoded)
        return decoded.user
    } catch (error) {
        console.log(error.message)
    }
}