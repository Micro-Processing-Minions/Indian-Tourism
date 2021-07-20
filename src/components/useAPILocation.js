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
        .then(response => {
            console.log("Get Data from API")
            return response.json()
        })
        .then(data => {
            console.log(data)
            setTitle(data.title)
            setTagline(data.tagline)
            setInfo(data.desc)
            setPlaces(data.places_to_visit)
            setImg(data.img)
            setLocation(location)
        })
    }

    const locationChange = (location) => {
        if(location !== currentLocation){
            setLocation(location)
            console.log("Main Location Changed to : "+location)
            // handleURLChange(location)
        }
    }
    // handleURLChange(currentLocation)


    return {
        place: {title:title, img:img, tagline:tagline, info: info},
        places: places,
        relaodNewLocation: useCallback((location) => handleURLChange(location)),
        changeLocation: useCallback(location => locationChange(location)),
        currentLoc: currentLocation
    }
    
}

export default useAPILocation;