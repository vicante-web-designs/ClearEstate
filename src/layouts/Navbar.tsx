import Logo from '../../public/Images/Logo/ClearListing_Logo.png'
import NavLink from '../components/ui/NavLink'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 80)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return(
        <>
            {/* placeholder to prevent content jump when navbar becomes fixed */}
            <div className='h-0'/>

            <nav className={`h-20 px-24 py-16 flex items-center fixed justify-between z-50 left-0 right-0 mx-auto transition-all duration-500 ease-in-out mt-8 max-w-3xl  ${
                isSticky
                ? 'top-4 fixed rounded-full bg-white shadow-2xl transition-all duration-200 ease-in-out'
                : 'top-10 bg-blue-100 shadow-2xl mb-20 rounded-lg'
            }`}>

                <img src={Logo} alt="ClearListing Logo" className='h-full rounded-full'/>

                <div className='md:flex w-full justify-between hidden'>
                    <NavLink label='Home' link='#' />
                    <NavLink label='Listings' link='#' />
                    <NavLink label='About' link='#' />
                    <NavLink label='Contact' link='#' />
                    <NavLink label='Admin' link='#' />
                </div>

                <div className="md:hidden">☰</div>
            </nav>
        </>
    )
}

export default Navbar