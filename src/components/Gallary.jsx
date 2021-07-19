

function Gallary(){
    return (
        <div>
            <h1 className='text-center font-bold text-4xl'>Gallary</h1>
            <div className='md:mx-36 my-5 sm:mx-10 grid md:grid-cols-5 sm:grid-cols-2'>
                {[...Array(20)].map((el, index) => {
                    return <img key={index} src='https://i.picsum.photos/id/1005/600/400.jpg?hmac=RHLkAWAPjK7zvSVfmz7ULItYJMQQFF9kQ2SheLO5EV8' alt=''/>
                })}
            </div>
        </div>
    )
}

export default Gallary;