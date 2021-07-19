function HeroVideo({ videoURL }) {
    return (
        <div className='heroCard md:px-20 md:py-10'>
            {/* <video src={videoURL} autoPlay={true} controls allow="autoplay"></video> */}
            <iframe style={{width: '100%', height: '70vh'}} src={videoURL} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"></iframe>
        </div>
    )
}
export default HeroVideo;