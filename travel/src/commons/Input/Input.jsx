import PropTypes from 'prop-types';
import {useController} from 'react-hook-form';

export const Input = ({name, control, className, type, required, autoComplete}) => {
    const {field} = useController({name, control})
    return (
        <input
            {...field}
            className={className}
            type={type}
            autoComplete={autoComplete}
            required={required? "required": undefined}
        />

    );
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    control: PropTypes.oneOfType([PropTypes.object]).isRequired,
    className: PropTypes.string,
    type: PropTypes.oneOf(['email', 'password', 'fullname']),
    required: PropTypes.bool,
    autocomplete: PropTypes.string,
    errors: PropTypes.oneOfType([PropTypes.object]),
}