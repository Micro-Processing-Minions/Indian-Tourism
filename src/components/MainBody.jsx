import {PointOfIntrestCards, MustVisitedPlaces, HeaderCard} from "./Cards.jsx"
import HeroVideo from './HeroVideo'
import Gallary from './Gallary'
import {useState} from 'react'

import Form from "./Form"
import Map from "./Map"

function MainBody(){
    const [videoURL] = useState('https://drive.google.com/file/d/1tIGjUHgecZnRxYvhnaqW3xiPUjQ-g6wG/preview')
    
    return(
        <div>
            <HeroVideo videoURL={videoURL}/>
            <HeaderCard info='One of the oldest civilisations in the world, India is a mosaic of multicultural experiences. With a rich heritage and myriad attractions, the country is among the most popular tourist destinations in the world. It covers an area of 32, 87,263 sq. km, extending from the snow-covered Himalayan heights to the tropical rain forests of the south. As the 7th largest country in the world, India stands apart from the rest of Asia, marked off as it is by mountains and the sea, which give the country a distinct geographical entity.' />
            <Gallary />
            <PointOfIntrestCards />
            <MustVisitedPlaces />
            {/* <Map /> */}
            
            <Form />
        </div>
    )
}

export default MainBody