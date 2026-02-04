import type { ButtonProps } from '../../types/UiTypes';
import type { ButtonVariants } from '../../types/UiTypes';

function Button({label, type, variant}: ButtonProps){

    const variants: ButtonVariants = {
        primary: 'text-white',
        secondary: '',
    }

    return(
        <button
            type={type}
            className={`${variants[variant]}`}
        >
            {label}
        </button>
    )
}

export default Button;