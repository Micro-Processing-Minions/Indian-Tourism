function HowToReachCard({img, title, discription}){
    return(
        <div>
            <div class="card text-center shadow-2xl h-100">
                <figure class="px-10 pt-10">
                    <img src={img} class="rounded-xl" alt=''/>
                </figure> 
                <div class="card-body">
                    <h2 class="card-title">{title}</h2> 
                    <p>{discription}</p> 
                </div>
            </div> 
        </div>
    )
}

export default HowToReachCard;