import {Input} from "../../../../commons/commons";
import {useAppForm} from "../../../../helpers/useForm";
import {DEFAULT_REGISTRATION_PAYLOAD} from "../../../../enums/user/default-payload";
import {registration as registrationSchema} from "../../../../helpers/validator/validationSchema";
import Header from "../../../header/header";
import {AppRoute} from "../../../../enums/common";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const {control, errors, handleSubmit} = useAppForm({
        defaultValues: DEFAULT_REGISTRATION_PAYLOAD,
        validationSchema: registrationSchema
    });
    const navigator = useNavigate();
    return (
        <>
            <Header/>
            <main className="sign-up-page">
                <h1 className="visually-hidden">Travel App</h1>
                <form
                    className="sign-up-form"
                    autoComplete="off"
                    onSubmit={handleSubmit(navigator(AppRoute.ROOT))}
                >
                    <h2 className="sign-up-form__title">Sign Up</h2>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Full name</span>
                        <Input
                            name={"full-name"}
                            type={"text"}
                            control={control}
                            required={true}
                            errors={errors}
                        />
                    </label>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Email</span>
                        <Input
                            name={"email"}
                            type={"email"}
                            control={control}
                            required={true}
                            errors={errors}
                        />
                    </label>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Password</span>
                        <Input
                            name={"password"}
                            type={"password"}
                            control={control}
                            autoComplete={"new-password"}
                            required={true}
                            errors={errors}
                        />
                    </label>
                    <button className="button" type="submit">Sign Up</button>
                </form>
                <span>
        Already have an account?
            <a href={AppRoute.SIGN_IN} className="sign-up-form__link">Sign In</a>
            </span>
            </main>
        </>
    )
}
export default SignUp