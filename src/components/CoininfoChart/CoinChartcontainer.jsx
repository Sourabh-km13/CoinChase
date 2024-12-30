import { useQuery } from "react-query";
import CoinChart from "./CoinChart";
import { useContext, useState } from "react";
import { fetchcoinhistory } from "../../services/Fetchcoinhistory";
import Alert from "../Alert";
import Spinner from './../Spinner';
import { currencyContext } from "../../context/currency";
function CoinInfoContainer({ coinId }) {
    const { currency } = useContext(currencyContext);
    const [days, setDays] = useState(7);
    const [interval, setCoinInterval] = useState('daily');
    const { data: historicData, isLoading, isError } = useQuery(['coinHistoricData', coinId, currency, days, interval], () => fetchcoinhistory(coinId, interval, days, currency), {
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });
    if(isLoading) {
        return <Spinner />
    }
    if(isError) {
        return <Alert message="Error fetching data" type="error" />
    }
    return (
        <>
            <CoinChart 
                historicData={historicData} 
                setDays={setDays} 
                setCoinInterval={setCoinInterval} 
                days={days}
                currency={currency}
            />
        </>
    );
}
export default CoinInfoContainer;