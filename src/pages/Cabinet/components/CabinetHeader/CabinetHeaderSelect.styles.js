export const CabinetHeaderSelectStyles = {
    menu: (provided) => ({
        ...provided,
        color: '#7297FF',
        borderRadius: '8px',
        border: '1px solid white',
        boxShadow: '0px 4px 32px rgba(218, 228, 255, 0.16)',

    }),


    menuList: (provided, state) => ({
        ...provided,

        border: 'none',
        borderRadius: '8px',
        padding: '4px',
        '&:hover': {
            borderRadius: '6px'
        },
    }),

    option: (provided, state) => ({
        ...provided,
        border: 'none',
        color: '#202225',
        padding: '22px 50px 22px 22px',
        borderRadius: '6px',
        background: state.isSelected ? '#F9FAFF' : '#FFF',
        cursor: state.isDisabled ? 'not-allowed' : 'default',

        '&:hover': {
            background: '#F9FAFF',
        },
    }),

    control: (provided, state) => ({
        ...provided,
        backgroundColor: 'transparent',

        boxShadow: '0px 4px 32px rgba(218, 228, 255, 0.16)',
        borderRadius: '8px',
        border: 'none',
        width: '160px',
        fontSize: '17px',
        color: '#7297FF',
        '&:hover': {
            borderColor: '#7297FF',
            color: 'red',
        },
        '&:focus ': {
            borderColor: '#7297FF'
        },

    }),
    dropdownIndicator: () => ({
        color: '#7297FF',
    }),
}
