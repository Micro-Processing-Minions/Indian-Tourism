import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <div className="bg-white">
            <div className="px-5 flex justify-between items-center border-b-2">

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
            </div>
        </div>
    )
}

export default Navbar;