
import Home from "./pages/Home"
import { currencyContext } from './context/currency';
import { useState } from "react";
import Routing from "./routes/Routing";
import { BrowserRouter } from "react-router-dom";



function App() {
  const [currency, setcurrency] = useState('usd')

  return (
    <BrowserRouter>
    <currencyContext.Provider value={{currency,setcurrency}} >
      <Routing/>
    </currencyContext.Provider>
    </BrowserRouter>
  )
}

export default App
