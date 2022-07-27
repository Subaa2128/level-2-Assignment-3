import React from 'react'
import { useState, useEffect } from 'react'
import "../styles/Navbar.css"
import { VscSearch } from "react-icons/vsc"
import { AiOutlineClose } from "react-icons/ai"
import { GiShoppingCart } from "react-icons/gi"
import {AiOutlineUser} from "react-icons/ai"
import axios from "axios"
import { Link } from "react-router-dom"
import Cart from "../pages/Cart"
import "../styles/Book.css"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [cartOpen,setCartOpen] = useState(false)
    const [book, setBook] = useState<any>([])
    const [filter,setFilter] =useState([])
    useEffect(() => {
        const get = async () => {
            try {
                const { data } = await axios.get(`http://localhost:8000/book/books`)
                console.log('data', data);
                setBook(data)
            } catch (error) {
                console.log(error)
            }
        }
        get()
    }, [])
    console.log(book)
    const find = (e: any) => {
        const findBook = e.target.value
        const filterValue = book.filter((f:any)=>{
            return f.title.toLowerCase().includes(findBook.toLowerCase())
        })
        setFilter(filterValue)

        if(findBook===""){
            setFilter([])
            
        }
        else{
            setFilter(filterValue)
        }

    }

    return (
        <div>

            <div className={isOpen ? 'top-bar active' : 'top-bar'}>
                <div className='top-search'>
                    <p><VscSearch /></p>
                    <input onChange={find} type="search" placeholder='Type your serch....' />
                    <p onClick={() => setIsOpen(false)}><AiOutlineClose /></p>
                </div>
            </div>


            <div className='header'>

                <div className='top-header'>
                    <div className='top-header-left'>
                        <p>Our Collections</p>
                    </div>
                    <div className='top-header-right'>
                        <div className="search" onClick={() => setIsOpen(true)} >
                            <p><VscSearch /></p>
                            <p>SEARCH</p>
                        </div>
                        <div className= "cart " onClick={() => setCartOpen(true)}>
                            <p className='cart-icon'><GiShoppingCart /></p>
                            <p>CART</p>
                            <div className={cartOpen ? "cart-container active" : "cart-container"}>
                                <p onClick={(e) => {
                                    e.stopPropagation()
                                    setCartOpen(false)
                                }}><AiOutlineClose /></p>
                                <Cart/>

                            </div>
                        </div>
                        
                        <div className='login'>
                            
                            <p className='login-icon'><AiOutlineUser/></p>
                            <Link to="/login">
                            <p>LOGIN</p>
                            </Link>
                            

                        </div>

                    </div>
                </div>
                <div className='bottom-header'>
                    <div className='bottom-header-left'>
                        <p>BOOK STORE</p>
                    </div>
                    <div className='bottom-header-right'>
                       <Link to="/home">
                       <p>HOME</p>
                       </Link>
                       <Link to="/book">
                       <p>BOOKS</p>
                       </Link>
                        <p>MAGAZINES</p>
                        <Link to="/book">
                        <p>SHOP</p>
                        </Link>
                        
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Navbar