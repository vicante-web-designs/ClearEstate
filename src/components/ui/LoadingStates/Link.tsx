import { Link, type LinkProps  } from 'react-router-dom'


const NavLink = ({ to, children }: LinkProps) => {
  return (
    <Link to={to}>
        {children}
    </Link>
  )
}

export default NavLink
