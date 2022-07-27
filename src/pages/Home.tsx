import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "../styles/Home.css"
import Navbar from "../components/Navbar"
import headerImage1 from "../assets/headerImage/header-image-1.jpg";
import headerImage2 from "../assets/headerImage/header-image-2.jpg";
import headerImage3 from "../assets/headerImage/header-image-3.jpg";
import headerImage4 from "../assets/headerImage/header-image-4.jpg";
import headerImage5 from "../assets/headerImage/header-image-5.jpg";
import headerImage6 from "../assets/headerImage/header-image-6.jpg";
const Home = () => {
   const[isOpen,setIsOpen] =useState(false)
     const [book, setBook] = useState<any>([])
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

    const fade = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        cssEase: 'linear'
    }

    return (
        <>
            
          <Navbar/>

            <div className='quotes'>
                <h1>2020's Editions<br></br> Of Childhood Stories</h1>
                <div className="header-image">
                    
                        <div className="image-item">
                            <img src={headerImage1} className="first-slider" />
                            <p>Jack Sparrow</p>
                        </div>
                        <div className="image-item">
                            <img src={headerImage2} className="first-slider" />
                            <p>Fairy Tale</p>
                        </div>
                        <div className="image-item">
                            <img src={headerImage3} className="first-slider" />
                            <p>Cinderella</p>
                        </div>
                   
                    
                </div>
            </div>
            <div className="feedback-section">
                <div className="subscribe">
                    <h1>SUBSCRIBE TO <br></br>OUR BOOK STORE</h1>
                </div>
                <div className="mailid">
                    <p> Set up your Mailid to get every New Collections in our store,<br></br>and make sure to Subscribe</p>
                    <input type="email" placeholder='Add your e-mail' />
                </div>
            </div>

            <div className="shopping">
                <div className="shopping-expo">
                    <p>Your Shopping expo</p>
                    <h1>AVAILABLE NOW</h1>
                </div>
            </div>

            <div className="footer">
                <div className="top-footer">
                    <h1>BOOK STORE</h1>
                    <p>
                        The perfect place for telling & sharing<br></br>
                        all the stories that truly matter.

                    </p>
                </div>

            </div>
            <div className="bottom-footer">
                <p>Writtern with heart</p>
                <p>Copyright 2020 © QodeInteractive</p>
            </div>            

        </>
    )
}

export default Home