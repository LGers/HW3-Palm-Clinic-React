import {StylesConfig} from "react-select";
import {FormikValues} from "formik";

export const customStyles: StylesConfig = {
    menu: () => ({
        position: "absolute",
        right: '16px',
        width: '272px',
    }),

    option: (provided, state: FormikValues) => ({
        ...provided,
        background: 'white',
        color: state.value === 'delete' ? 'red' : '#202225',
        '&:hover': !state.isDisabled
            ? {
                cursor: 'pointer',
                background: '#F9FAFF',
                borderRadius: '6px'
            }
            : {
                cursor: 'not-allowed',
            },
    }),

    control: () => ({
    }),

    valueContainer: () => ({
        display: 'none',
    }),

    dropdownIndicator: () => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40',
        height: '40',
        borderRadius: '6px',
        color: '#DCE0EC',

        '&:hover': {
            color: ' #7297FF',
            backgroundColor: '#F9FAFF',
            transition: '0.3s ease-out',
        }
    }),

    singleValue: (provided, state: FormikValues) => {
        const opacity = state.isDisabled ? 0.1 : 1;
        const transition = 'opacity 300ms';
        const color = state.color ? 'red' : 'blue'

        return {...provided, opacity, transition, color};
    }
}