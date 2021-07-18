function HeroVideo({ videoURL }) {
    return (
        <div className='heroCard'>
            <video src={videoURL} autoPlay loop muted></video>
        </div>
    )
}
export default HeroVideo;