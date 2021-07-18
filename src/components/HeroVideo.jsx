function HeroVideo({ videoURL }) {
    return (
        <div className='heroCard'>
            {/* <video src={videoURL} autoPlay={true} loop muted allow="autoplay"></video> */}
            <iframe style={{width: '100%', height: '70vh'}} src={videoURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"></iframe>
        </div>
    )
}
export default HeroVideo;