import { axiosInstance } from "../helper/axiosinstance";

export async function fetchCoindata(page=1,currency) {
    const per_page=15;

    
    try {
        const response = await
         axiosInstance.
         get(`coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${per_page}&page=${page}`)       
        return response.data
        
        
    } catch (error) {
        console.log(error);
        return null
    }
}