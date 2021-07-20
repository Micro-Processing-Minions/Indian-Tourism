import React, { useState, useEffect } from "react";
import Attraction from "./Attraction";
import HowToReach from "./HowToReach.jsx"
import { useParams } from 'react-router-dom'
import useAPILocation from "./useAPILocation";

function IntroCard({title, alt, img}){
  return (
    <div className="flex flex-col justify-center items-center">
        <img
          src={img}
          alt="main"
          className="m-8 w-3/5 box-border	filter drop-shadow-2xl bg-cover bg-center opacity-70 heroImg"
        />

        <div className="absolute	-translate-x-2/4 -translate-y-2/4 text-center text-white hover:text-black">
          <h3 className="text-6xl">{title}</h3>
          <p className="text-3xl	">{alt}</p>
        </div>
      </div>
  )
}




function CardBody({location, setLoc}) {
  let { loc } = useParams();
  setLoc(loc)
  const place = useAPILocation(location)
  
  useEffect(() => {
    console.log("API REQUESTED: "+location);
    place.relaodNewLocation(location)
  }, [location])


  return (
    <div className="mainDiv ">
      <IntroCard title={place.place.title} alt={place.place.tagline} img={place.place.img}/>

      <div className="flex flex-col justify-center items-center bg-gray-300	p-16">
        <p className="m-8	text-2xl	text-gray-600">Home / Destinations / {place.place.title}</p>

        <p className="text-lg	w-5/6	text-center text-gray-500	">
          {place.place.info}
        </p>
      </div>

      <Attraction places={place.places}/>
      <HowToReach />
    </div>
  );
}

export default CardBody;
