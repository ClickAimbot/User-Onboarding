import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required')
        .min(3, 'name must be at least 2 characters'),
    email: yup 
        .string()
        .email('Must be a valid email address')
        .required("Email is required"),
    password: yup
        .string()
        .required("Password is required")
        .min(6, "Password must be 6 char min"),
    tos: yup
        .boolean()
        .oneOf([true], "Must accept the terms and conditions.")
})

export default formSchema;