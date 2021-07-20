import Navbar from "./components/Navbar"
import MainBody from "./components/MainBody"
import CardBody from "./components/CardBody";
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom'
import { useState } from 'react'


const handleURLChange = () => {
  console.log("URL CHanged")
}

function App() {
  const [location, setLoc] = useState('india')
  return (
    <div className="App">
      <BrowserRouter basename='/Indian-Tourism/build'>
        <Navbar />
        
        <Switch>
          <Route path='/' exact>
            <MainBody />
          </Route>
          <Route path='/:loc' children={handleURLChange}>
          <CardBody location={location} setLoc={setLoc}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
