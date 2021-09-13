import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    FirstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .test('length', 'First Name must have more than 1 character', (value) => {
            return value && value.length > 2;
        })
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .required("Required"),
    // LastName: Yup.string()
    //     .max(15, "Must be 15 characters or less")
    //     .test('length', 'First Name must have more than 1 character', (value) => {
    //         return value && value.length > 2;
    //     })
    //     .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    //     .required("Required"),
    // TherapistName: Yup.string()
    //     .max(15, "Must be 15 characters or less")
    //     .test('length', 'First Name must have more than 1 character', (value) => {
    //         return value && value.length > 2;
    //     })
    //     .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    //     .required("Required"),
    SatisfiedByTherapist: Yup.array()
        .min(1, "You must select one option.")
        .max(1, "You cannot select more than one option.")
        .required("You can't leave this blank.")
        .nullable(),
    OverallExperience: Yup.string()
        .max(100, "Must be 100 characters or less.")
        .test('length', 'Your answer must have more than 10 characters', (value) => {
            return value && value.length > 10;
        })
        .required("Required"),
    TherapistMatchesYourPreferences: Yup.array()
        .min(1, "You must select one option.")
        .max(1, "You cannot select more than one option.")
        .required("You can't leave this blank.")
        .nullable(),
});

export default validationSchema;
