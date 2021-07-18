import HowToReachCard from "./HowToReachCard";

function HowToReach(){
    return(
        <div className='sm:px-8 md:px-16 lg:px-32 xl:px-64'>
            <div className="mt-10 flex justify-center text-3xl font-bold">
                <h2>How to Reach</h2>
            </div>
            <div className="grid grid-cols-2 sm:gap-8 lg:gap-32 mx-10 mt-5">
                <HowToReachCard />
                <HowToReachCard />
            </div>
            


        </div>
    )
}

export default HowToReach;