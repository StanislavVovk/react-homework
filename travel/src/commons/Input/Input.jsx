import PropTypes from 'prop-types';

export const Input = ({name, className, type, required, autoComplete}) => {

    return (
        <input
            name={name}
            className={className}
            type={type}
            autoComplete={autoComplete}
            required={required? "required": undefined}
        />

    );
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    type: PropTypes.oneOf(['email', 'password', 'fullname']),
    required: PropTypes.bool,
    autocomplete: PropTypes.string
}