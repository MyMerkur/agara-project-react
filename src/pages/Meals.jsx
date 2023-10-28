import React from 'react';
import { useState,useEffect } from 'react';
import '../style/style.css'
import { Image } from '@chakra-ui/react';
export default function Meals() {
      const [data,setData] = useState([]);
      const [loading,setLoading] = useState(true);

      useEffect(()=>{
        fetch('data/menu.json')
        .then((response)=> response.json())
        .then((data)=>{
          setData(data)
          setLoading(false)
        })
        .catch((error)=>{
          console.log("Veri yükeleme hatası",error)
          setLoading(false)
        })
      },[])

      if(loading){
        return <div>Loading...</div>
      }




  return (
    <div id='menuToMeals'>
      <h1>MENÜ</h1>
      <Image
        id='menuLogo'
        borderRadius='full'
        boxSize='850px'
        src='/images/logo.png'
        alt='Dan Abramov'
      />
      <div className='mealsItemsContainer'> 
        {data.map((item)=>(
          <div className='innerContainer' key={item.id}>
             <div className='mealsItems' >
                  <div id='mealsInfo'>
                      <h3>{item.title}</h3>
                      <span>{item.price + "₺"}</span>
                  </div>
                  <p>{item.description}</p>
              </div>
          </div>
             
          ))}
      </div>
        
    </div>
  );
}
