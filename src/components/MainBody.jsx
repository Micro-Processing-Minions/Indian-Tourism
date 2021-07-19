import {PointOfIntrestCards, MustVisitedPlaces, HeaderCard} from "./Cards.jsx"
import HeroVideo from './HeroVideo'
import Gallary from './Gallary'
import {useState} from 'react'

import Form from "./Form"
import Map from "./Map"


const location = [
    {title: 'Goa', info: 'The pocket-sized paradise of Goa is a traveller\'s dream. Sun, sea,...'},
    {title: 'Assam', info: 'It’s huge, almost gigantic! That is the first reaction most people...'},
    {title: 'China', info: 'It has a longest bridge you can see it from outer space... i am sure'}
]

function MainBody(){
    const [videoURL] = useState('https://drive.google.com/file/d/1tIGjUHgecZnRxYvhnaqW3xiPUjQ-g6wG/preview')
    
    return(
        <div>
            <HeroVideo videoURL={videoURL}/>
            <HeaderCard heading='Heading' info='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quam corrupti vero obcaecati esse, aperiam perspiciatis aliquam hic veniam consequatur, quod fugit corporis ea voluptatibus iure nihil molestias, dolor officiis soluta porro. Possimus voluptate totam, debitis aliquam blanditiis veniam quod.' />
            <Gallary />
            <PointOfIntrestCards />
            <MustVisitedPlaces location={location} />
            {/* <Map /> */}
            
            <Form />
        </div>
    )
}

export default MainBody