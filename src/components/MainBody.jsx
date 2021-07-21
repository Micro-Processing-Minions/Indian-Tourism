import {PointOfIntrestCards, MustVisitedPlaces, HeaderCard} from "./Cards.jsx"
import HeroVideo from './HeroVideo'
import Gallary from './Gallary'
import {useState, useEffect} from 'react'

import Form from "./Form"

// const fetchMustVisitedPlaces = async () => {
//     let resp = await fetch("https://indian-tourism-web-protal.herokuapp.com")
//     let data = await resp.json()
//     console.log(data.data[10])
//     return data.data;
// }
function MainBody(){
    const currentImages = [{alt: "The Taj Mahal, Agra", desc: "Perhaps India's most recognizable building, the Ta… and took 20,000 workmen until 1648 to complete. ", img: "https://www.planetware.com/photos-large/IND/india-top-attractions-taj-mahal.jpg", title: "1. The Taj Mahal, Agra"},
                        {alt: "The Holy City of Varanasi", desc: "A major pilgrimage center for Hindus, the holy cit… the oldest still inhabited cities in the world. ", img: "https://www.planetware.com/photos-large/IND/india-top-attractions-varanasi.jpg", title: "2. The Holy City of Varanasi"},
                        {alt: "Harmandir Sahib: The Golden Temple of Amritsar", desc: "Founded in 1577 by Ram Das, Amritsar is an importa…nts a lotus flower, a symbol of purity to Sikhs. ", img: "https://www.planetware.com/photos-large/IND/india-top-attractions-harmandir-sahib.jpg", title: "3. Harmandir Sahib: The Golden Temple of Amritsar"},
                        {alt: "The Golden City: Jaisalmer", desc: "So named for the yellow sandstone used in most of …entury structure that rises high above the town. ", img: "https://www.planetware.com/photos-large/IND/india-top-attractions-jaisalmer.jpg", title: "4. The Golden City: Jaisalmer"},
                        {alt: "The Red Fort, New Delhi", desc: "Built by Shah Jahan in 1648 as the seat of Mughal … used by the emperor for ceremonial processions. ", img: "https://www.planetware.com/photos-large/IND/india-top-attractions-red-fort.jpg", title: "5. The Red Fort, New Delhi"},
                        {alt: "The Gateway of India, Mumbai", desc: "Standing an impressive 26 meters tall and overlook… for a while, the tallest structure in the city. ", img: "https://www.planetware.com/photos-large/IND/india-top-attractions-gateway-india.jpg", title: "6. Mumbai: The Gateway of India"},
                        {alt: "Mecca Masjid, Hyderabad", desc: "Construction of Hyderabad's Mecca Masjid, one of t…rains reputedly consisting of up to 1,400 bulls. ", img: "https://www.planetware.com/photos-large/IND/india-top-attractions-mecca-masjid.jpg", title: "7. Mecca Masjid, Hyderabad"},
                        {alt: "Amer Fort, Jaipur", desc: "Amer Fort (often also spelt \"Amber\") was built as …orated walls and terraces frequented by monkeys. ", img: "https://www.planetware.com/photos-large/IND/india-top-attractions-amer-fort.jpg", title: "8. Amer Fort, Jaipur"},
                        {alt: "Palm-lined beach in Goa", desc: "Long known within India as the \"go-to\" destination…ently been discovered by tourists from overseas. ", img: "https://www.planetware.com/wpimages/2019/08/india-top-attractions-goa-beaches.jpg", title: "9. The Beaches of Goa"},
                        {alt: "Periyar National Park and Wildlife Sanctuary, Madurai", desc: "One of South India's most popular tourist attracti… with many interesting varieties of butterflies. ", img: "https://www.planetware.com/photos-large/IND/india-top-attractions-periyar-national-park-wildlife-sanctuary.jpg", title: "10. Periyar National Park and Wildlife Sanctuary, Madurai"},
                        {alt: "Agra Fort", desc: "Built as a military structure in 1565 by Emperor A…l, the largest private residence in the complex. ", img: "https://www.planetware.com/photos-large/IND/india-top-attractions-agra-fort.jpg", title: "11. Agra Fort"}]
    const [images, setImages] = useState(currentImages)
    
    // useEffect(() => {
    //     let image = fetchMustVisitedPlaces()
    //     console.log(image)
    //     setImages(image)
    // },[])

    const [videoURL] = useState('https://drive.google.com/file/d/1tIGjUHgecZnRxYvhnaqW3xiPUjQ-g6wG/preview')
    
    return(
        <div>
            <HeroVideo videoURL={videoURL}/>
            <HeaderCard info='One of the oldest civilisations in the world, India is a mosaic of multicultural experiences. With a rich heritage and myriad attractions, the country is among the most popular tourist destinations in the world. It covers an area of 32, 87,263 sq. km, extending from the snow-covered Himalayan heights to the tropical rain forests of the south. As the 7th largest country in the world, India stands apart from the rest of Asia, marked off as it is by mountains and the sea, which give the country a distinct geographical entity.' />
            <Gallary />
            <PointOfIntrestCards />
            <MustVisitedPlaces images={images}/>
            
            <Form />
        </div>
    )
}

export default MainBody