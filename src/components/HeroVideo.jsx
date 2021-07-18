function HeroVideo({ videoURL }) {
    return (
        <div className='heroCard'>
            <video src={videoURL} autoPlay={true} loop muted allow="autoplay"></video>
        </div>
    )
}
export default HeroVideo;