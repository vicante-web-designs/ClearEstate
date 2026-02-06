import type { FormInputProps } from '../../types/UiTypes';

function FormField({ id, label, placeholder }: FormInputProps){
    return(
        <div>
            <label htmlFor={id}>
                {label}
            </label>

            <input type="text" id={id} title={id} placeholder={placeholder}/>
        </div>
    )
}

export default FormField;