import { Link, type LinkProps  } from 'react-router-dom'


const NavLink = ({ to, children }: LinkProps) => {
  return (
    <Link to={to} className='text-white hover:text-secondary transition-all ease-in duration-150 w-fit'>
        <p className='font-light text-2xs tracking-widest uppercase hover:font-bold'>
          {children}
        </p>
    </Link>
  )
}

export default NavLink
