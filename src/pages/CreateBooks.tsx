import axios from 'axios'
import React, { useState,ChangeEvent } from 'react'


const CreateBooks = () => {

    const [title,setTitle]=useState("")
    const [image,setImage]=useState("")
    const [price,setPrice]=useState("")
    const [author,setAuthor]=useState("")
    const [categories,setCategories]=useState("")
    const [description,setDescription]=useState("")

    const setBook = async () =>{
        try {

            const{data} =await axios.post(`http://localhost:8000/book/createBook`,{
                title:title,
                price:price,
                description:description,
                categories:categories,
                author:author,
                image,
            });
            console.log(data)
            
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

        <button onClick={setBook}>create</button>
    </div>
  )
}

export default CreateBooks