import {Formik} from 'formik';
import React from 'react';
import {profileValidationSchema} from "../../../../validations/profileEdit.validation";

export const ProfileChangePasswordForm:React.FC = () => {
    return (
        <div>eee</div>
        // <Formik
        //     initialValues={{first_name: '', last_name: '', occupation: ''}}
        //     validationSchema={profileValidationSchema}
        //     onSubmit={(values, {setSubmitting}) => {
        //         setSubmitting(false);
        //         console.log(JSON.stringify(values, null, 2))
        //     }}
        // >
        //     {({
        //           values,
        //           errors,
        //           touched,
        //           handleChange,
        //           handleBlur,
        //           handleSubmit,
        //           isSubmitting,
        //           /* and other goodies */
        //       }) => (
        //         <form onSubmit={handleSubmit}>
        //             <input
        //                 type="text"
        //                 name="first_name"
        //                 onChange={handleChange}
        //                 onBlur={handleBlur}
        //                 value={values.first_name}
        //             />
        //             {errors.first_name && touched.first_name && errors.first_name}
        //             <input
        //                 type="text"
        //                 name="last_name"
        //                 onChange={handleChange}
        //                 onBlur={handleBlur}
        //                 value={values.last_name}
        //             />
        //             {errors.last_name && touched.last_name && errors.last_name}
        //
        //             <button type="submit" disabled={isSubmitting}>
        //                 Submit
        //             </button>
        //         </form>
        //     )}
        // </Formik>
    );
};