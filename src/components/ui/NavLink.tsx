import type { NavLinkProps } from '../../types/UiTypes';

function NavLink ({link, label, type}: NavLinkProps){
    return(
        <a href={link} className={`${type}`}>
            {label}
        </a>
    )
}

export default NavLink;