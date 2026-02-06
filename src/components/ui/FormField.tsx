import type { FormInputProps } from '../../types/UiTypes';

function FormField({ id, type, label, placeholder }: FormInputProps){
    return(
        <div>
            <label htmlFor={id}>
                {label}
            </label>

            <input type={type} id={id} title={id} placeholder={placeholder}/>
        </div>
    )
}

export default FormField;