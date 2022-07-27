import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import "../styles/BookDetails.css"


const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState<any>([])
    useEffect(() => {
        const bookDetails = async () => {
            try {
                const { data } = await axios.get(`http://localhost:8000/book/books/${id}`);
                setBook(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        bookDetails();

    }, [id])

    return (
        <div className='detail-container'>
            <h1>BookDetails</h1>

            <div className='left-detail-container'>
                <div className="image-detail">
                <img src={book.image} />
                </div>
                <div className="right-detail-container">
                <h2>{book.title}</h2>
                <h4>$ {book.price}</h4>
                <h3>{book.author}</h3>
                <h5>{book.description}</h5>
                <h6>{book.categories}</h6>

                <div className='add'>
                    <button>Add To Cart</button>
                    <button>Buy Now</button>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default BookDetails