import { Link, type LinkProps  } from 'react-router-dom'


const NavLink = ({ to, children }: LinkProps) => {
  return (
    <Link to={to} className='text-white hover:underline hover:underline-offset-2 hover:decoration-blue-600 transition-all ease-in duration-300 w-fit'>
        <p className='font-light text-2xs tracking-widest uppercase'>
          {children}
        </p>
    </Link>
  )
}

export default NavLink
