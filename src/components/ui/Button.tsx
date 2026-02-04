import type { ButtonProps } from '../../types/UiTypes';
import type { ButtonVariant } from '../../types/UiTypes';

function Button({label, type, variant}: ButtonProps){

    const variants: ButtonVariant = {
        primary: 'px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-400 transition-all ease-in duration-200 shadow-2xl shadow-blue-400',
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