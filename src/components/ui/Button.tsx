import type { ButtonProps } from '../../types/UiTypes';

function Button({label, type, variant}: ButtonProps){
    return(
        <button
            type={type}
            className={`${variant}`}
        >
            {label}
        </button>
    )
}

export default Button;