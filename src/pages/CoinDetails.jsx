import React,{useContext,useState} from 'react'
import parse from "html-react-parser"
import { useParams } from 'react-router-dom'
import { fetchCoindatabyid } from '../services/Fetchcoinbyid'
import { useQuery } from 'react-query'
import { currencyContext } from '../context/currency'
import Spinner from '../components/Spinner'
import CoinInfoContainer from '../components/CoininfoChart/CoinChartcontainer'


export default function CoinDetails() {
    const [readmore, setreadmore] = useState(false)
    const {coinid}=useParams()
    const {currency}=useContext(currencyContext)
    function handlereadmore() {
        console.log('clicked');
        
        setreadmore(prev=>!prev)
    }
    const {data,isLoading,error,isError}=useQuery(['coinhistory',coinid],
        ()=>fetchCoindatabyid(coinid),
    {
        cacheTime:1000*12*60,
        staleTime:1000*12*60
    })

    if(isLoading){
        return(
           <Spinner/>
        )
    }
    if(isError){
        return(
            <div>Error Occured:{error}</div>
        )
    }
    return(
        <div className="flex flex-col md:flex-row">

        <div
            className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 border-r-2 border-gray-500"
        >
            <img 
                alt={data?.name}
                src={data?.image?.large}
                className="h-52 mb-5"
            />

            <h1
                className="text-4xl font-bold mb-5"
            >
                {data?.name}
            </h1>


            <div
                className="w-full flex flex-col md:flex-row md:justify-around"
            >
                <div 
                    className="flex items-center mb-4 md:mb-0"
                >
                    <h2 className="text-xl font-bold ">
                        Rank
                    </h2>
                    <span className="ml-3 text-xl ">
                        {data?.market_cap_rank}
                    </span>
                </div>

                <div className="flex items-center mb-4 md:mb-0">
                    <h2 className="text-xl text-yellow-400 font-bold ">
                        Current Price
                    </h2>
                    <span className="ml-3 text-xl ">
                        {data?.market_data.current_price[currency]}
                    </span>
                </div>

            </div>
                <p
                    className={`w-full px-6 py-4 text-justify overflow-hidden transition-all duration-1000 ease-linear ${readmore ? 'max-h-[1000px]' : 'max-h-28'
                        }`}
                >
                    {readmore
                        ? parse(data?.description?.en)
                        : parse((data?.description?.en || '').slice(0, 150))}
                    <button
                        onClick={handlereadmore}
                        className="text-blue-400 ml-2"
                    >
                        {readmore ? 'Read Less' : '...Read More'}
                    </button>
                </p>
        </div>
        <div className="md:w-2/3 w-full p-6">
                Coin Information
            <div className="md: w-full ">
                <CoinInfoContainer coinId={coinid} />
            </div>

        </div>
    </div>
    )
}
