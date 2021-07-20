import Navbar from "./components/Navbar"
import MainBody from "./components/MainBody"
import CardBody from "./components/CardBody";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useAPILocation from "./components/useAPILocation";


const handleURLChange = () => {
  console.log("URL CHanged")
}

function App() {
  const [location, setLoc] = useState('')
  const place = useAPILocation(location)
  
  // useEffect(() => {
  //   console.log("API REQUESTED: "+location);
  //   place.relaodNewLocation(location)
  //   console.log(place);
  // }, [location])
  return (
    <div className="App">
      <BrowserRouter basename='/Indian-Tourism/build'>
      {/*<BrowserRouter>*/}
        <Navbar place={location} setPlace={place.changeLocation} handleURLChange={place.relaodNewLocation}/>
        
        <Switch>
          <Route path='/' exact>
            <MainBody />
          </Route>
          <Route path='/:loc' children={handleURLChange} >
            <CardBody title={place.place.title} alt={place.place.tagline} img={place.place.img} info={place.place.info} places={place.places} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
