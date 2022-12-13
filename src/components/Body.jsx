import React , {useState , useEffect} from 'react'
import './components.css'
import Axios from 'axios'
import {FiArrowUpRight , FiArrowDown} from 'react-icons/fi'

const Body = () => {

    const [data , setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

    useEffect(() => {
        Axios.get(url).then((response) => {
            setData(response.data)
        })
    }, [])

    if(!data) return null

  return (
    <div className='featured'>
        <div className='cards'>
        {data.map((curData) => {
            const {image , name , current_price} = curData

            return (
                
     
                <div className='card'>
                    <div className='top'>
                        <img src={curData.image} />
                    </div>
                    
                    <div>
                    <h5>{curData.name}</h5>
                    <p>${curData.current_price.toLocaleString()}</p>
                    </div>
                    {curData.price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data[0].price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='green'>
                                    <FiArrowUpRight className='icon' />
                                    {data[0].price_change_percentage_24h.toFixed(2)}%
                                </span>
                 )}
    
                </div>
    
          
            )
        })}
       </div>
    </div>
  )
}

export default Body