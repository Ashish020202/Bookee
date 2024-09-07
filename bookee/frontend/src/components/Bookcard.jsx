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
            <div className="text-center my-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-400 my-6mb-4">
                    Discover Our Free Book Collection
                </h1>
                <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
                    Explore a curated selection of free books from various genres.
                </p>
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
