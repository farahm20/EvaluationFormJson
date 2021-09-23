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
    //     .max(20, "Must be 20 characters or less")
    //     .test('length', 'First Name must have more than 1 character', (value) => {
    //         return value && value.length > 2;
    //     })
    //     .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    //     .required("Required"),
    // TherapistName: Yup.string()
    //     .max(30, "Must be 15 characters or less")
    //     .test('length', 'Name must have more than 1 character', (value) => {
    //         return value && value.length > 2;
    //     })
    //     .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    //     .required("Required"),
    SatisfiedByTherapist: Yup.array()
        .min(1, "You must select one option.")
        .max(1, "You cannot select more than one option.")
        // .test('this.array.length', 'You have selected more than one value', (array) => {
        //     return array && array.length > 0;
        // })
        .required("You can't leave this blank.")
        .nullable(),
    OverallExperience: Yup.string()
        .min(100, "Must be 100 characters or more.")
        .max(500, "Must be less than 500 characters.")
        .test('length', 'Your answer must have more than 100 characters', (value) => {
            return value && value.length < 500;
        })
        .required("Required"),
    TherapistMatchesYourPreferences: Yup.array()
        .min(1, "You must select one option.")
        .max(1, "You cannot select more than one option.")
        .required("You can't leave this blank.")
        .nullable(),
});

export default validationSchema;
