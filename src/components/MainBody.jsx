import {Cards, PointOfIntrestCards} from "./Cards.jsx"
import HeroVideo from './HeroVideo'
import {useState} from 'react'
import HowToReach from "./HowToReach.jsx"
import Map from "./Map"

function MainBody(){
    const [videoURL] = useState('https://www.incredibleindia.org/content/dam/incredible-india-v2/video/original/monsoon.mp4')
    return(
        <div>
            <HeroVideo videoURL={videoURL}/>
            <PointOfIntrestCards />
            <div className="px-64">
                <div>
                    <h2 className="flex justify-center text-3xl font-bold">Heading</h2>
                    <p className="mt-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quam corrupti vero obcaecati esse, aperiam perspiciatis aliquam hic veniam consequatur, quod fugit corporis ea voluptatibus iure nihil molestias, dolor officiis soluta porro. Possimus voluptate totam, debitis aliquam blanditiis veniam quod.</p>
                </div>
                <div className="grid grid-cols-3 mt-5 gap-6">
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
            </div>

            <div>
                <Map />
            </div>

            <div className="px-64">
                <HowToReach />
            </div>


        </div>
    )
}

export default MainBody