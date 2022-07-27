import React, { useCallback, useEffect } from 'react'
import "../styles/Book.css"
import {useState} from "react"
import axios from 'axios'
import "../styles/Cart.css"


const Cart = () => {
    const [book,setBook] = useState<any>([])
    const [id,setId] = useState(()=>{
        const data =localStorage.getItem("title");
        if(!data) return [];
        const modifiedData =JSON.parse(data);
        return modifiedData;
    });

    const handelData = useCallback (async ()=>{
          const result = await Promise.all(
            id.map(async (id:any)=>{
                const {data} =await axios.get(`http://localhost:8000/book/books/${id}`);
                console.log(data);
                return data;
            })
          )
          setBook(result);
    },[id]);

  useEffect(()=>{
    handelData();
  },[handelData])
    
    
  return (
    <div className='cart-item-container'>
      {book.map((g:any)=>{
        return(
            <div>
                <div key={g.id}>
                    <div className='cart-list'>
                        <img src={g.image} alt="" />
                        <h2>{g.title}</h2>
                        <h4>$ {g.price}</h4>
                        <div className='remove-cart'>
                            {/* <button onClick={ ()=> (p.id)}></button> */}

                        </div>
                    </div>
                </div>
            </div>
        )
      })}


    </div>
  )
}

export default Cart