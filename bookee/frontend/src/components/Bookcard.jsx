import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
// import blist from '../assets/blist.json';
import Slider from "react-slick";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function Bookcard() {
    const [book,setBook] = useState([]);
    useEffect(()=>{
      const getBook = async ()=>{
        try{
          const res =await axios.get("http://localhost:4001/book");
          const data = res.data.filter((data) => data.category === "free");
          console.log(data);
          setBook(data);
        }catch(error){
          console.log(error);
          
        }
      };
      getBook();
    },[]);
   

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
                <div>
                    <h1>Courses We Offer</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quis eligendi voluptatem aut odio officia facilis accusamus minima soluta qui at ipsam odit perspiciatis, unde officiis, incidunt cumque sint ea?</p>
                </div>

                <div>
                    <Slider {...settings}>
                        {book.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Bookcard;
