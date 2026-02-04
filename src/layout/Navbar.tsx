import Logo from '../../public/Images/Logo/ClearListing_Logo.png'

function Navbar(){
    return(
        <nav className='w-full px-12 py-4 shadow-2xl bg-blue-100 flex items-center justify-between'>

            <img src={Logo} alt="ClearListing Logo" className='w-24 rounded-full'/>

            <a href="#" className='px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-400 transition-all ease-in duration-200 shadow-2xl shadow-blue-400'>View Listings</a>

            
        </nav>
    )
}

export default Navbar