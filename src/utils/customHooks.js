import { useState } from "react";

// Source: https://serverless-stack.com/chapters/create-a-custom-react-hook-to-handle-form-fields.html
const useFormFields = (initialState) => {
    const [fields, setValues] = useState(initialState);

    return [
        fields,
        (event) => {
            setValues({
                ...fields,
                [event.target.id]: event.target.value
            });
        }
    ];
};

const useFormFieldErrors = (initialState) => {
    const [fieldErrors, setErrorValues] = useState(initialState);



    // return [
    //     fields,
    //     function(event) {
    //         setErrorValues({
    //             ...fieldErrors,
    //             [event.target.id]: event.target.value
    //         });
    //     }
    // ];
};

export {
    useFormFields,
    useFormFieldErrors
}