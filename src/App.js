import Navbar from "./components/Navbar"
import MainBody from "./components/MainBody"
import Location from './components/Location'
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom'
function HandleLocation(){
  let { loc } = useParams();
  return (
    <Location title={loc} />
  )
}


function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/Indian-Tourism/build'>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <MainBody />
          </Route>
          <Route path='/:loc' children={<HandleLocation />}>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
