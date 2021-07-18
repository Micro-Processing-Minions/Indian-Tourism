import HowToReachCard from "./HowToReachCard";

function HowToReach(){
    return(
        <div className='px-64'>
            <div className="mt-10 flex justify-center text-3xl font-bold">
                <h2>How to Reach</h2>
            </div>
            <div className="grid grid-cols-2 gap-32 mx-10 mt-5">
                <HowToReachCard />
                <HowToReachCard />
            </div>
            


        </div>
    )
}

export default HowToReach;