import React, { ChangeEvent, useEffect, useState } from "react";
import axios, {AxiosError, AxiosResponse} from "axios";
import Coin from "./components/Coin";
interface ICoin {
  
     image: string;
     name: string;
     current_price:number;
     total_volume: number;
     price_change_percentage_24h: number;
     market_cap_change_24h: number
}

const App: React.FC = ()=> {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [search, setSearch] = useState("")
  
  useEffect(()=> {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then((response: AxiosResponse)=> {
      setCoins(response.data)
      console.log(response.data)
    })
    .catch((error:AxiosError)=> {
      console.log(error)
    })
  },[]);

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }
  const filteredCoins = coins.filter(coin=> {
     return coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  })

  return(
     <div className=" grid">
        <div className=" grid justify-evenly">
          <form action="" className=" m-2">
            <input placeholder="Provide the coin name"  className=" text-xs p-2 mt-5 border border-cyan-900 rounded" type="text" name="" id="" onChange={handleChange} value={search}/>
          </form>
        </div>
        {
          filteredCoins.map(coin=> (
            <Coin 
             image={coin.image}
             name={coin.name}
             price={coin.current_price}
             pricechange={coin.price_change_percentage_24h}
             volume={coin.total_volume}
             marketcap={coin.market_cap_change_24h}
             ></Coin>
          ))
        }
     </div>
  )
 
}
export default App