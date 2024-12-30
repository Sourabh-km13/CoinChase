import React, { useState, useEffect, useContext, lazy } from "react"
import { fetchCoindata } from "../services/Fetchcoindata"
import { useQuery } from "react-query"
import { currencyContext } from "../context/currency"
import { useNavigate } from "react-router-dom"
export default function CoinTable() {
    const [page, setpage] = useState(1)
    const {currency} = useContext(currencyContext)
    const navigate = useNavigate()
    function handleClick(id) {
        console.log(id);
        navigate(`/details/${id}`)
    }
    const { data, isLoading, isError, error } = useQuery(
        ["coin", page,currency],
        () => fetchCoindata(page, currency),
        {
            staleTime: 1000 *2 * 60,    
            cacheTime: 1000 * 2 * 60,
        }
    )


    if (isError) {
        console.log('error occured');
        
        return <div>error:{error.message}</div>
    }
    return (
        <>

            <div className="my-5 flex flex-col gap-4 mx-auto items-center justify-center w-[80vw]">
                <div className="bg-cyan-600 rounded-md flex w-full font-semibold text-xl py-4 px-2 items-center justify-center">
                    <div className="basis-[33%]">Coin</div>
                    <div className="basis-[25%]">Price ({currency})</div>
                    <div className="basis-[20%]">24h change</div>
                    <div className="basis-[20%]">Market cap</div>
                </div>

                <div className=" mx-auto w-full rounded-md">
                    {
                        isLoading ? <progress className="progress w-56"></progress> : data && data.map((coin) => {
                            return (
                                <div 
                                    
                                    key={coin.id}
                                    
                                    className="shadow-md shadow-cyan-950">
                                    <div
                                        className="w-full px-2 py-4 flex justify-between items-center font-bold"
                                        
                                    >
                                        <div 
                                        onClick={()=>handleClick(coin.id)}
                                        className="flex gap-3 basis-[33%] items-center justify-start cursor-pointer transition-transform duration-300 hover:scale-105">
                                            <div className="w-24 h-24">
                                                <img src={coin.image} alt="" loading="lazy"/>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <div className="text-3xl">{coin.name}</div>
                                                <div className="text-xl">{coin.symbol}</div>
                                            </div>
                                        </div>

                                        <div className="basis-[25%]">{coin.high_24h}</div>
                                        <div className="basis-[20%]">{coin.price_change_24h}</div>
                                        <div className="basis-[20%]">{coin.market_cap}</div>
                                    </div>

                                </div>
                            )
                        })}
                    <div className="flex gap-5 my-4 mx-2 justify-center ">
                        <button
                            disabled={page===1}
                            onClick={()=>{setpage(page-1)}}
                            className="btn btn-active btn-primary">prev</button>
                        <button
                            onClick={()=>{setpage(page+1)}}
                            className="btn btn-active btn-secondary">next</button>
                    </div>
                </div>
            </div>
        </>
    )
}
