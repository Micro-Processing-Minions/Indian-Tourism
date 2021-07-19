<<<<<<< HEAD
import Navbar from "./components/Navbar";
import CardBody from "./components/CardBody";
=======
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

>>>>>>> ef94d7ae37b1427b54572d75cbad8c642016dbd6

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Navbar />
      <CardBody />
=======
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
>>>>>>> ef94d7ae37b1427b54572d75cbad8c642016dbd6
    </div>
  );
}

export default App;
