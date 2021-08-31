import * as Yup from "yup";

const validationSchema = Yup.object({
    FirstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .test('length', 'First Name must have more than 1 character', (value) => {
            return value && value.length > 2;
        })
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .required("Required"),
    LastName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .test('length', 'First Name must have more than 1 character', (value) => {
            return value && value.length > 2;
        })
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .required("Required"),
    TherapistName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .test('length', 'First Name must have more than 1 character', (value) => {
            return value && value.length > 2;
        })
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .required("Required"),
    SatisfiedByTherapist: Yup.array()
        .test('length', 'Your should select at least one option.', (value) => {
            console.log(value.length)
            return value && value.length === 1;
        })
        .required("Required"),
    OverallExperience: Yup.string()
        .max(100, "Must be 100 characters or less.")
        .test('length', 'Your answer must have more than 10 characters', (value) => {
            return value && value.length > 10;
        })
        .required("Required"),
});

export default validationSchema;