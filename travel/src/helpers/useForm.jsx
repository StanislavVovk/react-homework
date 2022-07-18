import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import {UseFormMode} from "../enums/common";

const useAppForm = ({ validationSchema, defaultValues, mode }) => {
    const {
        control,
        formState: { errors },
        reset,
        watch,
        handleSubmit
    } = useForm({
        defaultValues,
        resolver: validationSchema ? joiResolver(validationSchema) : undefined,
        mode: mode ?? UseFormMode.ON_SUBMIT
    });

    return {
        control,
        errors,
        reset,
        watch,
        handleSubmit
    };
};

export { useAppForm };
