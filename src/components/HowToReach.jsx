import HowToReachCard from "./HowToReachCard";

function HowToReach(){
    return(
        <div className='sm:px-8 md:px-16 lg:px-32 xl:px-64'>
            <div className="mt-10 flex justify-center text-3xl font-bold">
                <h2 className='text-gray-600'>How to Reach</h2>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 sm:gap-8 lg:gap-4 mx-4 my-5">
                <HowToReachCard img='https://www.incredibleindia.org/content/dam/incredible-india-v2/images/default/how-to-get/plane.svg' title='By Air' discription='The Rajiv Gandhi International Airport in Hyderabad is connected to all major Indian cities including New Delhi, Mumbai, Bengaluru, Pune, and Chennai.'/>
                <HowToReachCard  img='https://www.incredibleindia.org/content/dam/incredible-india-v2/images/default/how-to-get/bus.svg' title='By Road' discription='Hyderabad is connected by motorable roads to the neighbouring cities of Bangalore, Mumbai, Kolkata, Aurangabad, Chennai, Tirupati and Panaji.'/>
                <HowToReachCard img='https://www.incredibleindia.org/content/dam/incredible-india-v2/images/default/how-to-get/train.svg' title='Rail' discription='Three railway stations service the city of Hyderabad. These are the Hyderabad (Nampally station), Secunderabad and Kachiguda railway stations.'/>
            </div>
            


        </div>
    )
}

export default HowToReach;