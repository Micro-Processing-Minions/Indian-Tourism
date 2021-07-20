import React, { useState } from "react";
import Attraction from "./Attraction";
import DemoCarousel from "./DemoCarousel";
import HowToReach from "./HowToReach.jsx"
import { useParams } from 'react-router-dom'

function IntroCard({title, alt, img}){
  return (
    <div className="flex flex-col justify-center items-center">
        <img
          src={img}
          alt="main"
          className="m-8 w-3/5 box-border	filter drop-shadow-2xl bg-cover bg-center opacity-70"
        />

        <div className="absolute	-translate-x-2/4 -translate-y-2/4 text-center text-white hover:text-black">
          <h3 className="text-6xl">{title}</h3>
          <p className="text-3xl	">{alt}</p>
        </div>
      </div>
  )
}




function CardBody() {
  let { loc } = useParams();
  const [title, setTitle] = useState(loc)
  const [img, setImg] = useState('')
  const [tagline, setTagline] = useState('')
  const [info, setInfo] = useState('')
  const [places, setPlaces] = useState([])
  fetch('https://indian-tourism-web-protal.herokuapp.com/'+loc)
  .then(response => response.json())
  .then(data => {
    setTitle(data.title)
    setImg(data.img)
    setTagline(data.tagline)
    setInfo(data.desc)
    setPlaces(data.places_to_visit)
  })




  return (
    <div className="mainDiv ">
      <IntroCard title={title} alt={tagline} img={img}/>

      <div className="flex flex-col justify-center items-center bg-gray-300	p-16">
        <p className="m-8	text-2xl	text-gray-600">Home / Destinations / {loc}</p>

        <p className="text-lg	w-5/6	text-center text-gray-500	">
          {info}
        </p>
      </div>

      <Attraction places={places}/>
      <HowToReach />
    </div>
  );
}

export default CardBody;
