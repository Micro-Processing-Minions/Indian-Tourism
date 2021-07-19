import {useState} from 'react'

function HorizontalCard({img, title, info, imagePlacement}){
    return (
        <div class="card lg:card-side bordered m-4 bg-white">
            {imagePlacement === 'up' && <figure><img src={img} alt=''/></figure> }
            <div class="card-body">
                <h2 class="card-title">{title}</h2> 
                <p>{info}</p> 
                <div class="card-actions">
                <button class="btn btn-primary">Get Started</button> 
                <button class="btn btn-ghost">More info</button>
                </div>
            </div>
            {imagePlacement === 'down' && <figure><img src={img} alt=''/></figure> }
        </div> 
    )
}

function PointOfIntrestCards(){
    return (
        <div className='card mx-auto w-8/12'>
                <h2 className="flex justify-center text-3xl font-bold">Point of Intrest</h2>
                    
                    <HorizontalCard
                        img='https://i.picsum.photos/id/1005/600/400.jpg?hmac=RHLkAWAPjK7zvSVfmz7ULItYJMQQFF9kQ2SheLO5EV8'
                        title='Statue of Unity'
                        info='It’s huge, almost gigantic! That is the first reaction most people have as they speed down the winding road leading to the towering Statue of Unity (SoU). A long bridge connects the mainland to the Sadhu Bet Island, on which the statue stands.'
                        imagePlacement='up'
                    />
                    <HorizontalCard
                        img='https://i.picsum.photos/id/1005/600/400.jpg?hmac=RHLkAWAPjK7zvSVfmz7ULItYJMQQFF9kQ2SheLO5EV8'
                        title='Beaches'
                        info="India's shorelines are endowed with a glorious beauty that is reflected in its undulating golden beaches that make for an ideal vantage point to watch the sun dipping into the sea. Beaches stroke both the eastern and western coasts of the Indian peninsula."
                        imagePlacement='down'
                    />
                    <HorizontalCard
                        img='https://i.picsum.photos/id/1005/600/400.jpg?hmac=RHLkAWAPjK7zvSVfmz7ULItYJMQQFF9kQ2SheLO5EV8'
                        title='Cathedrals And Basilicas'
                        info='India boasts many architectural marvels, including cathedrals and basilicas that are recognised the world over for their beauty.'
                        imagePlacement='up'
                    />

        </div>
    )
}

function HeaderCard({heading, info}){
    return (
        <div className="md:px-64 md:my-5 sm:px-10 sm:my-5">
            <div>
                <h2 className="flex justify-center text-3xl font-bold">{heading}</h2>
                <p className="mt-6 md:px-10 lg:px-0">{info}</p>
            </div>
        </div>
    )
}

function MustVisitedPlaces({location}){
    const [locations] = useState()
    return (
        <div className="sm:px-8 md:px-32 lg:px-64">
            <h2 className="flex justify-center text-3xl font-bold">Must Visit Destinations</h2>
            <p className="flex justify-center text-lg">From historical cities to natural splendours, come see the best of India</p>
            <div className="grid grid-cols-3 mt-5 gap-6">
                {location.map((place, zipCode) => {
                    return <Cards title={place.title} key={zipCode} info={place.info}/>
                })}
            </div>
        </div>
    )
}

function Cards({title, info}){
    return(
        <div>
            <div class="card shadow-xl image-full">
                <figure>
                    <img src="https://picsum.photos/id/1005/400/250" alt="good day"/>
                </figure> 
                <div class="justify-end card-body">
                    <h2 class="card-title">{title}</h2> 
                    <p className="">{info}</p> 
                    <div class="card-actions">
                        <button button class="btn btn-primary">more info</button>
                    </div>
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