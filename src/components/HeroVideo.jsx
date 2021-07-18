function HeroVideo({ videoURL }) {
    return (
        <div className='heroCard'>
            {/* <video src={videoURL} autoPlay={true} loop muted allow="autoplay"></video> */}
            <iframe style={{width: '100%', height: '70vh'}} src="https://www.youtube.com/embed/i2p_742MOO8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
export default HeroVideo;