import { axiosSecure } from "@/hooks/axiosSecure"

export const createNewUserDB = async(newUser) => {
    console.log(newUser)
    const response = await axiosSecure.post('/users', newUser)
    console.log(response?.data)
    return response?.data
}