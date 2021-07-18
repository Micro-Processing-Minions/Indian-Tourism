function HeroVideo({videoURL}) {
    return (
        <div className='heroCard'>
            <video src={videoURL} autoPlay loop></video>
        </div>
    )
}
export default HeroVideo;