import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'

const Search = ({setPlac, handleURLChange}) => {
  const [place, setPlace] = useState('')

  return (
    <div>
      <div className="flex-1 lg:flex-none">
      <div className="form-control">
        <input type="text" placeholder="Search" className="input input-ghost" value={place} onChange={(e) => setPlace(e.target.value)} />
      </div>
    </div> 
    <div className="flex-none">
    <Link to={`/${place}`} onClick={() => {
                  setPlac(place)
                  handleURLChange(place)
                }}>
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">             
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>             
      </svg>
    </button>
    </Link>
  </div> 
    </div>
  )
}

function Navbar({setPlace, handleURLChange}){
    const LocationList = ["Andhra Pradesh", "Assam", "Arunachal Pradesh", "Bihar", "Goa", "Gujarat", "Jammu and Kashmir", "Jharkhand", "West Bengal", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttarakhand", "Uttar Pradesh", "Haryana", "Himachal Pradesh", "Chhattisgarh"]
    return(
        <div className="bg-white">
            <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content   ">
  <div className="flex-1 px-2 mx-2 lg:flex">
  <div className="dropdown dropdown-hover">
  <div tabindex="0">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">           
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>               
      </svg>
      </div> 
  <ul className="shadow menu dropdown-content bg-base-100 rounded-box w-52 text-black" style={{height:'400px', overflow:'auto'}}>
        {LocationList.map(location => {
             return (
                <Link to={`/${location}`} onClick={() => {
                  setPlace(location)
                  handleURLChange(location)
                }}>
                <li className="mr-4">
                   <span href="#" className="border-b-2">{location}</span>
                </li>
               </Link>
             )
            })}
                   



  </ul>
</div>

<div className="flex-1 lg:flex-none mx-5">
    <div className="form-control">
    <Link to='/'>
      <button>Home</button>
      </Link>
    </div>
  </div> 

  </div> 
  <Search setPlac={setPlace} handleURLChange={handleURLChange} />
  
</div>
        </div>
  );
}

export default Navbar;
