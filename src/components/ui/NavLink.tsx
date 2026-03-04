import { Link, type LinkProps  } from 'react-router-dom'


const NavLink = ({ to, children }: LinkProps) => {
  return (
    <Link to={to} className='text-white hover:underline hover:decoration-blue-600 transition-all ease-in duration-300 w-fit'>
        {children}
    </Link>
  )
}

export default NavLink
