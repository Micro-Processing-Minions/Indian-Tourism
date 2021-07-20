import {useState} from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function HorizontalCard({img, title, info, imagePlacement}){
    const imgWidth = {
        width: '100%',
        height: '100%'
    }
    return (
        <div class="card lg:card-side bordered m-4 bg-white">
            {imagePlacement === 'up' && <figure><img src={img} alt='' style={imgWidth}/></figure> }
            <div class="card-body">
                <h2 class="card-title">{title}</h2> 
                <p>{info}</p> 
                {/* <div class="card-actions">
                <button class="btn btn-primary">Get Started</button> 
                <button class="btn btn-ghost">More info</button>
                </div> */}
            </div>
            {imagePlacement === 'down' && <figure><img src={img} style={imgWidth} alt=''/></figure> }
        </div> 
    )
}

function PointOfIntrestCards(){
    return (
        <div className='card mx-auto w-8/12'>
                <h2 className="flex justify-center text-3xl font-bold">Point of Intrest</h2>
                    
                    <HorizontalCard
                        img='https://www.planetware.com/photos-large/IND/india-top-attractions-taj-mahal.jpg'
                        title='The Taj Mahal, Agra'
                        info="Perhaps India's most recognizable building, the Taj Mahal is also the world's most famous testimony to the power of love. Named after Mumtaz Mahal, the favorite wife of Emperor Shah Jahan"
                        imagePlacement='up'
                    />
                    <HorizontalCard
                        img='https://www.planetware.com/photos-large/IND/india-top-attractions-harmandir-sahib.jpg'
                        title='Harmandir Sahib: The Golden Temple of Amritsar'
                        info="Founded in 1577 by Ram Das, Amritsar is an important hub of Sikh history and culture."
                        imagePlacement='down'
                    />
                    <HorizontalCard
                        img='https://www.planetware.com/photos-large/IND/india-top-attractions-amer-fort.jpg'
                        title='Amer Fort, Jaipur'
                        info='Amer Fort (often also spelt \"Amber\") was built as a fortified palace in 1592 by Maharaja Man Singh I and has long served as the capital of Jaipur. Carved high up into the hillside, the fort is accessible on foot via a steep climb or by shuttle rides from the town below (better still, let an elephant do the work).'
                        imagePlacement='up'
                    />

        </div>
    )
}

function HeaderCard({heading, info}){
    return (
        <div className="md:px-64 md:my-5 sm:px-10 sm:my-5">
            <div>
                <p className="mt-6 md:px-10 lg:px-0">{info}</p>
            </div>
        </div>
    )
}

function MustVisitedPlaces(){
    const [locations] = useState()
    const [images, setImages] = useState([])
    fetch("https://indian-tourism-web-protal.herokuapp.com")
    .then(response => response.json())
    .then(data => {
        setImages(data.data)
    })
    return (
        <div className="sm:px-8 md:px-32 lg:px-12">
            <h2 className="flex justify-center text-3xl font-bold">Must Visit Destinations</h2>
            <p className="flex justify-center text-lg">From historical cities to natural splendours, come see the best of India</p>
            <div className="grid grid-col-3 mt-5 gap-2">
                <OwlCarousel className='owl-theme' loop margin={3} nav>
                {images.map((place, zipCode) => {
                    return <Cards title={place.title} key={zipCode} info={place.info} alt={place.alt} img={place.img}/>
                })}
                </OwlCarousel>;
            </div>
        </div>
    )
}

function Cards({title, info, img, alt}){
    return(
        <div>
            <div class="item card shadow-xl image-full">
                <figure>
                    <img src={img} alt={alt}/>
                </figure> 
                <div class="justify-end card-body">
                    <h2 class="card-title">{title}</h2> 
                    <p className="">{info}</p>
                </div>
            </div> 
        </div>
    )
}

export{
    Cards,
    PointOfIntrestCards,
    MustVisitedPlaces,
    HeaderCard
}