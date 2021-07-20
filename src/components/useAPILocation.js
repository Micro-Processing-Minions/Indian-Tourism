import { useState, useCallback } from 'react'



const useAPILocation = (initial) => {
    const [currentLocation, setLocation] = useState(initial)
    const [title, setTitle] = useState(currentLocation)
    const [img, setImg] = useState('')
    const [tagline, setTagline] = useState('')
    const [info, setInfo] = useState('')
    const [places, setPlaces] = useState([])

    const handleURLChange = (location) => {
        fetch('https://indian-tourism-web-protal.herokuapp.com/'+location)
        .then(response => response.json())
        .then(data => {
            setTitle(data.title)
            setTagline(data.tagline)
            setInfo(data.desc)
            setPlaces(data.places_to_visit)
            setImg(data.img)
        })
    }
    handleURLChange(currentLocation)


    return {
        place: {title:title, img:img, tagline:tagline, info: info},
        places: places,
        relaodNewLocation: useCallback((location) => handleURLChange(location)),
    }
    
}

export default useAPILocation;