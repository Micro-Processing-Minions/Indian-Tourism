import {Cards, PointOfIntrestCards} from "./Cards.jsx"
import HeroVideo from './HeroVideo'
import {useState} from 'react'


function MainBody(){
    const [videoURL] = useState('https://www.incredibleindia.org/content/dam/incredible-india-v2/video/original/monsoon.mp4')
    return(
        <div>
            {/* <HeroVideo videoURL={videoURL}/> */}
            <Cards />
            <PointOfIntrestCards />
        </div>
    )
}

export default MainBody