import React from 'react'
import { useState, useEffect,useMemo } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar"
import "../styles/Book.css"

const alphabetLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]



const Books = () => {
    // const [isOpen, setIsOpen] = useState(false)
    const [book, setBook] = useState<any>([])
    const [alphabet,setAlphabet] =useState([])
    const [bookList,setBookList]= useState([])
    const [category,setCategory]= useState<string[]>([])
    const [selectedBook,setSelectedBook] = useState()
    

    useEffect(() => {
        const get = async () => {
            try {
                const { data } = await axios.get(`http://localhost:8000/book/books`)
                console.log('data', data);
                setBook(data)
                setBookList(data)
                const filteredCatogory=[...new Set(data.map((d:any)=>d.categories))] as string[]
                setCategory(filteredCatogory.filter(e => e))
            } catch (error) {
                console.log(error)
            }
        }
        get()
    }, [])
    console.log(book)

    const searchAlphabet = (a:any)=>{
        const alphabetFilter = book.filter((pro:any)=>{
           return pro.author.toLowerCase().startsWith(a.toLowerCase())

        })
        setAlphabet(alphabetFilter);
        
    }


    function listedBook(){
        if(!selectedBook){
            return book;
        }
        if(selectedBook === "all"){
           return book;
        }

        
        return book.filter((y:any)=> y.categories === selectedBook)
    }
    let filterBooks =useMemo(listedBook,[selectedBook,category])

    function handleCategoryChange(e:any){
        setSelectedBook(e.target.value)
    }
    


    const handleCart = (id:any) =>{
        const cartOld = JSON.parse(localStorage.getItem("title") || "[]");
        if(!cartOld) {
            localStorage.setItem("title",JSON.stringify([id]));
            return;
        }
        const cartId = cartOld.find((p:any)=> p === id);
        if(cartId) {
            const filterData =cartOld.filter((p:any) => p!== id);
            localStorage.setItem("title",JSON.stringify(filterData));
            return;
        }
        cartOld.push(id);
        localStorage.setItem("title",JSON.stringify(cartOld));
    };
   



    return (
        <div>

            <Navbar />



            <div className="alphabet-container">

                {alphabetLetter.map((alphabetLetter:any)=>{
                    return (
                        <div>
                            <p onClick={()=>searchAlphabet(alphabetLetter)}>{alphabetLetter}</p>
                        </div>
                    )
                })}
              
            </div>





            <div>{category.map((p:any)=>(
               <div className='category-set'>
                {p.categories}
               </div>

             ))}</div>






            <div>{alphabet.map((p:any)=>(
                <div className='filtered-author'>
                    {p.author}
                
                </div>
                
            ))}</div>
            <div className="sort-container">
                  <div className="range">
                    <button>Clear Author</button>
                </div> 

                <div className="category-container">
                    <select name="category" id="category-list" onChange={handleCategoryChange}>
                        <option value="all">All</option>
                        {category.map((c,index)=><option key={index.toString()} value={c}>{c}</option>)}
                    </select>
                </div>


            </div>




            <div className="all-books">
                {filterBooks.map((g: any, index: any) => {

                    return (
                        <div {...g} key={index}>




                        <div className='book-lists'>
                            <Link to={`/BookDetail/${g._id}`}>
                                <img src={g.image} />
                            </Link>

                            <h2 key={index.toString()}>{g.title}</h2>



                            <h4>$ {g.price}</h4>
                            <Link to={`/BookDetails/${g._id}`}>
                            <h3>{g.author}</h3>
                            </Link>
                            
                            {/* <h5>{g.description}</h5> */}
                            {/* <h6>{g.categories}</h6> */}
                            <div className='edit'>
                                <Link to={`/Edit/${g._id}`}>
                                    <button>EDIT</button>
                                </Link>
                            </div>
                            <div className='add-cart'>
                                <button onClick={()=> handleCart(g._id)}>Add To Cart</button>
                            </div>

                        </div>

                        </div>

                    )


                })}
            </div>
        </div>
    )
}

export default Books