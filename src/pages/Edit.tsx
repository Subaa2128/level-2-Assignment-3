import React from 'react'
import {useState,ChangeEvent,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const Update = () => {

    const {id}=useParams()

    const [title,setTitle]=useState("")
    const [image,setImage]=useState("")
    const [price,setPrice]=useState("")
    const [author,setAuthor]=useState("")
    const [categories,setCategories]=useState("")
    const [description,setDescription]=useState("")

    const [book,setBook ]= useState <any>([])
    useEffect(()=>{
        const get = async () =>{
            try {
                const {data} = await axios.get(`http://localhost:8000/book/books/${id}`)
                console.log('data',data);
            setBook(data)
            } catch (error) {
                console.log(error)
            }
        }
        get()
     },[id])
     console.log(book)


     const setUpdate = async (id:string)=>{
        try {
            const{data} = await axios.patch(`http://localhost:8000/book/update/${id}`,{
                title:title,
                price:price,
                author:author,
                description:description,
                categories:categories,
                image,
            })
            const pushData = [...book]
            pushData.push(data)
            setBook(pushData)
        } catch (error) {
            console.log(error)
        }
      
     }

     const remove = async (id:string)=>{
        try {
            const {data} = await axios.delete(`http://localhost:8000/book/delete/${id}`)
            const removeBook = book.filter((p:any)=>
                p._id !== id
            
            )
            setBook(removeBook)
        } catch (error) {
            console.log(error)
        }
     }
    
    
    

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = (res) => {
      const image = res.target?.result as string;
      setImage(image);
    };

    reader.readAsDataURL(file);
  };


  return (
    <div>
               <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder='title' />
        <input type="text" onChange={(e) => setDescription(e.target.value)} placeholder="description" />
        <input type="text" onChange={(e) => setPrice(e.target.value)} placeholder='price'/>
        <input type="text" onChange={(e) => setCategories(e.target.value)} placeholder='categories'/>
        <input type="text" onChange={(e) => setAuthor(e.target.value)} placeholder='author'/>

        <input type="file" onChange={handleChange} placeholder='image' accept='.jpg,.png,.jpeg'/>

        <button onClick={()=> setUpdate(book._id)}>Update</button>
        <button  onClick={()=> remove(book._id)}>Delete</button>
        <h2>{book.title}</h2>
    </div>
  )
}

export default Update