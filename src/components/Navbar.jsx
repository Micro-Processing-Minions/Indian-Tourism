import { Link } from 'react-router-dom'

function Navbar(){
    const LocationList = ["Andhra Pradesh", "Assam", "Arunachal Pradesh", "Bihar", "Goa", "Gujarat", "Jammu and Kashmir", "Jharkhand", "West Bengal", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "Haryana", "Himachal Pradesh", "Chhattisgarh"]
    return(
        <div className="bg-white">
            <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content   ">
  <div class="flex-1 hidden px-2 mx-2 lg:flex">
  <div class="dropdown dropdown-hover">
  <div tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">           
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>               
      </svg></div> 
  <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-52 text-black" style={{height:'400px', overflow:'auto'}}>
        {LocationList.map(location => {
             return (
                <Link to={'/'+location}>
                <li className="mr-4">
                   <span href="#" className="border-b-2">{location}</span>
                </li>
               </Link>
             )
            })}
                   



  </ul>
</div>

<div class="flex-1 lg:flex-none mx-5">
    <div class="form-control">
    <Link to='/'>
      <button>Home</button>
      </Link>
    </div>
  </div> 

  </div> 
  <div class="flex-1 lg:flex-none">
    <div class="form-control">
      <input type="text" placeholder="Search" class="input input-ghost"/>
    </div>
  </div> 
  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">             
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>             
      </svg>
    </button>
  </div> 
</div>

            {/* <div className="px-5 flex justify-between items-center border-b-2">

                <ul className="flex tracking-wider ml-2">
                    <Link to='/'>
                        <li className="mr-4">
                        <a href="/" className="border-b-2">Destinations</a>
                        </li>
                    </Link>
                    <Link to='/kolkata'>
                        <li className="mr-4">
                        <a href="/" className="border-b-2">Experiances</a>
                        </li>
                    </Link>
                    <Link to='/Indian-Tourism/build/kolkata'>
                        <li>
                        <a href="/" className="border-b-2">Travel</a>
                        </li>
                    </Link>
                </ul>
                <div className="text-4xl font-medium">
                    <h1 className="mr-24 p-1 tracking-wider">Travel</h1>
                </div>
                <div className="flex">
                    <div className="mr-4 pr-2 border-r-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <div className="mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                    </div>
                </div>
            </div> */}
        </div>
  );
}

export default Navbar;
