function HowToReachCard({img, title, discription}){
    return(
        <div>
            <div className="card text-center shadow-2xl h-100">
                <figure className="px-10 pt-10">
                    <img src={img} className="rounded-xl" alt=''/>
                </figure> 
                <div className="card-body">
                    <h2 className="card-title">{title}</h2> 
                    <p>{discription}</p> 
                </div>
            </div> 
        </div>
    )
}

export default HowToReachCard;