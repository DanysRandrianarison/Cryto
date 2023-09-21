import React from "react";

interface ICoin {
    image: string;
    name: string;
    price:number;
    volume: number;
    pricechange:number;
    marketcap: number
}

const Coin :React.FC<ICoin> = ({image,name,price,volume,pricechange,marketcap}) => {
      return (
        <div className=" grid mx-32">
            <div className=" grid grid-cols-5 my-2 border-t items-center">
                <div className=" flex">
                    <img className=" w-8 h-8 mx-2" src={image} alt="Coin image" />
                    <h1 className=" ">{name}</h1>
                    <p className="Coin symbol"></p>
                </div>
                
                    <p >Rs. {price}</p>
                    <p>Rs. {volume}</p>
                    {
                        pricechange<0 ? (
                            <p className=" text-red-600 font-semibold">{pricechange.toFixed(2)} %</p>
                        ):(
                            <p className=" font-semibold text-green-600">{pricechange.toFixed(2)} %</p>
                        )
                    }

                    <p className="grid text-gray-600">Makt Cap : Rs. <span className=" text-gray-900"> {marketcap.toLocaleString()}</span></p>
                </div>
            </div>
        
      )
}

export default Coin