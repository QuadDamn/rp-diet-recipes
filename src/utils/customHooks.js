import { useState } from "react";

// Source: https://serverless-stack.com/chapters/create-a-custom-react-hook-to-handle-form-fields.html
const useFormFields = (initialState) => {
    const [fields, setValues] = useState(initialState);

    return [
        fields,
        (event, arrayPosition) => {

            console.log(event);

            setValues({
                ...fields,
                [event.target.name]: event.target.value
            });
        }
    ];
};

const useFormFieldErrors = (initialState) => {
    const [fieldErrors, setErrorValues] = useState(initialState);

    return [
        fieldErrors,
        (fieldName, value) => {
            setErrorValues({
               ...fieldErrors,
               [fieldName]: value
            });
        }
    ]
};

export {
    useFormFields,
    useFormFieldErrors
}