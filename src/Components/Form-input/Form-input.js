import { 
    FormInputLabel,
    Input,
    Group
} from "./Form-input.styles";

const FormInput = ({label, ...otherProps}) => {
    return (

        <Group>
            <Input {...otherProps}/>
            {
            label && 
            (
                <FormInputLabel shrink={otherProps.value.length}>
                    {label}
                </FormInputLabel>
            ) 
            }
        </Group>

    )

}

export default FormInput;