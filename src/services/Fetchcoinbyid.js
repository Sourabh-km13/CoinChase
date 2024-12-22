import { axiosInstance } from "../helper/axiosinstance";

export async function fetchCoindatabyid(id) {
 

    
    try {
        const response = await axiosInstance.get(`https://api.coingecko.com/api/v3/coins/${id}`)       
        console.log(response.data);
        return response.data
        
    } catch (error) {
        console.log(error);
        return null
    }
}