import {
    FormInput,
    FormInputGroup,
    FormLabel,
} from '../../styles/InitialForm/styles'

import React from 'react'

interface IInputFieldProps {
    inputID: string
    inputTitle: string
    inputValue: string
    setInputValue: Function
    inputType: string
}

const InputField: React.FC<IInputFieldProps> = ({
    inputID,
    inputTitle,
    inputValue,
    setInputValue,
    inputType,
}) => {
    return (
        <FormInputGroup>
            <FormLabel htmlFor={inputID}>{inputTitle}</FormLabel>
            <FormInput
                id={inputID}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                type={inputType}
            />
        </FormInputGroup>
    )
}

export default InputField
