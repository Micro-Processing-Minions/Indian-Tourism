function PointOfIntrestCards(){
    return (
        <div className='card mx-auto w-8/12'>
                    
                    <div class="card lg:card-side bordered m-4 bg-white">
                    <figure>
                        <img src="https://i.picsum.photos/id/1005/600/400.jpg?hmac=RHLkAWAPjK7zvSVfmz7ULItYJMQQFF9kQ2SheLO5EV8" />
                    </figure> 
                    <div class="card-body">
                        <h2 class="card-title">Statue Of Unity</h2> 
                        <p>It’s huge, almost gigantic! That is the first reaction most people have as they speed down the winding road leading to the towering Statue of Unity (SoU). A long bridge connects the mainland to the Sadhu Bet Island, on which the statue stands.</p> 
                        <div class="card-actions">
                        <button class="btn btn-primary">Get Started</button> 
                        <button class="btn btn-ghost">More info</button>
                        </div>
                    </div>
                    </div> 

                    <div class="card lg:card-side bordered m-4 bg-white">
                    <div class="card-body">
                        <h2 class="card-title">Beaches</h2> 
                        <p>India's shorelines are endowed with a glorious beauty that is reflected in its undulating golden beaches that make for an ideal vantage point to watch the sun dipping into the sea. Beaches stroke both the eastern and western coasts of the Indian peninsula.</p> 
                        <div class="card-actions">
                        <button class="btn btn-primary">Get Started</button> 
                        <button class="btn btn-ghost">More info</button>
                        </div>
                    </div>
                    <figure>
                        <img src="https://i.picsum.photos/id/1005/600/400.jpg?hmac=RHLkAWAPjK7zvSVfmz7ULItYJMQQFF9kQ2SheLO5EV8" />
                    </figure> 
                    </div> 

                    <div class="card lg:card-side bordered m-4 bg-white">
                    <figure>
                        <img src="https://i.picsum.photos/id/1005/600/400.jpg?hmac=RHLkAWAPjK7zvSVfmz7ULItYJMQQFF9kQ2SheLO5EV8" />
                    </figure> 
                    <div class="card-body">
                        <h2 class="card-title">Cathedrals And Basilicas</h2> 
                        <p>India boasts many architectural marvels, including cathedrals and basilicas that are recognised the world over for their beauty.</p> 
                        <div class="card-actions">
                        <button class="btn btn-primary">Get Started</button> 
                        <button class="btn btn-ghost">More info</button>
                        </div>
                    </div>
                    </div> 

        </div>
    )
}

function Cards(){
    return(
        <div>
            <div class="card shadow-xl image-full">
                <figure>
                    <img src="https://picsum.photos/id/1005/400/250" alt="good day"/>
                </figure> 
                <div class="justify-end card-body">
                    <h2 class="card-title">Image overlay</h2> 
                    <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
                    <div class="card-actions">
                        <button button class="btn btn-primary">Get Information</button>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export{
    Cards,
    PointOfIntrestCards
}